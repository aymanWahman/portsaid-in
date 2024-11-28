'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';

// تحميل مكون الخريطة بشكل ديناميكي
const MapComponent = dynamic(() => import('@/components/MapComponent'), {
  ssr: false,
  loading: () => <div>جاري تحميل الخريطة...</div>,
});

const MapPage = () => {
  // استخراج قيم الـ search params يدويًا باستخدام URLSearchParams
  const searchParams = new URLSearchParams(window.location.search);

  return (
    <Suspense fallback={<div className="text-center text-gray-500">جاري تحميل الصفحة...</div>}>
      <InnerMapPage searchParams={searchParams} />
    </Suspense>
  );
};

const InnerMapPage = ({ searchParams }: { searchParams: URLSearchParams }) => {
  const coordinates = searchParams
    .get('coordinates')
    ?.split(',')
    .map(coord => parseFloat(coord)) || [];
  const restaurantName = searchParams.get('name') || 'اسم المطعم غير متوفر';
  const restaurantAddress = searchParams.get('address') || 'العنوان غير متوفر';
  const restaurantImage = searchParams.get('image') || '';

  if (coordinates.length !== 2 || coordinates.some(isNaN)) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <p className="text-red-500 text-lg font-bold mb-4">⚠️ يرجى توفير إحداثيات صالحة لعرض الخريطة!</p>
        <p className="text-gray-700">تأكد من إدخال القيم كالتالي:</p>
        <code className="bg-gray-100 p-2 rounded-md">?coordinates=lat,lng</code>
      </div>
    );
  }

  return (
    <div className="mt-16 map-container">
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

export default MapPage;
