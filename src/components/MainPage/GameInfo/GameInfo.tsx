import Match from "./Match/Match";
import Lineup from "./Lineup/Lineup";
import PHMatchPredict from "./PHMatchPredict/PHMatchPredict";
import { getLiveInfo } from "@/libs/action/GetLiveInfo";

export default async function GameInfo() {
  const liveInfo = await getLiveInfo();

  return (
    <section className="bg-white w-3/4 px-8 py-8 flex flex-col md:flex-row justify-between rounded-xl">
      <Match data={liveInfo!.data} />
      <Lineup
        ktPitcher={liveInfo?.data.kt.pitcher}
        opponentPitcher={liveInfo?.data.opponent.pitcher}
      />
      <PHMatchPredict data={liveInfo!.data} />
    </section>
  );
}
