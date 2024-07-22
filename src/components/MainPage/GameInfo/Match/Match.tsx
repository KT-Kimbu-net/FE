import MatchScore from "./MatchScore";
import DetailScore from "./DetailScore";
import MatchAnalogy from "./MatchAnalogy";
import { TLiveInfo } from "@/types/liveScore";
import { TLeagueRankingInfo } from "@/types/teams";
// import { playerLuck } from "@/libs/action/PlayerLuck";
// import {
//   ktPlayerDummy,
//   opponentTeamPlayerDummy,
// } from "@/data/gameInfo/playerLuckDummy";

type TMatchProps = {
  data: TLiveInfo;
  vsTeamData?: TLeagueRankingInfo;
  ktTeamData?: TLeagueRankingInfo;
  location?: string;
  gtime?: string;
};

export default async function Match(props: TMatchProps) {
  // const [kt, opponent] = await Promise.all([
  //   playerLuck(ktPlayerDummy),
  //   playerLuck(opponentTeamPlayerDummy),
  // ]);

  return (
    <section className="flex flex-col w-2/5 items-center gap-6">
      <MatchScore
        ktScore={props.data.kt.score}
        opponentScore={props.data.opponent.score}
        ktTeamData={props.ktTeamData}
        vsTeamData={props.vsTeamData}
        location={props.location}
        gtime={props.gtime}
      />
      {!props.vsTeamData ? (
        <section className="flex h-full items-center justify-center font-[Pretendard-ExtraBold]">
          오늘의 경기가 없어요!
        </section>
      ) : (
        <>
          <DetailScore
            ktTeamData={props.ktTeamData}
            vsTeamData={props.vsTeamData}
          />
          <MatchAnalogy
            vsTeamData={props.vsTeamData}
            ktTeamData={props.ktTeamData}
          />
        </>
      )}
    </section>
  );
}
