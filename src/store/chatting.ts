import { create } from "zustand";
import {
  TUseChatState,
  TReportMessage,
  TReportMessageInfo,
} from "@/types/chatting";

export const useChatState = create<TUseChatState>((set, get) => ({
  isShow: false,
  cleanChat: false,
  userCount: "",
  chatLog: [],
  setIsShow: () => set((state) => ({ isShow: !state.isShow })),
  setChatLog: (newMessage) =>
    set((state) => {
      const updatedChatLog = [...state.chatLog, newMessage];
      if (updatedChatLog.length > 1000) {
        updatedChatLog.shift();
      }
      return { chatLog: updatedChatLog };
    }),
  setAllChatLog: (allMessage) => set({ chatLog: allMessage }),
  setUserCount: (changeUserCount) => set({ userCount: changeUserCount }),
  setCleanChat: () => set((state) => ({ cleanChat: !state.cleanChat })),
  getCleanChat: () => get().cleanChat,
}));

export const useReportMsgState = create<TReportMessage>((set) => ({
  info: {
    nickname: "",
    message: "",
    msgId: "",
    userId: "",
    setIsShow: () => {},
  },
  setInfo: (info: TReportMessageInfo) => set({ info: info }),
}));
