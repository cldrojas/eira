export const toLocal = (date: Date | string) => {
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone
  const d = new Date(date);
  const res = format(d.getTime(), tz);
  return res;
};

const format = (timestamp: number, timeZone: string) => {
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "numeric",
    timeZone,
    hour12: false,
  };
  return new Intl.DateTimeFormat("es-ES", options).format(new Date(timestamp));
};
