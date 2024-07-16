"use client";
import { SvgQuizLoadingLoading } from "@/utils/img/Svg";
import ModalLayout from "./Common/ModalLayout";
import CloseButton from "./Common/CloseButton";
import Progressbar from "./Common/Progressbar";
export default function QuizLoading() {
  return (
    <>
      <ModalLayout className="bg-[#a42a2a] w-[400px] h-[400px]">
        <CloseButton />
        <div className="flex flex-col items-center justify-center relative bg-white w-full mt-9 h-full rounded-t-none rounded-b-[12px]">
          <div className="flex flex-col items-center justify-center">
            <div className="tracking-wider text-2xl font-extrabold -mt-3">
              잠시만 기다려주세요!
            </div>
            <SvgQuizLoadingLoading />
            <div className="text-base text-gray-500 pt-3">Loading</div>
            <div className="mt-3 border-t border-gray-200 w-full"></div>
            <div className="text-base pt-3">
              하루 최대{" "}
              <span className="font-bold text-red-500">100 포인트</span>가
              제공됩니다.
            </div>
            <div className="text-base pt-2">
              매일매일 퀴즈에 참여하고{" "}
              <span className="font-bold text-red-500">추가 포인트</span>도
              챙겨보세요!
            </div>
            <div className="mt-3 border-t border-gray-200 w-full"></div>
            <Progressbar stage="quizLoading" />
          </div>
        </div>
      </ModalLayout>
    </>
  );
}
