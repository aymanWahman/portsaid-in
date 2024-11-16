'use client';

import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

const MapPage = ({ selectedRegion }) => {
  useEffect(() => {
    if (selectedRegion) {
      // Logic to focus on selected region on the map
    }
  }, [selectedRegion]);

  return (
    <MapContainer center={[31.265, 32.3018]} zoom={13} className="h-full w-full">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      {selectedRegion && <Marker position={[31.265, 32.3018]}/>}
      
    </MapContainer>
  );
};

export default MapPage;
