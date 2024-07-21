import Match from "./Match/Match";
import Lineup from "./Lineup/Lineup";
import PHMatchPredict from "./PHMatchPredict/PHMatchPredict";

export default async function GameInfo() {
  return (
    <section className="bg-white w-3/4 px-8 py-8 flex flex-col md:flex-row justify-between rounded-xl">
      <Match />
      <Lineup />
      <PHMatchPredict />
    </section>
  );
}
