"use client";
import { useModalState } from "@/store/modal";
import { IoIosClose } from "react-icons/io";
export default function QuizLoading() {
  const { setModalName } = useModalState();
  return (
    <>
      <div className="relative flex-col rounded-[12px] bg-opacity-100 bg-[#a42a2a] w-[400px] h-[400px] box-border">
        {/* X button */}
        <div className="absolute right-0 top-0">
          <IoIosClose
            className="text-white text-5xl cursor-pointer hover:text-red-600 transform translate-x-[5px] -translate-y-[5px]"
            onClick={() => setModalName(null)}
          />
        </div>
        {/* White section */}
        <div className="flex flex-col items-center justify-center relative bg-white w-full mt-9 h-full rounded-t-none rounded-b-[12px]">
          <div className="flex flex-col items-center justify-center">
            {/* Text section */}
            <div className="tracking-wider text-2xl font-extrabold -mt-3">
              잠시만 기다려주세요!
            </div>
            <svg
              className="w-16 h-16 mt-5"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="3.5" r="1.5" fill="currentColor" opacity="0">
                <animateTransform
                  attributeName="transform"
                  calcMode="discrete"
                  dur="2.4s"
                  repeatCount="indefinite"
                  type="rotate"
                  values="0 12 12;90 12 12;180 12 12;270 12 12"
                />
                <animate
                  attributeName="opacity"
                  dur="0.6s"
                  keyTimes="0;0.5;1"
                  repeatCount="indefinite"
                  values="1;1;0"
                />
              </circle>
              <circle cx="12" cy="3.5" r="1.5" fill="currentColor" opacity="0">
                <animateTransform
                  attributeName="transform"
                  begin="0.2s"
                  calcMode="discrete"
                  dur="2.4s"
                  repeatCount="indefinite"
                  type="rotate"
                  values="30 12 12;120 12 12;210 12 12;300 12 12"
                />
                <animate
                  attributeName="opacity"
                  begin="0.2s"
                  dur="0.6s"
                  keyTimes="0;0.5;1"
                  repeatCount="indefinite"
                  values="1;1;0"
                />
              </circle>
              <circle cx="12" cy="3.5" r="1.5" fill="currentColor" opacity="0">
                <animateTransform
                  attributeName="transform"
                  begin="0.4s"
                  calcMode="discrete"
                  dur="2.4s"
                  repeatCount="indefinite"
                  type="rotate"
                  values="60 12 12;150 12 12;240 12 12;330 12 12"
                />
                <animate
                  attributeName="opacity"
                  begin="0.4s"
                  dur="0.6s"
                  keyTimes="0;0.5;1"
                  repeatCount="indefinite"
                  values="1;1;0"
                />
              </circle>
            </svg>
            <div className="text-base text-gray-500 pt-3">Loading</div>
            {/* 구분선 */}
            <div className="mt-3 border-t border-gray-200 w-full"></div>{" "}
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
            <div className="mt-3 border-t border-gray-200 w-full"></div>{" "}
            {/* 4 progressBar */}
            <div className="pt-8 flex justify-center items-center gap-x-4">
              <div
                id="progressbar-start"
                className="w-4 h-4 bg-gray-200 rounded-full"
              ></div>
              <div
                id="progressbar-quiz1"
                className="w-4 h-4 bg-gray-200 rounded-full"
              ></div>
              <div
                id="progressbar-quiz2"
                className="animate-bounce w-4 h-4 bg-red-500 rounded-full"
              ></div>
              <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
