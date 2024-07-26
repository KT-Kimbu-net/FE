"use client";

import { useModalState, useUserQuizState } from "@/store/modal";
import { useCallback, useEffect, useState } from "react";
import CloseButton from "../Common/CloseButton";
import QuizProblemBody from "./QuizProblemBody";
import ModalLayout from "../Common/ModalLayout";
import { useUserState } from "@/store/user";
import { getQuizData } from "@/libs/quiz/getQuizData";
import { sendIsSolved } from "@/libs/quiz/sendIsSolved";

export default function QuizProblem() {
  const { userData, setUserData } = useUserState(); // 전역 사용자 정보
  const {
    setModalName,
    setPreviousModalType,
    problemIndex = 1,
    setProblemIndex,
  } = useModalState();
  const { answers, setAnswer } = useUserQuizState();
  const [loading, setLoading] = useState(true);

  // 핸들러 함수들
  const handleProblemExit = () => {
    setPreviousModalType("quizProblem");
    setModalName("alertExit");
  };

  const handleAnswer = (value: boolean) => {
    if (answers[problemIndex]) {
      // 사용자 입력
      const problem = answers[problemIndex];
      setAnswer(
        problemIndex,
        problem.answer,
        value,
        problem.question,
        problem.explanation
      );
      if (problemIndex === 1) {
        setProblemIndex(2);
      } else {
        handleQuizCompletion();
      }
    }
  };

  // 퀴즈 데이터를 가져오는 함수
  const fetchQuizData = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getQuizData();
      setAnswer(problemIndex, data.answer, false, data.quiz, data.explanation);
    } catch (error) {
      console.error("Failed to fetch quiz data", error);
    } finally {
      setLoading(false);
    }
  }, [problemIndex, setAnswer]);

  // 데이터 가져오는 로직
  useEffect(() => {
    if (!answers[problemIndex]) {
      fetchQuizData();
    } else {
      setLoading(false);
    }
  }, [fetchQuizData]);

  // 퀴즈 완료 처리 함수
  const handleQuizCompletion = () => {
    if (answers.length >= 3 && userData) {
      const updatedUser = {
        ...userData,
        quiz: { ...userData.quiz, isSolved: 1 },
      };
      setUserData(updatedUser);
      sendIsSolved(userData.userId);
      setModalName("quizLoading");
    }
  };
  return (
    <>
      <ModalLayout className="bg-[#a42a2a] w-[500px] h-[550px]">
        <CloseButton textColor="text-white" onClick={handleProblemExit} />
        <QuizProblemBody
          problem={answers[problemIndex]?.question ?? ""}
          problemIndex={problemIndex}
          onAnswer={handleAnswer}
          loading={loading}
        />
      </ModalLayout>
    </>
  );
}
