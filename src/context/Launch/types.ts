import { PropsWithChildren } from "react";
import { UseQueryResult } from "react-query";
import { Result } from "../../types/Launch";

export interface LaunchContextType {
  initialDate: Date;
  finalDate: Date;
  setInitialDate: (date: Date) => void;
  setFinalDate: (date: Date) => void;
  isError: boolean;
  isLoading: boolean;
  query: UseQueryResult<Result[]> | null;
}

export interface LaunchContextProps extends PropsWithChildren {
  initialDate: Date;
  finalDate: Date;
}
