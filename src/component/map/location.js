import { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  useMap,
  useMapEvents,
  Marker,
  Popup,
  Circle,
} from "react-leaflet";
import tileLayer from "../../utils/tileLayer";

const center = [35.782, 51.362];

const Location = () => {
  const map = useMap();
  const [position, setPosition] = useState(center);
  const [draggable, setDraggable] = useState(false);
  useEffect(() => {
    map.locate({
      setView: true,
    });
    map.on("locationfound", (event) => {
      setPosition(event.latlng);
    });
  }, [map]);

  return position ? (
    <>
      <Circle
        center={position}
        weight={2}
        color={"red"}
        fillColor={"red"}
        fillOpacity={0.1}
        radius={500}
      ></Circle>
      <Marker
        position={position}
        draggable={draggable}
        eventHandlers={{
          click() {
            setDraggable(true);
          },
        }}
      >
        <Popup>You are here</Popup>
      </Marker>
    </>
  ) : null;
};

const MapWrapper = () => {
  return (
    <MapContainer
      className="leaflet-custom "
      center={center}
      zoom={22}
      scrollWheelZoom={false}
    >
      <TileLayer {...tileLayer} />

      <Location />
    </MapContainer>
  );
};

export default MapWrapper;
