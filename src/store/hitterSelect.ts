import { create } from "zustand";
import { TUseSelectHitterState, selectHitter } from "@/types/selectHitter";
import { ktHitters } from "@/data/gameInfo/HitterDummy";

export const useSelectHitterState = create<TUseSelectHitterState>((set) => ({
  select: { selectTeam: "KT", selectHitter: ktHitters[0].name },
  setSelectHitter: (selectHitter: selectHitter) =>
    set({ select: selectHitter }),
}));
