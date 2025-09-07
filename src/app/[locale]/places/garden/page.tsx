// "use client";
// import { DataTypes } from "@/types/dataTypes";
import gardens from "@/data/DataGarden";
import Image from "next/image";
import { Routes } from '@/constants/enums';
import { getCurrentLocale } from '@/lib/getCurrentLocale';
import getTrans from '@/lib/translation';
import Link from 'next/link';

// import { useState } from "react";


// type Props = {
//   gardens: DataTypes[];
// };

async function GardenPage() {
    const locale = await getCurrentLocale();
    
    const  translations  = await getTrans(locale);

  // const [filter, setFilter] = useState<string>("All");
  // const filteredRestaurants =
  //   filter === "All"
  //     ? gardens
  //     : gardens.filter(
  //         (garden) => garden.region === filter || garden.category === filter
  //       );

  // const uniqueRegions = Array.from(new Set(gardens.map((d) => d.region)));
  // const uniqueCategories = Array.from(
  //   new Set(restaurants.map((r) => r.category))
  // );

  return (
    <main className="container pb-4 mt-24">
      <div className="text-center">
        <Link
          href={`/${locale}/${Routes.PLACES}`}
          className="text-2xl text-primary hover:text-blue-900 transition"
        >
          {translations.places.title}
        </Link>
      </div>
      <h1 className="text-center text-2xl font-bold mt-3 mb-4">
        
        {translations.places.GARDEN}
      </h1>

      {/* فلتر */}
      {/* <div className="flex flex-wrap gap-2 mb-6">
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
      </div> */}

      {/* عرض المطاعم */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {gardens.map((d) => (
          <div
            key={d.id}
            className="border rounded-lg overflow-hidden shadow-2xl bg-seagullGray"
          >
            <Image
              src={d.image}
              alt={d.name}
              className="w-full h-50 object-cover"
              width="300"
              height="200"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold text-seaBlue">{d.name}</h2>
              <p className="text-gray-500">{d.description}</p>

              <p className="text-sm text-gray-700">
                <strong>المنطقة:</strong> {d.region}
              </p>

              <p className="text-sm text-gray-700">
                <strong>العنوان:</strong> {d.address}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default  GardenPage;
