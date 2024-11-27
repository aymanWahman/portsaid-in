'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import dynamic from 'next/dynamic';
import Head from 'next/head';

// تحميل مكون الخريطة بشكل ديناميكي
const MapComponent = dynamic(() => import('@/components/MapComponent'), { ssr: false });

const MapPage = () => {
  const searchParams = useSearchParams();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <InnerMapPage searchParams={searchParams} />
    </Suspense>
  );
};

const InnerMapPage = ({ searchParams }: { searchParams: URLSearchParams }) => {
  // تحويل الإحداثيات إلى أرقام
  const coordinates = searchParams
    .get('coordinates')
    ?.split(',')
    .map(coord => parseFloat(coord)) || [];

  const restaurantName = searchParams.get('name') || 'اسم المطعم غير متوفر';
  const restaurantAddress = searchParams.get('address') || 'العنوان غير متوفر';
  const restaurantImage = searchParams.get('image') || '';

  // التحقق من صلاحية الإحداثيات
  if (coordinates.length !== 2 || coordinates.some(isNaN)) {
    return (
      <div>
        <p>يرجى توفير إحداثيات صالحة لعرض الخريطة!</p>
        <p>تأكد من إدخال القيم كالتالي: `?coordinates=lat,lng`</p>
      </div>
    );
  }

  return (
    <div className="mt-16 ">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <MapComponent
        coordinates={coordinates as [number, number]} // تأكيد النوع لتكون الإحداثيات زوجًا
        name={restaurantName}
        address={restaurantAddress}
        image={restaurantImage}
      />
    </div>
  );
};

export default MapPage;
