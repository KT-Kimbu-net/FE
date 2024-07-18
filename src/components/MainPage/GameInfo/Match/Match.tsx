import MatchScore from "./MatchScore";
import DetailScore from "./DetailScore";
import MatchAnalogy from "./MatchAnalogy";
import { playerLuck } from "@/libs/action/PlayerLuck";

export default async function Match() {
  const data = await playerLuck();

  return (
    <section className="flex flex-col w-2/5 items-center gap-6">
      <MatchScore />
      <DetailScore />
      <MatchAnalogy luck={data?.data} />
    </section>
  );
}
