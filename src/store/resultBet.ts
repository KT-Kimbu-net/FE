import { create } from "zustand";
import { GameChoose } from "@/types/api";

export type TUseGameBetState = {
  selectBet: GameChoose;
  setSelectBet: (v: GameChoose) => void;
};

export const useGameBetState = create<TUseGameBetState>((set) => ({
  selectBet: "",
  setSelectBet: (selectBet: GameChoose) => set({ selectBet: selectBet }),
}));
