import { SvgQuizProblemLoading } from "@/utils/img/Svg";
import Image from "next/image";
import Progressbar from "../Common/Progressbar";

type QuizProblemBodyProps = {
  problem: { question: string; answer: number } | null;
  questionIndex: number;
  onAnswer: (value: boolean) => void;
  loading: boolean;
};

export default function QuizProblemBody({
  problem,
  questionIndex,
  onAnswer,
  loading,
}: QuizProblemBodyProps) {
  return (
    <>
      <div className="flex flex-col items-center justify-center relative bg-white w-full mt-9 h-full rounded-t-none rounded-b-[12px]">
        <div className="flex flex-col items-center justify-center">
          {problem && (
            <div className="tracking-wider text-3xl font-bold -mt-3">
              Q{questionIndex}.
            </div>
          )}
          <div className="text-base pt-2 pl-10 pr-10">
            {problem ? problem.question : <SvgQuizProblemLoading />}
          </div>
          {problem && (
            <div className="relative flex items-center justify-center bg-gray-300 w-[80%] h-56 rounded-[12px] border border-black mt-4 overflow-hidden">
              <Image
                src="/tmp.jpg"
                layout="fill"
                objectFit="cover"
                className="rounded-[12px] object-top"
                alt="Problem illustration"
              />
            </div>
          )}
          <Progressbar stage="quizProblem" questionIndex={questionIndex} />
        </div>
        <div className="flex justify-center mt-8 gap-x-4 w-full">
          <button
            onClick={() => onAnswer(true)}
            className={`text-3xl font-bold bg-white text-black border border-gray-400 rounded-[12px] w-[40%] h-14 ${
              loading
                ? "cursor-not-allowed bg-gray-300 text-gray-500"
                : "hover:bg-[#a42a2a] hover:text-white hover:border-transparent transition duration-300 ease-in-out"
            }`}
            disabled={loading}
          >
            O
          </button>
          <button
            onClick={() => onAnswer(false)}
            className={`text-3xl font-bold bg-white text-black border border-gray-400 rounded-[12px] w-[40%] h-14 ${
              loading
                ? "cursor-not-allowed bg-gray-300 text-gray-500"
                : "hover:bg-[#a42a2a] hover:text-white hover:border-transparent transition duration-300 ease-in-out"
            }`}
            disabled={loading}
          >
            X
          </button>
        </div>
      </div>
    </>
  );
}
