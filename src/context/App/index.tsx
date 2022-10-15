import React from "react";
import { defaultApiState, useFetchApi } from "../../hooks/useFetchApi";
import { AppContextProps, AppContextType } from "./types";

const defaultState = {
  ...defaultApiState,
};

export const AppContext = React.createContext<AppContextType>(defaultState);

export const useAppContext = () => React.useContext(AppContext);

export const AppContextProvider: React.FC<AppContextProps> = ({ children }) => {
  const {
    results,
    setResults,
    selectedInitialDate,
    setSelectedInitialDate,
    selectedFinalDate,
    setSelectedFinalDate,
  } = useFetchApi();
  return (
    <AppContext.Provider
      value={{
        results,
        setResults,
        selectedInitialDate,
        setSelectedInitialDate,
        selectedFinalDate,
        setSelectedFinalDate,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
