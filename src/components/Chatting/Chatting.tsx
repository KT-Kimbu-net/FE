import { FaUserEdit } from "react-icons/fa";
import { FcAddImage, FcVideoCall } from "react-icons/fc";
import { FaArrowRightLong } from "react-icons/fa6";
import Message from "./Message";

export default function Chatting() {
  const iconStyle = "w-6 h-6";
  return (
    <section className="bg-white w-1/3 flex flex-col rounded-2xl">
      <section className="flex justify-between h-[10%]  py-5 px-8">
        <section className="flex items-center justify-between w-full">
          <strong className="font-[Pretendard-ExtraBold] text-[2rem]">
            KT WIZ응원톡
          </strong>
          <span className="font-[Pretendard-Medium] text-gray-500">817명</span>
        </section>
      </section>
      <ul className="h-4/5 text-white flex flex-col gap-2 overflow-y-auto  py-5 px-8">
        <Message
          content={
            "말하는감자입니다!말하는감자입니다!말하는감자입니다!말하는감자입니다!말하는감자입니다!말하는감자입니다!말하는감자입니다!말하는감자입니다!말하는감자입니다!말하는감자입니다!말하는감자입니다!"
          }
        />
        <Message content={"안녕하세요! 저도 감자에요!"} />
        <Message content={"같은 감자시군요!"} />
        <Message content={"같은 감자시군요!"} />
        <Message content={"같은 감자시군요!"} />
      </ul>
      <section className="h-[15%] rounded-b-xl py-2.5 px-5 bg-[#eeeeee] flex flex-col justify-between">
        <section className="flex gap-2 items-center justify-between">
          <section className="flex">
            <span className="text-gray-700 font-[Pretendard-Medium] mr-4">
              홈런타자 강백호
            </span>
            <FaUserEdit className={iconStyle} />
          </section>
          <section className="flex gap-2">
            <FcAddImage className={iconStyle} />
            <FcVideoCall className={iconStyle} />
          </section>
        </section>
        <section className="flex justify-between items-center w-full gap-2">
          <textarea className="w-full resize-none outline-none bg-[#eeeeee]" />
          <FaArrowRightLong className={iconStyle} />
        </section>
      </section>
    </section>
  );
}
