"use client";
import { DataTypes } from "@/dataTypes";
import restaurants from "@/components/DataRestaurant";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Props = {
  restaurants: DataTypes[];
};

const RestaurantPage: React.FC<Props> = ({ restaurants }) => {
  const [regionFilter, setRegionFilter] = useState<string>("All");
  const [categoryFilter, setCategoryFilter] = useState<string>("All");

  const filteredRestaurants = restaurants.filter(
    (restaurant) =>
      (regionFilter === "All" || restaurant.region === regionFilter) &&
      (categoryFilter === "All" || restaurant.category === categoryFilter)
  );

  const uniqueRegions = ["All", ...new Set(restaurants.map((d) => d.region))];
  const uniqueCategories = ["All", ...new Set(restaurants.map((d) => d.category))];

  return (
    <div dir="rtl" className="p-4 mt-14">
      <div className="text-center">
        <Link
          href="/tourist-spots"
          className="text-xl text-sandyGold hover:text-seaBlue transition"
        >
          الأماكن السياحية
        </Link>
      </div>
      <h1 className="text-center text-2xl font-bold mt-3 mb-4">المطاعم</h1>

      {/* قوائم التصفية */}
      <div className="flex flex-wrap gap-6 mb-6 justify-center">
        {/* القائمة المنسدلة للمنطقة */}
        <div>
          <label className="block text-lg text-seaBlue font-bold mb-2">اختر المنطقة:</label>
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

        {/* القائمة المنسدلة للفئة */}
        <div>
          <label className="block text-lg text-seaBlue font-bold mb-2">اختر الفئة:</label>
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

      {/* عرض المطاعم */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredRestaurants.map((d) => (
          <div
            key={d.id}
            className="border rounded-lg overflow-hidden shadow-md bg-white"
          >
            <Image
              src={d.image}
              alt={d.name}
              className="w-full h-40 object-cover"
              width="300"
              height="200"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold text-seaBlue">{d.name}</h2>
              <p className="text-gray-500">{d.description}</p>
              <p className="text-gray-700">
                <strong>المنطقة:</strong> {d.region}
              </p>
              <p className="text-gray-700">
                <strong>العنوان:</strong> {d.address}
              </p>
              <p className="text-gray-700">
                <strong>التلفون:</strong> {d.contact}
              </p>
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
