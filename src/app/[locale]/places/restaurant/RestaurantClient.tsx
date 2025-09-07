"use client";

import { useState } from "react";
import Image from "next/image";
import { Routes, Languages } from "@/constants/enums";
import { Translations } from "@/types/translations";
import { useParams } from "next/navigation";
import Link from "@/components/link";

// تعريف النوع لبيانات المطاعم
interface RestaurantData {
  id: number;
  name: string;
  image: string;
  description: string;
  region: string;
  address: string;
  contact: string;
  category: string;
}

// المكون يستقبل البيانات والترجمات كـ props
function RestaurantClient({ translations, restaurants }: { translations: Translations, restaurants: RestaurantData[] }) {
  const { locale } = useParams();
  const [regionFilter, setRegionFilter] = useState<string>("All");
  const [categoryFilter, setCategoryFilter] = useState<string>("All");

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



  return (
    <main className={locale === Languages.ARABIC ? "!text-right" : "!text-left"}>
      <div className="container section-gap pt-14 ">
        <div className="text-center font-bold text-2xl">
          <Link
            href={`/${locale}/${Routes.PLACES}`}
            className="text-2xl text-primary hover:text-accent font-serif transition"
          >
            {translations.places.title }
          </Link>
        </div>
        <h1 className="text-center text-2xl font-bold mt-3 mb-4">
          {translations.places.RESTAURANT}
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
                  {region === "All" ? "الكل" : region}
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
                  {category === "All" ? "الكل" : category}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-3">
          {filteredRestaurants.map((restaurant) => (
            <div
              key={restaurant.id}
              className="border rounded-lg overflow-hidden shadow-xl bg-seagullGray"
            >
              <Image
                src={restaurant.image}
                alt={restaurant.name}
                className="w-full h-[200px] object-cover"
                width="300"
                height="200"
              />
              <div className="px-4 py-2 space-y-1">
                <h2 className="text-xl font-bold text-primary p-2 mb-3 text-center rounded-lg border-t-2 border-primary shadow shadow-primary">
                  {restaurant.name}
                </h2>
                <p className="text-md text-gray-500 text-center px-2">
                  {restaurant.description}
                </p>
                <p className="text-sm text-gray-700">
                  <strong>{locale === Languages.ARABIC ? " المنطقة:" : " Region:"}</strong> {restaurant.region}
                </p>
                <p className="text-sm text-gray-700">
                  <strong>{locale === Languages.ARABIC ? "العنوان:" : " Adress:"}</strong> {restaurant.address}
                </p>
                <p className="text-sm text-gray-700">
                  <strong>{locale === Languages.ARABIC ? " التلفون:" : " Mobile:"}</strong> {restaurant.contact}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default RestaurantClient;