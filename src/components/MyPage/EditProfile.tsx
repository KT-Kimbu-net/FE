"use client";

import { useUserState } from "@/store/user";
import { useEffect, useState } from "react";

export default function EditProfile() {
  const { userData } = useUserState();
  const getHisoryHandler = async () => {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_BASEURL}/user/my_data`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${document.cookie.split("token=")[1]}`,
        },
      }
    );
  };
  useEffect(() => {

      getHisoryHandler();

  }, []);
  return (
    <>
      <section className="flex items-center justify-center">
        <div>
          <p className="h-[50px]  font-[600] text-center flex justify-center flex-col">
            아이디 : {userData?.userId}
          </p>
          <p className="h-[50px]  font-[600] text-center flex justify-center flex-col">
            닉네임 : {userData?.nickname}
          </p>
          <p className="h-[50px]  font-[600] text-center flex justify-center flex-col">
            {userData?.gamePredict &&
              `오늘의 예측 : ${
                userData.gamePredict.choose === ""
                  ? "예측 전"
                  : userData.gamePredict.choose
              }`}
          </p>
          <p className="h-[50px]  font-[600] text-center flex justify-center flex-col">
            오늘의 퀴즈 : {userData?.quiz.isSolved ? "참여완료" : "미참여"}
          </p>
        </div>
      </section>
    </>
  );
}
