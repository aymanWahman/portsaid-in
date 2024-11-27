'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapPage = () => {
  const searchParams = useSearchParams();
  const [isMounted, setIsMounted] = useState(false);
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const coordinates = searchParams.get('coordinates')?.split(',') || [];
  const restaurantName = searchParams.get('name');
  const restaurantAddress = searchParams.get('address');
  const restaurantImage = searchParams.get('image');

  useEffect(() => {
    let map: L.Map | null = null;

    if (coordinates.length === 2 && mapContainerRef.current) {
      map = L.map(mapContainerRef.current).setView(
        [parseFloat(coordinates[0]), parseFloat(coordinates[1])],
        13
      );

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      const marker = L.marker([parseFloat(coordinates[0]), parseFloat(coordinates[1])]).addTo(map);

      if (restaurantName && restaurantAddress && restaurantImage) {
        const popupContent = `
          <div style="text-align: center;">
            <h3>${restaurantName}</h3>
            <img src="${restaurantImage}" alt="${restaurantName}" style="width: 100px; height: auto; margin: auto;"/>
            <p>${restaurantAddress}</p>
          </div>
        `;
        marker.bindPopup(popupContent).openPopup();
      } else if (restaurantName) {
        marker.bindPopup(restaurantName).openPopup(); // عرض اسم المطعم فقط إذا كان متاحًا
      } else {
        marker.bindPopup('مكان المطعم').openPopup(); // نص افتراضي في حال عدم وجود اسم
      }
    }

    return () => {
      if (map) {
        map.remove();
      }
    };
  }, [coordinates, restaurantName, restaurantAddress, restaurantImage]);

  if (!isMounted) {
    return null;
  }

  if (!coordinates.length) {
    return <div>يرجى توفير إحداثيات صالحة لعرض الخريطة!</div>;
  }

  return (
    <div className='mt-16'>
      <div ref={mapContainerRef} style={{ height: '600px' }}></div>
    </div>
  );
};

export default MapPage;
