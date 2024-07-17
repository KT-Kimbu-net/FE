import { create } from "zustand";
import { UserData } from "@/types/api";

// 임시로 로그인한 상태의 현재 유저 정보
export const loginUserTest: UserData = {
  userId: "default123",
  password: "default123",
  nickname: "Guest",
  creditAmount: 100,
  quiz: { isSolved: 0, amount: 0, sequenceDays: 0 },
  gamePredict: { sequenceDays: 0 },
  userUuid: "default-uuid",
};

type UserState = {
  userData: UserData | null;
  setUserData: (user: UserData) => void;
  resetUserData: () => void;
};

export const useUserState = create<UserState>((set) => ({
  userData: null,
  setUserData: (user: UserData) => set({ userData: user }),
  resetUserData: () => set({ userData: null }), // 초기화, 로그아웃?
}));
