const THREE_MONTHS_IN_THE_FUTURE = 2;
export const threeMonthsInTheFuture = new Date(
  new Date().setMonth(new Date().getMonth() + THREE_MONTHS_IN_THE_FUTURE)
);
