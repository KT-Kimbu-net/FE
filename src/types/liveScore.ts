export type TChangeScore = {
  isKtWiz: boolean;
  inning: number;
  score: number;
};

export type TChangePitcher = {
  isKtWiz: boolean;
  pitcher: string;
};

export type TKtScoreInfo = {
  score: number[];
  pitcher: string;
};

export type TOpponentScoreInfo = {
  score: number[];
  pitcher: string;
};

export type TLiveInfo = {
  kt: TKtScoreInfo;
  opponent: TOpponentScoreInfo;
};

export type TUseLiveScoreState = {
  kt: TKtScoreInfo;
  setKtScore: (v: number[]) => void;
  setKtPitcher: (v: string) => void;
  opponent: TOpponentScoreInfo;
  setOpponentScore: (v: number[]) => void;
  setOpponentPitcher: (v: string) => void;
};
