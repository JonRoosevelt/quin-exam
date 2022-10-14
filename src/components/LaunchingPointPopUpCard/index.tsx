import { Grid, Card, Text } from "@nextui-org/react";
import { FC } from "react";

interface Props {
  time: string;
  padName: string;
  agencyName: string;
  mapImage: string;
}

export const LaunchingPointPopupCard: FC<Props> = ({
  time,
  padName,
  agencyName,
  mapImage,
}) => {
  const parsedDate = new Date(time).toISOString().substring(0, 10);
  const parsedTime = new Date(time).toISOString().substring(11, 16);

  return (
    <Grid>
      <Card isPressable>
        <Card.Body css={{ p: 0 }}>
          <Card.Image
            src={mapImage}
            objectFit="cover"
            width="100%"
            height={140}
          />
        </Card.Body>
        <Card.Footer
          css={{ display: "inline-block", justifyItems: "flex-start" }}
        >
          <Text b>{padName}</Text>
          <Text
            css={{
              color: "$accents7",
              fontWeight: "$semibold",
              fontSize: "$sm",
            }}
          >
            {`${parsedDate} - ${parsedTime}`}
          </Text>
          <Text
            css={{
              color: "$accents7",
              fontWeight: "$semibold",
              fontSize: "$sm",
            }}
          >
            {agencyName}
          </Text>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
