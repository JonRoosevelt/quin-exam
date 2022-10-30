import React, { FC, useEffect } from "react";
import { launchesApi } from "../../api/launchesApi";
import { DatePicker } from "../../components/DatePicker";
import { Header } from "../../components/Header";
import { Main } from "../../components/Main";
import { threeMonthsInTheFuture } from "../../consts";
import { Result } from "../../types/Launch";

const TODAY = new Date();

export const MainPage: FC = () => {
  const [initialDate, setInitialDate] = React.useState<Date>(TODAY);
  const [finalDate, setFinalDate] = React.useState<Date>(
    threeMonthsInTheFuture
  );
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<boolean>(false);
  const [results, setResults] = React.useState<Result[]>([]);
  useEffect(() => {
    setIsLoading(true);
    launchesApi({ initialDate, finalDate }).then((data) => {
      if (data) {
        const filteredResults = data.filter(
          (result: Result) => result?.pad?.latitude && result?.pad?.longitude
        );
        setResults(filteredResults);
      } else {
        setError(true);
      }
      setIsLoading(false);
    });
  }, [initialDate, finalDate]);

  return (
    <>
      <Header text="Launch Map 🚀" />
      <DatePicker
        initialDate={initialDate}
        finalDate={finalDate}
        setInitialDate={setInitialDate}
        setFinalDate={setFinalDate}
        isLoading={isLoading}
      />
      <Main results={results} isLoading={isLoading} error={error} />
    </>
  );
};
