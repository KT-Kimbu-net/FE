"use client";
import { useModalState } from "@/store/modal";
import Image from "next/image";
import { IoIosClose } from "react-icons/io";
export default function AlertLogin() {
  const { setModalName } = useModalState();
  return (
    <>
      <div className="relative flex-col rounded-[12px] bg-opacity-100 bg-white w-[430px] h-[330px] box-border">
        {/* White section */}
        <div className="flex flex-col items-center justify-center relative bg-white w-full h-full rounded-[12px]">
          <div className="absolute right-0 top-0">
            {/* X button */}
            <IoIosClose
              className="text-black text-5xl cursor-pointer hover:text-red-600 transform translate-x-[5px] -translate-y-[5px]"
              onClick={() => setModalName(null)}
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/alertlogin.svg"
              alt="alertlogin"
              width={80}
              height={80}
            />
            {/* Text section */}
            <div className="text-xl font-extrabold">
              로그인하지 않은 사용자입니다.
            </div>
            <div className="text-base pt-3">
              오늘의 퀴즈를 이용하려면 <span className="font-bold">로그인</span>
              이 필요합니다.
            </div>
            <div className="text-base">로그인 후 다시 클릭해주세요.</div>
            <button
              onClick={() => setModalName("alertRetry")}
              className="mt-3 text-lg font-bold bg-[#a42a2a] rounded-[12px] text-white w-[50%] h-12 hover:bg-gray-500
              transition duration-300 ease-in-out"
            >
              로그인하러 가기
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
