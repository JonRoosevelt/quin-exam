import { createTheme, NextUIProvider } from "@nextui-org/react";
import { MainPage } from "./pages/MainPage";

export const darkTheme = createTheme({
  type: "dark",
});
export const lightTheme = createTheme({
  type: "light",
});

function App() {
  return (
    <NextUIProvider theme={darkTheme}>
      <MainPage />
    </NextUIProvider>
  );
}

export default App;
