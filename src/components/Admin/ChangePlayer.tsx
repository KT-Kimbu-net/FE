"use client";

import { chatSocket } from "@/socket/ChatSocket";
import { useState } from "react";
const pitcherList: string[][] = [
  ["배재환", "이재학", "송명기"], //nc
  ["우규민", "쿠에바스", "김민"], //kt
];

export default function ChangePlayer() {
  const [pitcher, setPitcher] = useState<string>("우규민");
  const [isKtwiz, setIsKtwiz] = useState<boolean>(true);
  const teamCheckHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsKtwiz(e.target.checked);
    if (e.target.checked) {
      setPitcher("우규민");
    } else {
      setPitcher("배재환");
    }
  };

  const pitcherHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPitcher(e.target.value);
  };

  const submitHandler = () => {
    console.log("submit");
    chatSocket.emit("changePitcher", {
      isKtwiz: isKtwiz,
      pitcher: pitcher,
    });
    setIsKtwiz(true);
    setPitcher("우규민");
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
        pitcher :
        <select value={pitcher} onChange={pitcherHandler} className="w-28">
          {pitcherList[isKtwiz ? 1 : 0].map((player, i) => (
            <option key={i} value={player}>
              {player}
            </option>
          ))}
        </select>
      </label>
      <p>Selected Team: {isKtwiz ? "Ktwiz" : "NC"}</p>
      <p>Selected Pitcher: {pitcher}</p>
      <button onClick={submitHandler}>선수 변경</button>
    </>
  );
}
