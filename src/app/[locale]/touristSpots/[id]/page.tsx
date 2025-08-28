import { Suspense } from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import ReviewSection from '@/components/ReviewSection';
import MapComponent from '@/components/MapComponent';
import { touristPlaces } from '@/data/places';

interface PageProps {
  params: {
    id: string;
  };
}

async function getPlace(id: string) {
  try {
    return touristPlaces.find((p) => p.id.toString() === id) || null;
  } catch (error) {
    console.error("Error fetching place:", error);
    return null;
  }
}

export default async function PlacePage({ params }: PageProps) {
  const place = await getPlace(params.id);

  if (!place) {
    notFound();
  }

  const { name, description, latitude, longitude, category, image, id } = place;

  return (
    <div dir="rtl" className="container mx-auto p-4 mt-5">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        <div className="relative h-[400px]">
          <Image
            src={image || "/imgs/portsaid1.jpg"}
            alt={name}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{name}</h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
            {description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div>
              <h2 className="text-xl font-semibold mb-2">الموقع</h2>
              <p className="text-gray-600 dark:text-gray-300">
                خط العرض: {latitude}
                <br />
                خط الطول: {longitude}
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">التصنيف</h2>
              <p className="text-gray-600 dark:text-gray-300">{category}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden p-6">
        <h2 className="text-2xl font-bold mb-4">الموقع</h2>
        <MapComponent 
          coordinates={[latitude || 0, longitude || 0]} 
          name={name}
          image={image}
        />
      </div>

      <div className="mt-8">
        <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse rounded-xl" />}>
          <ReviewSection placeId={id.toString()} />
        </Suspense>
      </div>
    </div>
  );
}