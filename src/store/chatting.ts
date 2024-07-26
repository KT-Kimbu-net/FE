import { create } from "zustand";
import {
  TUseChatState,
  TReportMessage,
  TReportMessageInfo,
} from "@/types/chatting";

export const useChatState = create<TUseChatState>((set, get) => ({
  isShow: false,
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
}));

export const useReportMsgState = create<TReportMessage>((set) => ({
  info: {
    nickname: "",
    message: "",
    msgId: "",
    userId: "",
    type: "",
    setIsShow: () => {},
  },
  setInfo: (info: TReportMessageInfo) => set({ info: info }),
}));
