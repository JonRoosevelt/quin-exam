import { Result } from "../types/Launch";
const URL = "https://ll.thespacedevs.com/2.2.0/launch/upcoming?sort=net";

export const dateBetweenTodayAndXMonths = (net: string, months: number) => {
  const netDate = new Date(net);
  const today = new Date();
  return (
    netDate >= today &&
    netDate < new Date(today.setMonth(today.getMonth() + months))
  );
};

export const keeFetchingWhileItHasNextPage = (results: Result[]) => {
  const lastResult = results[results.length - 1];
  return lastResult?.hasOwnProperty("next");
};

export const launchesApi = async () => {
  const MONTHS_IN_THE_FUTURE = 3;
  let results = [];
  try {
    results = await fetch(URL)
      .then((response) => response.json())
      .then((jsonResponse) => {
        return jsonResponse.results.filter((result: Result) =>
          dateBetweenTodayAndXMonths(result.net, MONTHS_IN_THE_FUTURE)
        );
      });
  } catch (error) {
    console.log(error);
  }
  return results;
};
