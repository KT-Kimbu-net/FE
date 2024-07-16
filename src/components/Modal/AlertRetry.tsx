"use client";
import Image from "next/image";
import ModalLayout from "./Common/ModalLayout";
import CloseButton from "./Common/CloseButton";
export default function AlertRetry() {
  return (
    <>
      <ModalLayout className="bg-white w-[430px] h-[250px]">
        <CloseButton textColor="text-black" />
        <div className="flex flex-col items-center justify-center relative bg-white w-full h-full rounded-[12px]">
          <div className="-mt-6 flex flex-col items-center justify-center">
            <Image
              src="/img/alertretry.svg"
              alt="alertlogin"
              width={150}
              height={150}
            />
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
      </ModalLayout>
    </>
  );
}
