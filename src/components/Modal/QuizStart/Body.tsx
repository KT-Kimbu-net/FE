import { useModalState } from "@/store/modal";
import Progressbar from "../Common/Progressbar";

export default function QuizStartBody() {
  const { setModalName } = useModalState();
  return (
    <>
      <div className="flex flex-col items-center justify-center relative bg-white w-full mt-9 h-full rounded-t-none rounded-b-[12px]">
        <div className="relative flex items-center justify-center bg-gray-300 w-[85%] h-56 rounded-[12px]">
          <img
            src="/img/aiquiz.jpg"
            className="absolute inset-0 w-full h-full object-cover rounded-[12px]"
            alt="Background Image"
          />
        </div>
        <div id="text" className="pt-7">
          <div className="tracking-wider text-2xl font-bold">
            AI 퀴즈에 오신 것을 환영합니다.
          </div>
          <div className="text-base pt-2">
            퀴즈는 <span className="text-blue-500 font-bold">2문제</span>로
            구성되어 있으며 하루{" "}
            <span className="text-red-500 font-bold">1회</span> 참여 가능합니다.
          </div>
          <Progressbar stage="quizStart" />
        </div>
        <div className="flex justify-center mt-8 gap-x-4 w-full">
          <button
            onClick={() => setModalName("quizProblem")}
            className="text-xl font-bold bg-[#a42a2a] text-white rounded-[12px] w-[40%] h-14 hover:bg-gray-700 hover:text-white hover:border-transparent transition duration-300 ease-in-out"
          >
            퀴즈 풀기
          </button>
          <button
            onClick={() => setModalName("quizRanking")}
            className="text-xl font-bold bg-gray-500 text-white border border-gray-400 rounded-[12px] w-[40%] h-14 hover:bg-gray-700 hover:text-white hover:border-transparent transition duration-300 ease-in-out"
          >
            랭킹 보기
          </button>
        </div>
      </div>
    </>
  );
}
