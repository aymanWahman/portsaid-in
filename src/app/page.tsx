'use client';

import Image from "next/image";
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import DataNews from "../components/DataNews";

// Dynamic imports
const Hero = dynamic(() => import('../components/Hero'), {
  loading: () => <div className="h-[60vh] bg-gray-100 animate-pulse" />
});

const FeaturedPlaces = dynamic(() => import('../components/FeaturedPlaces'), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />
});

export default function Home() {


  return (
    <main className="min-h-screen mt-24">
      {/* Hero Section */}
      <Suspense fallback={<div className="h-[50vh] w-full bg-gray-100 animate-pulse" />}>
        <Hero />
      </Suspense>


      {/* Video Section */}
      <section className="container mx-auto mt-2 p-5">
        <div className="grid md:grid-cols-2 gap-8 place-items-center">
          <div className="text-center space-y-4">
            <h1 className="text-2xl md:text-3xl animate-fade-in font-bold text-seaBlue mb-4">
              في بورسعيد
            </h1>
            <div className="relative w-full rounded-lg overflow-hidden shadow-2xl border-4 border-gray-500">
              <video
                className="w-full h-full object-cover"
                autoPlay
                controls
                preload="none"
                poster="https://res.cloudinary.com/dktod7mod/image/upload/v1732627109/photo_4_2024-11-24_15-47-45_k9dapv.jpg"
              >
                <source
                  src="https://res.cloudinary.com/dktod7mod/video/upload/v1732624266/portsaidView_i63tmz.mp4"
                  type="video/mp4"
                />
                متصفحك لا يدعم تشغيل الفيديو
              </video>
            </div>
            <p className="mb-4 mt-2 text-gray-500 dark:text-seagullGray">
              اكتشف جمال بورسعيد من خلال مناظرها الخلابة
            </p>
          </div>

          <div dir="rtl" className="px-7 space-y-5">
            <p>
              بورسعيد هي مدينة ساحلية مصرية تقع علي المدخل الشمالي لقناة السويس.
            </p>
            <p>
              تأسست بورسعيد عام 1859م مع بدء أعمال حفر قناة السويس، وقد أنشئت
              خصيصا لتكون ميناء ومقرا للعاملين في مشروع القناة.
            </p>
            <p>
              سميت المدينة بهذا الأسم نسبة إلي الخديوي سعيد باشا، الذي حكم مصر
              في ذلك الوقت ووافق علي حفر قناة السويس.
            </p>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-seaBlue mb-8">أحدث الأخبار</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DataNews.map((news) => (
              <article
                key={news.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
              >
                <div className="relative h-48">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-xl font-semibold mb-2 text-seaBlue">{news.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 line-clamp-2">
                    {news.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Places */}
      <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse rounded-xl" />}>
        <FeaturedPlaces />
      </Suspense>

    </main>
  );
}