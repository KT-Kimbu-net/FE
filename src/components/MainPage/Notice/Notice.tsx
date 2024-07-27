"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import seeMore from "@/img/seeMore.svg";
import { noticeDummyData } from "@/data/notice/notice";
import dynamic from "next/dynamic";

const DynamicNoticeList = dynamic(() => import("./NoticeList"), { ssr: false });

export default function Notice() {
  const [isSm, setIsSm] = useState(false);
  const displayedNotices = isSm ? noticeDummyData.slice(0, 4) : noticeDummyData;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");
    setIsSm(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setIsSm(e.matches);

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

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
            <DynamicNoticeList image={notice.noticeImage} key={index} />
          ))}
      </ul>
    </section>
  );
}
