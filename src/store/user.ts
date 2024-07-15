import { TUseUserState } from "@/types/user";
import { create } from "zustand";

export const useUserState = create<TUseUserState>((set) => ({
  userData: null,
  setUserData(userData) {
    set({ userData });
  },
}));
