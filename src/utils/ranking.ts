import { userDummyData } from "@/data/modal/usersDummy";
import { useUserState } from "@/store/user";
import { UserData } from "@/types/api";

export const rankImgSrc = [
  "/img/user.svg",
  "/img/rankOne.svg",
  "/img/rankTwo.svg",
  "/img/rankThree.svg",
];

export const rankSelect = [
  "Points",
  "Quiz Correct Answers",
  "Consecutive Quiz Correct",
  // "Win Rate Correct",
];

export type FilterCriteria =
  | "Points"
  | "Quiz Correct Answers"
  | "Consecutive Quiz Correct";
//   | "Win Rate Correct"; 일단 제외

export const getTopRankingUsers = (criteria: FilterCriteria): UserData[] => {
  const { userData } = useUserState.getState(); // 전역 상태 currentUser 가져오기

  // 선택된 기준에 따라 사용자 데이터를 정렬
  let sortedUserData: UserData[];
  switch (criteria) {
    case "Points":
      sortedUserData = userDummyData.sort(
        (a, b) => b.credit.creditAmount - a.credit.creditAmount
      );
      break;
    case "Quiz Correct Answers":
      sortedUserData = userDummyData.sort(
        (a, b) => b.quiz.amount - a.quiz.amount
      );
      break;
    case "Consecutive Quiz Correct":
      sortedUserData = userDummyData.sort(
        (a, b) => b.quiz.sequenceDays - a.quiz.sequenceDays
      );
      break;
    default:
      sortedUserData = userDummyData;
      break;
  }

  // 상위 9명 필터링
  const topUsers = sortedUserData.slice(0, 9);
  // currentUser를 0번째 index에 추가
  if (userData) {
    topUsers.unshift(userData);
  }

  return topUsers;
};
export const getScore = (data: UserData, criteria: FilterCriteria) => {
  switch (criteria) {
    case "Points":
      return data.credit.creditAmount;
    case "Quiz Correct Answers":
      return data.quiz.amount;
    case "Consecutive Quiz Correct":
      return data.quiz.sequenceDays;
    default:
      return 0;
  }
};
export const getRating = (criteria: FilterCriteria) => {
  switch (criteria) {
    case "Points":
      return 500; // 임시
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
};
