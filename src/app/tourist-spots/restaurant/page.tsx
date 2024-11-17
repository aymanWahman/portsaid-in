"use client";

import restaurants from "@/components/DataRestaurant";
import Image from "next/image";
import { useState } from "react";

type Restaurant = {
  id: number;
  name: string;
  region: string;
  category: string;
  address: string;
  description: string;
  image: string;
};

type Props = {
  restaurants: Restaurant[];
};

const RestaurantPage: React.FC<Props> = ({ restaurants }) => {
  const [filter, setFilter] = useState<string>("All");

  const filteredRestaurants = filter === "All"
    ? restaurants
    : restaurants.filter(
        (restaurant) =>
          restaurant.region === filter || restaurant.category === filter
      );

  const uniqueRegions = Array.from(new Set(restaurants.map((r) => r.region)));
  // const uniqueCategories = Array.from(
  //   new Set(restaurants.map((r) => r.category))
  // );

  return (
    <div className="p-4 mt-14">
      <h1 className="text-center text-2xl font-bold mb-4">قائمة المطاعم</h1>

      {/* فلتر */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setFilter("All")}
          className={`px-4 py-2 rounded ${
            filter === "All" ? "bg-seaBlue text-white" : "bg-gray-500"
          }`}
        >
          الكل
        </button>
        {uniqueRegions.map((region) => (
          <button
            key={region}
            onClick={() => setFilter(region)}
            className={`px-4 py-2 rounded ${
              filter === region ? "bg-seaBlue text-white" : "bg-gray-500"
            }`}
          >
            {region}
          </button>
        ))}
        {/* {uniqueCategories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded ${
              filter === category ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))} */}
      </div>

      {/* عرض المطاعم */}
      <div dir="rtl" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredRestaurants.map((restaurant) => (
          <div
            key={restaurant.id}
            className="border rounded-lg overflow-hidden shadow-md bg-white"
          >
            <Image
              src={restaurant.image}
              alt={restaurant.name}
              className="w-full h-40 object-cover"
              width="300"
              height="200"
            
            />
            <div className="p-4">
              <h2 className="text-lg font-bold">{restaurant.name}</h2>
              <p className="text-gray-700">
                <strong>المنطقة:</strong> {restaurant.region}
              </p>
              <p className="text-gray-700">
                <strong>التصنيف:</strong> {restaurant.category}
              </p>
              <p className="text-gray-700">
                <strong>العنوان:</strong> {restaurant.address}
              </p>
              <p className="text-gray-500">{restaurant.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// export default RestaurantPage;

export default function Page() {
  return <RestaurantPage restaurants={restaurants} />;
}
