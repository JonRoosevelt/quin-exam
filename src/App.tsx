import { createTheme, NextUIProvider } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { DatePicker } from "./components/DatePicker";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { threeMonthsInTheFuture } from "./consts";
import { LaunchContextProvider } from "./context/Launch";

export const darkTheme = createTheme({
  type: "dark",
});
export const lightTheme = createTheme({
  type: "light",
});
const today = new Date();
const client = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={client}>
      <LaunchContextProvider
        initialDate={today}
        finalDate={threeMonthsInTheFuture}
      >
        <NextUIProvider theme={darkTheme}>
          <Header text="Launch Map 🚀" />
          <DatePicker />
          <Main />
        </NextUIProvider>
      </LaunchContextProvider>
    </QueryClientProvider>
  );
}

export default App;
