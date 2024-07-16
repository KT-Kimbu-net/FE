import { create } from "zustand";
import { UserData } from "@/types/api";

// 임시로 로그인한 상태의 현재 유저 정보
export const loginUserTest: UserData = {
  userId: "default123",
  password: "default123",
  nickname: "Guest",
  credit: {
    creditAmount: 100,
    usedHistory: [],
    deleteHistory: [],
    getHistory: [],
  },
  quiz: { isSolved: 0, amount: 0, sequenceDays: 0 },
  gamePredict: { sequenceDays: 0 },
  userUuid: "default-uuid",
};

type UserState = {
  currentUser: UserData | null;
  setCurrentUser: (user: UserData) => void;
  resetCurrentUser: () => void;
};

export const useUserStore = create<UserState>((set) => ({
  currentUser: null,
  setCurrentUser: (user: UserData) => set({ currentUser: user }),
  resetCurrentUser: () => set({ currentUser: null }), // 초기화
}));
