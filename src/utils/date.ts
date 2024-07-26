import { toZonedTime, format } from "date-fns-tz";
import { addDays, differenceInMilliseconds, set } from "date-fns";

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

  const timeZone = "Asia/Seoul";
  const now = toZonedTime(new Date(), timeZone);
  const [hours, minutes] = time.split(":").map(Number);

  let tomorrow = toZonedTime(
    set(now, { hours, minutes: minutes - 10, seconds: 0 }),
    timeZone
  );

  if (differenceInMilliseconds(tomorrow, now) < 0) {
    tomorrow = addDays(tomorrow, 1);
  }

  const difference = differenceInMilliseconds(tomorrow, now);

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
