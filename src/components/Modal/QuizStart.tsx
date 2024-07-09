"use client";
import { useModalState } from "@/store/modal";
import { IoIosClose } from "react-icons/io";
export default function QuizStart() {
  const { setModalName } = useModalState();
  return (
    <>
      <div className="relative first-line:flex flex-col rounded-[12px] bg-opacity-100 bg-[#a42a2a] w-[500px] h-[550px] box-border">
        {/* X button */}
        <div className="absolute right-0 top-0">
          <IoIosClose
            className="text-white text-5xl cursor-pointer hover:text-red-600 transform translate-x-[5px] -translate-y-[5px]"
            onClick={() => setModalName(null)}
          />
        </div>
        {/* White section */}
        <div className="flex flex-col items-center justify-center relative bg-white w-full mt-9 h-full rounded-t-none rounded-b-[12px]">
          {/* Image section */}
          <div className="relative flex items-center justify-center bg-gray-300 w-[85%] h-56 rounded-[12px]">
            <img
              src="/aiquiz.jpg"
              className="absolute inset-0 w-full h-full object-cover rounded-[12px]"
              alt="Background Image"
            />
          </div>
          <div id="text" className="pt-7">
            <div className="tracking-wider text-2xl font-bold">
              오늘의 퀴즈에 오신 것을 환영합니다.
            </div>
            <div className="text-base pt-2">
              퀴즈는 <span className="text-blue-500 font-bold">2문제</span>로
              구성되어 있으며 하루{" "}
              <span className="text-red-500 font-bold">1회</span> 참여
              가능합니다.
            </div>
            {/* 4 progressBar */}
            <div className="pt-8 flex justify-center items-center gap-x-4">
              <div className="animate-bounce w-4 h-4 bg-red-500 rounded-full"></div>
              <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
              <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
              <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
            </div>
          </div>
          <button
            onClick={() => setModalName("quizProblem")}
            className="mt-9 text-lg font-bold bg-[#a42a2a] rounded-[12px] text-white w-[80%] h-[10%] hover:bg-gray-500
          transition duration-300 ease-in-out"
          >
            GO
          </button>
        </div>
      </div>
    </>
  );
}
