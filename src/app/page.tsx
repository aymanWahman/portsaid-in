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



// import Image from "next/image";

// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-5 ">
    

//       {/* <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
//         <Image
//           className="rounded-xl relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
//           src="/imgs/portsaid1.jpg"
//           alt="Next.js Logo"
//           width={350}
//           height={222}
//           priority
//         />
          
//       </div> */}
      
//       {/* Hero Section */}
//       <section className="bg-cover bg-center h-[500px] text-white flex items-center justify-center" style={{ backgroundImage: "url('/path-to-image.jpg')" }}>
//         <div className="text-center">
//           <h1 className="text-4xl font-bold">مرحباً بك في بورسعيد إن</h1>
//           <p className="mt-4">اكتشف كل جديد في بورسعيد، من الأخبار إلى الأماكن السياحية والخدمات المحلية.</p>
//           <button className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-full">استكشاف المزيد</button>
//         </div>
//       </section>
      
//       {/* Latest News Section */}
//       <section className="py-12 px-4">
//         <h2 className="text-2xl font-bold text-center">أحدث الأخبار</h2>
//         <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
//           {/* Example of News Card */}
//           <div className="bg-white rounded-lg shadow-md p-4">
//             <img src="/imgs/portsaid1.jpg" alt="News" className="rounded-t-lg" />
//             <h3 className="mt-4 text-lg font-semibold">عنوان الخبر</h3>
//             <p className="text-gray-600">ملخص مختصر للخبر يتيح للزائر معرفة المزيد</p>
//             <button className="mt-4 text-blue-500">قراءة المزيد</button>
//           </div>
//         </div>
//       </section>
      
//       {/* Tourist Spots Section */}
//       <section className="py-12 px-4 bg-gray-200">
//         <h2 className="text-2xl font-bold text-center">أماكن سياحية في بورسعيد</h2>
//         <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
//           {/* Example of Tourist Spot Card */}
//           <div className="bg-white rounded-lg shadow-md p-4">
//             <img src="/imgs/portsaid1.jpg" alt="Place" className="rounded-t-lg" />
//             <h3 className="mt-4 text-lg font-semibold">اسم المكان السياحي</h3>
//             <p className="text-gray-600">وصف مختصر عن المكان السياحي.</p>
//             <button className="mt-4 text-blue-500">اكتشف المزيد</button>
//           </div>
//         </div>
//       </section>
      


//     </main>
//   );
// }
