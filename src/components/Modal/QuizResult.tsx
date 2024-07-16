"use client";
import { useModalState, useUserQuizState } from "@/store/modal";
import { SvgQuizResultCheck } from "@/utils/img/Svg";
import ModalLayout from "./Common/ModalLayout";
import CloseButton from "./Common/CloseButton";
import Progressbar from "./Common/Progressbar";
import { useUserState } from "@/store/user";

export default function QuizResult() {
  const { setModalName } = useModalState();
  const { userData } = useUserState();
  // console.log("User Quiz State:", answers);
  return (
    <>
      <ModalLayout className="bg-[#a42a2a] w-[500px] h-[480px]">
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
                  {userData?.credit?.creditAmount || 0} 포인트
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
              <div className="ml-auto font-bold text-red-500 pr-2">
                +30 포인트
              </div>
            </div>
            <div className="mt-3 border-t border-gray-200 w-full"></div>
            <div className="pt-3 flex items-center transform transition duration-500 ease-in-out hover:scale-105">
              <SvgQuizResultCheck />
              <div>
                <div className="pl-5 text-lg font-bold">
                  1번 정답은 O 입니다.
                </div>
                <div className="pl-5 text-sm">
                  고의로 방해하면 추가진루가 허용됩니다.
                </div>
              </div>
              <div className="ml-auto font-bold text-red-500 pr-2">
                +30 포인트
              </div>
            </div>
            <div className="mt-3 border-t border-gray-200 w-full"></div>
            <div className="pt-3 flex items-center transform transition duration-500 ease-in-out hover:scale-105">
              <SvgQuizResultCheck />
              <div>
                <div className="pl-5 text-lg font-bold">
                  2번 정답은 X입니다.
                </div>
                <div className="pl-5 text-sm">
                  고의로 방해하면 추가진루가 허용됩니다.
                </div>
              </div>
              <div className="ml-auto font-bold text-red-500 pr-2">
                +40 포인트
              </div>
            </div>
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
