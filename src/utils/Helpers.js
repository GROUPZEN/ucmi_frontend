export const getMonthInWords = () => {
  const months = [
    "january",
    "febuary",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];

  const currentMonth = new Date().getMonth();

  return months[currentMonth];
};
