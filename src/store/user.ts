import { create } from "zustand";
import { UserData } from "@/types/api";

type UserState = {
  userData: UserData | null;
  setUserData: (user: UserData) => void;
  setUserNickname: (v: string) => void;
  resetUserData: () => void;
};

export const useUserState = create<UserState>((set) => ({
  userData: null,
  setUserData: (user: UserData) => set({ userData: user }),
  setUserNickname: (nickname: string) =>
    set((state) => ({
      userData: state.userData
        ? {
            ...state.userData,
            nickname: nickname,
          }
        : null,
    })),
  resetUserData: () => set({ userData: null }), // 초기화
}));
