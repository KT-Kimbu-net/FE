import dayjs from "dayjs";
import { TDaySchedule } from "@/types/weekSchdule";

const getCurrentDay = (): string => {
  return dayjs().format("YYYYMMDD");
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
    `${process.env.NEXT_PUBLIC_BASEURL}/get_schedule?yearMonth=${yearMonth}`
  );
  const data = await response.json();
  return data.data.list.filter(
    (item: TDaySchedule) => item.visit === "KT" || item.home === "KT"
  );
};

export const getWeekSchedule = async (): Promise<TDaySchedule[]> => {
  const today = dayjs();
  const currentYearMonth = today.format("YYYYMM");
  const previousYearMonth = today.subtract(1, "month").format("YYYYMM");
  const nextYearMonth = today.add(1, "month").format("YYYYMM");

  let currentMonthData = await getScheduleData(currentYearMonth);

  let previousMonthData: TDaySchedule[] = [];
  let nextMonthData: TDaySchedule[] = [];
  if (today.date() <= 3) {
    previousMonthData = await getScheduleData(previousYearMonth);
  }
  if (today.date() >= dayjs(today).daysInMonth() - 3) {
    nextMonthData = await getScheduleData(nextYearMonth);
  }

  const allData = [...previousMonthData, ...currentMonthData, ...nextMonthData];
  const sortedData = allData.sort((a, b) => a.gameDate - b.gameDate);
  // const todayIndex = sortedData.findIndex((item) =>
  //   dayjs(item.displayDate).isSame(today, "day")
  // );

  const weekSchedule: TDaySchedule[] = [];

  for (let i = -3; i <= 3; i++) {
    const date = today.add(i, "day").format("YYYYMMDD");
    const schedule = sortedData.find((item) =>
      dayjs(item.displayDate).isSame(date, "day")
    );

    if (schedule) {
      weekSchedule.push(schedule);
    } else {
      weekSchedule.push(getEmptyMondayData(date));
    }
  }

  return weekSchedule;
};
