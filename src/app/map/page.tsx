'use client';

import { useSearchParams } from 'next/navigation';
import dynamic from 'next/dynamic';

const MapComponent = dynamic(() => import('@/components/MapComponent'), { ssr: false });

const MapPage = () => {
  const searchParams = useSearchParams();
  // تحديد الأنواع بشكل صحيح
  const coordinates = searchParams.get('coordinates')?.split(',') || [];
  const restaurantName = searchParams.get('name') || '';
  const restaurantAddress = searchParams.get('address') || '';
  const restaurantImage = searchParams.get('image') || '';

  if (!coordinates.length) {
    return <div>يرجى توفير إحداثيات صالحة لعرض الخريطة!</div>;
  }

  return (
    <div className="mt-16">
      <MapComponent
        coordinates={coordinates}
        name={restaurantName}
        address={restaurantAddress}
        image={restaurantImage}
      />
    </div>
  );
};

export default MapPage;
