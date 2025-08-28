"use client";
// import { DataTypes } from "@/types/dataTypes";
import hotels from "@/data/DataHotel";
import Image from "next/image";
import { useState } from "react";
import { Routes } from "@/constants/enums";
import Link from "@/components/link";
import { Button } from "@/components/ui/button";
// import { Translations } from "@/types/translations";
import { useParams } from "next/navigation";
// type Props = {
//   hotels: DataTypes[];
// };

const HotelPage = () => {
  const { locale } = useParams();

  // const pathname = usePathname();

  const [filter, setFilter] = useState<string>("All");

  const filteredRestaurants =
    filter === "All"
      ? hotels
      : hotels.filter(
          (hotel) => hotel.region === filter || hotel.category === filter
        );

  const uniqueRegions = Array.from(new Set(hotels.map((r) => r.region)));
  // const uniqueCategories = Array.from(
  //   new Set(restaurants.map((r) => r.category))
  // );

  return (
    <main className="container pt-24 pb-7">
      <div className="text-center">
        <Link
          href={`/${locale}/${Routes.TOURIST_SPOTS}`}
          className="text-xl text-primary hover:text-accent transition"
        >
          الأماكن السياحية
        </Link>
      </div>

      {/* فلتر */}
      <div className="flex flex-wrap gap-2 mb-6">
        <Button
          onClick={() => setFilter("All")}
          className={`px-4 py-2 rounded ${
            filter === "All" ? "bg-primary text-white" : "bg-accent"
          }`}
        >
          الكل
        </Button>
        {uniqueRegions.map((region) => (
          <button
            key={region}
            onClick={() => setFilter(region)}
            className={`px-4 py-2 rounded ${
              filter === region ? "bg-primary text-white" : "bg-accent"
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredRestaurants.map((d) => (
          <div
            key={d.id}
            className="border rounded-lg overflow-hidden shadow-md "
          >
            <Image
              src={d.image}
              alt={d.name}
              className="w-full h-40 object-cover"
              width="300"
              height="200"
              priority
            />
            <div className="p-4">
              <h2 className="text-lg font-bold text-primary">{d.name}</h2>
              <p className="text-gray-500">{d.description}</p>

              <p className="text-gray-700">
                <strong>المنطقة:</strong> {d.region}
              </p>
              {/* <p className="text-gray-700">
                <strong>التصنيف:</strong> {d.category}
              </p> */}
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
    </main>
  );
};

export default HotelPage;
