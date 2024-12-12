"use client";
import { DataTypes } from '../../../Types/dataTypes';
import hotels from "../../../components/DataHotel";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";



type Props = {
  hotels: DataTypes[];
};

const HotelPage: React.FC<Props> = ({ hotels }) => {
  const [filter, setFilter] = useState<string>("All");

  const filteredRestaurants =
    filter === "All"
      ? hotels
      : hotels.filter(
          (hotel) =>
            hotel.region === filter || hotel.category === filter
        );

  const uniqueRegions = Array.from(new Set(hotels.map((r) => r.region)));
  // const uniqueCategories = Array.from(
  //   new Set(restaurants.map((r) => r.category))
  // );

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
      <h1 className="text-center text-2xl font-bold mt-3 mb-4 text-seaBlue"> الفنادق</h1>

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
    </div>
  );
};

export default function Page() {
  return <HotelPage hotels={hotels} />;
}
