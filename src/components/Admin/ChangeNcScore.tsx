"use client";
import { gameSocket } from "@/socket/GameSocket";
import { useState } from "react";

export default function ChangeNcScore() {
  const [score, setScore] = useState<number>(0);

  const changeScore = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 0 && value <= 99) {
      setScore(value);
    }
  };

  const submitHandler = () => {
    if (gameSocket.disconnected) {
      gameSocket.connect();
    }
    console.log("submit", true, score);
    gameSocket.emit(
      "changeScore",
      {
        isKtwiz: false,
        score: score,
      },
      (error: string | null) => {
        if (error) {
          console.error("Emit failed:", error);
        } else {
          console.log("Emit successful");
        }
      }
    );
    setScore(0);
  };

  return (
    <div className="flex flex-col gap-3 border-gray-700 border-[2px] p-5 w-[30%] items-center justify-center">
      <h1 className="text-xl"> NC 점수 변경</h1>
      <div className="flex items-center justify-center gap-3 cursor-pointer">
        teamName :{" "}
        <p className=" border-black border-[1px] p-1 rounded-[5px]">NC</p>
      </div>
      <label>
        score :
        <input
          type="number"
          value={score}
          onChange={changeScore}
          min="0"
          max="99"
        />
      </label>
      <div className="flex gap-4 bg-green-200">
        <p>Team: NC</p>
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
