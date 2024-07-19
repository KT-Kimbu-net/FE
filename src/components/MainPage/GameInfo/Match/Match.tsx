import MatchScore from "./MatchScore";
import DetailScore from "./DetailScore";
import MatchAnalogy from "./MatchAnalogy";
import { playerLuck } from "@/libs/action/PlayerLuck";
import {
  ktPlayerDummy,
  opponentTeamPlayerDummy,
} from "@/data/gameInfo/playerLuckDummy";

export default async function Match() {
  const [kt, opponent] = await Promise.all([
    playerLuck(ktPlayerDummy),
    playerLuck(opponentTeamPlayerDummy),
  ]);

  return (
    <section className="flex flex-col w-2/5 items-center gap-6">
      <MatchScore />
      <DetailScore />
      <MatchAnalogy kt={kt?.data} opponent={opponent?.data} />
    </section>
  );
}
