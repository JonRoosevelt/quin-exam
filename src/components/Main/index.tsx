import { Card, Grid, Text } from "@nextui-org/react";
import React, { FC, useContext } from "react";
import { AppContext, useAppContext } from "../../context/App";

export const Main: FC = (props) => {
  const { results } = useAppContext();

  return (
    <div className="App-main">
      <Grid.Container gap={2} justify="center">
        {results.map((result) => (
          <Grid xs={4} key={result.id}>
            <Card css={{ h: "$24", $$cardColor: "$color$primary" }}>
              <Card.Body>
                <Text h6 size={15} color="secondary" css={{ mt: 0 }}>
                  {result.name}
                </Text>
              </Card.Body>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
    </div>
  );
};
