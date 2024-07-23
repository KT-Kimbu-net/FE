import MatchScoreTest from "./MatchScoreTest";
import DetailScore from "../DetailScore";
import MatchAnalogyTest from "../MatchAnalogyTest";
import { TLiveInfo } from "@/types/liveScore";
import DetailScoreTest from "./DetailScoreTest";
// import { playerLuck } from "@/libs/action/PlayerLuck";
// import {
//   ktPlayerDummy,
//   opponentTeamPlayerDummy,
// } from "@/data/gameInfo/playerLuckDummy";

type TMatchProps = {
  data: TLiveInfo;
};

export default async function MatchTest(props: TMatchProps) {
  // const [kt, opponent] = await Promise.all([
  //   playerLuck(ktPlayerDummy),
  //   playerLuck(opponentTeamPlayerDummy),
  // ]);

  return (
    <section className="flex flex-col w-2/5 items-center gap-6">
      <MatchScoreTest
        ktScore={props.data.kt.score}
        opponentScore={props.data.opponent.score}
      />
      <DetailScoreTest
      // ktScore={props.data.kt.score}
      // opponentScore={props.data.opponent.score}
      />
      <MatchAnalogyTest />
    </section>
  );
}
