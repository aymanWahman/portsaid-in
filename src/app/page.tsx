/* eslint-disable react/no-unescaped-entities */


import Image from "next/image";

export default function Home() {
  return (
    <div className="mt-24 shadow-xl">
      
      {/* قسم الفيديو الرئيسي */}
      <section className="mb-5 p-5 mx-auto rounded-lg">
        <div className=" grid md:grid-cols-2 place-items-center ">
          <div className="text-center ">
            <h1 className="text-4xl font-bold mb-3">في بورسعيد</h1>
            {/* تضمين الفيديو */}
            
              <iframe
                className="rounded-lg shadow-2xl border-4 border-gray-500"
                loading="lazy"
                width="100%"
                height="100%"
                src="/videos/portsaidin2.mp4"
                title="Portsaidin"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            <p className="mb-4 mt-2 text-gray-600">اكتشف جمال بورسعيد من خلال مناظرها الخلابة </p>

            </div>
            
            <div dir="rtl" className="px-7 space-y-5">
            <p className="text-gray-600">بورسعيد هي مدينة ساحلية مصرية تقع علي المدخل الشمالي لقناة السويس.</p>
            <p className="text-gray-600">تأسست بورسعيد عام 1859م مع بدء أعمال حفر قناة السويس، وقد أنشئت خصيصا لتكون ميناء ومقرا للعاملين في مشروع القناة.</p>
            <p className="text-gray-600">سميت المدينة بهذا الأسم نسبة إلي الخديوي سعيد باشا، الذي حكم مصر في ذلك الوقت ووافق علي حفر قناة السويس، يشير الاسم إلي "بور" بمعنى ميناء، و"سعيد" نسبة للخديوي.</p>

          </div>
        </div>
      </section>

      {/* باقي محتوى الصفحة */}
      <section className="pb-6 px-4">
        <h2 className="text-2xl font-bold text-center">أحدث الأخبار</h2>
        <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-4 place-items-center">
          {/* بطاقات الأخبار */}
          <div className="">
          <Image
           className="rounded-xl border-2 border-gray-600 shadow-xl w-[300px] h-[200px]"
           src="/imgs/portsaid1.jpg"
           alt="Portsaidin"
           width={250}
           height={220}
           priority
         />
          </div>
          <div className="">
          <Image
           className="rounded-xl border-2 border-gray-600 shadow-xl w-[300px] h-[200px]"
           src="/imgs/portsaid3.jpg"
           alt="Portsaidin"
           width={250}
           height={220}
           priority
         />
          </div>
          <div className="">
          <Image
           className="rounded-xl border-2 border-gray-600 shadow-xl w-[300px] h-[200px]"
           src="/imgs/portsaid4.jpg"
           alt="Portsaidin"
           width={250}
           height={220}
           priority
         />
          </div>
        </div>
      </section>
    
    </div>
  );
}



