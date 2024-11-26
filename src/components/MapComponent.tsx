'use client';

import { useEffect, useRef } from 'react';
import L from 'leaflet';

const MapComponent = () => {
  const mapContainerRef = useRef(null);
  const mapInstance = useRef<L.Map | null>(null);

  useEffect(() => {
    // Initialize map if not already created
    if (!mapInstance.current) {
      mapInstance.current = L.map(mapContainerRef.current!).setView([51.505, -0.09], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapInstance.current);
    }

    // Cleanup on unmount to avoid map reuse conflicts
    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove(); // This removes the map instance safely
      }
    };
  }, []); // Empty dependency array ensures this runs only on mount and unmount

  return <div ref={mapContainerRef} style={{ height: '400px' }} />;
};

export default MapComponent;
