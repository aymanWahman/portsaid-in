


export default function Beaches() {
  return (
    <div className="mt-20">
      
      {/* قسم الفيديو الرئيسي */}
      <section className="relative h-[500px] w-full bg-cover bg-center" style={{ backgroundImage: "url('/images/port-said.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold">بورسعيد من السماء</h1>
            <p dir="rtl" className="mt-4">اكتشف جمال بورسعيد من خلال لقطات جوية رائعة.</p>
            
          </div>
        </div>
      </section>
      {/* باقي محتوى الصفحة */}
      <section className="py-12 px-4">
        <h2 className="text-2xl font-bold text-center">أحدث الأخبار</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* بطاقات الأخبار */}
        </div>
      </section>
    
    </div>
  );
}

