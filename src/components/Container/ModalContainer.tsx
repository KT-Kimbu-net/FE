"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useModalState } from "@/store/modal";
import QuizStart from "../Modal/QuizStart/QuizStart";
import QuizProblem from "../Modal/QuizProblem";
import QuizLoading from "../Modal/QuizLoading";
import QuizResult from "../Modal/QuizResult";
import AlertLogin from "../Modal/AlertLogin";
import AlertRetry from "../Modal/AlertRetry";
import AlertExit from "../Modal/AlertExit";
import QuizRanking from "../Modal/QuizRanking/QuizRanking";
import NickChange from "../Modal/Chatting/NickChange";
import ReportMessage from "../Modal/Chatting/ReportMessage";
import { UserData } from "@/types/api";
import { useUserState } from "@/store/user";

const ModalLayoutBackground = () => {
  const { modalName } = useModalState();
  return (
    <>
      {modalName && (
        <section className="fixed w-full h-full top-0 bg-[#0000008f] z-30"></section>
      )}
    </>
  );
};

type ModalProps = {
  currentUser: UserData;
  isLoggedIn: boolean;
};

const ModalContent = (): JSX.Element => {
  const { modalName, setModalName } = useModalState();
  const { userData } = useUserState(); // 전역 상태에서 currentUser 가져오기
  const isLoggedIn = userData !== null; // 로그인 여부 확인

  const modalContent: { [key: string]: JSX.Element } = {
    quizStart: <QuizStart />,
    quizProblem: <QuizProblem />,
    quizLoading: <QuizLoading />,
    quizResult: <QuizResult />,
    alertLogin: <AlertLogin />,
    alertRetry: <AlertRetry />,
    alertExit: <AlertExit />,
    quizRanking: <QuizRanking />,
    nickChange: <NickChange />,
    reportMessage: <ReportMessage />,
  };

  useEffect(() => {
    if (modalName) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modalName]);

  // 임시
  useEffect(() => {
    if (
      !isLoggedIn &&
      (modalName === "quizProblem" || modalName === "quizRanking")
    ) {
      setModalName("alertLogin");
    } else if (userData?.quiz.isSolved === 1 && modalName === "quizProblem") {
      setModalName("alertRetry");
    } else if (modalName === "quizLoading") {
      const timer = setTimeout(() => {
        setModalName("quizResult");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [modalName, setModalName, isLoggedIn]);

  return (
    <>
      {modalName && (
        <section className="z-40 flex w-screen-50 min-w-[325px] max-w-[700px] flex-col jusfify-content center fixed top-1/2 left-1/2 text-center -translate-x-1/2 -translate-y-1/2 rounded-[12px] bg-white text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl">
          {modalName ? modalContent[modalName] : null}
          <section className="z-20 flex w-screen-50 min-w-[325px] max-w-[700px] flex-col justify-center items-center fixed top-1/2 left-1/2 text-center -translate-x-1/2 -translate-y-1/2 rounded-[12px] bg-white text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            {modalContent[modalName]}
          </section>
        </section>
      )}
    </>
  );
};

export default function ModalContainer() {
  const [isMount, setIsMount] = useState(false);

  useEffect(() => {
    setIsMount(true);
  }, []);

  if (typeof window === "undefined") return <></>;
  if (!isMount) return <></>;

  return (
    <>
      {createPortal(
        <ModalLayoutBackground />,
        document.getElementById("modalLayout") as HTMLElement
      )}
      {createPortal(
        <ModalContent />,
        document.getElementById("modalContent") as HTMLElement
      )}
    </>
  );
}
