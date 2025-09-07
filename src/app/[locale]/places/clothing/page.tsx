import Image from "next/image";
import clothing from "@/data/DataClothingStores";
import FilterComponent from "@/components/unified/FilterComponent";

import { Routes } from "@/constants/enums";
import { getCurrentLocale } from "@/lib/getCurrentLocale";
import getTrans from "@/lib/translation";
import Link from "@/components/link";

interface ClothingStoresPageProps {
  searchParams: Promise<{ [key: string]: string }>;
}

const ClothingStoresPage = async ({searchParams}: ClothingStoresPageProps) => {
  const params = await searchParams;
  const regionFilter = params.region || "All";
  const categoryFilter = params.category || "All";
  const locale = await getCurrentLocale();
  const { filterComponent, places, cardDetails } = await getTrans(locale);

  // التصفية على السيرڤر
  const filteredClothing = clothing.filter(
    (DATA) =>
      (regionFilter === "All" || DATA.region === regionFilter) &&
      (categoryFilter === "All" || DATA.category === categoryFilter)
  );

  const uniqueRegions = Array.from(new Set(clothing.map((d) => d.region)));
  const uniqueCategories = Array.from(new Set(clothing.map((d) => d.category)));

  // const translations = {
  //   selectRegion: "اختر المنطقة",
  //   selectCategory: "اختر الفئة",
  //   all: "الكل",
  // };

  return (
    <main className="container pb-4 mt-24">
      <div className="text-center mb-8">
        <Link
          href={`/${locale}/${Routes.PLACES}`}
          className="text-xl text-primary hover:text-accent transition"
        >
          <h1 className="text-3xl font-bold text-gray-900 hover:text-primary dark:text-white">
            {places.title}
          </h1>
        </Link>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          {places.subtitle}
        </p>
      </div>

      <h1 className="text-center text-2xl font-bold mt-3 mb-4 text-primary">
        {places.CLOTHING}
      </h1>

      <FilterComponent
        regionFilter={regionFilter}
        categoryFilter={categoryFilter}
        uniqueRegions={uniqueRegions}
        uniqueCategories={uniqueCategories}
        translations={filterComponent}
      />

      <div className="grid md:grid-cols-3 gap-3">
        {filteredClothing.map((DATA) => (
          <div
            key={DATA.id}
            className="border rounded-lg overflow-hidden shadow-xl bg-seagullGray"
          >
            <Image
              src={DATA.image}
              alt={DATA.name}
              className="w-full h-[200px] object-cover"
              width="300"
              height="200"
            />
            <div className="px-4 py-2 space-y-1 ">
              <h2 className="text-xl font-bold text-seaBlue p-2 mb-3 text-center rounded-lg border-t-2 border-seaBlue shadow shadow-seaBlue">
                {DATA.name}
              </h2>
              <p className="text-md text-gray-500 text-center px-2">
                {DATA.description}
              </p>
              <p className="text-sm text-gray-700">
                <strong>{cardDetails.region}:</strong> {DATA.region}
              </p>
              <p className="text-sm text-gray-700">
                <strong>{cardDetails.address}:</strong> {DATA.address}
              </p>
              <p className="text-sm text-gray-700">
                <strong>{cardDetails.phone}:</strong> {DATA.contact}
              </p>
            </div>
          </div>
        ))}
      </div>

    
    </main>
  );
};

export default ClothingStoresPage;
