type ProgressbarProps = {
  stage: "quizStart" | "quizProblem" | "quizLoading" | "quizResult";
  questionIndex?: number; // questionIndex는 quizProblem일 때만 필수로 받음
};

export default function Progressbar({
  stage,
  questionIndex,
}: ProgressbarProps) {
  return (
    <>
      <div className="pt-8 flex justify-center items-center gap-x-4">
        <div
          id="progressbar-start"
          className={`w-4 h-4 rounded-full ${
            stage === "quizStart" ? "animate-bounce bg-red-500" : "bg-gray-200"
          }`}
        ></div>
        <div
          id="progressbar-quiz1"
          className={`w-4 h-4 rounded-full ${
            stage === "quizProblem" && questionIndex === 1
              ? "animate-bounce bg-red-500"
              : "bg-gray-200"
          }`}
        ></div>
        <div
          id="progressbar-quiz2"
          className={`w-4 h-4 rounded-full ${
            (stage === "quizProblem" && questionIndex === 2) ||
            stage === "quizLoading"
              ? "animate-bounce bg-red-500"
              : "bg-gray-200"
          }`}
        ></div>
        <div
          id="progressbar-result"
          className={`w-4 h-4 rounded-full ${
            stage === "quizResult" ? "animate-bounce bg-red-500" : "bg-gray-200"
          }`}
        ></div>
      </div>
    </>
  );
}
