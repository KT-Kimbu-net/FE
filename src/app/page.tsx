"use client";
import Header from "@/components/header/Header";
import Test from "@/components/Test";
import Image from "next/image";
import { useModalState } from "@/store/modal";

export default function page() {
  const { setModalName } = useModalState();
  return (
    <>
      <main>
        {/* 퀴즈 플로팅 버튼 임시 */}
        <div className="z-40 fixed top-40 right-10">
          <button
            onClick={() => {
              setModalName("quizStart");
            }}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-lg text-3xl"
          >
            Quiz
          </button>
        </div>
        <div className="relative w-full h-800">
          <img
            src="/2024_season_bg_web.png"
            className="object-cover object-center w-full h-full"
            alt=""
          />
        </div>
      </main>
    </>
  );
}
