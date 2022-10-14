import React, { FC } from "react";
import { Marker, Popup } from "react-leaflet";
import { LaunchingPointPopupCard } from "../LaunchingPointPopUpCard";

interface LaunchingPointProps {
  latitude: string;
  longitude: string;
  time: string;
  padName: string;
  agencyName: string;
  mapImage: string;
}

export const LaunchingPoint: FC<LaunchingPointProps> = ({
  latitude,
  longitude,
  time,
  padName,
  agencyName,
  mapImage,
}) => {
  const lat = parseFloat(latitude);
  const long = parseFloat(longitude);

  return (
    <Marker position={[lat, long]}>
      <Popup>
        <LaunchingPointPopupCard
          time={time}
          padName={padName}
          agencyName={agencyName}
          mapImage={mapImage}
        />
      </Popup>
    </Marker>
  );
};
