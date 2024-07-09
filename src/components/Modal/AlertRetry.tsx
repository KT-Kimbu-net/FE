"use client";
import { useModalState } from "@/store/modal";
import Image from "next/image";
import { IoIosClose } from "react-icons/io";
export default function AlertRetry() {
  const { setModalName } = useModalState();
  return (
    <>
      <div className="relative flex-col rounded-[12px] bg-opacity-100 bg-white w-[430px] h-[250px] box-border">
        {/* White section */}
        <div className="flex flex-col items-center justify-center relative bg-white w-full h-full rounded-[12px]">
          <div className="absolute right-0 top-0">
            {/* X button */}
            <IoIosClose
              className="text-black text-5xl cursor-pointer hover:text-red-600 transform translate-x-[5px] -translate-y-[5px]"
              onClick={() => setModalName(null)}
            />
          </div>
          <div className="-mt-6 flex flex-col items-center justify-center">
            <Image
              src="/alertretry.svg"
              alt="alertlogin"
              width={150}
              height={150}
            />
            {/* Text section */}
            <div className="text-xl font-extrabold">
              이미 참여한 사용자입니다!
            </div>
            <div className="text-base pt-3">
              오늘의 퀴즈는{" "}
              <span className="font-bold text-red-500">하루 1회</span> 이용
              가능합니다.
            </div>
            <div className="text-base">
              내일의 퀴즈는 00:00부터 참여 가능합니다.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
