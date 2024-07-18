import Match from "./Match/Match";
import Lineup from "./Lineup";
import PHMatchPredict from "./PHMatchPredict/PHMatchPredict";

export default function GameInfo() {
  return (
    <section className="bg-white w-3/4 px-8 py-8 flex flex-col md:flex-row justify-between rounded-xl h-full">
      <Match />
      <Lineup />
      <PHMatchPredict />
    </section>
  );
}
