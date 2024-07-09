"use client";
import { useModalState } from "@/store/modal";
export default function AlertExit() {
  const { previousModalName, setModalName } = useModalState();
  return (
    <>
      <div className="relative flex-col rounded-[12px] bg-opacity-100 bg-gray-300 w-[430px] h-[230px] box-border border border-black">
        {/* White section */}
        <div className="flex flex-col items-center justify-center relative w-full h-full rounded-[12px]">
          <div className="-mt-4 flex flex-col items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M13 14h-2V9h2m0 9h-2v-2h2M1 21h22L12 2z"
              />
            </svg>
            {/* Text section */}
            <div className="text-lg font-extrabold">
              중도 퇴장시 퀴즈에 다시 참여할 수 없습니다.
            </div>
            <div className="text-base">
              계속해서 나가시려면 그만하기를 눌러주세요.
            </div>
          </div>
          <div className="flex justify-center mt-4 gap-x-4 w-full">
            <button
              onClick={() => setModalName(previousModalName || null)}
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
      </div>
    </>
  );
}
