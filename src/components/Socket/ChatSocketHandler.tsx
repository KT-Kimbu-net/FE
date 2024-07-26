"use client";

import { useEffect } from "react";
import { chatSocket } from "@/socket/ChatSocket";
import { useChatState } from "@/store/chatting";
import { TMessageType } from "@/types/chatting";
import { getCookie } from "cookies-next";

export default function ChatSocketHandler() {
  const { setChatLog, setUserCount } = useChatState((state) => ({
    setChatLog: state.setChatLog,
    setUserCount: state.setUserCount,
  }));

  const chatMsgSocketHandler = async (message: TMessageType) => {
    if (localStorage.getItem("cleanChat") === "1") {
      const filterMessage = {
        chat_text: message.message,
      };

      const token = getCookie("token");

      const result = await fetch(
        `${process.env.NEXT_PUBLIC_BASEURL}/text_filtering`,
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
          body: JSON.stringify(filterMessage),
        }
      );
      if (result.ok) {
        const data = await result.json();
        setChatLog({
          nickname: message.nickname,
          message: data.filter_text,
          time: message.time,
          report: message.report,
          msgId: message.msgId,
          userId: message.userId,
          type: message.type,
        });
      }
    } else {
      setChatLog(message);
    }
  };

  const clientsCountSocketHandler = (data: any) => {
    setUserCount(data.count);
  };

  const disconnectSocketHandler = () => {
    console.log("disconnect");
  };

  useEffect(() => {
    chatSocket.on("chatting", chatMsgSocketHandler);
    chatSocket.on("peoples", clientsCountSocketHandler);
    chatSocket.on("disconnect", disconnectSocketHandler);
    return () => {
      chatSocket.off("chatting", chatMsgSocketHandler);
      chatSocket.off("peoples", clientsCountSocketHandler);
      chatSocket.off("disconnect", disconnectSocketHandler);
    };
  }, []);

  return <></>;
}
