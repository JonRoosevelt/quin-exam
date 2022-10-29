import { Result } from "../types/Launch";

interface LaunchesApiProps {
  initialDate: Date;
  finalDate: Date;
}

const urls = {
  external: (initialDate: string, finalDate: string) =>
    `https://lldev.thespacedevs.com/2.2.0/launch/?net__gte=${initialDate}&net__lte=${finalDate}`,
  local: "http://localhost:3001/api",
};

const fetchLaunches = async (url: string) => {
  const response = await fetch(url);
  const { results, next } = await response.json();
  return { results, next };
};

export const launchesApi = async ({
  initialDate,
  finalDate,
}: LaunchesApiProps) => {
  finalDate.setHours(23, 59, 59, 999);
  let URL = urls.external(initialDate.toISOString(), finalDate.toISOString());
  let data: Result[] = [];
  let keepFetching = true;
  while (keepFetching) {
    try {
      const { results, next } = await fetchLaunches(URL);
      data = [...data, ...results];
      if (next) {
        URL = next;
      } else {
        keepFetching = !!next;
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  return data;
};
