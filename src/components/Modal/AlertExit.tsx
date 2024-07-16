"use client";
import { useModalState } from "@/store/modal";
import { SvgAlertExitAlert } from "@/utils/img/Svg";
import ModalLayout from "./Common/ModalLayout";
export default function AlertExit() {
  const { previousModalType, setModalName } = useModalState();
  return (
    <>
      <ModalLayout className="bg-gray-300 w-[430px] h-[230px] border border-black">
        <div className="flex flex-col items-center justify-center relative w-full h-full rounded-[12px]">
          <div className="-mt-4 flex flex-col items-center justify-center">
            <SvgAlertExitAlert />
            <div className="text-lg font-extrabold">
              중도 퇴장시 퀴즈에 다시 참여할 수 없습니다.
            </div>
            <div className="text-base">
              계속해서 나가시려면 그만하기를 눌러주세요.
            </div>
          </div>
          <div className="flex justify-center mt-4 gap-x-4 w-full">
            <button
              onClick={() => setModalName(previousModalType)}
              className="text-xl font-bold bg-white text-black border border-gray-400 rounded-[12px] w-[40%] h-10 hover:bg-[#a42a2a] hover:text-white hover:border-transparent transition duration-300 ease-in-out"
            >
              돌아가기
            </button>
            <button
              onClick={() => setModalName(null)}
              className="text-xl font-bold bg-black text-white border border-gray-400 rounded-[12px] w-[40%] h-10 hover:bg-[#a42a2a] hover:text-white hover:border-transparent transition duration-300 ease-in-out"
            >
              그만하기
            </button>
          </div>
        </div>
      </ModalLayout>
    </>
  );
}
