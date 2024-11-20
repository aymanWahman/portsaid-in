"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // استخدم navigation من App Router
import Image from "next/image";
import { DataTypes } from "@/Types/dataTypes";
import restaurants from "@/components/DataRestaurant";
import Link from "next/link";

type Props = {
  restaurants: DataTypes[];
};

const RestaurantPage: React.FC<Props> = ({ restaurants }) => {
  const [regionFilter, setRegionFilter] = useState<string>("All");
  const [categoryFilter, setCategoryFilter] = useState<string>("All");
  const router = useRouter(); // App Router

  const filteredRestaurants = restaurants.filter(
    (restaurant) =>
      (regionFilter === "All" || restaurant.region === regionFilter) &&
      (categoryFilter === "All" || restaurant.category === categoryFilter)
  );

  const uniqueRegions = ["All", ...new Set(restaurants.map((d) => d.region))];
  const uniqueCategories = [
    "All",
    ...new Set(restaurants.map((d) => d.category)),
  ];

  const handleViewOnMap = (coordinates: [number, number], name: string, image: string, address: string) => {
    router.push(
      `/map?coordinates=${encodeURIComponent(
        coordinates.join(",")
      )}&name=${encodeURIComponent(name)}&image=${encodeURIComponent(image)}&address=${encodeURIComponent(address)}`
    );
  };

  return (
    <div dir="rtl" className="p-4 mt-14">
      <div className="text-center">
        <Link
          href="/tourist-spots"
          className="text-xl  text-sandyGold  hover:text-seaBlue transition"
        >
          الأماكن السياحية
        </Link>
      </div>
      <h1 className="text-center text-2xl font-bold mt-3 mb-4 text-seaBlue">
        المطاعم والكافيهات
      </h1>

      <div className="flex flex-wrap gap-6 mb-6 justify-center">
        <div>
          <label className="block text-lg text-sandyGold font-bold mb-2">
            اختر المنطقة:
          </label>
          <select
            value={regionFilter}
            onChange={(e) => setRegionFilter(e.target.value)}
            className="border px-4 py-2 rounded"
          >
            {uniqueRegions.map((region) => (
              <option key={region} value={region}>
                {region === "All" ? "الكل" : region}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-lg text-sandyGold font-bold mb-2">
            اختر الفئة:
          </label>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="border px-4 py-2 rounded"
          >
            {uniqueCategories.map((category) => (
              <option key={category} value={category}>
                {category === "All" ? "الكل" : category}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-3">
        {filteredRestaurants.map((d) => (
          <div
            key={d.id}
            className="border rounded-lg overflow-hidden shadow-md bg-seagullGray"
          >
            <Image
              src={d.image}
              alt={d.name}
              className="w-full h-[200px] object-cover cursor-pointer"
              width="300"
              height="200"
              
            />
            <div className="px-4 py-2 space-y-1">
              <h2 className="text-lg font-bold text-seaBlue">{d.name}</h2>
              <p className="text-md text-gray-500">{d.description}</p>
              <p className="text-sm text-gray-700">
                <strong>المنطقة:</strong> {d.region}
              </p>
              <p className="text-sm text-gray-700">
                <strong>العنوان:</strong> {d.address}
              </p>
              <p className="text-sm text-gray-700">
                <strong>التلفون:</strong> {d.contact}
              </p>
              <button
                className="mt-2 text-white bg-seaBlue px-4 py-2 rounded"
                onClick={() => handleViewOnMap(d.coordinates, d.name, d.image, d.address)}
              >
          عرض الخريطة
              </button>

              {/* <button
                className="mt-2 text-white bg-seaBlue mx-1 px-4 py-2 rounded"
                onClick={() => {
                  const url = `https://www.google.com/maps/search/?api=1&query=${d.coordinates[0]},${d.coordinates[1]}`;
                  window.open(url, "_blank"); // فتح الرابط في نافذة جديدة
                }}
              >
                عرض الخريطة
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Page() {
  return <RestaurantPage restaurants={restaurants} />;
}
