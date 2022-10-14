import React, { PropsWithChildren, useEffect } from "react";
import { launchesApi } from "../../api/launchesApi";
import { Result } from "../../types/Launch";
interface AppContextType {
  results: Result[];
  setResults?: (results: Result[]) => void;
}

interface AppContextProps extends PropsWithChildren {}

const defaultState = {
  results: [],
};

export const AppContext = React.createContext<AppContextType>(defaultState);

export const useAppContext = () => React.useContext(AppContext);

export const AppContextProvider: React.FC<AppContextProps> = ({ children }) => {
  const [data, setData] = React.useState<Result[]>([]);

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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
