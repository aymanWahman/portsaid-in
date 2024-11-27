'use client';

import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface MapProps {
  coordinates: [number, number]; // تغيير النوع إلى مصفوفة أرقام ذات طول ثابت
  name?: string;
  address?: string;
  image?: string;
  markerIcon?: string; // الرابط للصورة المخصصة للـ Marker
}

const MapComponent: React.FC<MapProps> = ({ coordinates, name, address, image, markerIcon }) => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let map: L.Map | null = null;

    if (mapContainerRef.current) {
      // إعداد الخريطة
      map = L.map(mapContainerRef.current).setView(coordinates, 13);

      // إضافة طبقة OpenStreetMap
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
      }).addTo(map);

      // إنشاء أيقونة مخصصة للـ Marker
      const customIcon = L.icon({
        iconUrl:
          markerIcon ||
          'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png', // أيقونة افتراضية
        iconSize: [25, 41], // حجم الأيقونة
        iconAnchor: [12, 41], // النقطة التي تحدد مكان الأيقونة
        popupAnchor: [0, -30], // مكان ظهور الـ Popup
      });

      // إضافة Marker مع Popup
      const marker = L.marker(coordinates, { icon: customIcon }).addTo(map);

      // محتوى الـ Popup
      const popupContent = `
        <div style="text-align: center;">
          <h3 style="margin: 3px; color: blue; font-weight: bold;">${name || 'مكان غير مسمى'}</h3>
          ${
            image
              ? `<img src="${image}" alt="${name}" style="width: 150px; height: auto; margin: auto;" />`
              : ''
          }
          <p>${address || ''}</p>
        </div>
      `;

      marker.bindPopup(popupContent).openPopup();
    }

    // تنظيف عند إزالة المكون
    return () => {
      if (map) {
        map.remove();
      }
    };
  }, [coordinates, name, address, image, markerIcon]);

  // عنصر يحتوي على الخريطة
  return <div ref={mapContainerRef} style={{ height: '600px', width: '100%' }} />;
};

export default MapComponent;
