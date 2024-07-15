import MatchScore from "./MatchScore";
import DetailScore from "./DetailScore";
import MatchAnalogy from "./MatchAnalogy";

export default function Match() {
  return (
    <section className="flex flex-col w-2/5 items-center gap-6">
      <MatchScore />
      <DetailScore />
      <MatchAnalogy />
    </section>
  );
}
