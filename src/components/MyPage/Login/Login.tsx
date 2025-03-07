"use client";

import Image from "next/image";
import ktWizMiniLogo from "/public/img/ktWizMiniLogo.svg";
import { useEffect, useState } from "react";
import Link from "next/link";
import { loginAction } from "@/libs/action/LoginAction";
import { useUserState } from "@/store/user";
import { useRouter } from "next/navigation";
import { chatSocket } from "@/socket/ChatSocket";
import InputBox from "@/libs/atomic/InputBox";
import { setCookie } from "cookies-next";

export default function Login() {
  const router = useRouter();
  const { userData, setUserData } = useUserState();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  let loginBtnStyle =
    id && password ? "bg-[#EC0A0B] text-white" : "bg-[#CCCCCC] text-[#808080]";

  const handleId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  useEffect(()=>{
    if (userData) {
      router.push("/mypage/editprofile");
    }
  },[])

  return (
    <>
      <section className="h-[25rem] w-[35rem]  flex flex-col items-center justify-center border-[#E3E3E3] border-[1px]  gap-3 py-2 mt-10">
        <Image src={ktWizMiniLogo} alt="miniKtWiz" width={85} height={85} />
        <form className="w-auto h-auto flex flex-col gap-3 ">
          <InputBox
            type="text"
            placeholder="아이디"
            name="id"
            value={id}
            onChange={handleId}
            className="border-[#E3E3E3] border-[1px] w-[300px] h-[40px] px-3"
          />
          <InputBox
            type="password"
            placeholder="비밀번호"
            name="password"
            value={password}
            onChange={handlePassword}
            className="border-[#E3E3E3] border-[1px] w-[300px] h-[40px] px-3"
          />
          <button
            className={`w-[300px] h-[40px] ${loginBtnStyle}  rounded-[5px]`}
            formAction={async (formData) => {
              const result = await loginAction(formData);
              if (result.status === 200) {
                chatSocket.connect();
                setCookie("token", result.data.token);
                localStorage.setItem("cleanChat", "0");
                const newUserData = {
                  userId: result.data.userId,
                  nickname: result.data.nickname,
                  credit: {
                    creditAmount: result.data.creditAmount,
                    creditHistory: userData?.credit?.creditHistory || {
                      usedHistory: [],
                      deleteHistory: [],
                      getHistory: [],
                    },
                  },
                  quiz: result.data.quiz,
                  gamePredict: result.data.gamePredict,
                  password: userData?.password || "",
                  userUuid: userData?.userUuid || "",
                };
                setUserData(newUserData);
                router.push("/");
              } else {
                alert(`로그인 실패. ${result.status} 에러가 발생했습니다.`);
                setId("");
                setPassword("");
              }
            }}
          >
            로그인
          </button>
        </form>
        <div>
          <button>아이디 찾기 </button>
          {"  /  "}
          <button> 비밀번호 찾기</button>
        </div>
        <Link href={"/login/signup"} className="">
          회원가입
        </Link>
      </section>
    </>
  );
}
