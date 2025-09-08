"use client";

import { useState } from "react";
import Image from "next/image";
import { Routes, Languages } from "@/constants/enums";
import { Translations } from "@/types/translations";
import { useParams } from "next/navigation";
import Link from "@/components/link";
import pharmacy from "@/data/DataPharmacies";
// المكون يستقبل البيانات والترجمات كـ props
function PharmacyClient({ translations }: { translations: Translations }) {
  const { locale } = useParams();
  const [regionFilter, setRegionFilter] = useState<string>("All");
  const [categoryFilter, setCategoryFilter] = useState<string>("All");

  const filteredPharmacy = pharmacy.filter(
    (g) =>
      (regionFilter === "All" || g.region === regionFilter) &&
      (categoryFilter === "All" || g.category === categoryFilter)
  );

  const uniqueRegions = ["All", ...new Set(pharmacy.map((d) => (locale === 'ar' ? d.region : d.regionEn)))];
  const uniqueCategories = [
    "All",
    ...new Set(pharmacy.map((d) => (locale === 'ar' ? d.category : d.categoryEn))),
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
          {translations.places.PHARMACIES}
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

        <div className="grid md:grid-cols-3 gap-3">
          {filteredPharmacy.map((r) => (
            <div
              key={r.id}
              className="border rounded-lg overflow-hidden shadow-xl bg-seagullGray"
            >
              <Image
                src={r.image}
                alt={r.name}
                className="w-full h-[200px] object-cover"
                width="300"
                height="200"
              />
              <div className="px-4 py-2 space-y-1">
                <h2 className="text-xl font-bold text-primary p-2 mb-3 text-center rounded-lg border-t-2 border-primary shadow shadow-primary">
                  {locale === Languages.ARABIC ? r.name : r.nameEn}
                </h2>
                <p className="text-md text-gray-500 text-center px-2">
                  {locale === Languages.ARABIC ? r.description : r.descriptionEn}
                </p>
                <p className="text-sm text-gray-700">
                  <strong>{locale === Languages.ARABIC ? " المنطقة:" : " Region:"}</strong> {locale === Languages.ARABIC ? r.region : r.regionEn}
                </p>
                <p className="text-sm text-gray-700">
                  <strong>{locale === Languages.ARABIC ? "العنوان:" : " Adress:"}</strong> {locale === Languages.ARABIC ? r.address : r.addressEn}
                </p>
                <p className="text-sm text-gray-700">
                  <strong>{locale === Languages.ARABIC ? " التلفون:" : " Tel:"}</strong> {r.contact}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default PharmacyClient;