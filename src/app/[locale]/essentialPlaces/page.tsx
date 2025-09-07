import Link from "@/components/link";
import Image from "next/image";
import { Pages, Routes } from "@/constants/enums";
import { getCurrentLocale } from "@/lib/getCurrentLocale";
import getTrans from "@/lib/translation";

const EssentialPlaces = async () => {
  const locale = await getCurrentLocale();
  const { essentialPlaces } = await getTrans(locale);
  return (
    <main className="container pt-28 mb-7">
      <div className="text-center mb-8">
        <Link
          href={`/${locale}/${Routes.ESSENTIAL_PLACES}`}
          className="text-xl text-primary hover:text-accent transition"
        >
          <h1 className="text-3xl font-bold text-gray-900 hover:text-primary dark:text-white">
            {essentialPlaces.title}
          </h1>
        </Link>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
        {essentialPlaces.subtitle}
        </p>
      </div>

      <section className="grid md:grid-cols-3 text-center font-serif">
        {/* Pharmacies Section */}
        <div className="mx-auto">
          <Link
            href={`/${locale}/${Routes.ESSENTIAL_PLACES}/${Pages.PHARMACIES}`}
          >
            <h2 className="font-extrabold text-xl md:text-4xl my-7 text-gray-600 hover:text-primary">
              {essentialPlaces.PHARMACIES}
            </h2>
          </Link>
          {/* <h2 className="font-bold text-xl md:text-4xl my-7">الصيدليات</h2> */}
          <Link
            href={`/${locale}/${Routes.ESSENTIAL_PLACES}/${Pages.PHARMACIES}`}
          >
            <Image
              className="rounded-xl shadow-2xl shadow-black w-[300px] h-[220px] hover:scale-105 transition-transform duration-300"
              src="https://res.cloudinary.com/dktod7mod/image/upload/v1757247143/product_images/portsaidIn/pharmacy_npd2rr.jpg"
              alt={essentialPlaces.PHARMACIES}
              width={280}
              height={140}
              priority
            />
          </Link>
        </div>

        {/* Clothing Stores Section */}
        <div className="mx-auto">
          <Link
            href={`/${locale}/${Routes.ESSENTIAL_PLACES}/${Pages.CLOTHING}`}
          >
            <h2 className="font-extrabold text-xl md:text-4xl my-7 text-gray-600 hover:text-primary">
              {essentialPlaces.CLOTHING}
            </h2>
          </Link>
          {/* <h2 className="font-bold text-xl md:text-4xl my-7">
            Clothing Stores 
          </h2> */}
          <Link
            href={`/${locale}/${Routes.ESSENTIAL_PLACES}/${Pages.CLOTHING}`}
          >
            <Image
              className="rounded-xl shadow-2xl shadow-black w-[300px] h-[220px] hover:scale-105 transition-transform duration-300"
              src="https://res.cloudinary.com/dktod7mod/image/upload/v1757246981/product_images/portsaidIn/clothing_tnjxkq.jpg"
              alt={essentialPlaces.CLOTHING}
              width={280}
              height={140}
              priority
            />
          </Link>
        </div>

        {/* Hospitals Section */}
        <div className="mx-auto">
          <Link
            href={`/${locale}/${Routes.ESSENTIAL_PLACES}/${Pages.HOSPITALS}`}
          >
            <h2 className="font-extrabold text-xl md:text-4xl my-7 text-gray-600 hover:text-primary">
              {essentialPlaces.HOSPITALS}
            </h2>
          </Link>
          <Link
            href={`/${locale}/${Routes.ESSENTIAL_PLACES}/${Pages.HOSPITALS}`}
          >
            <Image
              className="rounded-xl shadow-2xl shadow-black w-[300px] h-[220px] hover:scale-105 transition-transform duration-300"
              src="https://res.cloudinary.com/dktod7mod/image/upload/v1756332059/ChatGPT_Image_Aug_28_2025_12_57_17_AM_bcja46.png"
              alt={essentialPlaces.title}
              width={280}
              height={140}
              priority
            />
          </Link>
        </div>

        {/* Mobile Stores Section */}
        {/* <div className="mx-auto">
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
        </div> */}

        {/* Bookstores Section */}
        {/* <div className="mx-auto">
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
        </div> */}
      </section>

  
    </main>
  );
};

export default EssentialPlaces;
