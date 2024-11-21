'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { useRef } from 'react';

// إصلاح الأيقونات الافتراضية
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const MyMapComponent = () => {
  const searchParams = useSearchParams();
  const mapRef = useRef(null);

  const coordinatesParam = searchParams.get('coordinates');
  const name = searchParams.get('name');
  const image = searchParams.get('image');
  const address = searchParams.get('address');

  if (!coordinatesParam) {
    return <p className="text-center text-lg mt-10">لم يتم توفير إحداثيات لعرض الموقع.</p>;
  }

  const [lat, lng] = coordinatesParam.split(',').map(Number);

  if (isNaN(lat) || isNaN(lng)) {
    return <p className="text-center text-lg mt-10">الإحداثيات المدخلة غير صالحة.</p>;
  }

  return (
    <div className="mt-14 h-[500px] w-full">
      <MapContainer
        center={[lat, lng]}
        zoom={15}
        className="w-[100%] h-[100%]"
        ref={mapRef}
        whenReady={() => console.log('الخريطة جاهزة')} // يمكن تعديل هذا الجزء أو حذفه إذا لم يكن ضروريًا
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[lat, lng]}>
          <Popup>
            <h3 className="font-bold text-center text-seaBlue p-2">{name || 'موقع غير مُسمى'}</h3>
            {image && (
              <Image
                className="rounded-xl shadow-2xl shadow-black w-[220px] h-[150px] hover:scale-105 transition-transform duration-300 mx-auto"
                src={image}
                alt={name || 'صورة الموقع'}
                width={280}
                height={140}
                loading="lazy"
                priority={false}
              />
            )}
            <p className="text-center text-gray-500">{address}</p>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MyMapComponent;
