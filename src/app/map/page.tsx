'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
// import { useEffect } from 'react';

// إصلاح الأيقونات الافتراضية
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const MyMapComponent = () => {
  const searchParams = useSearchParams();

  // استرجاع الإحداثيات واسم الموقع من الرابط
  const coordinatesParam = searchParams.get('coordinates');
  const name = searchParams.get('name');
  const image = searchParams.get('image');
  const address = searchParams.get('address');

  // إذا لم تتوفر الإحداثيات، عرض رسالة
  if (!coordinatesParam) {
    return <p className="text-center text-lg mt-10">لم يتم توفير إحداثيات لعرض الموقع.</p>;
  }

  const [lat, lng] = coordinatesParam.split(',').map(Number);

  // التحقق من الإحداثيات بشكل صحيح
  if (isNaN(lat) || isNaN(lng)) {
    return <p className="text-center text-lg mt-10">الإحداثيات المدخلة غير صالحة.</p>;
  }

  return (
    <div className="mt-14 h-[500px] w-full">
      <MapContainer
        center={[lat, lng]} // مركز الخريطة بناءً على الإحداثيات
        zoom={15} // تكبير مناسب
        className="w-[100%] h-[100%]"
      >
        {/* طبقة العرض */}
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {/* العلامة الخاصة بالموقع */}
        <Marker position={[lat, lng]}>
          <Popup>
            <h3 className="font-bold text-center text-seaBlue p-2">{name || 'موقع غير مُسمى'}</h3>

            {/* التحقق من وجود الصورة وعرضها */}
            {image && (
              <Image
                className="rounded-xl shadow-2xl shadow-black w-[220px] h-[150px] hover:scale-105 transition-transform duration-300"
                src={image}
                alt={name || 'صورة الموقع'}
                width={280}
                height={140}
                loading="lazy"
                priority={false}
              />
            )}
            <p className='text-center text-gray-500 '>{address}</p>
            <p className='text-xs text-gray-300'>الإحداثيات: {lat.toFixed(4)}°N, {lng.toFixed(4)}°E</p>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MyMapComponent;
