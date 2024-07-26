import { TDaySchedule } from "@/types/weekSchdule";
import DaySchedule from "./DaySchedule";
import { getCurrentDay } from "@/utils/date";

export type TWeekSchedule = {
  currentWeekSchedule: TDaySchedule[] | undefined;
};

export default function WeekSchedule(props: TWeekSchedule) {
  const currentDay = getCurrentDay();

  return (
    <section className="w-full p-10 bg-black flex flex-col items-center">
      <section className="w-3/4 flexjustify-between items-center">
        <section className="text-white text-2xl font-[Leferi]">
          Weekend Schedule
        </section>
        <ul className="w-full flex [&>:first-child]:rounded-tl-xl [&>:first-child]:rounded-bl-xl [&>:last-child]:rounded-br-xl [&>:last-child]:rounded-tr-xl mt-8 gap-0.5">
          {props.currentWeekSchedule &&
            props.currentWeekSchedule.map(
              (daySchedule: TDaySchedule, index) => (
                <DaySchedule
                  currentDay={currentDay}
                  key={index}
                  displayDate={daySchedule.displayDate}
                  gameDate={daySchedule.gameDate}
                  gmkey={daySchedule.gmkey}
                  gtime={daySchedule.gtime}
                  home={daySchedule.home}
                  homeKey={daySchedule.homeKey}
                  homeScore={daySchedule.homeScore}
                  matchTeamCode={daySchedule.matchTeamCode}
                  matchTeamName={daySchedule.matchTeamName}
                  outcome={daySchedule.outcome}
                  stadium={daySchedule.stadium}
                  stadiumKey={daySchedule.stadiumKey}
                  status={daySchedule.status}
                  visit={daySchedule.visit}
                  visitKey={daySchedule.visitKey}
                  visitScore={daySchedule.visitScore}
                />
              )
            )}
        </ul>
      </section>
    </section>
  );
}
