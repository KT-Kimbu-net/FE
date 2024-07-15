import WeekSchedule from "@/components/MainPage/WeekSchedule/WeekSchedule";
import LeagueRanking from "@/components/MainPage/LeagueRanking/LeagueRanking";
import Notice from "@/components/MainPage/Notice/Notice";
import GameInfo from "@/components/MainPage/GameInfo/GameInfo";
import Shortcuts from "@/components/MainPage/Shortcuts/Shortcuts";
import MatchBet from "@/components/MainPage/MatchBet/MatchBet";
import Sponsor from "@/components/MainPage/Sponsor/Sponsor";
import ChatSocketConnectHandler from "@/components/Socket/ChatSocketConnectHandler";

const getLeagueRankApiHandler = async () => {
  const url = `${process.env.NEXT_PUBLIC_BASEURL}/today_rank`;
  return await (await fetch(url, { cache: "no-store" })).json();
};

export default async function Page() {
  const data = await getLeagueRankApiHandler();

  return (
    <section className="flex flex-col items-center h-full">
      <ChatSocketConnectHandler />
      <section className="p-10 w-full h-full flex flex-col gap-12 bg-[url('/img/BgImage.svg')] bg-cover items-center">
        <GameInfo />
        <section className="flex gap-14 w-3/4">
          <MatchBet />
          <Shortcuts />
        </section>
      </section>
      <WeekSchedule />
      <LeagueRanking leagueRanking={data} />
      <Notice />
      <Sponsor />
    </section>
  );
}
