'use client';

import {  useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import dynamic from 'next/dynamic';
import Head from 'next/head';

// تحميل مكون الخريطة بشكل ديناميكي
const MapComponent = dynamic(() => import('../../../components/MapComponent'), {
  ssr: false,
  loading: () => <div>جاري تحميل الخريطة...</div>,
});

const InnerMapPage = () => {
  const searchParams = useSearchParams();
  const [coordinates, setCoordinates] = useState<[number, number] | null>(null);
  const [restaurantName, setRestaurantName] = useState<string>('اسم المطعم غير متوفر');
  const [restaurantAddress, setRestaurantAddress] = useState<string>('العنوان غير متوفر');
  const [restaurantImage, setRestaurantImage] = useState<string>('');

  useEffect(() => {
    const coordinatesParam = searchParams.get('coordinates');
    const name = searchParams.get('name') || 'اسم المطعم غير متوفر';
    const address = searchParams.get('address') || 'العنوان غير متوفر';
    const image = searchParams.get('image') || '';

    if (coordinatesParam) {
      const parsedCoordinates = coordinatesParam.split(',').map(parseFloat);
      if (parsedCoordinates.length === 2 && !parsedCoordinates.some(isNaN)) {
        setCoordinates([parsedCoordinates[0], parsedCoordinates[1]]);
      }
    }

    setRestaurantName(name);
    setRestaurantAddress(address);
    setRestaurantImage(image);
  }, [searchParams]);

  if (!coordinates) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <p className="text-red-500 text-lg font-bold mb-4">
          ⚠️ يرجى توفير إحداثيات صالحة لعرض الخريطة! تأكد من كتابة الإحداثيات بالشكل التالي: lat,lng
        </p>
      </div>
    );
  }

  return (
    <div className="mt-16 map-container bg-gray-100 border border-gray-300 rounded-lg shadow-lg p-4">
      <Head>
        <title>{restaurantName} - خريطة الموقع</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={`عرض موقع ${restaurantName} على الخريطة.`} />
        {restaurantImage && <meta property="og:image" content={restaurantImage} />}
      </Head>
      <MapComponent
        coordinates={coordinates}
        name={restaurantName}
        address={restaurantAddress}
        image={restaurantImage}
      />
    </div>
  );
};

export default InnerMapPage;
