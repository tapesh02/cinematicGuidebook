export const convertDate = (datetime) => {
  const parseDate = Date.parse(datetime);
  return new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(parseDate);
};
