export type TModalTypes =
  | "quizStart"
  | "quizProblem"
  | "quizLoading"
  | "quizResult"
  | "alertLogin"
  | "alertRetry"
  | "alertExit"
  | null;

export type TUseModalState = {
  modalName?: TModalTypes;
  previousModalName?: TModalTypes;
  setModalName: (modalName: TModalTypes) => void;
  setPreviousModalName: (modalName: TModalTypes) => void;
};
export type TUserQuizState = {
  answers: { [questionId: number]: boolean }; // 사용자 답변
  hasParticipated: boolean; // 참여 여부
  setAnswer: (questionIndex: number, value: boolean) => void;
  setParticipation: (participation: boolean) => void;
};
