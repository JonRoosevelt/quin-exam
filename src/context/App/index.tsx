import React, { PropsWithChildren, useEffect } from "react";
import { launchesApi } from "../../api/launchesApi";
import { Result } from "../../types/Launch";

interface AppContextType {
  results: Result[];
  setResults?: (results: Result[]) => void;
  selectedInitialDate: Date;
  setSelectedIntialDate: (date: Date) => void;
  selectedFinalDate: Date;
  setSelectedFinalDate: (date: Date) => void;
}

interface AppContextProps extends PropsWithChildren {}

const THREE_MONTHS_IN_THE_FUTURE = 2;
const today = new Date();
const threeMonthsInTheFuture = new Date(
  new Date().setMonth(new Date().getMonth() + THREE_MONTHS_IN_THE_FUTURE)
);
const defaultState = {
  results: [],
  selectedInitialDate: today,
  setSelectedIntialDate: (date: Date) => {},
  selectedFinalDate: today,
  setSelectedFinalDate: (date: Date) => {},
};

export const AppContext = React.createContext<AppContextType>(defaultState);

export const useAppContext = () => React.useContext(AppContext);

export const AppContextProvider: React.FC<AppContextProps> = ({ children }) => {
  const [data, setData] = React.useState<Result[]>([]);
  const [selectedInitialDate, setSelectedIntialDate] =
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
  return (
    <AppContext.Provider
      value={{
        results: data,
        setResults,
        selectedInitialDate,
        setSelectedIntialDate,
        selectedFinalDate,
        setSelectedFinalDate,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
