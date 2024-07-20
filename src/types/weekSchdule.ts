import { StaticImageData } from "next/image";

export type TDaySchedule = {
  broadcast?: string;
  displayDate: string;
  gameDate: number;
  gmkey: string;
  gtime: string;
  home: string;
  homeKey: string;
  homeScore?: number;
  matchTeamCode: string;
  matchTeamName: string;
  outcome: string;
  stadium: string;
  stadiumKey: string;
  visit: string;
  visitKey: string;
  visitScore?: number;
  status?: string;
};
