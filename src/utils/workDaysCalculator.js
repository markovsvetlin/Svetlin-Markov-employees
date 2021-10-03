export const workDaysCalc = (timestamp1, timestamp2) => {
  const difference = timestamp1 - timestamp2;
  const daysDifference = Math.floor(difference / 1000 / 60 / 60 / 24);
  return daysDifference;
};
