import Match from "./Match/Match";
import Lineup from "./Lineup/Lineup";
import PHMatchPredict from "./PHMatchPredict/PHMatchPredict";
import { getLiveInfo } from "@/libs/action/GetLiveInfo";
import { TDaySchedule } from "@/types/weekSchdule";
import { getCurrentDay } from "@/utils/date";
import { TLeagueRankingInfo } from "@/types/teams";
import { getGameStadium } from "@/utils/gameInfo";
import { getGameData } from "@/utils/gameInfo";

type TGameInfoProps = {
  teamsData: TLeagueRankingInfo[];
  weekSchedule: TDaySchedule[] | undefined;
};

export default async function GameInfo(props: TGameInfoProps) {
  const liveInfo = await getLiveInfo();
  const currentDay = getCurrentDay();

  const { ktTeamInfo, vsTeamInfo, vsTeam, gameLocation } = getGameData(
    props.weekSchedule,
    props.teamsData,
    currentDay
  );

  return (
    <section className="bg-white w-full 3xl:w-3/4 px-2 md:px-4 lg:px-6 xl:px-8 py-8 flex flex-col gap-10 xl:flex-row sm:justify-between border-t-gray-500 border-t-[1px] sm:border-none sm:rounded-xl">
      <Match
        data={liveInfo!.data}
        vsTeamData={vsTeamInfo}
        ktTeamData={ktTeamInfo}
        location={gameLocation}
        gtime={vsTeam?.gtime}
      />
      <Lineup
        ktPitcher={liveInfo?.data.kt.pitcher}
        opponentPitcher={liveInfo?.data.opponent.pitcher}
      />
      <PHMatchPredict data={liveInfo!.data} />
    </section>
  );
}
