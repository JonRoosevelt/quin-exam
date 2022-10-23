import React, { useEffect } from "react";
import { launchesApi } from "../../api/launchesApi";
import { threeMonthsInTheFuture } from "../../consts";
import { Result } from "../../types/Launch";

interface UseFetchApi {
  results: Result[];
  setResults: (results: Result[]) => void;
  selectedInitialDate: Date;
  setSelectedInitialDate: React.Dispatch<React.SetStateAction<Date>>;
  selectedFinalDate: Date;
  setSelectedFinalDate: React.Dispatch<React.SetStateAction<Date>>;
}

const today = new Date();

export const defaultApiState = {
  results: [],
  selectedInitialDate: new Date(),
  setSelectedInitialDate: (_date: Date) => {},
  selectedFinalDate: threeMonthsInTheFuture,
  setSelectedFinalDate: (_date: Date) => {},
};

export const useFetchApi = (): UseFetchApi => {
  const [data, setData] = React.useState<Result[]>([]);
  const [selectedInitialDate, setSelectedInitialDate] =
    React.useState<Date>(today);
  const [selectedFinalDate, setSelectedFinalDate] = React.useState<Date>(
    threeMonthsInTheFuture
  );

  useEffect(() => {
    const fetchData = async () => {
      const results = await launchesApi({
        selectedInitialDate,
        selectedFinalDate,
      });
      setData(results);
    };
    fetchData();
  }, [selectedInitialDate, selectedFinalDate]);

  const setResults = (results: Result[]) => setData(results);

  return {
    results: data,
    setResults,
    selectedInitialDate,
    setSelectedInitialDate,
    selectedFinalDate,
    setSelectedFinalDate,
  };
};
