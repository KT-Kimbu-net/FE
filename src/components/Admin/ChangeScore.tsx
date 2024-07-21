"use client";
import { chatSocket } from "@/socket/ChatSocket";
import { useState } from "react";

export default function ChangeScore() {
  const [isKtwiz, setIsKtwiz] = useState<boolean>(true);
  const [inning, setInning] = useState<number>(1);
  const [score, setScore] = useState<number>(0);
  const teamCheckHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsKtwiz(e.target.checked);
  };

  const inningHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setInning(Number(e.target.value));
  };
  const scoreHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setScore(Number(e.target.value));
  };

  const submitHandler = () => {
    if (chatSocket.disconnected) {
      console.log("disconnected");
    }
    console.log("submit", isKtwiz, inning, score);
    chatSocket.emit(
      "changeScore",
      {
        isKtwiz: isKtwiz,
        inning: inning,
        score: score,
      },
      (error: Error) => {
        if (error) {
          console.error("Emit failed:", error);
        } else {
          console.log("Emit successful");
        }
      }
    );
    setInning(1);
    setScore(0);
    setIsKtwiz(true);
  };
  return (
    <div className="flex flex-col gap-3 border-gray-700 border-[2px] p-5 w-[30%] items-center justify-center">
      <label
        id="isKtwiz"
        className="flex items-center justify-center gap-3 cursor-pointer"
      >
        teamName :{" "}
        <p className=" border-black border-[1px] p-1 rounded-[5px]">
          {isKtwiz ? "Ktiwz" : "Nc"}
        </p>
        <input
          type="checkBox"
          className="hidden"
          checked={isKtwiz}
          id="isKtwiz"
          onChange={teamCheckHandler}
        />
      </label>
      <label>
        inning :
        <select
          value={inning}
          onChange={inningHandler}
          className="cursor-pointer text-right"
        >
          {[...Array(15)].map((_, i) => (
            <option key={i} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
      </label>
      <label>
        score :
        <select
          value={score}
          onChange={scoreHandler}
          className="cursor-pointer text-right"
        >
          {[...Array(13)].map((_, i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>
      </label>
      <div className="flex gap-4 bg-green-200">
        <p>Team: {isKtwiz ? "Ktwiz" : "NC"}</p>
        <p>Inning: {inning} 이닝</p>
        <p>Score: {score} 점</p>
      </div>
      <button
        onClick={submitHandler}
        className="bg-red-400 text-white p-3 rounded-[10px]"
      >
        점수 변경하기
      </button>
    </div>
  );
}
