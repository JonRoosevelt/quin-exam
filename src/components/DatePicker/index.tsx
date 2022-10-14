import { Grid, Input } from "@nextui-org/react";
import { useAppContext } from "../../context/App";

export const DatePicker = () => {
  const { selectedInitialDate, setSelectedIntialDate } = useAppContext();
  const { selectedFinalDate, setSelectedFinalDate } = useAppContext();

  return (
    <Grid.Container
      css={{ marginTop: 20, marginBottom: 20 }}
      justify="space-around"
    >
      <Grid>
        <Input
          label="Initial Date"
          type="date"
          bordered
          status="secondary"
          defaultValue={selectedInitialDate.toDateString()}
          onChange={(e) => setSelectedIntialDate(new Date(e.target.value))}
        />
      </Grid>
      <Grid>
        <Input
          label="Final Date"
          type={"date"}
          bordered
          status="secondary"
          defaultValue={selectedFinalDate.toDateString()}
          onChange={(e) => setSelectedFinalDate(new Date(e.target.value))}
        />
      </Grid>
    </Grid.Container>
  );
};
