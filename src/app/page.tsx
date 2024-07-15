import WeekSchedule from "@/components/WeekSchedule/WeekSchedule";
import LeagueRanking from "@/components/LeagueRanking/LeagueRanking";
import Notice from "@/components/Notice/Notice";
import GameInfo from "@/components/GameInfo/GameInfo";
import Shortcuts from "@/components/Shortcuts/Shortcuts";
import MatchBet from "@/components/MatchBet/MatchBet";
import Sponsor from "@/components/Sponsor/Sponsor";
import Chatting from "@/components/Chatting/Chatting";
import Floating from "@/components/Floating/Floating";
import ChatSocketConnectHandler from "@/components/Socket/ChatSocketConnectHandler";

const getNewsApiHandler = async () => {
  const url = `${process.env.NEXT_PUBLIC_BASEURL}/today_rank`;
  return await (await fetch(url, { cache: "no-store" })).json();
};

export default async function Page() {
  const data = await getNewsApiHandler();

  return (
    <section className="flex flex-col items-center">
      <ChatSocketConnectHandler />
      <section>
        <section className="p-10 w-full flex flex-col gap-12 bg-[url('/img/BgImage.svg')] bg-cover items-center ">
          <GameInfo />
          <section className="flex gap-14 w-3/4">
            <MatchBet />
            <Shortcuts />
          </section>
        </section>
      </section>
      <WeekSchedule />
      <LeagueRanking leagueRanking={data} />
      <Notice />
      <Sponsor />
      <Floating />
      <Chatting />
    </section>
  );
}
