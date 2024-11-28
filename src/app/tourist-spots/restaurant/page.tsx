'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import restaurants from '@/components/DataRestaurant';
import ReviewsSection from "@/components/ReviewsSection";

const RestaurantPage: React.FC = () => {
  const router = useRouter();

  const handleViewMap = (coordinates: [number, number], name: string, image: string, address: string) => {
    // نقوم بتحويل الإحداثيات وبعض المعلومات الأخرى إلى رابط
    router.push(`/tourist-spots/map?coordinates=${encodeURIComponent(coordinates.join(','))}&name=${encodeURIComponent(name)}&image=${encodeURIComponent(image)}&address=${encodeURIComponent(address)}`);
  };

  const [regionFilter, setRegionFilter] = useState<string>('All');
  const [categoryFilter, setCategoryFilter] = useState<string>('All');

  const filteredRestaurants = restaurants.filter(
    (restaurant) =>
      (regionFilter === 'All' || restaurant.region === regionFilter) &&
      (categoryFilter === 'All' || restaurant.category === categoryFilter)
  );

  const uniqueRegions = ['All', ...new Set(restaurants.map((d) => d.region))];
  const uniqueCategories = ['All', ...new Set(restaurants.map((d) => d.category))];

  return (
    <div dir="rtl" className="p-4 mt-14">
      <div className="text-center">
        <Link href="/tourist-spots" className="text-xl text-sandyGold hover:text-seaBlue transition">
          الأماكن السياحية
        </Link>
      </div>
      <h1 className="text-center text-2xl font-bold mt-3 mb-4 text-seaBlue">
        المطاعم والكافيهات
      </h1>

      <div className="flex flex-wrap gap-6 mb-6 justify-center">
        <div>
          <label className="block text-lg text-sandyGold font-bold mb-2">اختر المنطقة:</label>
          <select
            value={regionFilter}
            onChange={(e) => setRegionFilter(e.target.value)}
            className="border px-4 py-2 rounded"
          >
            {uniqueRegions.map((region) => (
              <option key={region} value={region}>
                {region === 'All' ? 'الكل' : region}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-lg text-sandyGold font-bold mb-2">اختر الفئة:</label>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="border px-4 py-2 rounded"
          >
            {uniqueCategories.map((category) => (
              <option key={category} value={category}>
                {category === 'All' ? 'الكل' : category}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-3">
        {filteredRestaurants.map((restaurant) => (
          <div key={restaurant.id} className="border rounded-lg overflow-hidden shadow-md bg-seagullGray">
            <Image
              src={restaurant.image}
              alt={restaurant.name}
              className="w-full h-[200px] object-cover"
              width="300"
              height="200"
            />
            <div className="px-4 py-2 space-y-1">
              <h2 className="text-lg font-bold text-seaBlue text-center">{restaurant.name}</h2>
              <p className="text-md text-gray-500 text-center px-2">{restaurant.description}</p>
              <p className="text-sm text-gray-700">
                <strong>المنطقة:</strong> {restaurant.region}
              </p>
              <p className="text-sm text-gray-700">
                <strong>العنوان:</strong> {restaurant.address}
              </p>
              <p className="text-sm text-gray-700">
                <strong>التلفون:</strong> {restaurant.contact}
              </p>
              <button
                className="mt-2 text-white bg-blue-500 px-4 py-2 rounded"
                onClick={() =>
                  handleViewMap(
                    restaurant.coordinates, 
                    restaurant.name, 
                    restaurant.image, 
                    restaurant.address
                  )
                }
              >
                عرض الخريطة
              </button>
            </div>
          </div>
        ))}
      </div>
      <ReviewsSection/>
    </div>
  );
};

export default RestaurantPage;
