import Modal from "../../components/Modal";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
// import InteractiveMap from '@/components/InteractiveMap';
// import { touristPlaces } from '@/data/places';
// import { Suspense } from 'react';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

const TouristSpots: FC = () => {
  
  return (
    <div className="mb-7 px-5 mt-24">
      <h1 className="text-lg md:text-2xl font-semibold text-seaBlue hover:text-sandyGold text-center">
        الأماكن السياحية في بورسعيد
      </h1>

      {/* الخريطة التفاعلية */}
      {/* <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">استكشف الأماكن السياحية على الخريطة</h2>
        <Suspense fallback={<div className="h-[500px] bg-gray-100 animate-pulse rounded-xl" />}>
          <InteractiveMap places={touristPlaces} />
        </Suspense>
      </section> */}

      <section className="grid md:grid-cols-2 gap-4 p-5 text-center font-serif">
        {/* Restaurants */}
        <div className="mx-auto">
          <Link href="/tourist-spots/restaurant">
            <h2 className="font-extrabold text-xl md:text-4xl my-7 text-gray-600 hover:text-seaBlue">
              Restaurants
            </h2>
          </Link>
          <h2 className="font-bold text-xl md:text-4xl my-7 ">المطاعم</h2>
          <Link href="/tourist-spots/restaurant">
            <Image
              className="rounded-xl shadow-2xl shadow-black w-[300px] h-[220px] hover:scale-105 transition-transform duration-300"
              src="/imgs/rPizzaPino.jpg"
              alt="Restaurant"
              width={280}
              height={140}
              
              priority
            />
          </Link>
        </div>

        {/* Hotels */}
        <div className="mx-auto">
          <Link href="/tourist-spots/hotel">
            <h2 className="font-extrabold text-xl md:text-4xl my-7 text-gray-600 hover:text-seaBlue">
              Hotels
            </h2>
          </Link>
          <h2 className="font-bold text-xl md:text-4xl my-7"> الفنادق</h2>
          <Link href="/tourist-spots/hotel">
            <Image
              className="rounded-xl shadow-2xl shadow-black w-[300px] h-[220px] hover:scale-105 transition-transform duration-300"
              src="/imgs/hotel2.jpg"
              alt="Hotel"
              width={280}
              height={140}
              loading="lazy"
            
            />
          </Link>
        </div>

        {/* Gardens */}
        <div className="mx-auto">
          <Link href="/tourist-spots/garden">
            <h2 className="font-extrabold text-xl md:text-4xl my-7 text-gray-600 hover:text-seaBlue">
              Gardens
            </h2>
          </Link>
          <h2 className="font-bold text-xl md:text-4xl my-7"> الحدائق</h2>
          <Link href="/tourist-spots/garden">
            <Image
              className="rounded-xl shadow-2xl shadow-black w-[300px] h-[220px] hover:scale-105 transition-transform duration-300"
              src="/imgs/garden2.jpg"
              alt="Garden"
              width={280}
              height={140}
              loading="lazy"
              priority={false}
            />
          </Link>
        </div>

        {/* Beaches */}
        <div className="mx-auto">
          <Link href="/tourist-spots/beach">
            <h2 className="font-extrabold text-xl md:text-4xl my-7 text-gray-600 hover:text-seaBlue">
              Beaches
            </h2>
          </Link>
          <h2 className="font-bold text-xl md:text-4xl my-7"> الشواطئ</h2>
          <Link href="/tourist-spots/beach">
            <Image
              className="rounded-xl shadow-2xl shadow-black w-[300px] h-[220px] hover:scale-105 transition-transform duration-300"
              src="/imgs/portsaid5.jpg"
              alt="Beaches"
              width={280}
              height={140}
              
              priority
            />
          </Link>
        </div>
      </section>

      {/* Section: Final Message */}
      <section className="text-center mt-3">
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
    </div>
  );
};

export default TouristSpots;
