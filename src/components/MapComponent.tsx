'use client';

import React, { useEffect, useRef } from 'react';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';

interface MapProps {
  coordinates: [number, number];
  name?: string;
  address?: string;
  image?: string;
  markerIcon?: string;
}

const MapComponent: React.FC<MapProps> = ({
  coordinates,
  name,
  address,
  image,
  markerIcon,
}) => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  // const mapRef = useRef<L.Map | null>(null);

  // useEffect(() => {
  //   if (!mapContainerRef.current) return;

  //   // إعداد الخريطة
  //   const map = L.map(mapContainerRef.current).setView(coordinates, 13);
  //   mapRef.current = map;

  //   // إضافة طبقات مختلفة للخريطة
  //   const layers = {
  //     OpenStreetMap: L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //       attribution: '&copy; OpenStreetMap contributors',
  //     }),
  //     خريطة_الشوارع: L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
  //       attribution:
  //         '&copy; OpenStreetMap contributors, Tiles style by Humanitarian OpenStreetMap Team',
  //     }),
  //     صورة_فضائية: L.tileLayer(
  //       'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
  //       {
  //         attribution:
  //           '&copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
  //       }
  //     ),
  //   };

  //   // إضافة الطبقة الافتراضية
  //   layers['OpenStreetMap'].addTo(map);

  //   // إضافة زر تبديل الطبقات
  //   L.control.layers(layers).addTo(map);

  //   // إضافة أيقونة مخصصة للـ Marker
  //   const customIcon = L.icon({
  //     iconUrl: markerIcon || 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  //     iconSize: [25, 41],
  //     iconAnchor: [12, 41],
  //     popupAnchor: [0, -30],
  //   });

  //   // إضافة Marker الرئيسي مع Popup
  //   const mainMarker = L.marker(coordinates, { icon: customIcon }).addTo(map);
  //   const popupContent = `
  //     <div style="text-align: center; direction: rtl;">
  //       <h3 style="margin: 3px; color: #2563eb; font-weight: bold;">${name || 'مكان غير مسمى'}</h3>
  //       ${image ? `<img src="${image}" alt="${name}" style="width: 150px; height: auto; margin: auto;" />` : ''}
  //       <p>${address || ''}</p>
  //     </div>
  //   `;
  //   mainMarker.bindPopup(popupContent).openPopup();

  //   // تنظيف عند إزالة المكون
  //   return () => {
  //     map.remove();
  //   };
  // }, [coordinates, name, address, image, markerIcon]);

  return (
    <div
      ref={mapContainerRef}
      className="w-full h-[600px] rounded-xl overflow-hidden shadow-lg"
    />
  );
};

export default MapComponent;
