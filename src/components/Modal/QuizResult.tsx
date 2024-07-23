"use client";

import { useModalState, useUserQuizState } from "@/store/modal";
import { SvgQuizResultCheck } from "@/utils/img/Svg";
import ModalLayout from "./Common/ModalLayout";
import CloseButton from "./Common/CloseButton";
import { useUserState } from "@/store/user";
import Progressbar from "./Common/Progressbar";
import { calculatePoints, getResults } from "@/utils/quiz/results";
import { useEffect, useState } from "react";
import { sendPoints } from "@/libs/quiz/sendPoints";

export default function QuizResult() {
  const { userData, setUserData } = useUserState();
  const { setModalName } = useModalState();
  const { answers } = useUserQuizState();

  const [pointsSent, setPointsSent] = useState(false);
  const resultArr = getResults(answers);

  useEffect(() => {
    if (userData && !pointsSent) {
      const points = calculatePoints(answers);
      const updatedUserData = {
        ...userData,
        creditAmount: (userData.credit.creditAmount ?? 0) + points,
      };
      setUserData(updatedUserData);
      sendPoints(points)
        .then((response) => {
          setPointsSent(true);
        })
        .catch((error) => {
          console.error("Failed to send points:", error);
        });
    }
  }, []);

  return (
    <>
      <ModalLayout className="bg-[#a42a2a] w-[500px] h-[500px]">
        <CloseButton />
        <div className="flex flex-col items-center justify-center relative bg-white w-full mt-9 h-full rounded-t-none rounded-b-[12px]">
          <div className="text-left w-[90%]">
            <div className="tracking-wider text-2xl font-bold">
              오늘의 퀴즈 결과는?
            </div>
            <div className="mt-2 text-center text-base pt-2 bg-slate-200 rounded-2xl pl-2 pb-2">
              <div>
                <span className="text-blue-500 font-bold">
                  {userData?.nickname || "사용자 "} 님{" "}
                </span>
                의 현재 포인트는{" "}
                <span className="text-red-500 font-bold">
                  {userData?.credit.creditAmount || 0} 포인트
                </span>{" "}
                입니다.
              </div>
            </div>
            <div className="pt-5 flex items-center transform transition duration-500 ease-in-out hover:scale-105">
              <SvgQuizResultCheck />
              <div>
                <div className="pl-5 text-lg font-bold">
                  기본 참여 크레딧을 제공합니다!
                </div>
                <div className="pl-5 text-sm">
                  내일도 참여하면 추가 포인트가 제공됩니다.
                </div>
              </div>
              <div className="ml-auto font-bold text-red-500 pr-2">+30</div>
            </div>
            <div className="mt-3 border-t border-gray-200 w-full"></div>
            {answers.slice(1).map((element, index) => (
              <div key={index}>
                <div className="pt-3 flex items-center transform transition duration-500 ease-in-out hover:scale-105">
                  <SvgQuizResultCheck />
                  <div>
                    <div className="pl-5 text-lg font-bold">
                      {index + 1}번 정답은 {element.answer}입니다.
                    </div>
                    <div
                      className="pl-5 text-sm overflow-hidden text-ellipsis whitespace-nowrap max-w-[40ch]"
                      title={element.explanation}
                    >
                      {element.explanation}
                    </div>
                  </div>
                  <div
                    className={`ml-auto font-bold pr-2 ${
                      resultArr[index + 1]
                        ? "text-red-500"
                        : "text-gray-500 line-through"
                    }`}
                  >
                    +{index === 0 ? "30" : "40"}
                  </div>
                </div>
                {index < answers.length - 1 && (
                  <div className="mt-3 border-t border-gray-200 w-full"></div>
                )}
              </div>
            ))}
            <Progressbar stage="quizResult" />
            <div className="flex justify-center items-center">
              <button
                onClick={() => setModalName("quizRanking")}
                className="mt-6 text-lg font-bold bg-blue-300 rounded-[12px] text-white w-full h-12 hover:bg-gray-500 transition duration-300 ease-in-out"
              >
                랭킹 보러 가기
              </button>
            </div>
          </div>
        </div>
      </ModalLayout>
    </>
  );
}
