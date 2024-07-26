import { SvgQuizProblemLoading } from "@/utils/img/Svg";
import Image from "next/image";
import Progressbar from "../Common/Progressbar";
import React from "react";
import { getRandomImage } from "@/utils/img/getRandomImage";

type QuizProblemBodyProps = {
  problem: string;
  problemIndex: number;
  onAnswer: (value: boolean) => void;
  loading: boolean;
};

function QuizProblemBody({
  problem,
  problemIndex,
  onAnswer,
  loading,
}: QuizProblemBodyProps) {
  return (
    <>
      <div className="flex flex-col items-center justify-center relative bg-white w-full mt-9 h-full rounded-t-none rounded-b-[12px]">
        <div
          className={`flex flex-col items-center h-full ${
            loading ? "justify-center mb-20" : "mt-8"
          }`}
        >
          {loading ? (
            <SvgQuizProblemLoading />
          ) : (
            <>
              <div className="tracking-wider text-3xl font-bold">
                Q{problemIndex}.
              </div>
              <div className="text-base pt-2 pl-10 pr-10">{problem}</div>
              <div className="relative flex items-center justify-center bg-gray-300 w-[80%] h-56 rounded-[12px] border border-black mt-4 overflow-hidden">
                {/* 야구 이미지 todo */}
                <Image
                  src={getRandomImage()}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 500px) 100vw, 500px"
                  className="rounded-[12px] object-top"
                  alt="Problem illustration"
                />
              </div>
            </>
          )}
        </div>
        <div className="absolute flex flex-col items-center bottom-5 gap-4">
          <div className="flex z-10">
            <Progressbar stage="quizProblem" questionIndex={problemIndex} />
          </div>
          <div className="relative flex justify-between gap-4">
            <button
              onClick={() => onAnswer(true)}
              className={`text-3xl font-bold bg-white text-black border border-gray-400 rounded-[12px] w-[199px] h-14 ${
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
              className={`text-3xl font-bold bg-white text-black border border-gray-400 rounded-[12px] w-[199px] h-14 ${
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
      </div>
    </>
  );
}
export default React.memo(QuizProblemBody);
