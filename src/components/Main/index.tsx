import { Card, Grid, Text } from "@nextui-org/react";
import React, { FC, useContext } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { AppContext, useAppContext } from "../../context/App";

export const Main: FC = (props) => {
  const { results } = useAppContext();

  return (
    <div className="App-main">
      <Grid.Container gap={2} justify="center">
        <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>

        {/* {results.map((result) => (
          <Grid xs={4} key={result.id}>
            <Card css={{ h: "$24", $$cardColor: "$color$primary" }}>
              <Card.Body>
                <Text h6 size={15} color="secondary" css={{ mt: 0 }}>
                  {result.name}
                </Text>
              </Card.Body>
            </Card>
          </Grid>
        ))} */}
      </Grid.Container>
    </div>
  );
};
