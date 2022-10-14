import { Grid } from "@nextui-org/react";
import { FC } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { useAppContext } from "../../context/App";
import { LaunchingPoint } from "../LaunchingPoint";

export const Main: FC = (props) => {
  const { results } = useAppContext();

  return (
    <div className="App-main">
      <Grid.Container gap={2} justify="center">
        <MapContainer center={[40, 1]} zoom={2} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {results.map((result) => (
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
      </Grid.Container>
    </div>
  );
};
