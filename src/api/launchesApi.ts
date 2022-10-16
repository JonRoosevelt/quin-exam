import { Result } from "../types/Launch";

interface LaunchesApiProps {
  selectedInitialDate: Date;
  selectedFinalDate: Date;
}

const urls = {
  external: "https://ll.thespacedevs.com/2.2.0/launch/upcoming/?format=json",
  local: "http://localhost:3000/api",
};

export const dateBetweenTodayAndXMonths = (
  result: Result,
  initialDate: Date,
  finalDate: Date
) => {
  finalDate.setHours(23, 59, 59, 999);
  const today = new Date();
  const netDate = new Date(result.net);
  const isBetweenDates = netDate >= today && netDate <= finalDate;
  return isBetweenDates;
};

export const keeFetchingWhileItHasNextPage = (results: Result[]) => {
  const lastResult = results[results.length - 1];
  return lastResult?.hasOwnProperty("next");
};

export const launchesApi = async ({
  selectedInitialDate,
  selectedFinalDate,
}: LaunchesApiProps) => {
  const URL = process.env?.EXTERNAL_URL ? urls.local : urls.external;
  let results = [];
  try {
    results = await fetch(URL)
      .then((response) => response.json())
      .then((jsonResponse) => {
        return jsonResponse.results.filter((result: Result) =>
          dateBetweenTodayAndXMonths(
            result,
            selectedInitialDate,
            selectedFinalDate
          )
        );
      });
  } catch (error) {
    console.log(error);
  }
  return results;
};
