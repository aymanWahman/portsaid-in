'use client';

import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

interface MapPageProps {
  selectedRegion?: [number, number]; // نوع يمثل إحداثيات جغرافية كـ [latitude, longitude]
}

const MapPage: React.FC<MapPageProps> = ({ selectedRegion }) => {
  useEffect(() => {
    if (selectedRegion) {
      // منطق يركز على المنطقة المحددة على الخريطة
      console.log('Selected region updated:', selectedRegion);
    }
  }, [selectedRegion]);

  return (
    <MapContainer
      center={selectedRegion || [31.265, 32.3018]}
      zoom={13}
      className="h-full w-full"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      {selectedRegion && <Marker position={selectedRegion} />}
    </MapContainer>
  );
};

export default MapPage;
