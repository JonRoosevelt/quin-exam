import { Navbar, Text } from "@nextui-org/react";
import { FC } from "react";

interface HeaderProps {
  text: string;
}

export const Header: FC<HeaderProps> = (props) => {
  return (
    <header className="App-header">
      <Navbar>
        <Text>{props.text}</Text>
      </Navbar>
    </header>
  );
};
