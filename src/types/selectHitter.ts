export type selectHitter = {
  selectTeam: "KT" | "OPPONENT" | null;
  selectHitter: string;
};

export type TUseSelectHitterState = {
  select: selectHitter;
  setSelectHitter: (selectHitter: selectHitter) => void;
};
