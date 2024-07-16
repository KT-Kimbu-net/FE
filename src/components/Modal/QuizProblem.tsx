"use client";
import { useModalState, useUserQuizState } from "@/store/modal";
import { useEffect, useState } from "react";
import CloseButton from "./Common/CloseButton";
import QuizProblemBody from "./QuizProblem/Body";
import ModalLayout from "./Common/ModalLayout";
import { useUserState } from "@/store/user";
import { UserData } from "@/types/api";

export default function QuizProblem() {
  const { userData, setUserData } = useUserState(); // 전역 사용자 정보
  const { setModalName, setPreviousModalType, problemIndex, setProblemIndex } =
    useModalState();
  const { setAnswer } = useUserQuizState();
  const [questionIndex, setQuestionIndex] = useState(1);
  const [problem, setProblem] = useState<{
    question: string;
    answer: number;
  } | null>(null);
  const [loading, setLoading] = useState(true);

  const handleProblemExit = () => {
    setPreviousModalType("quizProblem");
    if (questionIndex === 1 || questionIndex === 2) {
      setProblemIndex(questionIndex);
    } else {
      setProblemIndex(null);
    }
    setModalName("alertExit");
  };
  useEffect(() => {
    const fetchProblem = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/quizs?id=${questionIndex}`);
        const data = await res.json();
        setProblem(data);
        console.log(data);
        // 유저 정보에서 quiz.isSolved를 1로 변경
        if (userData) {
          const updatedUser: UserData = {
            ...userData,
            quiz: {
              ...userData.quiz,
              isSolved: 1,
            },
          };
          setUserData(updatedUser);
          console.log(userData.quiz);
        }
      } catch (error) {
        console.error("Failed to fetch problem", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProblem();
  }, [questionIndex, setUserData]);

  const handleAnswer = (value: boolean) => {
    setAnswer(questionIndex, value);
    if (questionIndex === 1) {
      setQuestionIndex(2);
    } else {
      setModalName("quizLoading");
    }
  };

  useEffect(() => {
    if (problemIndex === 1 || problemIndex === 2) {
      setQuestionIndex(problemIndex);
    }
  }, [problemIndex]);

  return (
    <>
      <ModalLayout className="bg-[#a42a2a] w-[500px] h-[580px]">
        <CloseButton textColor="text-white" onClick={handleProblemExit} />
        <QuizProblemBody
          problem={problem}
          questionIndex={questionIndex}
          onAnswer={handleAnswer}
          loading={loading}
        />
      </ModalLayout>
    </>
  );
}
