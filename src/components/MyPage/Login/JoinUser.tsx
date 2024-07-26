"use client";

import { joinUserAction } from "@/libs/action/LoginAction";
import CustomButton from "@/libs/atomic/CustomButton";
import InputBox from "@/libs/atomic/InputBox";
import { useRouter } from "next/navigation";

export default function JoinUser() {
  const router = useRouter();
  return (
    <section className="h-[25rem] w-[35rem]  flex flex-col items-center justify-center border-[#E3E3E3] border-[1px]  gap-3 py-5 mt-10">
      <h1 className="text-[32px]">회원가입</h1>
      <form
        className="flex flex-col w-full h-full items-center justify-between"
        action={async (formData) => {
          const result = await joinUserAction(formData);
          if (!result?.success) {
            alert(result?.message);
          }
        }}
      >
        <div className="flex flex-col justify-center space-y-4 flex-grow">
          <div className="flex items-center">
            <label className="w-32 text-right mr-2">아이디 : </label>
            <InputBox
              type="text"
              name="id"
              placeholder="아이디"
              className="flex-grow"
            />
          </div>

          <div className="flex items-center">
            <label className="w-32 text-right mr-2">비밀번호 : </label>
            <InputBox
              type="password"
              name="password"
              placeholder="비밀번호"
              className="flex-grow"
            />
          </div>

          <div className="flex items-center">
            <label className="w-32 text-right mr-2">비밀번호 확인 : </label>
            <InputBox
              type="password"
              name="passwordCheck"
              placeholder="비밀번호 확인"
              className="flex-grow"
            />
          </div>
        </div>
        <CustomButton
          formAction={async (formData) => {
            const result = await joinUserAction(formData);
            if (result?.redirect) {
              router.push(result.redirect);
            } else {
              alert("아이디와 비밀번호를 확인해주세요.");
            }
          }}
          style={"bg-[#4F4F4F] text-white w-[300px] h-[40px]"}
        >
          가입하기
        </CustomButton>
      </form>
    </section>
  );
}
