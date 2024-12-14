import Modal from "../../components/Modal";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const EssentialPlaces: FC = () => {
  return (
    <div className="mb-7 px-5 mt-24">
      <h1 className="text-lg md:text-2xl font-semibold text-seaBlue hover:text-sandyGold text-center">
        الأماكن الهامة في بورسعيد
      </h1>

      <section className="grid md:grid-cols-2 gap-4 p-5 text-center  font-serif">
        {/* Pharmacies Section */}
        <div className="mx-auto">
          <Link href="/essential-places/pharmacies">
            <h2 className="font-extrabold text-xl md:text-4xl my-7 text-gray-600 hover:text-seaBlue">
              Pharmacies
            </h2>
          </Link>
          <h2 className="font-bold text-xl md:text-4xl my-7">الصيدليات</h2>
          <Link href="/essentialPlaces/pharmacies">
            <Image
              className="rounded-xl shadow-2xl shadow-black w-[300px] h-[220px] hover:scale-105 transition-transform duration-300"
              src="/imgs/pharmacy.jpg"
              alt="Pharmacies"
              width={280}
              height={140}
              priority
            />
          </Link>
        </div>

        {/* Clothing Stores Section */}
        <div className="mx-auto">
          <Link href="/essentialPlaces/clothing">
            <h2 className="font-extrabold text-xl md:text-4xl my-7 text-gray-600 hover:text-seaBlue">
              Clothing Stores
            </h2>
          </Link>
          <h2 className="font-bold text-xl md:text-4xl my-7">محلات الملابس</h2>
          <Link href="/essentialPlaces/clothing">
            <Image
              className="rounded-xl shadow-2xl shadow-black w-[300px] h-[220px] hover:scale-105 transition-transform duration-300"
              src="/imgs/clothing.jpg"
              alt="Clothing Stores"
              width={280}
              height={140}
              priority
            />
          </Link>
        </div>

        {/* Mobile Stores Section */}
        <div className="mx-auto">
          <Link href="/essentialPlaces/mobile-stores">
            <h2 className="font-extrabold text-xl md:text-4xl my-7 text-gray-600 hover:text-seaBlue">
              Mobile Stores
            </h2>
          </Link>
          <h2 className="font-bold text-xl md:text-4xl my-7">محلات المحمول</h2>
          <Link href="/essentialPlaces/mobile-stores">
            <Image
              className="rounded-xl shadow-2xl shadow-black w-[300px] h-[220px] hover:scale-105 transition-transform duration-300"
              src="/imgs/mobile-stores.jpg"
              alt="Mobile Stores"
              width={280}
              height={140}
              priority
            />
          </Link>
        </div>

        {/* Bookstores Section */}
        <div className="mx-auto">
          <Link href="/essentialPlaces/bookstores">
            <h2 className="font-extrabold text-xl md:text-4xl my-7 text-gray-600 hover:text-seaBlue">
              Bookstores
            </h2>
          </Link>
          <h2 className="font-bold text-xl md:text-4xl my-7">المكتبات</h2>
          <Link href="/essentialPlaces/bookstores">
            <Image
              className="rounded-xl shadow-2xl shadow-black w-[300px] h-[220px] hover:scale-105 transition-transform duration-300"
              src="/imgs/bookstores.jpg"
              alt="Bookstores"
              width={280}
              height={140}
              priority
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
          استكشف أهم الأماكن في بورسعيد
        </h3>
        <Modal
          title="About Essential Places"
          content="Explore the essential places in Port Said, from pharmacies to bookstores, all designed to meet your daily needs."
          contentA="اكتشف الأماكن الهامة في بورسعيد، من الصيدليات إلى المكتبات، لتلبية احتياجاتك اليومية."
        />
      </section>
    </div>
  );
};

export default EssentialPlaces;
