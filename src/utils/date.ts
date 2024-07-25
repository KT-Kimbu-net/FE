type TTimeLeftInfo = {
  hours: number;
  minutes: number;
  seconds: number;
};

export const getCurrentDay = () => {
  const now = new Date();
  const year = String(now.getFullYear());
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const currentDay = year.concat(month.concat(day));
  return currentDay;
};

export const formatDate = (inputDate: string): string => {
  const month = inputDate.substring(4, 6);
  const day = inputDate.substring(6, 8);
  return `${month}.${day}`;
};

export const formatMessageDate = () => {
  const time = new Date();
  const hour = String(time.getHours()).padStart(2, "0");
  const minute = String(time.getMinutes()).padStart(2, "0");
  const resultTime = `${Number(hour) < 12 ? "오전" : "오후"} ${
    Number(hour) < 24 && Number(hour) > 12 ? Number(hour) - 12 : hour
  }:${minute}`;

  return resultTime;
};

export const calculateTimeLeft = (
  time: string | undefined
): TTimeLeftInfo | undefined => {
  if (!time) return undefined;

  const now = new Date();
  const tomorrow = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1,
    Number(time.slice(0, 2)),
    Number(time.slice(3, 5)) - 10,
    0
  );

  const difference = tomorrow.getTime() - now.getTime();
  if (difference > 0) {
    return {
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  } else {
    return undefined;
  }
};
