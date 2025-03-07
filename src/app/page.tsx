import WeekSchedule from "@/components/MainPage/WeekSchedule/WeekSchedule";
import LeagueRanking from "@/components/MainPage/LeagueRanking/LeagueRanking";
import Notice from "@/components/MainPage/Notice/Notice";
import GameInfo from "@/components/MainPage/GameInfo/GameInfo";
import Shortcuts from "@/components/MainPage/Shortcuts/Shortcuts";
import MatchBet from "@/components/MainPage/MatchBet/MatchBet";
import Sponsor from "@/components/MainPage/Sponsor/Sponsor";
import "react-tooltip/dist/react-tooltip.css";
import { getWeekSchedule } from "@/libs/action/GetTeamSchedule";
import { getLeagueRanking } from "@/libs/action/GetLeagueRanking";
import GameInfoTest from "@/components/MainPage/GameInfo/GameInfoTest";

export default async function Page() {
  const weekSchedule = await getWeekSchedule();
  const leagueRanking = await getLeagueRanking();

  return (
    <section className="flex flex-col items-center justify-center w-full h-full">
      <section className="sm:p-10 w-full h-full flex flex-col gap-6 sm:gap-12 bg-[url('/img/BgImage.png')] bg-cover items-center">
        <GameInfo teamsData={leagueRanking?.data} weekSchedule={weekSchedule} />
        {/* <GameInfoTest /> */}
        <section className="flex flex-col xl:flex-row gap-8 md:gap-14 w-full 3xl:w-3/4">
          <MatchBet weekSchedule={weekSchedule} />
          <Shortcuts />
        </section>
      </section>
      <WeekSchedule currentWeekSchedule={weekSchedule} />
      <LeagueRanking leagueRanking={leagueRanking?.data} />
      <Notice />
      <Sponsor />
    </section>
  );
}
