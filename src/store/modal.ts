import { create } from "zustand";
import { TUseModalState, TModalTypes, TUserQuizState } from "@/types/modal";

export const useModalState = create<TUseModalState>((set) => ({
  modalName: null,
  previousModalName: null,
  setModalName: (modalName: TModalTypes) => set({ modalName }),
  setPreviousModalName: (modalName: TModalTypes) =>
    set({ previousModalName: modalName }),
}));

export const useUserQuizState = create<TUserQuizState>((set) => ({
  answers: {},
  hasParticipated: false,
  setAnswer: (qustionIndex, value) =>
    set((state) => ({
      answers: {
        ...state.answers,
        [qustionIndex]: value,
      },
    })),
  setParticipation: (participation) => set({ hasParticipated: participation }),
}));
