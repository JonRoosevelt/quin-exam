import { PropsWithChildren } from "react";
import { Result } from "../../types/Launch";

export interface AppContextType {
  results: Result[];
  setResults?: (results: Result[]) => void;
  selectedInitialDate: Date;
  setSelectedInitialDate: (date: Date) => void;
  selectedFinalDate: Date;
  setSelectedFinalDate: (date: Date) => void;
}

export interface AppContextProps extends PropsWithChildren {}
