// 'use client';

import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const TouristSpots: FC = () => {
  return (
    <div className="mt-20 md:mt-24 mb-7 px-5">
      <h1 className="text-lg md:text-2xl font-semibold text-seaBlue hover:text-sandyGold text-center">
        الأماكن السياحية في بورسعيد
      </h1>

      <section className="grid md:grid-cols-2 gap-4 p-5 text-center text-gray-600 font-serif">
        <div className="mx-auto">
          <Link href="/tourist-spots/restaurant">
            <h2 className="font-extrabold text-xl md:text-4xl my-7 hover:text-seaBlue">
              Restaurants
            </h2>
          </Link>
          <h2 className="font-bold text-xl md:text-4xl my-7 ">المطاعم</h2>
          <Link href="/tourist-spots/restaurant">
            <Image
              className="rounded-xl shadow-2xl shadow-black w-[300px] h-[220px] hover:scale-105 transition-transform duration-300"
              src="/imgs/portsaidPizzaPino.jpg"
              alt="Restaurant"
              width={280}
              height={140}
              loading="lazy"
              priority={false}
            />
          </Link>
        </div>

      

        <div className="mx-auto">
          <Link href="/tourist-spots/hotel">
            <h2 className="font-extrabold text-xl md:text-4xl my-7 hover:text-seaBlue">
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
              priority={false}
            />
          </Link>
        </div>

        <div className="mx-auto">
          <Link href="/tourist-spots/hotel">
            <h2 className="font-extrabold text-xl md:text-4xl my-7 hover:text-seaBlue">
              Gardens
            </h2>
          </Link>
          <h2 className="font-bold text-xl md:text-4xl my-7"> الحدائق</h2>
          <Link href="/tourist-spots/garden">
            <Image
              className="rounded-xl shadow-2xl shadow-black w-[300px] h-[220px] hover:scale-105 transition-transform duration-300"
              src="/imgs/garden.jfif"
              alt="Garden"
              width={280}
              height={140}
              loading="lazy"
              priority={false}
            />
          </Link>
        </div>
        <div className="mx-auto">
          <Link href="/tourist-spots/beach">
            <h2 className="font-extrabold text-xl md:text-4xl my-7 hover:text-seaBlue">
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
              loading="lazy"
              priority={false}
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
      </section>
    </div>
  );
};

export default TouristSpots;
