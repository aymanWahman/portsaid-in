'use client';

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import dynamic from 'next/dynamic';
import Head from 'next/head';

// تحميل مكون الخريطة بشكل ديناميكي
const MapComponent = dynamic(() => import('../../../components/MapComponent'), {
  ssr: false,
  loading: () => <div>جاري تحميل الخريطة...</div>,
});

const InnerMapPage = () => {
  const searchParams = useSearchParams(); // استخدام المعاملات
  const [coordinates, setCoordinates] = useState<[number, number] | null>(null);
  const [restaurantName, setRestaurantName] = useState<string>('اسم المطعم غير متوفر');
  const [restaurantAddress, setRestaurantAddress] = useState<string>('العنوان غير متوفر');
  const [restaurantImage, setRestaurantImage] = useState<string>('');

  useEffect(() => {
    // استخراج المعاملات مباشرةً من useSearchParams
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
        <p className="text-red-500 text-lg font-bold mb-4">⚠️ يرجى توفير إحداثيات صالحة لعرض الخريطة!</p>
        <p className="text-gray-700">تأكد من إدخال القيم كالتالي:</p>
        <code className="bg-gray-100 p-2 rounded-md">?coordinates=lat,lng</code>
      </div>
    );
  }

  return (
    <div className="mt-16 map-container bg-gray-100 border border-gray-300 rounded-lg shadow-lg p-4">
      <Head>
        <title>{restaurantName} - موقع الخريطة</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={`عرض موقع ${restaurantName} على الخريطة.`} />
        {restaurantImage && <meta property="og:image" content={restaurantImage} />}
      </Head>
      <MapComponent
        coordinates={coordinates as [number, number]}
        name={restaurantName}
        address={restaurantAddress}
        image={restaurantImage}
      />
    </div>
  );
};

const MapPage = () => {
  return (
    <Suspense fallback={<div className="text-center text-gray-500">جاري تحميل الصفحة...</div>}>
      <InnerMapPage />
    </Suspense>
  );
};

export default MapPage;
