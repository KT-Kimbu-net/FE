import { UserData } from "@/types/api";
// 임시로 로그인한 상태의 현재 유저 정보
export const dummyCurrentUser: UserData = {
  userId: "default123",
  password: "default123",
  nickname: "Guest",
  credit: {
    creditAmount: 0,
    usedHistory: [],
    deleteHistory: [],
    getHistory: [],
  },
  quiz: { isSolved: 0, amount: 0, sequenceDays: 0 },
  gamePredict: { sequenceDays: 0 },
  userUuid: "default-uuid",
};
