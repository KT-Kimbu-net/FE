import { create } from "zustand";
import { TUseModalState, TModalTypes, TUserQuizState } from "@/types/modal";

export const useModalState = create<TUseModalState>((set) => ({
  modalName: null,
  previousModalType: null,
  problemIndex: null,
  setModalName: (modalName: TModalTypes) => set({ modalName }),
  setPreviousModalType: (modalName: TModalTypes) =>
    set({ previousModalType: modalName }),
  setProblemIndex: (problemIndex: 1 | 2 | null) => set({ problemIndex }),
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
