"use client";

import { useEffect } from "react";
import { chatSocket } from "@/socket/ChatSocket";
import { useChatState } from "@/store/chatting";

export default function ChatSocketHandler() {
  const { setChatLog, setUserCount } = useChatState((state) => ({
    setChatLog: state.setChatLog,
    setUserCount: state.setUserCount,
  }));

  const chatMsgSocketHandler = (message: any) => {
    setChatLog(message);
  };

  const clientsCountSocketHandler = (data: any) => {
    console.log(data);
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
