"use client";

import { useEffect } from "react";
import { chatSocket } from "@/socket/ChatSocket";
import { useChatState } from "@/store/chatting";
import { TMessageType } from "@/types/chatting";

export default function ChatSocketHandler() {
  const { setChatLog, setUserCount, cleanChat } = useChatState((state) => ({
    setChatLog: state.setChatLog,
    setUserCount: state.setUserCount,
    cleanChat: state.cleanChat,
  }));

  const chatMsgSocketHandler = async (message: TMessageType) => {
    if (cleanChat) {
      const filterMessage = {
        chat_text: message.message,
      };

      const result = await fetch(
        `${process.env.NEXT_PUBLIC_BASEURL}/text_filtering`,
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
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
