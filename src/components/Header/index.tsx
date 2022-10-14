import { Navbar, Switch, SwitchEvent, Text, useTheme } from "@nextui-org/react";
import { FC } from "react";
import { IoToggle } from "react-icons/io5";
import { AppContext, useAppContext } from "../../context/App";

interface HeaderProps {
  text: string;
}

export const Header: FC<HeaderProps> = (props) => {
  return (
    <header className="App-header">
      <Navbar>
        <Text>{props.text}</Text>
        <Switch onChange={() => ({})}>Toggle Dark mode</Switch>
      </Navbar>
    </header>
  );
};
