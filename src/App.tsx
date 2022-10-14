import { createTheme, NextUIProvider } from "@nextui-org/react";
import { DatePicker } from "./components/DatePicker";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { AppContextProvider } from "./context/App";

export const darkTheme = createTheme({
  type: "dark",
});
export const lightTheme = createTheme({
  type: "light",
});

function App() {
  return (
    <AppContextProvider>
      <NextUIProvider theme={darkTheme}>
        <Header text="Launch Map 🚀" />
        <DatePicker />
        <Main />
      </NextUIProvider>
    </AppContextProvider>
  );
}

export default App;
