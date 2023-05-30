export const formatDay = (date: Date) =>
  new Intl.DateTimeFormat("en-US", {
    weekday: "long",
  }).format(date);
