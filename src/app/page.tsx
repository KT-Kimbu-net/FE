import Image from "next/image";
import bgImage from "@/img/BgImage.svg";
import WeekSchedule from "@/components/WeekSchedule/WeekSchedule";

export default function Page() {
  return (
    <>
      <section>
        <Image src={bgImage} alt={"bg"} className="w-full" />
        <section className="absolute top-16 p-10 w-full flex flex-col gap-12">
          <section className="flex gap-14">
            <section className="bg-white w-2/3">heloo</section>
            <section className="bg-white w-1/3">hello</section>
          </section>
          <section className="flex gap-14">
            <section className="bg-white w-2/3">heloo</section>
            <section className="bg-white w-1/3">hello</section>
          </section>
        </section>
      </section>
      {/* 주간일정 */}
      <WeekSchedule />
      <section className="w-full p-10 bg-blue-500">
        하이라이트 및 사진, 리그랭킹
      </section>
      <section className="w-full p-10 bg-blue-700">공지사항</section>
      <section className="w-full p-10 bg-blue-900">스폰서</section>
    </>
  );
}
