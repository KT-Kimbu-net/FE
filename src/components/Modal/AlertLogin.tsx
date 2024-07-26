"use client";

import { useModalState } from "@/store/modal";
import Image from "next/image";
import Link from "next/link";
import { IoIosClose } from "react-icons/io";
import ModalLayout from "./Common/ModalLayout";
import CloseButton from "./Common/CloseButton";
export default function AlertLogin() {
  const { setModalName } = useModalState();
  return (
    <>
      <ModalLayout className="bg-white w-[320px] sm:w-[430px] h-[330px]">
        <CloseButton textColor="text-black" />
        <div className="flex flex-col items-center justify-center relative bg-white w-full h-full rounded-[12px]">
          <Image
            src="/img/alertlogin.svg"
            alt="alertlogin"
            width={80}
            height={80}
          />
          <div className="text-xl font-extrabold">
            로그인하지 않은 사용자입니다.
          </div>
          <div className="text-base pt-3">
            해당 기능을 이용하려면 <span className="font-bold">로그인</span>이
            필요합니다.
          </div>
          <div className="text-base">로그인 후 다시 클릭해주세요.</div>
          <Link href="/login" passHref>
            <button
              onClick={() => setModalName(null)}
              className="mt-3 text-lg font-bold bg-[#a42a2a] rounded-[12px] text-white w-40 h-12 hover:bg-gray-500 transition duration-300 ease-in-out"
            >
              로그인하러 가기
            </button>
          </Link>
        </div>
      </ModalLayout>
    </>
  );
}
