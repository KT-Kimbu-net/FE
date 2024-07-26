import { create } from "zustand";
import {
  TUseSelectPitcherRecord,
  TUseSelectHitterRecord,
  TselectRecord,
} from "@/types/gameInfo";

export const useSelectPictherRecord = create<TUseSelectPitcherRecord>(
  (set) => ({
    selectPitcherRecord: "CURRENT",
    setSelectPitcherRecord: (select: TselectRecord) =>
      set(() => ({ selectPitcherRecord: select })),
  })
);

export const useSelectHitterRecord = create<TUseSelectHitterRecord>((set) => ({
  selectHitterRecord: "CURRENT",
  setSelectHitterRecord: (select: TselectRecord) =>
    set(() => ({ selectHitterRecord: select })),
}));
