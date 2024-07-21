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

  const deleteDataApiHandler = async () => {
    try {
      const result = await fetch(
        `${process.env.NEXT_PUBLIC_CHAT_BASEURL}/deleteLiveInfo`,
        {
          method: "delete",
        }
      );
      if (result.ok) {
        console.log("firestore data delete success!!!!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col gap-3 border-gray-700 border-[2px] p-5 w-[30%] items-center justify-center mt-3">
      <h1 className="text-xl"> 투수 변경</h1>
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
        pitcher :
        <select
          value={pitcher}
          onChange={pitcherHandler}
          className="cursor-pointer text-right w-28"
        >
          {pitcherList[isKtwiz ? 1 : 0].map((player, i) => (
            <option key={i} value={player}>
              {isKtwiz ? "kt " : "nc "}
              {player}
            </option>
          ))}
        </select>
      </label>
      <div className="flex gap-4 bg-green-200">
        <p>Team: {isKtwiz ? "Ktwiz" : "NC"}</p>
        <p>Pitcher: {pitcher}</p>
      </div>
      <button
        onClick={submitHandler}
        className="bg-red-400 text-white p-3 rounded-[10px]"
      >
        선수 변경하기
      </button>
      <button
        onClick={deleteDataApiHandler}
        className="w-100 h-100 bg-black text-white rounded-xl px-3 py-1"
      >
        데이터 초기화
      </button>
    </div>
  );
}
