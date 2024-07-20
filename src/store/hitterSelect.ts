import { create } from "zustand";
import { TUseSelectHitterState, selectHitter } from "@/types/selectHitter";
import ktHitters from "#/data/gameInfo/ktPlayer/hitterData.json";

export const useSelectHitterState = create<TUseSelectHitterState>((set) => ({
  select: { selectTeam: "KT", selectHitter: ktHitters.data[0].name },
  setSelectHitter: (selectHitter: selectHitter) =>
    set({ select: selectHitter }),
}));
