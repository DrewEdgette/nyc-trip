import { useEffect, useState } from "react";
import { MapContainer, TileLayer, useMap } from 'react-leaflet'

function MapFlyTo({ location, zoom = 17 }) {
  const map = useMap();

  useEffect(() => {
    if (location) {
      map.flyTo(location, zoom, {
        duration: 2,  // seconds
        easeLinearity: 0.25,
      });
    }
  }, [location, zoom, map]);

  return null;
}

export default MapFlyTo;