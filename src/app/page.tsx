import WeekSchedule from "@/components/WeekSchedule/WeekSchedule";
import LeagueRanking from "@/components/LeagueRanking/LeagueRanking";
import Notice from "@/components/Notice/Notice";
import GameInfo from "@/components/GameInfo/GameInfo";
import Shortcuts from "@/components/Shortcuts/Shortcuts";
import MatchBet from "@/components/MatchBet/MatchBet";
import Sponsor from "@/components/Sponsor/Sponsor";

export default function Page() {
  return (
    <>
      <section>
        <section className="p-10 w-full flex flex-col gap-12 bg-[url('/img/BgImage.svg')]">
          <section className="flex gap-14">
            <GameInfo />
            <section className="bg-white w-1/4">채팅</section>
          </section>
          <section className="flex gap-14">
            <Shortcuts />
            <MatchBet />
          </section>
        </section>
      </section>
      <WeekSchedule />
      <LeagueRanking />
      <Notice />
      <Sponsor />
    </>
  );
}
