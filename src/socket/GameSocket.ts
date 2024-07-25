import { io, Socket } from "socket.io-client";

export const gameSocket: Socket = io(
  `${process.env.NEXT_PUBLIC_GAME_SOCKETURL}`,
  {
    autoConnect: true,
    reconnection: false,
    randomizationFactor: 1,
    transports: ["websocket"],
  }
);
