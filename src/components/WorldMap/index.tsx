import { LatLngExpression } from "leaflet";
import { useRef, useState, useMemo, useEffect } from "react";
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import "./WorldMap.scss";

type CustomMarkerProps = {
  location: LatLngExpression;
};

const CustomMarker: React.FC<CustomMarkerProps> = ({ location }) => {
  const map = useMap();
  if (location) map.flyTo(location, 12);

  return location ? <Marker position={location}></Marker> : null;
};

const WorldMap = () => {
  const { lat, lon } = useSelector((state: RootState) => state.geo);

  return (
    <MapContainer
      id="map"
      center={[lat as number, lon as number]}
      zoom={10}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <CustomMarker location={[lat as number, lon as number]} />
    </MapContainer>
  );
};

export default WorldMap;
