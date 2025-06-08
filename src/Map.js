import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import MapFlyTo from "./MapFlyTo";

// Fix for missing marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

function Map({ current }) {
  const zoom = 14;

  return (
    <MapContainer
      center={[40.75, -73.98]}
      zoom={zoom}
      attributionControl={false}
      zoomControl={false}
      scrollWheelZoom={true}
      style={{ height: '100%', width: '50%' }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={current.location}>
        <Popup>
          {current.title}
        </Popup>
      </Marker>
      <MapFlyTo location={current.location} />
    </MapContainer>
  );
}

export default Map;
