'use client';

import Image from "next/image";

export default function Home() {
  return (
    <div className="mt-14 md:mt-16 shadow-xl">
      
      {/* قسم الفيديو الرئيسي */}
      <section className="mb-5 p-5 mx-auto rounded-lg">
        <div className=" grid md:grid-cols-2 place-items-center ">
          <div className="text-center ">
            <h1 className="text-2xl md:text-3xl font-bold mb-4 text-seaBlue">في بورسعيد</h1>
            {/* تضمين الفيديو */}
            
              <iframe
                className="rounded-lg shadow-2xl border-4 border-gray-500 w-fit mx-auto"
                loading="lazy"
                width="100%"
                height="100%"
                src="/videos/portsaidin2.mp4"
                title="Portsaid-in"
                allow="autoplay"
                allowFullScreen
              ></iframe>
            <p className="mb-4 mt-2 text-gray-500 dark:text-seagullGray">اكتشف جمال بورسعيد من خلال مناظرها الخلابة </p>

            </div>
            
            <div dir="rtl" className="px-7 space-y-5">
            <p className="text-gray-600">بورسعيد هي مدينة ساحلية مصرية تقع علي المدخل الشمالي لقناة السويس.</p>
            <p className="text-gray-600">تأسست بورسعيد عام 1859م مع بدء أعمال حفر قناة السويس، وقد أنشئت خصيصا لتكون ميناء ومقرا للعاملين في مشروع القناة.</p>
            <p className="text-gray-600">سميت المدينة بهذا الأسم نسبة إلي الخديوي سعيد باشا، الذي حكم مصر في ذلك الوقت ووافق علي حفر قناة السويس.</p>

          </div>
        </div>
      </section>

      {/* باقي محتوى الصفحة */}
      <section className="pb-6 px-4">
        <h2 className="text-2xl font-bold text-center">أحدث الأخبار</h2>
        <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-4 ">
          {/* بطاقات الأخبار */}
          <div className="">
          <Image
           className="rounded-xl border-2 border-gray-600 shadow-xl w-full h-[250px]"
           src="/imgs/news1.jpg"
           alt="Portsaidin"
           width={250}
           height={220}
           priority
         />
         <p className="text-center p-2">انتعاش في السياحة العالمية: شهدت بورسعيد عودة قوية للسياحة، حيث استقبلت أكثر من 10,000 سائح خلال شهر واحد. تضمنت الفعاليات أجواء احتفالية في ساحة مصر واستقبال السفن السياحية بعروض السمسمية الشهيرة​
 </p>
          </div>
          <div className="">
          <Image
           className="rounded-xl border-2 border-gray-600 shadow-xl w-full h-[250px]"
           src="/imgs/news3.jpg"
           alt="Portsaidin"
           width={250}
           height={220}
           priority
         />
         <p className="text-center p-2">يشهد ميناء بورسعيد السياحي، فجر غد الثلاثاء، استقبال السفينة السياحية الفاخرة (LIRICA 2) ضمن رحلات سياحة اليوم الواحد، حيث وجه المحافظ اللواء محب حبشي، بتوفير كافة الخدمات والترتيبات اللازمة لاستقبال الضيوف الكرام، وذلك في إطار حرص المحافظة على تعزيز السياحة ورفع شأن مصر</p>
          </div>
          <div className="">
          <Image
           className="rounded-xl border-2 border-gray-600 shadow-xl w-full h-[250px]"
           src="/imgs/news2.jpg"
           alt="Portsaidin"
           width={250}
           height={220}
           priority
         />
         <p className="text-center p-2">ميناء بورسعيد السياحى يستقبل 4 سفن سياحية ويختا فى 20 يوما.. الأهالى: بشائر الخير هلت علينا.. حمام السلام يستقبل الزوار فى ساحة مصر.. ومسئولو السياحة يقدمون الورود لأكثر من 5 آلاف سائح خلال الشهر الحالى</p>
          </div>
        </div>
      </section>
    
    </div>
  );
}



