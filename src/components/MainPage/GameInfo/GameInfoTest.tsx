import Lineup from "./Lineup/Lineup";
import PHMatchPredict from "./PHMatchPredict/PHMatchPredict";
import { getLiveInfo } from "@/libs/action/GetLiveInfo";
import MatchTest from "./Match/Test/MatchTest";

export default async function GameInfoTest() {
  const liveInfo = await getLiveInfo();

  return (
    <section className="bg-white w-3/4 px-8 py-8 flex justify-between rounded-xl">
      <MatchTest data={liveInfo!.data} />
      <Lineup
        ktPitcher={liveInfo?.data.kt.pitcher}
        opponentPitcher={liveInfo?.data.opponent.pitcher}
      />
      <PHMatchPredict data={liveInfo!.data} />
    </section>
  );
}
