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
  const query = useQuery("launches", () =>
    launchesApi({ initialDate, finalDate })
  );

  useEffect(() => {
    query.refetch();
  }, [initialDate, finalDate]);
  return (
    <LaunchContext.Provider
      value={{
        initialDate,
        finalDate,
        setInitialDate,
        setFinalDate,
        query,
      }}
    >
      {children}
    </LaunchContext.Provider>
  );
};
