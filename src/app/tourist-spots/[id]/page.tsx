import { Suspense } from 'react';
import Image from 'next/image';
// import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';
import ReviewSection from '../../../components/ReviewSection';
import MapComponent from '../../../components/MapComponent'; // Import MapComponent
import { touristPlaces } from '../../../data/places';


interface Props {
  params: {
    id: string;
  };
}

async function getPlace(id: string) {
  const place = touristPlaces.find(p => p.id.toString() === id);
  if (!place) return null;
  return place;
}

export default async function PlacePage({ params }: Props) {
  const place = await getPlace(params.id);
  
  if (!place) {
    notFound();
  }

  const nearbyPlaces = [
    {
      name: 'مطعم الأسماك',
      coordinates: [place.latitude + 0.002, place.longitude + 0.002] as [number, number],
      type: 'restaurant',
      image: '/images/restaurants/fish-restaurant.jpg',
      rating: 4.5,
      phone: '+20 123 456 789',
      address: 'شارع الثلاثيني، بورسعيد',
      openingHours: '١٢م - ١٢ص',
      description: 'مطعم متخصص في المأكولات البحرية الطازجة مع إطلالة رائعة على البحر'
    },
    {
      name: 'فندق بورسعيد',
      coordinates: [place.latitude - 0.002, place.longitude - 0.001] as [number, number],
      type: 'hotel',
      image: '/images/hotels/portsaid-hotel.jpg',
      rating: 4,
      phone: '+20 123 456 790',
      address: 'شارع ٢٣ يوليو، بورسعيد',
      openingHours: '٢٤ ساعة',
      description: 'فندق ٤ نجوم يقدم خدمات راقية مع إطلالة على قناة السويس'
    },
    {
      name: 'متحف النصر',
      coordinates: [place.latitude + 0.001, place.longitude - 0.002] as [number, number],
      type: 'attraction',
      image: '/images/attractions/victory-museum.jpg',
      rating: 4.8,
      phone: '+20 123 456 791',
      address: 'شارع الجمهورية، بورسعيد',
      openingHours: '٩ص - ٥م',
      description: 'متحف يوثق تاريخ المقاومة الشعبية في بورسعيد خلال العدوان الثلاثي'
    }
  ];

  return (
    <div dir="rtl" className="container mx-auto p-4 mt-5">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        <div className="relative h-[400px]">
          <Image
            src={place.image}
            alt={place.name}
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{place.name}</h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
            {place.description}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div>
              <h2 className="text-xl font-semibold mb-2">الموقع</h2>
              <p className="text-gray-600 dark:text-gray-300">
                خط العرض: {place.latitude}
                <br />
                خط الطول: {place.longitude}
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">التصنيف</h2>
              <p className="text-gray-600 dark:text-gray-300">{place.category}</p>
            </div>
          </div>
        </div>
      </div>

   

      <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden p-6">
        <h2 className="text-2xl font-bold mb-4">الموقع والأماكن القريبة</h2>
        <MapComponent 
          coordinates={[place.latitude, place.longitude]} 
          name={place.name}
          image={place.image}
          nearbyPlaces={nearbyPlaces}
        />
      </div>

      <div className="mt-8">
        <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse rounded-xl" />}>
          <ReviewSection placeId={place.id.toString()} />
        </Suspense>
      </div>
    </div>
  );
}
