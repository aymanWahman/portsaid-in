'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';
import L from 'leaflet'; // استيراد مكتبة Leaflet

import 'leaflet/dist/leaflet.css'; // استيراد CSS الخاص بـ Leaflet

const MapPage = () => {
  const searchParams = useSearchParams();
  const [isMounted, setIsMounted] = useState(false);
  const mapContainerRef = useRef<HTMLDivElement | null>(null); // استخدام useRef للإشارة إلى العنصر

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const coordinates = searchParams.get('coordinates')?.split(',');
  // بيانات المطعم التي تأتي من الرابط أو مصدر آخر
  const restaurantName = searchParams.get('name'); // جلب اسم المطعم من معلمات الرابط
  const restaurantAddress = searchParams.get('address'); // جلب عنوان المطعم
  const restaurantImage = searchParams.get('image'); // جلب رابط الصورة

  useEffect(() => {
    if (coordinates && mapContainerRef.current) {
      // التأكد من أن العنصر موجود قبل إنشاء الخريطة
      const map = L.map(mapContainerRef.current).setView([parseFloat(coordinates[0]), parseFloat(coordinates[1])], 13);

      // إضافة طبقة الخريطة باستخدام OpenStreetMap
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      // إضافة Marker عند الإحداثيات المحددة
      const marker = L.marker([parseFloat(coordinates[0]), parseFloat(coordinates[1])]).addTo(map);

      // التأكد من أن جميع البيانات متوفرة
      if (restaurantName && restaurantAddress && restaurantImage) {
        // إنشاء المحتوى داخل نافذة منبثقة (Popup)
        const popupContent = `
          <div style="text-align: center;">
            <h3>${restaurantName}</h3>
            <img src="${restaurantImage}" alt="${restaurantName}" style="width: 100px; height: auto; margin: auto;"/>
            <p>${restaurantAddress}</p>
          </div>
        `;

        // ربط نافذة منبثقة (Popup) بالمعلم
        marker.bindPopup(popupContent).openPopup();
      } else {
        marker.bindPopup('مكان المطعم').openPopup(); // في حالة عدم توفر البيانات
      }
    }
  }, [coordinates, restaurantName, restaurantAddress, restaurantImage]);

  if (!isMounted) {
    return null; // لا تحاول الوصول إلى الـ params قبل تحميل المكون
  }

  if (!coordinates) {
    return <div>إحداثيات غير موجودة!</div>;
  }

  return (
    <div className='mt-16'>
      <div ref={mapContainerRef} style={{ height: '600px' }}></div>
    </div>
  );
};

export default MapPage;
