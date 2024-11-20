'use client';

import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // تأكد من استيراد CSS الخاص بـ Leaflet
import L from 'leaflet';

// إصلاح مشكلة الأيقونة الافتراضية
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const MyMapComponent = () => {
  useEffect(() => {
    // تنظيف معرف الخريطة عند إلغاء تحميل المكون
    return () => {
      const mapContainer = document.getElementById('map');
      if (mapContainer && mapContainer._leaflet_id) {
        mapContainer._leaflet_id = null; // إزالة المعرف الخاص بالخريطة
      }
    };
  }, []);

  return (
    <div className="mt-14 h-[500px] w-full">
      {/* تأكد من إضافة ارتفاع وعرض مناسب للخريطة */}
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        id="map"
        style={{ height: '100%', width: '100%' }} // ضبط حجم الخريطة
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[51.505, -0.09]} />
      </MapContainer>
    </div>
  );
};

export default MyMapComponent;
