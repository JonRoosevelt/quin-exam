import React, { FC } from "react";
import { Marker, Popup } from "react-leaflet";

interface LaunchingPointProps {
  latitude: string;
  longitude: string;
}

export const LaunchingPoint: FC<LaunchingPointProps> = (props) => {
  const { latitude, longitude } = props;
  const lat = parseFloat(latitude);
  const long = parseFloat(longitude);

  return (
    <Marker position={[lat, long]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  );
};
