import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const Pharmacies: FC = () => {
  return (
    <div className="mt-20 md:mt-24 mb-7 px-5">
      <h1 className="text-lg md:text-2xl font-semibold text-seaBlue hover:text-sandyGold text-center">
        الصيدليات في بورسعيد
      </h1>

      <section className="grid md:grid-cols-2 gap-4 p-5 text-center text-gray-600 font-serif">
        {/* Example Pharmacy 1 */}
        <div className="mx-auto">
          <h2 className="font-bold text-xl md:text-2xl my-7 text-seaBlue">
            صيدلية الهلال
          </h2>
          <Image
            className="rounded-xl shadow-2xl shadow-black w-[300px] h-[220px] hover:scale-105 transition-transform duration-300"
            src="/imgs/portsaid8.jpg"
            alt="Hilal Pharmacy"
            width={280}
            height={140}
            priority
          />
          <p className="mt-3 text-gray-700">صيدلية تعمل 24 ساعة لخدمتك.</p>
        </div>

        {/* Example Pharmacy 2 */}
        <div className="mx-auto">
          <h2 className="font-bold text-xl md:text-2xl my-7 text-seaBlue">
            صيدلية العزبي
          </h2>
          <Image
            className="rounded-xl shadow-2xl shadow-black w-[300px] h-[220px] hover:scale-105 transition-transform duration-300"
            src="/imgs/pElezaby.jpg"
            alt="Elezaby Pharmacy"
            width={280}
            height={140}
            loading="lazy"
          />
          <p className="mt-3 text-gray-700">تخصص في توفير الأدوية النادرة.</p>
        </div>
      </section>

      <section className="text-center mt-3">
        <Link href="/essentialPlaces">
          <button className="bg-seaBlue text-white font-bold px-6 py-2 rounded mt-4 hover:bg-sandyGold transition-colors">
            العودة للأماكن الهامة
          </button>
        </Link>
      </section>
    </div>
  );
};

export default Pharmacies;
