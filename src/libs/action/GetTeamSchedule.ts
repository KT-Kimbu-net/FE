import { TDaySchedule } from "@/types/weekSchdule";

export async function getTeamSchedule() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");

  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}${month}${day}`;
  };

  const getWeekRange = (date: Date) => {
    const day = date.getDay();
    const diffToMonday = date.getDate() - day + (day === 0 ? -6 : 1);
    const monday = new Date(date);
    monday.setDate(diffToMonday);
    const sunday = new Date(monday);
    sunday.setDate(monday.getDate() + 6);

    return [new Date(monday), new Date(sunday)];
  };

  const [currentMonday, currentSunday] = getWeekRange(new Date(now));
  const [prevMonday, prevSunday] = getWeekRange(
    new Date(currentMonday.getTime() - 7 * 24 * 60 * 60 * 1000)
  );
  const [nextMonday, nextSunday] = getWeekRange(
    new Date(currentSunday.getTime() + 1 * 24 * 60 * 60 * 1000)
  );

  const currentWeekRange = [
    formatDate(currentMonday),
    formatDate(currentSunday),
  ];
  const prevWeekRange = [formatDate(prevMonday), formatDate(prevSunday)];
  const nextWeekRange = [formatDate(nextMonday), formatDate(nextSunday)];

  function addEmptyMonday(
    games: TDaySchedule[],
    monday: string
  ): TDaySchedule[] {
    const hasMondayGame = games.some((game) => game.displayDate === monday);
    if (!hasMondayGame) {
      const emptyMondayData: TDaySchedule = {
        broadcast: "",
        displayDate: monday,
        gameDate: parseInt(monday),
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
      };
      games.unshift(emptyMondayData); // Add at the beginning of the array
    }
    return games;
  }

  try {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_BASEURL}/get_schedule?yearMonth=${year}${month}`
    );
    if (result.ok) {
      const data = await result.json();

      // KT 팀의 경기만 필터링하고 해당 주의 경기만 포함
      const ktGames = data.data.list.filter(
        (game: TDaySchedule) => game.visit === "KT" || game.home === "KT"
      );

      const prevWeekGames = addEmptyMonday(
        ktGames.filter(
          (game: TDaySchedule) =>
            game.displayDate >= prevWeekRange[0] &&
            game.displayDate <= prevWeekRange[1]
        ),
        prevWeekRange[0]
      );

      const currentWeekGames = addEmptyMonday(
        ktGames.filter(
          (game: TDaySchedule) =>
            game.displayDate >= currentWeekRange[0] &&
            game.displayDate <= currentWeekRange[1]
        ),
        currentWeekRange[0]
      );

      const nextWeekGames = addEmptyMonday(
        ktGames.filter(
          (game: TDaySchedule) =>
            game.displayDate >= nextWeekRange[0] &&
            game.displayDate <= nextWeekRange[1]
        ),
        nextWeekRange[0]
      );

      return {
        weekData: { prevWeekGames, currentWeekGames, nextWeekGames },
        status: result.status,
      };
    }
  } catch (error) {
    console.log(error);
  }
}
