import { useRef, useState, useMemo, useEffect } from "react";
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import { useSelector } from "react-redux";
import gif from "../../assets/loading.gif";
import "./WorldMap.scss";


// @ts-ignore
function CustomMarker({ location }) {
  const map = useMap();
  if (location) map.flyTo(location, 12);

  return location ? (
    <Marker
      position={location}
    >
    </Marker>
  ) : null;
}


// @ts-ignore
const WorldMap = () => {
  // @ts-ignore
  const { lat, lon } = useSelector((state) => state.geo);

  return (
    <>
      {lat ? (
        <MapContainer
          id="map"
          center={[lat, lon]}
          zoom={10}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <CustomMarker location={[lat, lon]} />
        </MapContainer>
      ) : (
        <div className="map-loading"><img src={gif} alt="" /></div>
      )}
    </>
  );
};

export default WorldMap;
