"use client";

import { useState } from "react";
import CloseButton from "../Common/CloseButton";
import ModalLayout from "../Common/ModalLayout";
import { useUserState } from "@/store/user";
import { nickChangeAction } from "@/libs/action/NickChangeAction";
import { useModalState } from "@/store/modal";
import Image from "next/image";
import ddory from "@/img/ddory.svg";
import nickChange from "@/img/Chatting/nickChange.svg";
import InputBox from "@/libs/atomic/InputBox";
import CustomButton from "@/libs/atomic/CustomButton";

export default function NickChange() {
  const [error, setError] = useState<"NO_INPUT" | null>();
  const { userData, setUserNickname } = useUserState((state) => ({
    userData: state.userData,
    setUserNickname: state.setUserNickname,
  }));

  const { setModalName } = useModalState((state) => ({
    setModalName: state.setModalName,
  }));

  return (
    <ModalLayout className="bg-white w-[430px] flex flex-col">
      <CloseButton textColor="text-black" />
      <section className="flex flex-col justify-center items-center p-6 gap-5">
        <Image src={ddory} alt="nick change" width={80} height={80} />
        <section>
          <h1 className="font-[Pretendard-Bold]">닉네임 변경</h1>
          <h2 className="font-[Pretendard-Medium] text-sm text-gray-500">
            닉네임의 최대 길이는 15글자입니다
          </h2>
        </section>
        <form className="flex flex-col items-center gap-5">
          <section className="flex flex-col items-center gap-2">
            <section className="border-b-[3px] border-main">
              <strong className="font-[Pretendard-SemiBold] text-xl">
                {userData?.nickname}
              </strong>
            </section>
            <Image src={nickChange} alt="nick change icon" />
            <InputBox
              type="text"
              name="nickname"
              style="border-[3px] rounded-xl px-3 text-base text-center outline-none placeholder:font-[Pretendard-Medium] focus:placeholder-transparent"
              placeholder="변경할 닉네임을 작성해주세요."
              maxLength={15}
            />
            {error === "NO_INPUT" && (
              <p className="text-main text-sm">
                변경할 닉네임을 작성 후 제출해주세요
              </p>
            )}
          </section>
          <CustomButton
            formAction={async (formData) => {
              const result = await nickChangeAction(formData);
              if (result?.status === 200) {
                setUserNickname(result?.data.nickname);
                setModalName(null);
              } else setError("NO_INPUT");
            }}
            style="text-white bg-gray-500 text-xl font-[Pretendard-SemiBold] py-1 px-4 rounded-2xl hover:bg-main duration-300"
          >
            변경
          </CustomButton>
        </form>
      </section>
    </ModalLayout>
  );
}
