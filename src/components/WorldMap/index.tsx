import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap, useMapEvent, useMapEvents } from "react-leaflet";
import { useSelector } from "react-redux";
import gif from "../../assets/loading.gif";
import "./WorldMap.scss";


// @ts-ignore
function Test({ location }) {
  const map = useMap();
  if (location) map.flyTo(location, 12);

  return location ? (
    <Marker
      draggable
      position={location}
    >
    </Marker>
  ) : null;
}


// @ts-ignore
const WorldMap = () => {
  // @ts-ignore
  const { lat, lng } = useSelector((state) => state.geo);

  // const map = useMap();

  // useEffect(() => {
  //   map.flyTo({ lat, lng })
  // }, [lat])

  return (
    <>
      {lat ? (
        <MapContainer
          id="map"
          center={[lat, lng]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Test location={[lat, lng]} />
        </MapContainer>
      ) : (
        <div className="map-loading"><img src={gif} alt="" /></div>
      )}
    </>
  );
};

export default WorldMap;
