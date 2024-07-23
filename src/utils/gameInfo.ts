import { StaticImageData } from "next/image";
import Kt from "@/img/TeamLogo/kt.png";
import Kia from "@/img/TeamLogo/kia.png";
import Lg from "@/img/TeamLogo/lg.png";
import Samsung from "@/img/TeamLogo/samsung.png";
import Doosan from "@/img/TeamLogo/doosan.png";
import Ssg from "@/img/TeamLogo/ssg.png";
import Nc from "@/img/TeamLogo/nc.png";
import Hanwha from "@/img/TeamLogo/hanwha.png";
import Lotte from "@/img/TeamLogo/lotte.png";
import Kiwoom from "@/img/TeamLogo/kiwoom.png";
import { TDaySchedule } from "@/types/weekSchdule";
import { TLeagueRankingInfo } from "@/types/teams";

export const getTeamLogo = (teamName: string): StaticImageData | string => {
  switch (teamName) {
    case "키움":
    case "고척":
      return Kiwoom;
    case "한화":
    case "대전":
      return Hanwha;
    case "KT":
    case "수원":
      return Kt;
    case "KIA":
    case "광주":
      return Kia;
    case "LG":
    case "잠실":
      return Lg;
    case "삼성":
    case "대구":
      return Samsung;
    case "두산":
    case "서울":
      return Doosan;
    case "SSG":
    case "문학":
      return Ssg;
    case "NC":
    case "창원":
      return Nc;
    case "롯데":
    case "사직":
      return Lotte;
    default:
      return "NotScheduled";
  }
};

export const getTeamFullName = (teamName: string): string => {
  switch (teamName) {
    case "키움":
      return "Kiwoom Heroes";
    case "한화":
      return "Hanwha Eagles";
    case "KT":
      return "KT Wiz";
    case "KIA":
      return "Kia Tigers";
    case "LG":
      return "Lg Twins";
    case "삼성":
      return "Samsung Lions";
    case "두산":
      return "Doosan Bears";
    case "SSG":
      return "Ssg Randers";
    case "NC":
      return "Nc Dinos";
    case "롯데":
      return "Lotte Giants";
    default:
      return "NotScheduled";
  }
};

export const getGameStadium = (location: string): string => {
  switch (location) {
    case "수원":
      return "수원 KT Wiz 파크";
    case "대전":
      return "대전 한화생명 이글스 파크";
    case "대구":
      return "대구 삼성 라이온즈 파크";
    case "고척":
      return "고척 스카이돔";
    case "잠실":
      return "잠실 야구장";
    case "창원":
      return "창원 NC 파크";
    case "문학":
      return "인천 SSG랜더스필드";
    case "사직":
      return "부산 사직 야구장";
    case "광주":
      return "광주 KIA 챔피언스 필드";
    default:
      return "NotScheduled";
  }
};

//경기정보를 보여주기 위한 정보들을 파싱하여 리턴하는 함수
export const getGameData = (
  weekSchedule: TDaySchedule[] | undefined,
  teamsData: TLeagueRankingInfo[],
  currentDate: string
) => {
  const vsTeam = weekSchedule?.find(
    (daySchedule) => daySchedule.displayDate === currentDate
  );
  const isHome = vsTeam?.stadium === "수원";
  const gameLocation = vsTeam && getGameStadium(vsTeam?.stadium);
  const vsTeamInfo = teamsData.find((team) => {
    if (isHome) return vsTeam.visit === team.팀;
    else return vsTeam?.home === team.팀;
  });
  const ktTeamInfo = teamsData.find((team) => team.팀 === "KT");

  return { ktTeamInfo, vsTeamInfo, gameLocation, vsTeam };
};
