import {
  format,
  parse,
  addDays,
  subDays,
  subMonths,
  addMonths,
  isSameDay,
  getDaysInMonth,
} from "date-fns";
import { toZonedTime } from "date-fns-tz";
import { TDaySchedule } from "@/types/weekSchdule";

const timeZone = "Asia/Seoul";

const getCurrentDay = (): string => {
  const now = toZonedTime(new Date(), timeZone);
  return format(now, "yyyyMMdd");
};

const getEmptyMondayData = (date: string): TDaySchedule => ({
  currentDay: getCurrentDay(),
  broadcast: "",
  displayDate: date,
  gameDate: parseInt(date),
  gmkey: "",
  gtime: "",
  home: "",
  homeKey: "",
  homeScore: 0,
  matchTeamCode: "",
  matchTeamName: "",
  outcome: "",
  stadium: "",
  stadiumKey: "",
  status: "monday",
  visit: "",
  visitKey: "",
  visitScore: 0,
});

const getScheduleData = async (yearMonth: string): Promise<TDaySchedule[]> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASEURL}/get_schedule?yearMonth=${yearMonth}`,
    {
      next: { revalidate: 0 },
    }
  );
  const data = await response.json();
  return data.data.list.filter(
    (item: TDaySchedule) => item.visit === "KT" || item.home === "KT"
  );
};

export const getWeekSchedule = async (): Promise<TDaySchedule[]> => {
  const today = toZonedTime(new Date(), timeZone);
  const currentYearMonth = format(today, "yyyyMM");
  const previousYearMonth = format(subMonths(today, 1), "yyyyMM");
  const nextYearMonth = format(addMonths(today, 1), "yyyyMM");

  let currentMonthData = await getScheduleData(currentYearMonth);

  let previousMonthData: TDaySchedule[] = [];
  let nextMonthData: TDaySchedule[] = [];
  if (parseInt(format(today, "d")) <= 3) {
    previousMonthData = await getScheduleData(previousYearMonth);
  }
  if (parseInt(format(today, "d")) >= getDaysInMonth(today) - 3) {
    nextMonthData = await getScheduleData(nextYearMonth);
  }

  const allData = [...previousMonthData, ...currentMonthData, ...nextMonthData];
  const sortedData = allData.sort((a, b) => a.gameDate - b.gameDate);

  const weekSchedule: TDaySchedule[] = [];

  for (let i = -3; i <= 3; i++) {
    const date = format(addDays(today, i), "yyyyMMdd");
    const schedule = sortedData.find((item) =>
      isSameDay(
        toZonedTime(parse(item.displayDate, "yyyyMMdd", new Date()), timeZone),
        toZonedTime(parse(date, "yyyyMMdd", new Date()), timeZone)
      )
    );

    if (schedule) {
      weekSchedule.push(schedule);
    } else {
      weekSchedule.push(getEmptyMondayData(date));
    }
  }

  return weekSchedule;
};
