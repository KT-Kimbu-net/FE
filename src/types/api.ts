export type CreditHistory = {
  date: string;
  content: string;
  amount: number;
  deleteDate?: string; // getHistory에만 존재
};

export type TCreditHistory = {
  usedHistory: CreditHistory[];
  deleteHistory: CreditHistory[];
  getHistory: CreditHistory[];
};

export type Credit = {
  creditAmount: number;
  creditHistory: TCreditHistory;
};

export type Quiz = {
  isSolved: number;
  amount: number;
  sequenceDays: number;
};

export type GameChoose = "승" | "무" | "패" | "";

export type GamePredict = {
  choose: GameChoose;
  sequenceDays: number;
};

export type UserData = {
  userId: string;
  password: string;
  nickname: string;
  credit: Credit; // 크레딧 정보
  quiz: Quiz; // 퀴즈 정보
  gamePredict: GamePredict; // 게임 예측 정보
  userUuid: string;
};

export type ChatData = {
  nickname: string;
  message: string;
  time: string;
  report: string[];
  id: string;
};
