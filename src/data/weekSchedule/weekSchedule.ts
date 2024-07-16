import teamLogo from "@/img/TeamLogo/Lg.svg";
import { TDaySchedule } from "@/types/weekSchdule";

export const weekScheduleDummyData: TDaySchedule[] = [
  {
    date: "6.24",
    location: "잠실",
    result: {
      state: "NOT_SCHEDULED", //"END" | "ING" | "SCHEDULED" | "NOT_SCHEDULED"
      score: {
        myScore: "2",
        opponentScore: "7",
      },
    },
  },
  {
    date: "6.25",
    location: "잠실",
    teamLogo: teamLogo,
    result: {
      state: "END",
      score: {
        myScore: "4",
        opponentScore: "3",
      },
    },
  },
  {
    date: "6.26",
    location: "잠실",
    teamLogo: teamLogo,
    result: {
      state: "END",
      score: {
        myScore: "2",
        opponentScore: "7",
      },
    },
  },
  {
    date: "6.27",
    location: "잠실",
    teamLogo: teamLogo,
    result: {
      state: "ING",
      score: {
        myScore: "",
        opponentScore: "",
      },
    },
  },
  {
    date: "6.28",
    location: "잠실",
    teamLogo: teamLogo,
    result: {
      state: "SCHEDULED",
      score: {
        myScore: "",
        opponentScore: "",
      },
    },
  },
  {
    date: "6.29",
    location: "잠실",
    teamLogo: teamLogo,
    result: {
      state: "SCHEDULED",
      score: {
        myScore: "",
        opponentScore: "",
      },
    },
  },
  {
    date: "6.30",
    location: "잠실",
    teamLogo: teamLogo,
    result: {
      state: "SCHEDULED",
      score: {
        myScore: "",
        opponentScore: "",
      },
    },
  },
];
