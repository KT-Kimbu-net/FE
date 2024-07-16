import { io, Socket } from "socket.io-client";

export const chatSocket: Socket = io("ws://localhost:5000", {
  autoConnect: true,
  reconnection: false,
  randomizationFactor: 1,
});
