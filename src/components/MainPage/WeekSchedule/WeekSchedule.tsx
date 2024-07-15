import { weekScheduleDummyData } from "@/data/weekSchedule/weekSchedule";
import { TDaySchedule } from "@/types/weekSchdule";
import DaySchedule from "./DaySchedule";

export default function WeekSchedule() {
  return (
    <section className="w-full p-10 bg-black flex flex-col items-center">
      <section className="w-3/4 flexjustify-between items-center">
        <section className="text-white text-2xl font-[Leferi]">
          Weekend Schedule
        </section>
        <ul className="w-full flex [&>:first-child]:rounded-tl-xl [&>:first-child]:rounded-bl-xl  [&>:last-child]:rounded-br-xl [&>:last-child]:rounded-tr-xl mt-8">
          {weekScheduleDummyData &&
            weekScheduleDummyData.map((daySchedule: TDaySchedule, index) => (
              <DaySchedule
                date={daySchedule.date}
                location={daySchedule.location}
                teamLogo={daySchedule.teamLogo}
                result={daySchedule.result}
                key={index}
              />
            ))}
        </ul>
      </section>
    </section>
  );
}
