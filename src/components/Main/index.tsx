import { Grid, Loading, Text } from "@nextui-org/react";
import { FC } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { Result } from "../../types/Launch";
import { LaunchingPoint } from "../LaunchingPoint";

interface Props {
  results: Result[];
  isLoading: boolean;
  error: boolean;
}

export const Main: FC<Props> = ({ results, isLoading, error }) => {
  return (
    <div className="App-main">
      <Grid.Container
        gap={2}
        justify="center"
        alignItems="center"
        style={{ minHeight: "100vh" }}
      >
        {isLoading ? (
          <Loading color="secondary" size="xl" />
        ) : (
          <>
            {error ? (
              <Text h3 color="error">
                An error happened. Please try again later.
              </Text>
            ) : (
              <MapContainer center={[40, 1]} zoom={2} scrollWheelZoom={false}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {results.map((result: Result) => {
                  return (
                    <LaunchingPoint
                      key={result.id}
                      latitude={result?.pad?.latitude}
                      longitude={result?.pad?.longitude}
                      time={result?.net}
                      padName={result?.pad?.name}
                      agencyName={result?.launch_service_provider.name}
                      mapImage={result?.pad.location?.map_image}
                    />
                  );
                })}
              </MapContainer>
            )}
          </>
        )}
      </Grid.Container>
    </div>
  );
};
