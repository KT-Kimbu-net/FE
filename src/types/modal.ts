export type TModalTypes =
  | "quizStart"
  | "quizProblem"
  | "quizLoading"
  | "quizResult"
  | "alertLogin"
  | "alertRetry"
  | "alertExit"
  | "quizRanking"
  | "nickChange"
  | null;

export type TUseModalState = {
  modalName?: TModalTypes;
  previousModalType: TModalTypes;
  problemIndex?: 1 | 2 | null;
  setModalName: (modalName: TModalTypes) => void;
  setPreviousModalType: (modalName: TModalTypes) => void;
  setProblemIndex: (problemIndex: 1 | 2 | null) => void;
};
export type TUserQuizState = {
  answers: { [questionId: number]: boolean }; // 사용자 답변
  hasParticipated: boolean; // 참여 여부
  setAnswer: (questionIndex: number, value: boolean) => void;
  setParticipation: (participation: boolean) => void;
};
