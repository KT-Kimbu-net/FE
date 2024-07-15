"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useModalState } from "@/store/modal";
import QuizStart from "../Modal/QuizStart";
import QuizProblem from "../Modal/QuizProblem";
import QuizLoading from "../Modal/QuizLoading";
import QuizResult from "../Modal/QuizResult";
import AlertLogin from "../Modal/AlertLogin";
import AlertRetry from "../Modal/AlertRetry";
import AlertExit from "../Modal/AlertExit";
import QuizRanking from "../Modal/QuizRanking";
import { UserData } from "@/types/api";
import { dummyCurrentUser } from "@/data/modal/currentUserDummy";

const ModalLayout = () => {
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

const ModalContent = ({
  currentUser,
  isLoggedIn = true,
}: ModalProps): JSX.Element => {
  const { modalName, setModalName } = useModalState();

  const modalContent: { [key: string]: JSX.Element } = {
    quizStart: <QuizStart />,
    quizProblem: <QuizProblem />,
    quizLoading: <QuizLoading />,
    quizResult: <QuizResult />,
    alertLogin: <AlertLogin />,
    alertRetry: <AlertRetry />,
    alertExit: <AlertExit />,
    quizRanking: <QuizRanking currentUser={currentUser} />,
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
    if (modalName === "quizStart" && !isLoggedIn) {
      setModalName("alertLogin");
    } else if (modalName === "quizLoading") {
      const timer = setTimeout(() => {
        setModalName("quizResult");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [modalName, setModalName]);

  return (
    <>
      {modalName && (
        <section className="z-40 flex w-screen-50 min-w-[325px] max-w-[700px] flex-col jusfify-content center fixed top-1/2 left-1/2 text-center -translate-x-1/2 -translate-y-1/2 rounded-[12px] bg-white text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl">
          {modalName ? modalContent[modalName] : null}
        </section>
      )}
    </>
  );
};

export default function ModalContainer({
  currentUser = dummyCurrentUser,
  isLoggedIn = true,
}: ModalProps) {
  const [isMount, setIsMount] = useState(false);

  useEffect(() => {
    setIsMount(true);
  }, []);

  if (typeof window === "undefined") return <></>;
  if (!isMount) return <></>;

  return (
    <>
      {createPortal(
        <ModalLayout />,
        document.getElementById("modalLayout") as HTMLElement
      )}
      {createPortal(
        <ModalContent currentUser={currentUser} isLoggedIn={isLoggedIn} />,
        document.getElementById("modalContent") as HTMLElement
      )}
    </>
  );
}
