"use client";
import { chatSocket } from "@/socket/ChatSocket";
import { useState } from "react";

export default function ChangeScore() {
  const [isKtwiz, setIsKtwiz] = useState<boolean>(true);
  const [inning, setInning] = useState<number>(0);
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
    console.log("submit");
    chatSocket.emit("changeScore", {
      isKtwiz: isKtwiz,
      inning: inning,
      score: score,
    });
    setInning(0);
    setScore(0);
    setIsKtwiz(true);
  };
  return (
    <>
      <label id="isKtwiz" className="flex ">
        teamName : <p>{isKtwiz ? "Ktiwz" : "Nc"}</p>
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
        <select value={inning} onChange={inningHandler}>
          {[...Array(13)].map((_, i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>
      </label>
      <label>
        score :
        <select value={score} onChange={scoreHandler}>
          {[...Array(13)].map((_, i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>
      </label>
      <p>Selected Team: {isKtwiz ? "Ktwiz" : "NC"}</p>
      <p>Selected Inning: {inning}</p>
      <p>Selected Score: {score}</p>
      <button onClick={submitHandler}>점수 변경</button>
    </>
  );
}
