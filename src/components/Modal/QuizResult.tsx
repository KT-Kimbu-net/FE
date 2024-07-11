"use client";
import { useModalState, useUserQuizState } from "@/store/modal";
import { IoIosClose } from "react-icons/io";

export default function QuizResult() {
  const { setModalName } = useModalState();
  const { answers } = useUserQuizState();
  console.log("User Quiz State:", answers);
  return (
    <>
      <div className="relative flex flex-col rounded-[12px] bg-opacity-100 bg-[#a42a2a] w-[500px] h-[480px] box-border">
        {/* X button */}
        <div className="absolute right-0 top-0">
          <IoIosClose
            className="text-white text-5xl cursor-pointer hover:text-red-600 transform translate-x-[5px] -translate-y-[5px]"
            onClick={() => setModalName(null)}
          />
        </div>
        {/* White section */}
        <div className="flex flex-col items-center justify-center relative bg-white w-full mt-9 h-full rounded-t-none rounded-b-[12px]">
          <div className="text-left w-[90%]">
            <div className="tracking-wider text-2xl font-bold">
              오늘의 퀴즈 결과는?
            </div>
            <div className="mt-2 text-center text-base pt-2 bg-slate-200 rounded-2xl pl-2 pb-2">
              <div>
                <span className="text-blue-500 font-bold">홍길동님 </span>의
                현재 포인트는{" "}
                <span className="text-red-500 font-bold">400 포인트</span>
                입니다.
              </div>
            </div>
            <div>
              <div className="pt-5 flex items-center transform transition duration-500 ease-in-out hover:scale-105">
                <svg
                  className="h-10 w-10"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="4" />
                    <path d="m9 12l2.25 2L15 10" />
                  </g>
                </svg>
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
              {/* 구분선 */}
              <div className="mt-3 border-t border-gray-200 w-full"></div>{" "}
              <div className="pt-3 flex items-center transform transition duration-500 ease-in-out hover:scale-105">
                <svg
                  className="h-10 w-10"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="4" />
                    <path d="m9 12l2.25 2L15 10" />
                  </g>
                </svg>
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
              {/* 구분선 */}
              <div className="mt-3 border-t border-gray-200 w-full"></div>{" "}
              <div className="pt-3 flex items-center transform transition duration-500 ease-in-out hover:scale-105">
                <svg
                  className="h-10 w-10"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="4" />
                    <path d="m9 12l2.25 2L15 10" />
                  </g>
                </svg>
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
            </div>
            {/* 4 progressBar */}
            <div className="pt-6 flex justify-center items-center gap-x-4">
              <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
              <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
              <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
              <div className="animate-bounce w-4 h-4 bg-red-500 rounded-full"></div>
            </div>
            <div className="flex justify-center items-center">
              <button
                onClick={() => setModalName("alertLogin")}
                className="mt-6 text-lg font-bold bg-blue-300 rounded-[12px] text-white w-full h-12 hover:bg-gray-500
              transition duration-300 ease-in-out"
              >
                랭킹 보러 가기
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
