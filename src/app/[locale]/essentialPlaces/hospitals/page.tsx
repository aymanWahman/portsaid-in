import getTrans from "@/lib/translation";
import { getCurrentLocale } from "@/lib/getCurrentLocale";

import Image from "next/image";
import Link from 'next/link';
import hospitals from "@/data/DataHospital";
import { Routes } from "@/constants/enums";

export default async function HospitalsPage() {
  const locale = await getCurrentLocale();
  const { essentialPlaces } = await getTrans(locale);

  // هجيب كل المستشفيات
  // const places = await getPlaces({
  //   region: "all",
  //   category: "hospital",
  //   search: "",
  // });

  return (
    <main className="container pt-24 pb-7">
      <div className="text-center mb-8">
        <Link
          href={`/${locale}/${Routes.ESSENTIAL_PLACES}`}
          className="text-xl text-primary hover:text-accent transition"
        >
          <h1 className="text-3xl font-bold text-gray-900 hover:text-primary dark:text-white">
            {essentialPlaces.title}
          </h1>
        </Link>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          {essentialPlaces.subtitle}
        </p>
      </div>

      {/* ✅ الفلتر + العرض */}
      {/* <HospitalFilterClient places={places} /> */}

      <div className="grid md:grid-cols-3 gap-3">
        {hospitals.map((h) => (
          <div
            key={h.id}
            className="border rounded-lg overflow-hidden shadow-xl bg-seagullGray"
          >
            <Image
              src={h.image}
              alt={h.name}
              className="w-full h-[200px] object-cover"
              width="300"
              height="200"
            />
            <div className="px-4 py-2 space-y-1 ">
              <h2 className="text-xl font-bold text-seaBlue p-2 mb-3 text-center rounded-lg border-t-2 border-seaBlue shadow shadow-seaBlue">
                {h.name}
              </h2>
              <p className="text-md text-gray-500 text-center px-2">
                {h.description}
              </p>
              <p className="text-sm text-gray-700">
                <strong>المنطقة:</strong> {h.region}
              </p>
              <p className="text-sm text-gray-700">
                <strong>العنوان:</strong> {h.address}
              </p>
              <p className="text-sm text-gray-700">
                <strong>التلفون:</strong> {h.contact}
              </p>
              {/* <div className="flex justify-center gap-4 mt-4">
                <button
                  className="bg-seaBlue px-4 py-2 rounded-s-xl border-2 border-seaBlue"
                  onClick={() =>
                    handleViewMap(
                      DATA.coordinates,
                      DATA.name,
                      DATA.image,
                      DATA.address
                    )
                  }
                >
                  عرض الخريطة
                </button>
                <button
                  className="px-4 py-2 rounded-e-xl text-seaBlue border-2 border-seaBlue"
                  onClick={() => toggleReviews(DATA.id)}
                >
                  {showReviews[DATA.id] ? "إخفاء التقييمات" : "عرض التقييمات"}
                </button>
              </div> */}
            </div>

            {/* عرض التقييمات إذا كانت الحالة true */}
            {/* {showReviews[DATA.id] && <ReviewsSection />} */}
          </div>
        ))}
      </div>

      {/* <section className="text-center mt-3">
        <Link href="/essentialPlaces">
          <button className="bg-seaBlue font-bold px-6 py-2 rounded mt-4 hover:bg-sandyGold transition-colors">
            العودة للأماكن الهامة
          </button>
        </Link>
      </section> */}
    </main>
  );
}
