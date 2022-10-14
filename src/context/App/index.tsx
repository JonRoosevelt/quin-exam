import React, { PropsWithChildren, useEffect } from "react";
import { launchesApi } from "../../api/launchesApi";
import { Result } from "../../types/Launch";
interface AppContextType {
  results: Result[];
  setResults?: (results: Result[]) => void;
  selectedInitialDate: Date;
  setSelectedIntialDate?: (date: Date) => void;
  selectedFinalDate: Date;
  setSelectedFinalDate?: (date: Date) => void;
}

interface AppContextProps extends PropsWithChildren {}

const today = new Date();

const defaultState = {
  results: [],
  selectedInitialDate: today,
  selectedFinalDate: today,
};

export const AppContext = React.createContext<AppContextType>(defaultState);

export const useAppContext = () => React.useContext(AppContext);

export const AppContextProvider: React.FC<AppContextProps> = ({ children }) => {
  const [data, setData] = React.useState<Result[]>([]);
  const [selectedInitialDate, setSelectedIntialDate] =
    React.useState<Date>(today);
  const [selectedFinalDate, setSelectedFinalDate] = React.useState<Date>(today);

  useEffect(() => {
    const fetchData = async () => {
      const results = await launchesApi();
      setData(results);
    };
    fetchData();
  }, []);

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
