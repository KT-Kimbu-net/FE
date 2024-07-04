import Image from "next/image";
import bgImage from "@/img/BgImage.svg";
import WeekSchedule from "@/components/WeekSchedule/WeekSchedule";
import LeagueRanking from "@/components/LeagueRanking/LeagueRanking";
import Notice from "@/components/Notice/Notice";
import GameInfo from "@/components/GameInfo/GameInfo";
import Shortcuts from "@/components/Shortcuts/Shortcuts";

export default function Page() {
  return (
    <>
      <section>
        {/* <Image src={bgImage} alt={"bg"} className="w-full h-full" /> */}
        <section className="p-10 w-full flex flex-col gap-12 bg-[url('/img/BgImage.svg')]">
          <section className="flex gap-14">
            <GameInfo />
            <section className="bg-white w-1/4">채팅</section>
          </section>
          <section className="flex gap-14">
            <Shortcuts />
            <section className="bg-white w-1/4">승부예측</section>
          </section>
        </section>
      </section>
      <WeekSchedule />
      <LeagueRanking />
      <Notice />
      <section className="w-full p-10 bg-blue-900">스폰서</section>
    </>
  );
}
