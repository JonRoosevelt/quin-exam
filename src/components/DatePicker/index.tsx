import { Grid, Input, Row } from "@nextui-org/react";
import { useAppContext } from "../../context/App";

export const DatePicker = () => {
  const today = new Date();
  const { selectedInitialDate, setSelectedIntialDate } = useAppContext();
  const { selectedFinalDate, setSelectedFinalDate } = useAppContext();

  return (
    <Grid.Container css={{ marginBottom: 20 }} justify="space-around">
      <Grid>
        <Input
          bordered
          labelPlaceholder="Initial Date"
          color="primary"
          defaultValue={selectedInitialDate.toDateString()}
        ></Input>
      </Grid>
      <Grid>
        <Input
          bordered
          labelPlaceholder="Secondary Date"
          color="primary"
          defaultValue={selectedFinalDate.toDateString()}
        ></Input>
      </Grid>
    </Grid.Container>
  );
};
