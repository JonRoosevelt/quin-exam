import { Button, Grid, Input } from "@nextui-org/react";
import React from "react";

interface Props {
  initialDate: Date;
  finalDate: Date;
  setInitialDate: (date: Date) => void;
  setFinalDate: (date: Date) => void;
  isLoading: boolean;
}

export const DatePicker: React.FC<Props> = ({
  initialDate,
  finalDate,
  setInitialDate,
  setFinalDate,
  isLoading,
}) => {
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
      <Button disabled={isLoading} color="secondary" onClick={handleClick}>
        Search
      </Button>
    </Grid.Container>
  );
};
