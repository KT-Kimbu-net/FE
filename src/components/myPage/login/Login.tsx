"use client";
import Image from "next/image";
import ktWizMiniLogo from "/public/img/ktWizMiniLogo.svg";
import { useState } from "react";

export default function Login() {
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

  return (
    <>
      <section className="w-[500px] h-[400px]  flex flex-col items-center justify-center border-[#E3E3E3] border-[1px]  gap-3 py-2 mt-10">
        <Image src={ktWizMiniLogo} alt="miniKtWiz" width={85} height={85} />
        <form className="w-auto h-auto flex flex-col gap-3 ">
          <input
            type="text"
            placeholder="아이디"
            value={id}
            onChange={handleId}
            className="border-[#E3E3E3] border-[1px] w-[300px] h-[40px] px-3"
          />
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={handlePassword}
            className="border-[#E3E3E3] border-[1px] w-[300px] h-[40px] px-3"
          />
          <label
            className="flex gap-3 items-center text-[12px]  w-[300px]"
            id="idSave"
          >
            <input
              type="checkbox"
              className="w-[20px] h-[20px] border-[#9A9A9A]"
              id="idSave"
            />
            <p>아이디 저장</p>
          </label>
          <button
            className={`w-[300px] h-[40px] ${loginBtnStyle}  rounded-[5px]`}
          >
            로그인
          </button>
        </form>
        <div>
          <button>아이디 찾기 </button>
          {"  /  "}
          <button> 비밀번호 찾기</button>
        </div>
        <button className="">회원가입</button>
      </section>
    </>
  );
}
