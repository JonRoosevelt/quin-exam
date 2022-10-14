import { createTheme, NextUIProvider } from "@nextui-org/react";
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
        <Header text="Learn react" />
        <Main />
      </NextUIProvider>
    </AppContextProvider>
  );
}

export default App;
