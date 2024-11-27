import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface MapProps {
  coordinates: string[];
  name?: string;
  address?: string;
  image?: string;
}

const MapComponent: React.FC<MapProps> = ({ coordinates, name, address, image }) => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let map: L.Map | null = null;

    if (mapContainerRef.current) {
      map = L.map(mapContainerRef.current).setView(
        [parseFloat(coordinates[0]), parseFloat(coordinates[1])],
        13
      );

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
      }).addTo(map);

      const marker = L.marker([parseFloat(coordinates[0]), parseFloat(coordinates[1])]).addTo(map);

      const popupContent = `
        <div style="text-align: center; ">
          <h3>${name || 'مكان غير مسمى'}</h3>
          ${image ? `<img src="${image}" alt="${name}" style="width: 100px; height: auto;"/>` : ''}
          <p>${address || ''}</p>
        </div>
      `;

      marker.bindPopup(popupContent).openPopup();
    }

    return () => {
      if (map) {
        map.remove();
      }
    };
  }, [coordinates, name, address, image]);

  return <div ref={mapContainerRef} style={{ height: '600px' }} />;
};

export default MapComponent;
