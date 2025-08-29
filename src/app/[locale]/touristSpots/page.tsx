import Modal from "@/components/Modal";
import Image from "next/image";
import { Pages, Routes } from "@/constants/enums";
import { getCurrentLocale } from "@/lib/getCurrentLocale";
import getTrans from "@/lib/translation";
import Link from "@/components/link";

// import InteractiveMap from '@/components/InteractiveMap';
// import { touristPlaces } from '@/data/places';
// import { Suspense } from 'react';

// export const viewport = {
//   width: "device-width",
//   initialScale: 1,
// };

const TouristSpots = async () => {
  const locale = await getCurrentLocale();
  const { touristSpots } = await getTrans(locale);

  return (
    <main className="container mb-7 pt-24">
      <h1 className="text-lg md:text-2xl font-semibold text-primary hover:text-accent text-center">
        {touristSpots.title}
      </h1>

      {/* الخريطة التفاعلية */}
      {/* <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">استكشف الأماكن السياحية على الخريطة</h2>
        <Suspense fallback={<div className="h-[500px] bg-gray-100 animate-pulse rounded-xl" />}>
          <InteractiveMap places={touristPlaces} />
        </Suspense>
      </section> */}

      <section className="grid md:grid-cols-2 gap-4 text-center font-serif">
        {/* Restaurants */}
        <div className="mx-auto ">
          <Link href={`/${locale}/${Routes.TOURIST_SPOTS}/${Pages.RESTAURANT}`}>
            <h2 className="font-extrabold text-xl md:text-4xl my-7 text-accent hover:text-primary">
              {touristSpots.RESTAURANT}
            </h2>
          </Link>
          {/* <h2 className="font-bold text-xl md:text-4xl my-7 ">المطاعم</h2> */}
          <Link href={`/${locale}/${Routes.TOURIST_SPOTS}/${Pages.RESTAURANT}`}>
            <Image
              className="rounded-xl shadow-2xl shadow-black w-[400px] h-[220px] hover:scale-105 transition-transform duration-300"
              src="https://res.cloudinary.com/dktod7mod/image/upload/v1756466905/ChatGPT_Image_Aug_29_2025_02_23_41_PM_zkophj.png"
              alt={touristSpots.RESTAURANT}
              width={280}
              height={140}
              priority
            />
          </Link>
        </div>

        {/* Hotels */}
        <div className="mx-auto">
          <Link href={`/${locale}/${Routes.TOURIST_SPOTS}/${Pages.HOTEL}`}>
            <h2 className="font-extrabold text-xl md:text-4xl my-7 text-accent hover:text-primary">
              {touristSpots.HOTEL}
            </h2>
          </Link>
          {/* <h2 className="font-bold text-xl md:text-4xl my-7"> الفنادق</h2> */}
          <Link href={`/${locale}/${Routes.TOURIST_SPOTS}/${Pages.HOTEL}`}>
            <Image
              className="rounded-xl shadow-2xl shadow-black w-[400px] h-[220px] hover:scale-105 transition-transform duration-300"
              src="https://res.cloudinary.com/dktod7mod/image/upload/v1756466994/ChatGPT_Image_Aug_29_2025_02_21_24_PM_yvxhb2.png"
              alt={touristSpots.HOTEL}
              width={280}
              height={140}
              loading="lazy"
            />
          </Link>
        </div>

        {/* Gardens */}
        <div className="mx-auto">
          <Link href={`/${locale}/${Routes.TOURIST_SPOTS}/${Pages.GARDEN}`}>
            <h2 className="font-extrabold text-xl md:text-4xl my-7 text-accent hover:text-primary">
              {touristSpots.GARDEN}
            </h2>
          </Link>
          {/* <h2 className="font-bold text-xl md:text-4xl my-7"> الحدائق</h2> */}
          <Link href={`/${locale}/${Routes.TOURIST_SPOTS}/${Pages.GARDEN}`}>
            <Image
              className="rounded-xl shadow-2xl shadow-black w-[400px] h-[220px] hover:scale-105 transition-transform duration-300"
              src="https://res.cloudinary.com/dktod7mod/image/upload/v1756467619/ChatGPT_Image_Aug_29_2025_02_37_27_PM_syxix4.png"
              alt={touristSpots.GARDEN}
              width={280}
              height={140}
              loading="lazy"
              priority={false}
            />
          </Link>
        </div>

        {/* Beaches */}
        <div className="mx-auto">
          <Link href={`/${locale}/${Routes.TOURIST_SPOTS}/${Pages.BEACH}`}>
            <h2 className="font-extrabold text-xl md:text-4xl my-7 text-accent hover:text-primary">
              {touristSpots.BEACH}
            </h2>
          </Link>
          {/* <h2 className="font-bold text-xl md:text-4xl my-7"> الشواطئ</h2> */}
          <Link href={`/${locale}/${Routes.TOURIST_SPOTS}/${Pages.BEACH}`}>
            <Image
              className="rounded-xl shadow-2xl shadow-black w-[400px] h-[220px] hover:scale-105 transition-transform duration-300"
              src="https://res.cloudinary.com/dktod7mod/image/upload/v1756467287/ChatGPT_Image_Aug_29_2025_02_33_55_PM_iq3dui.png"
              alt={touristSpots.BEACH}
              width={280}
              height={140}
              priority
            />
          </Link>
        </div>
      </section>

      {/* Section: Final Message */}
      <section className="container text-center mt-5">
        <h3
          dir="rtl"
          className="font-bold text-lg md:text-2xl hover:text-sandyGold transition-colors duration-300"
        >
          تعرف على أفضل الأماكن في بورسعيد
        </h3>
        <Modal
          title="About Port Said"
          content="Port Said is one of Egypt's most famous coastal cities. It serves as a gateway to the Suez Canal, rich with cultural heritage and scenic beauty."
          contentA="بورسعيد هي إحدى أشهر المدن الساحلية في مصر. تُعد بوابةً لقناة السويس وتتميز بتراثها الثقافي الغني وجمالها الطبيعي الخلاب."
        />
      </section>
    </main>
  );
};

export default TouristSpots;
