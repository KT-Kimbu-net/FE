"use client";
import { useModalState, useUserQuizState } from "@/store/modal";
import { useEffect, useState } from "react";
import { IoIosClose } from "react-icons/io";

export default function QuizProblem() {
  const { setModalName, setPreviousModalName } = useModalState();
  const { setAnswer } = useUserQuizState();
  const [questionIndex, setQuestionIndex] = useState(1);
  const [problem, setProblem] = useState<{
    question: string;
    answer: number;
  } | null>(null);

  const handleProblemExit = () => {
    setPreviousModalName("quizProblem");
    setModalName("alertExit");
  };
  useEffect(() => {
    const fetchProblem = async () => {
      try {
        const res = await fetch(`/api/quizs?id=${questionIndex}`);
        const data = await res.json();
        setProblem(data);
        console.log(data);
      } catch (error) {
        console.error("Failed to fetch problem", error);
      }
    };

    fetchProblem();
  }, [questionIndex]);

  const handleAnswer = (value: boolean) => {
    setAnswer(questionIndex, value);
    if (questionIndex === 1) {
      setQuestionIndex(2);
    } else {
      setModalName("quizLoading");
    }
  };
  return (
    <>
      <div className="relative first-line:flex flex-col rounded-[12px] bg-opacity-100 bg-[#a42a2a] w-[500px] h-[550px] box-border">
        {/* X button */}
        <div className="absolute right-0 top-0">
          <IoIosClose
            className="text-white text-5xl cursor-pointer hover:text-red-600 transform translate-x-[5px] -translate-y-[5px]"
            onClick={handleProblemExit}
          />
        </div>
        {/* White section */}
        <div className="flex flex-col items-center justify-center relative bg-white w-full mt-9 h-full rounded-t-none rounded-b-[12px]">
          <div className="flex flex-col items-center justify-center">
            {/* Text section */}
            {problem && (
              <div className="tracking-wider text-3xl font-bold -mt-8">
                Q{questionIndex}.
              </div>
            )}
            <div className="text-base pt-2 pl-10 pr-10">
              {problem ? (
                problem.question
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeDasharray="15"
                    strokeDashoffset="15"
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="M12 3C16.9706 3 21 7.02944 21 12"
                  >
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      dur="0.3s"
                      values="15;0"
                    />
                    <animateTransform
                      attributeName="transform"
                      dur="1.5s"
                      repeatCount="indefinite"
                      type="rotate"
                      values="0 12 12;360 12 12"
                    />
                  </path>
                </svg>
              )}
            </div>
            {/* Image section */}
            {problem && (
              <div className="relative flex items-center justify-center bg-gray-300 w-[80%] h-56 rounded-[12px] border border-black mt-4 overflow-hidden">
                <img
                  src="/tmp.jpg"
                  className="absolute inset-0 w-full h-full object-cover rounded-[12px] object-top"
                  alt="Problem illustration"
                />
              </div>
            )}
            {/* 4 progressBar */}
            <div className="pt-8 flex justify-center items-center gap-x-4">
              <div
                id="progressbar-start"
                className="w-4 h-4 bg-gray-200 rounded-full"
              ></div>
              <div
                id="progressbar-quiz1"
                className="animate-bounce w-4 h-4 bg-red-500 rounded-full"
              ></div>
              <div
                id="progressbar-quiz2"
                className="w-4 h-4 bg-gray-200 rounded-full"
              ></div>
              <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
            </div>
          </div>
          <div className="flex justify-center mt-8 gap-x-4 w-full">
            {/* 로딩 중이면 버튼 클릭 안되도록? */}
            <button
              onClick={() => handleAnswer(true)}
              className="text-3xl font-bold bg-white text-black border border-gray-400 rounded-[12px] w-[40%] h-14 hover:bg-[#a42a2a] hover:text-white hover:border-transparent transition duration-300 ease-in-out"
            >
              O
            </button>
            <button
              onClick={() => handleAnswer(false)}
              className="text-3xl font-bold bg-white text-black border border-gray-400 rounded-[12px] w-[40%] h-14 hover:bg-[#a42a2a] hover:text-white hover:border-transparent transition duration-300 ease-in-out"
            >
              X
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
