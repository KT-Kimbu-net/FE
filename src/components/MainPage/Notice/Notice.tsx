"use client";

import Image from "next/image";
import seeMore from "@/img/seeMore.svg";
import NoticeList from "./NoticeList";
import { noticeDummyData } from "@/data/notice/notice";
import { useMediaQuery } from "react-responsive";

export default function Notice() {
  const isSm = useMediaQuery({ maxWidth: 640 });
  const displayedNotices = isSm ? noticeDummyData.slice(0, 4) : noticeDummyData;

  return (
    <section className="w-full px-4 py-4 sm:p-10 bg-gray-800 overflow-x-hidden flex flex-col items-center">
      <section className="w-full 3xl:w-3/4 flex justify-between items-center">
        <span className="text-base sm:text-2xl text-white font-[Leferi]">
          Notice
        </span>
        <Image
          src={seeMore}
          alt="공지사항 더 보기"
          className="cursor-pointer w-6 h-6 sm:w-8 sm:h-8"
        />
      </section>
      <ul className="w-full 3xl:w-3/4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 justify-around mt-8 overflow-x-hidden">
        {displayedNotices &&
          displayedNotices.map((notice, index) => (
            <NoticeList image={notice.noticeImage} key={index} />
          ))}
      </ul>
    </section>
  );
}
