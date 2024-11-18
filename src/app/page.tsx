"use client";

// import Image from "next/image";
import DataNews from "../components/DataNews";
import NewsCard from "../components/NewsCard";

export default function Home() {
  return (
    <div className="mt-14 md:mt-16 shadow-xl">
      {/* قسم الفيديو الرئيسي */}

      <section className="mb-5 p-5 mx-auto rounded-lg">
        <div className="grid md:grid-cols-2 place-items-center">
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl font-bold mb-4 text-seaBlue">
              في بورسعيد
            </h1>
            {/* تضمين الفيديو مع ضبط المقاسات */}
            <div className="relative w-full h-[250px] md:h-[300px] rounded-lg overflow-hidden shadow-2xl border-4 border-gray-500">
              <video
                className="w-full h-full object-cover"
                autoPlay
                preload="metadata"
                src="/videos/portsaidin2.mp4"
              >
                متصفحك لا يدعم تشغيل الفيديو.
              </video>
            </div>
            <p className="mb-4 mt-2 text-gray-500 dark:text-seagullGray">
              اكتشف جمال بورسعيد من خلال مناظرها الخلابة
            </p>
          </div>

          <div dir="rtl" className="px-7 space-y-5">
            <p className="text-gray-600">
              بورسعيد هي مدينة ساحلية مصرية تقع علي المدخل الشمالي لقناة السويس.
            </p>
            <p className="text-gray-600">
              تأسست بورسعيد عام 1859م مع بدء أعمال حفر قناة السويس، وقد أنشئت
              خصيصا لتكون ميناء ومقرا للعاملين في مشروع القناة.
            </p>
            <p className="text-gray-600">
              سميت المدينة بهذا الأسم نسبة إلي الخديوي سعيد باشا، الذي حكم مصر
              في ذلك الوقت ووافق علي حفر قناة السويس.
            </p>
          </div>
        </div>
      </section>

      {/* قسم الأخبار */}
      <section className="pb-6 px-4">
        <h2 className="text-2xl font-bold text-center">أحدث الأخبار</h2>
        <div className="mt-3 ">
          {DataNews.map((newsItem) => (
            <NewsCard key={newsItem.id} news={newsItem} />
          ))}
        </div>
      </section>
    </div>
  );
}
