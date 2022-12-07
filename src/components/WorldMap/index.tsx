import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "./WorldMap.scss";

// @ts-ignore
const WorldMap = ({ searchValue }) => {
  const [geo, setGeo] = useState({});

  const getAddress = async (location: String) => {
    const res = await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=at_Ldp5Zb6sg2ERVHaK7f3eDVRq5sH1z&ipAddress=${location}`
    );
    const address = await res.json();

    setGeo(address);
  };

  useEffect(() => {
    getAddress(searchValue);
  }, [searchValue]);

  return (
    <MapContainer
      id="map"
      // @ts-ignore
      center={[geo.location.lat, geo.location.lng]}
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
  );
};

export default WorldMap;
