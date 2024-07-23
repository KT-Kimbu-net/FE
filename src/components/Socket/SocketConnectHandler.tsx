"use client";

import { useEffect } from "react";
import { gameSocket } from "@/socket/GameSocket";
import GameSocketHandler from "./GameSocketHandler";
import ChatSocketHandler from "./ChatSocketHandler";
import { chatSocket } from "@/socket/ChatSocket";

export default function SocketConnectHandler() {
  useEffect(() => {
    if (gameSocket.disconnected) gameSocket.connect();
  }, []);
  return (
    <>
      <ChatSocketHandler />
      <GameSocketHandler />
    </>
  );
}
