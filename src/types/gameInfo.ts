export type TselectRecord = "CURRENT" | "RELATIVE";

export type TUseSelectPitcherRecord = {
  selectPitcherRecord: TselectRecord;
  setSelectPitcherRecord: (v: TselectRecord) => void;
};

export type TUseSelectHitterRecord = {
  selectHitterRecord: TselectRecord;
  setSelectHitterRecord: (v: TselectRecord) => void;
};
