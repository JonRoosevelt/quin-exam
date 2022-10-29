import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { launchesApi } from "../../api/launchesApi";
import { threeMonthsInTheFuture } from "../../consts";
import { LaunchContextProps, LaunchContextType } from "./types";

const today = new Date();

export const defaultState = {
  initialDate: today,
  finalDate: threeMonthsInTheFuture,
  setInitialDate: (_date: Date) => {},
  setFinalDate: (_date: Date) => {},
  isError: false,
  isLoading: false,
  query: null,
};

export const LaunchContext =
  React.createContext<LaunchContextType>(defaultState);

export const useLaunchContext = () => React.useContext(LaunchContext);

export const LaunchContextProvider: React.FC<LaunchContextProps> = ({
  children,
}) => {
  const [initialDate, setInitialDate] = React.useState<Date>(
    defaultState.initialDate
  );
  const [finalDate, setFinalDate] = React.useState<Date>(
    defaultState.finalDate
  );
  const [isLoading, setIsLoading] = React.useState<boolean>(
    defaultState.isLoading
  );
  const [isError, setIsError] = React.useState<boolean>(defaultState.isError);
  const query = useQuery("launches", () =>
    launchesApi({ initialDate, finalDate })
  );

  useEffect(() => {
    query.refetch();
  }, [initialDate, finalDate]);

  useEffect(() => {
    if (query.isLoading || query.isFetching) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [query.isLoading]);

  useEffect(() => {
    if (query.isError) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  }, [query.isError]);

  return (
    <LaunchContext.Provider
      value={{
        initialDate,
        finalDate,
        setInitialDate,
        setFinalDate,
        query,
        isLoading,
        isError,
      }}
    >
      {children}
    </LaunchContext.Provider>
  );
};
