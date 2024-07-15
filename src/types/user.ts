export type TUserDataType = {
  userId: string; // 유저 아이디
  nickname: string; // 유저 닉네임
  creditAmount: number; // 포인트 총량
  quiz: {
    isSolved: boolean; // 오늘 풀었는지
    amount: number; // 누적 맞춘 갯수
    sequenceDays: number; // 연속으로 맞춘 일자
  };
  gamePredict: {
    choose: "승" | "무" | "패" | "" | null; // 예측한 결과
    sequenceDays: number; // 연속으로 맞춘 일자
  };
  token: string; // 토큰
} | null;

export type TUseUserState = {
  userData?: TUserDataType;
  setUserData: (userData: TUserDataType) => void;
};
