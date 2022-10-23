import { Result } from "../types/Launch";

interface LaunchesApiProps {
  initialDate: Date;
  finalDate: Date;
}

const urls = {
  external: "https://ll.thespacedevs.com/2.2.0/launch/upcoming/?format=json",
  local: "http://localhost:3001/api",
};

export const dateBetweenTodayAndXMonths = (
  result: Result,
  initialDate: Date,
  finalDate: Date
) => {
  finalDate.setHours(23, 59, 59, 999);
  const netDate = new Date(result.net);
  const isBetweenDates = netDate >= initialDate && netDate <= finalDate;
  return isBetweenDates;
};

export const keeFetchingWhileItHasNextPage = (results: Result[]) => {
  const lastResult = results[results.length - 1];
  return lastResult?.hasOwnProperty("next");
};

export const launchesApi = async ({
  initialDate,
  finalDate,
}: LaunchesApiProps) => {
  const URL = urls.local;
  let results = [];
  try {
    results = await fetch(URL)
      .then((response) => response.json())
      .then((jsonResponse) => {
        return jsonResponse.results.filter((result: Result) =>
          dateBetweenTodayAndXMonths(result, initialDate, finalDate)
        );
      });
  } catch (error) {
    throw new Error();
  }
  return results;
};
