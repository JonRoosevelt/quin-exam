import { Grid, Loading } from "@nextui-org/react";
import { FC } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { useLaunchContext } from "../../context/Launch";
import { LaunchingPoint } from "../LaunchingPoint";

export const Main: FC = () => {
  const { query } = useLaunchContext();

  return (
    <div className="App-main">
      <Grid.Container gap={2} justify="center">
        {query?.isLoading ? (
          <Loading />
        ) : (
          <MapContainer center={[40, 1]} zoom={2} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {query?.data?.map((result) => (
              <LaunchingPoint
                key={result.id}
                latitude={result?.pad?.latitude}
                longitude={result?.pad?.longitude}
                time={result?.net}
                padName={result?.pad?.name}
                agencyName={result?.launch_service_provider.name}
                mapImage={result?.pad.location?.map_image}
              />
            ))}
          </MapContainer>
        )}
      </Grid.Container>
    </div>
  );
};
