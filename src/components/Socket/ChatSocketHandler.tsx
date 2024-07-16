"use client";

import { useEffect } from "react";
import { chatSocket } from "@/socket/ChatSocket";
import { useChatState } from "@/store/chatting";

export default function ChatSocketHandler() {
  const { setChatLog, setUserCount } = useChatState();

  const chatMsgSocketHandler = (message: any) => {
    setChatLog(message);
  };

  const clientsCountSocketHandler = (data: any) => {
    setUserCount(data.count);
  };

  useEffect(() => {
    chatSocket.on("chatting", chatMsgSocketHandler);
    chatSocket.on("clientsCount", clientsCountSocketHandler);
    return () => {
      chatSocket.off("chatting", chatMsgSocketHandler);
      chatSocket.off("clientsCount", clientsCountSocketHandler);
    };
  }, []);

  return <></>;
}
