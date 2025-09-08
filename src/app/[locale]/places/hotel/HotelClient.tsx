"use client";

import hotels from "@/data/DataHotel";
import Image from "next/image";
import { useState } from "react";
import { Routes, Languages } from "@/constants/enums";
import Link from "@/components/link";
// import { Button } from "@/components/ui/button";
import { Translations } from "@/types/translations";
import { useParams } from "next/navigation";


const HotelPageClient = ({translations}: {translations: Translations}) => {
  const { locale } = useParams();
  const [regionFilter, setRegionFilter] = useState<string>("All");
  const [categoryFilter, setCategoryFilter] = useState<string>("All");

  const filteredHotels = hotels.filter(
    (hotel) =>
      (regionFilter === "All" || hotel.region === regionFilter) &&
      (categoryFilter === "All" || hotel.category === categoryFilter)
  );

  const uniqueRegions = ["All", ...new Set(hotels.map((d) => (locale === 'ar' ? d.region : d.regionEn)))];
  const uniqueCategories = [
    "All",
    ...new Set(hotels.map((d) => (locale === 'ar' ? d.category : d.categoryEn))),
  ];


  return (
    <main className="container pt-28 pb-7">
    <div className="text-center font-bold text-2xl">
              <Link
                href={`/${locale}/${Routes.PLACES}`}
                className="text-2xl text-primary hover:text-accent transition font-serif"
              >
                {translations.places.title }
              </Link>
            </div>
            <h1 className="text-center text-xl font-bold text-accent mt-3 mb-4">
              {translations.places.HOTEL}
            </h1>
    
            <div className="flex flex-wrap gap-6 mb-6 justify-center">
              <div>
                <label className="block text-lg text-accent font-bold mb-2">
                  {locale === Languages.ARABIC ? "اختر المنطقة:" : "Select Region:"}
                </label>
                <select
                  value={regionFilter}
                  onChange={(e) => setRegionFilter(e.target.value)}
                  className="border px-4 py-2 rounded"
                >
                  {uniqueRegions.map((region) => (
                    <option key={region} value={region}>
                      {region === "All" ? (locale === 'ar' ? 'الكل' : 'All') : region}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-lg text-accent font-bold mb-2">
                  {locale === Languages.ARABIC ? "اختر التصنيف:" : "Select Category:"}
                </label>
                <select
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="border px-4 py-2 rounded"
                >
                  {uniqueCategories.map((category) => (
                    <option key={category} value={category}>
                      {category === "All" ? (locale === 'ar' ? 'الكل' : 'All') : category}
                    </option>
                  ))}
                </select>
              </div>
            </div>

      {/* عرض المطاعم */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredHotels.map((d) => (
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
              <h2 className="text-xl font-bold text-primary p-2 mb-3 text-center rounded-lg border-t-2 border-primary shadow shadow-primary">{locale === Languages.ARABIC ? d.name : d.nameEn}</h2>
              <p className="text-md text-gray-500 text-center px-2">{locale === Languages.ARABIC ? d.description : d.descriptionEn}</p>

              <p className="text-gray-700">
                <strong>{locale === Languages.ARABIC ? " المنطقة:" : " Region:"}</strong> {locale === Languages.ARABIC ? d.region : d.regionEn}
              </p>
              {/* <p className="text-gray-700">
                <strong>التصنيف:</strong> {d.category}
              </p> */}
              <p className="text-gray-700">
                <strong>{locale === Languages.ARABIC ? "العنوان:" : " Adress:"}</strong> {locale === Languages.ARABIC ? d.address : d.addressEn}
              </p>
              <p className="text-gray-700">
                <strong>{locale === Languages.ARABIC ? " التلفون:" : " Tel:"}</strong> {d.contact}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default HotelPageClient;
