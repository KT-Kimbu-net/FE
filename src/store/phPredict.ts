import { create } from "zustand";
import { TUsePHPredictState } from "@/types/phPredict";

export const usePHPredictState = create<TUsePHPredictState>((set) => ({
  pWinPercent: 50,
  setPWinPercent: (pWinPercent: number) => set({ pWinPercent: pWinPercent }),
  tWinPercent: 50,
  setTWinPercent: (tWinPercent: number) => set({ tWinPercent: tWinPercent }),
}));
