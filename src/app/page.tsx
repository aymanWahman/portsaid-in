'use client';
import Image from "next/image";
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import DataNews from "../components/DataNews";

// Dynamic imports
const Hero = dynamic(() => import('@/components/Hero'), {
  loading: () => <div className="h-[60vh] bg-gray-100 animate-pulse" />
});

const FeaturedPlaces = dynamic(() => import('@/components/FeaturedPlaces'), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />
});

export default function Home() {
  return (
    <div className="min-h-screen mt-14 md:mt-16 shadow-xl">

      <Suspense fallback={<div className="h-[50vh] w-3/4 px-9 mx-5 bg-gray-100 animate-pulse" />}>
        <Hero />
      </Suspense>
      
      <section className="mb-5 p-5 mx-auto rounded-lg">
        <div className="grid md:grid-cols-2 place-items-center">
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl font-bold mb-4 text-seaBlue">
              في بورسعيد
            </h1>
            {/* تضمين الفيديو مع ضبط المقاسات */}
            <div className="relative w-full  rounded-lg overflow-hidden shadow-2xl border-4 border-gray-500">
              <video
                className="w-full h-full object-cover"
                autoPlay
                controls
                preload="none"
                poster="https://res.cloudinary.com/dktod7mod/image/upload/v1732627109/photo_4_2024-11-24_15-47-45_k9dapv.jpg"
                >
                <source src="https://res.cloudinary.com/dktod7mod/video/upload/v1732624266/portsaidView_i63tmz.mp4" type="video/mp4" />
            
            
                متصفحك لا يدعم تشغيل الفيديو
              </video>
            </div>
            <p className="mb-4 mt-2 text-gray-500 dark:text-seagullGray">
              اكتشف جمال بورسعيد من خلال مناظرها الخلابة
            </p>
          
          </div>

          <div dir="rtl" className="px-7 space-y-5">
            <p className="">
              بورسعيد هي مدينة ساحلية مصرية تقع علي المدخل الشمالي لقناة السويس.
            </p>
            <p className="">
              تأسست بورسعيد عام 1859م مع بدء أعمال حفر قناة السويس، وقد أنشئت
              خصيصا لتكون ميناء ومقرا للعاملين في مشروع القناة.
            </p>
            <p className="">
              سميت المدينة بهذا الأسم نسبة إلي الخديوي سعيد باشا، الذي حكم مصر
              في ذلك الوقت ووافق علي حفر قناة السويس.
            </p>
          
          </div>
        </div>
      </section>

      <Suspense fallback={<div className="h-64 bg-gray-100 animate-pulse" />}>
        <FeaturedPlaces />
      </Suspense>

      {/* قسم الأخبار */}
      <section className="pb-6 px-4">
        <h2 className="text-2xl font-bold text-center">أحدث الأخبار</h2>
        <div className="mt-3 ">
          {DataNews.map((news) => {
            return (
              <article key={news.id} className="grid md:grid-cols-3 gap-4 items-center p-4 rounded-lg shadow-xl transition-shadow duration-300">
                <div className='mx-auto'>
                  <Image
                    src={news.image}
                    alt={news.title}
                    width={260}
                    height={230}
                    className="rounded shadow-2xl w-80 h-64 pt-2" />
                </div>

                <div className='md:col-span-2 p-6 space-y-3'>
                  <h3 className='text-center font-bold text-xl md:text-3xl text-seaBlue'>{news.title}</h3>
                  <p className='text-center text-lg md:text-xl font-semibold '>{news.description}</p>

                </div>
              </article>
            );
          })}
        </div>
      </section>

  
    </div>
  );
}
