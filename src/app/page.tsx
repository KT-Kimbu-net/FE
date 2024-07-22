import WeekSchedule from "@/components/MainPage/WeekSchedule/WeekSchedule";
import LeagueRanking from "@/components/MainPage/LeagueRanking/LeagueRanking";
import Notice from "@/components/MainPage/Notice/Notice";
import GameInfo from "@/components/MainPage/GameInfo/GameInfo";
import Shortcuts from "@/components/MainPage/Shortcuts/Shortcuts";
import MatchBet from "@/components/MainPage/MatchBet/MatchBet";
import Sponsor from "@/components/MainPage/Sponsor/Sponsor";
import "react-tooltip/dist/react-tooltip.css";
import { getTeamSchedule } from "@/libs/action/GetTeamSchedule";
import { getLeagueRanking } from "@/libs/action/GetLeagueRanking";
import GameInfoTest from "@/components/MainPage/GameInfo/GameInfoTest";

export default async function Page() {
  const weekSchedule = await getTeamSchedule();
  const leagueRanking = await getLeagueRanking();

  return (
    <section className="flex flex-col items-center h-full">
      <section className="p-10 w-full h-full flex flex-col gap-12 bg-[url('/img/BgImage.svg')] bg-cover items-center">
        <GameInfo />
        {/* <GameInfoTest /> */}
        <section className="flex gap-14 w-3/4">
          <MatchBet />
          <Shortcuts />
        </section>
      </section>
      <WeekSchedule
        currentWeekSchedule={weekSchedule?.weekData.currentWeekGames}
      />
      <LeagueRanking leagueRanking={leagueRanking?.data} />
      <Notice />
      <Sponsor />
    </section>
  );
}
