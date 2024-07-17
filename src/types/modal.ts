export type TModalTypes =
  | "quizStart"
  | "quizProblem"
  | "quizLoading"
  | "quizResult"
  | "alertLogin"
  | "alertRetry"
  | "alertExit"
  | "quizRanking"
  | null;

export type TUseModalState = {
  modalName?: TModalTypes;
  previousModalType: TModalTypes;
  problemIndex?: number;
  setModalName: (modalName: TModalTypes) => void;
  setPreviousModalType: (modalName: TModalTypes) => void;
  setProblemIndex: (problemIndex: number) => void;
};
export type TUserQuizState = {
  answers: {
    question: string;
    answer: string; // O,X로 들어옴
    explanation: string;
    userAnswer: boolean | null;
  }[];
  isQuizActive: boolean; // 퀴즈 진행 중 확인
  setIsQuizActive: (active: boolean) => void;
  setAnswer: (
    questionIndex: number,
    answer: string,
    userAnswer: boolean,
    quistion: string,
    explanation: string
  ) => void;
  reset: () => void; // 리셋 함수 추가
};
