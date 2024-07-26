import { create } from "zustand";
import { TUseModalState, TModalTypes, TUserQuizState } from "@/types/modal";

export const useModalState = create<TUseModalState>((set) => ({
  modalName: null,
  previousModalType: null,
  problemIndex: 1, // 디폴트 1
  setModalName: (modalName: TModalTypes) => set({ modalName }),
  setPreviousModalType: (modalName: TModalTypes) =>
    set({ previousModalType: modalName }),
  setProblemIndex: (problemIndex: number) => set({ problemIndex }),
}));

export const useUserQuizState = create<TUserQuizState>((set) => ({
  answers: [],
  isQuizActive: false,
  setIsQuizActive: (active: boolean) => set(() => ({ isQuizActive: active })),
  setAnswer: (problemIndex, answer, userAnswer, question, explanation) =>
    set((state) => {
      const newAnswers = [...state.answers];
      newAnswers[problemIndex] = {
        answer,
        userAnswer,
        question,
        explanation,
      };
      return { answers: newAnswers };
    }),
  reset: () => set(() => ({ answers: [], isQuizActive: false })),
}));
