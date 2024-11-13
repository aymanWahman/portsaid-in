'use client'

// import Image from "next/image";
import Link from "next/link";

export default function Restaurant() {
  return (
    <div className="mt-20 md:mt-24 shadow-xl">
      
      {/* قسم الفيديو الرئيسي */}
      <section className="mb-5 p-5 mx-auto rounded-lg">
        <div className=" grid md:grid-cols-2 place-items-center ">
          <div className="text-center ">
            <h1 className="text-2xl md:text-4xl font-bold mb-3 text-seaBlue">مطاعم بورسعيد</h1>
            {/* تضمين الفيديو */}
            
              <iframe
                className="rounded-lg shadow-2xl border-4 border-gray-500"
                loading="lazy"
                width="100%"
                height="100%"
                src="/videos/portsaidin2.mp4"
                title="Portsaid-in"
                allowFullScreen
              ></iframe>
            <p className="mb-4 mt-2 text-gray-500 dark:text-seagullGray">اكتشف جمال بورسعيد من خلال مناظرها الخلابة </p>

            </div>
            
            <div dir="rtl" className="px-7 space-y-5 text-seaBlue text-2xl font-semibold">
         <Link href="/"><h2>منطقة الشرق</h2></Link>
        <Link href="/"><h2>منطقة العرب</h2></Link>
        
          </div>
        </div>
      </section>

    
    
    </div>
  );
}



