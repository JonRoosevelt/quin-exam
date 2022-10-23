import { Grid, Input } from "@nextui-org/react";
import { useLaunchContext } from "../../context/Launch";

export const DatePicker = () => {
  const { initialDate, finalDate, setInitialDate, setFinalDate } =
    useLaunchContext();
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
          defaultValue={initialDate.toDateString()}
          onChange={(e) => setInitialDate(new Date(e.target.value))}
        />
      </Grid>
      <Grid>
        <Input
          label="Final Date"
          type={"date"}
          bordered
          status="secondary"
          defaultValue={finalDate.toDateString()}
          onChange={(e) => setFinalDate(new Date(e.target.value))}
        />
      </Grid>
    </Grid.Container>
  );
};
