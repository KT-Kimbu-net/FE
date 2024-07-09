import Match from "./Match/Match";
import Lineup from "./Lineup";
import PHMatchPredict from "./PHMatchPredict";

export default function GameInfo() {
  return (
    <section className="bg-white w-2/3 px-8 py-8 flex justify-between rounded-xl">
      <Match />
      <Lineup />
      <PHMatchPredict />
    </section>
  );
}
