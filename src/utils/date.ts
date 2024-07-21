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
