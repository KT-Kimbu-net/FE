import { create } from "zustand";
import { TUseChatState } from "@/types/chatting";

export const useChatState = create<TUseChatState>((set) => ({
  isShow: false,
  cleanChat: true,
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
}));
