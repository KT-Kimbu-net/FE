export type TChangeScore = {
  isKtwiz: boolean;
  inning: number;
  score: number;
};

export type TChangePitcher = {
  isKtwiz: boolean;
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
  addKtScore: (score: number) => void; // 추가된 함수
  setKtPitcher: (v: string) => void;
  opponent: TOpponentScoreInfo;
  setOpponentScore: (v: number[]) => void;
  addOpponentScore: (score: number) => void; // 추가된 함수
  setOpponentPitcher: (v: string) => void;
};
