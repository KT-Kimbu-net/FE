"use client";

import { useEffect, useCallback } from "react";
import { chatSocket } from "@/socket/ChatSocket";
import { useChatState } from "@/store/chatting";
import { TMessageType } from "@/types/chatting";
import { getCookie } from "cookies-next";

export default function ChatSocketHandler() {
  const { setChatLog, setUserCount, cleanChat, getCleanChat } = useChatState(
    (state) => ({
      setChatLog: state.setChatLog,
      setUserCount: state.setUserCount,
      cleanChat: state.cleanChat,
      getCleanChat: state.getCleanChat,
    })
  );

  const chatMsgSocketHandler = async (message: TMessageType) => {
    if (getCleanChat()) {
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
        });
      }
    } else {
      setChatLog(message);
    }
  };

  const clientsCountSocketHandler = (data: any) => {
    setUserCount(data.count);
  };

  useEffect(() => {
    chatSocket.on("chatting", chatMsgSocketHandler);
    chatSocket.on("peoples", clientsCountSocketHandler);
    return () => {
      chatSocket.off("chatting", chatMsgSocketHandler);
      chatSocket.off("peoples", clientsCountSocketHandler);
    };
  }, []);

  return <></>;
}
