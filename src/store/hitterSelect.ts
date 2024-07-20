import { create } from "zustand";
import { TUseSelectHitterState, TselectHitter } from "@/types/selectHitter";
import ktHitters from "#/data/gameInfo/ktPlayer/hitterData.json";
import ncPitcher from "#/data/gameInfo/ncPlayer/pictherData.json";

export const useSelectHitterState = create<TUseSelectHitterState>((set) => ({
  select: {
    selectTeam: "KT",
    selectHitter: ktHitters.data[0],
    selectPitcher: ncPitcher.data,
  },
  setSelectHitter: (selectHitter: TselectHitter) =>
    set({ select: selectHitter }),
}));
