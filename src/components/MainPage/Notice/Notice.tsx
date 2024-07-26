import Image from "next/image";
import seeMore from "@/img/seeMore.svg";
import NoticeList from "./NoticeList";
import { noticeDummyData } from "@/data/notice/notice";

export default function Notice() {
  return (
    <section className="w-full p-10 bg-gray-800 overflow-x-hidden flex flex-col items-center">
      <section className="w-3/4 flex justify-between items-center">
        <span className="text-2xl text-white font-[Leferi]">Notice</span>
        <Image
          src={seeMore}
          alt="공지사항 더 보기"
          className="cursor-pointer"
        />
      </section>
      <ul className="w-3/4 flex gap-10 justify-between mt-8 overflow-x-hidden">
        {noticeDummyData &&
          noticeDummyData.map((notice, index) => (
            <NoticeList image={notice.noticeImage} key={index} />
          ))}
      </ul>
    </section>
  );
}
