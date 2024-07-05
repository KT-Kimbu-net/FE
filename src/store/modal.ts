import { create } from "zustand";
import { TUseModalState, TModalTypes } from "@/types/modal";

export const useModalState = create<TUseModalState>((set) => ({
  modalName: null,
  setModalName: (modalName: TModalTypes) => set({ modalName }),
}));
