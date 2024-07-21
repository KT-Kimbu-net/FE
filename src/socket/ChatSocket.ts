import { io, Socket } from "socket.io-client";

export const chatSocket: Socket = io(
  `${process.env.NEXT_PUBLIC_CHAT_SOCKETURL}`,
  {
    autoConnect: true,
    reconnection: false,
    randomizationFactor: 1,
  }
);
