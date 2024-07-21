import { create } from "zustand";
import { TUseLiveScoreState } from "@/types/liveScore";

export const useLiveScoreState = create<TUseLiveScoreState>((set) => ({
  kt: {
    score: [],
    pitcher: "",
  },
  opponent: {
    score: [],
    pitcher: "",
  },
  setKtScore: (v: number[]) =>
    set((state) => ({
      kt: { ...state.kt, score: v },
    })),
  addKtScore: (score: number) =>
    set((state) => ({
      kt: { ...state.kt, score: [...state.kt.score, score] },
    })),
  setKtPitcher: (v: string) =>
    set((state) => ({
      kt: { ...state.kt, pitcher: v },
    })),
  setOpponentScore: (v: number[]) =>
    set((state) => ({
      opponent: { ...state.opponent, score: v },
    })),
  addOpponentScore: (score: number) =>
    set((state) => ({
      opponent: { ...state.opponent, score: [...state.opponent.score, score] },
    })),
  setOpponentPitcher: (v: string) =>
    set((state) => ({
      opponent: { ...state.opponent, pitcher: v },
    })),
}));
