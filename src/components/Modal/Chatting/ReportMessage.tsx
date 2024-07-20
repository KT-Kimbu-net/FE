"use client";

import ModalLayout from "../Common/ModalLayout";
import CloseButton from "../Common/CloseButton";
import CustomButton from "@/libs/atomic/CustomButton";
import Image from "next/image";
import report from "@/img/Chatting/report.svg";
import { useReportMsgState } from "@/store/chatting";
import messageReportAction from "@/libs/action/MessageReportAction";
import { useModalState } from "@/store/modal";
import { useChatState } from "@/store/chatting";

export default function ReportMessage() {
  const { info } = useReportMsgState((state) => ({
    info: state.info,
  }));

  const { setModalName } = useModalState((state) => ({
    setModalName: state.setModalName,
  }));

  return (
    <ModalLayout className="bg-white w-[430px] flex flex-col">
      <CloseButton textColor="text-black" />
      <section className="flex flex-col justify-center items-center p-6 gap-5">
        <section className="flex flex-col gap-2">
          <div className="flex gap-3 items-center justify-center">
            <h1 className="font-[Pretendard-Bold] text-xl">메세지 신고</h1>
            <Image
              src={report}
              alt="report message"
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </div>
          <span className="text-2xl font-[Pretendard-SemiBold]">
            {info.nickname}
          </span>
          <span className="text-sm border-[1px] border-[#939393] rounded-xl p-3">
            {info.type === "MESSAGE" ? (
              info.message
            ) : (
              <Image
                src={info.message}
                alt="report message image"
                width={120}
                height={120}
              />
            )}
          </span>
        </section>
        <form className="flex flex-col items-center gap-5">
          <label className="text-base font-[Pretendard-ExtraBold]">
            신고 내용
          </label>
          <select name="report" id="lang" className="text-sm">
            <option value="abuse">욕설</option>
            <option value="blame">비난</option>
            <option value="advertisement">광고</option>
            <option value="lewd">음란</option>
          </select>
          <CustomButton
            style="text-white bg-gray-500 text-xl font-[Pretendard-SemiBold] py-1 px-4 rounded-2xl hover:bg-main duration-300"
            formAction={async (formData) => {
              formData.append("msgId", info.msgId);
              formData.append("userId", info.userId!);
              const result = await messageReportAction(formData);
              if (result?.status === 200) {
                info.setIsShow();
                // const updatedChatLog = chatLog.filter(
                // (message) => message.msgId !== info.msgId
                // );
                // setAllChatLog(updatedChatLog);
                setModalName(null);
              }
            }}
          >
            신고
          </CustomButton>
        </form>
      </section>
    </ModalLayout>
  );
}
