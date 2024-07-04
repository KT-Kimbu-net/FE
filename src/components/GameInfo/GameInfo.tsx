import Match from "./Match/Match";
import Lineup from "./Lineup";

export default function GameInfo() {
  return (
    <section className="bg-white w-3/4 px-8 py-8 flex justify-between rounded-xl">
      <Match />
      <Lineup />
      <section className="flex flex-col w-2/5 items-center">
        <section>투수vs타자 예측</section>
        <section>투수vs타자 예측</section>
        <section className="flex justify-between">
          <section>현재투수기록</section>
          <section>선택타자기록</section>
        </section>
        <section>투수vs타자 원그래프 예측</section>
      </section>
    </section>
  );
}
