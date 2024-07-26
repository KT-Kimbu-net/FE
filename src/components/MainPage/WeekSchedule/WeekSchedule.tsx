import React from "react";
import { TDaySchedule } from "@/types/weekSchdule";
import DaySchedule from "./DaySchedule";
import { getCurrentDay } from "@/utils/date";

export type TWeekSchedule = {
  currentWeekSchedule: TDaySchedule[] | undefined;
};

export default function WeekSchedule({ currentWeekSchedule }: TWeekSchedule) {
  const currentDay = getCurrentDay();

  return (
    <section className="w-full py-10 sm:p-10 bg-black flex flex-col items-center">
      <section className="w-full 3xl:w-3/4 flex flex-col items-center">
        <h2 className="text-white px-4 sm:px-0 text-base sm:text-2xl font-[Leferi] self-start mb-8">
          Weekend Schedule
        </h2>
        <div className="w-full h-full flex flex-col gap-2 sm:flex-row items-center">
          <div className="flex w-full sm:w-[42.5%] justify-evenly gap-1">
            {currentWeekSchedule?.slice(0, 3).map((daySchedule, index) => (
              <div key={`day-${index}`} className="w-1/3 gap-1 sm:gap-0">
                <DaySchedule {...daySchedule} />
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center w-1/3 sm:w-[15%]">
            {currentWeekSchedule && currentWeekSchedule.length > 3 && (
              <DaySchedule key="day-3" {...currentWeekSchedule[3]} />
            )}
          </div>
          <div className="flex w-full sm:w-[42.5%] justify-evenly gap-1">
            {currentWeekSchedule?.slice(4, 7).map((daySchedule, index) => (
              <div key={`day-${index + 4}`} className="w-1/3">
                <DaySchedule {...daySchedule} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
