import React, { useEffect } from "react";
import { launchesApi } from "../api/launchesApi";
import { threeMonthsInTheFuture } from "../consts";
import { Result } from "../types/Launch";

const today = new Date();

export const defaultApiState = {
  results: [],
  selectedInitialDate: today,
  setSelectedInitialDate: (_date: Date) => {},
  selectedFinalDate: today,
  setSelectedFinalDate: (_date: Date) => {},
};

export const useFetchApi = () => {
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
