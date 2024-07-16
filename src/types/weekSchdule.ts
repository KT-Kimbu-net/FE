import { StaticImageData } from "next/image";

export type TDayScheduleState = "END" | "ING" | "SCHEDULED" | "NOT_SCHEDULED";

export type gameResult = {
  myScore: string;
  opponentScore: string;
};

export type TDayScheduleResult = {
  state: TDayScheduleState;
  score?: gameResult;
};

export type TDaySchedule = {
  date: string;
  location: string;
  teamLogo?: StaticImageData;
  result: TDayScheduleResult;
};
