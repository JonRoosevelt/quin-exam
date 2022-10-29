import { Button, Grid, Input } from "@nextui-org/react";
import React from "react";
import { useLaunchContext } from "../../context/Launch";

export const DatePicker = () => {
  const { initialDate, finalDate, setInitialDate, setFinalDate, isLoading } =
    useLaunchContext();
  const initialDateRef = React.useRef<HTMLInputElement>(null);
  const finalDateRef = React.useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (initialDateRef.current && finalDateRef.current) {
      setInitialDate(new Date(initialDateRef.current.value));
      setFinalDate(new Date(finalDateRef.current.value));
    }
  };

  return (
    <Grid.Container
      css={{ marginTop: 20, marginBottom: 20 }}
      alignItems="flex-end"
      justify="space-around"
    >
      <Grid>
        <Input
          ref={initialDateRef}
          label="Initial Date"
          type="date"
          bordered
          status="secondary"
          defaultValue={initialDate.toDateString()}
        />
      </Grid>
      <Grid>
        <Input
          ref={finalDateRef}
          label="Final Date"
          type={"date"}
          bordered
          status="secondary"
          defaultValue={finalDate.toDateString()}
        />
      </Grid>
      <Button disabled={!!isLoading} color="secondary" onClick={handleClick}>
        Search
      </Button>
    </Grid.Container>
  );
};
