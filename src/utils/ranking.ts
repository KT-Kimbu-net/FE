export const rankImgSrc = [
  "/img/user.svg",
  "/img/rankOne.svg",
  "/img/rankTwo.svg",
  "/img/rankThree.svg",
];

export const criteriaSelect = [
  "Points",
  "Quiz Correct Answers",
  "Consecutive Quiz Correct",
  "Win Rate Correct",
];
export type FilterCriteria =
  | "Points"
  | "Quiz Correct Answers"
  | "Consecutive Quiz Correct"
  | "Win Rate Correct";

export type RankType = "streak_answer" | "predict" | "answer" | "point";

export type TResponse = {
  nickname: string;
  sequenceDays?: number; // streak_answer. predict
  amount?: number; // answer
  creditAmount?: number; // point
  userId: string;
};

type rankDataResponse = {
  list: TResponse[];
  myrank: number;
};

const paramMapping: { [key in RankType]: keyof TResponse } = {
  streak_answer: "sequenceDays",
  predict: "sequenceDays",
  answer: "amount",
  point: "creditAmount",
};
export const rankParameters: { [key: string]: RankType } = {
  "Consecutive Quiz Correct": "streak_answer",
  "Quiz Correct Answers": "answer",
  Points: "point",
  "Win Rate Correct": "predict",
};
export function sortRanking(
  myRankData: TResponse,
  data: rankDataResponse,
  rankType: RankType
): TResponse[] {
  const param = paramMapping[rankType];
  const sortedList = data.list
    .sort((a, b) => {
      const aValue = a[param] ?? 0;
      const bValue = b[param] ?? 0;

      if (bValue === aValue) {
        return a.nickname.localeCompare(b.nickname); // 닉네임 알파벳순으로 비교
      }
      return Number(bValue) - Number(aValue); // 내림차순 정렬
    })
    .slice(0, 9); // 상위 9명 반환
  return [myRankData, ...sortedList];
}

export const getScore = (data: TResponse, criteria: FilterCriteria) => {
  switch (criteria) {
    case "Points":
      return data.creditAmount;
    case "Quiz Correct Answers":
      return data.amount;
    case "Consecutive Quiz Correct":
      return data.sequenceDays;
    default:
      return data.sequenceDays;
  }
};
export const getRating = (criteria: FilterCriteria) => {
  switch (criteria) {
    case "Points":
      return 2000; // 임시
    case "Quiz Correct Answers":
      return 30;
    case "Consecutive Quiz Correct":
      return 30;
    default:
      return 1;
  }
};
export const criteriaDescriptions = {
  Points: "500포인트 달성시 티켓 할인권 제공",
  "Quiz Correct Answers": "30개의 퀴즈 정답 시 추가 보너스 제공",
  "Consecutive Quiz Correct": "30일 연속 퀴즈 정답 시 특별 혜택 제공",
  "Win Rate Correct": "10번 이상의 퀴즈 정답 시 특별 혜택 제공",
};
