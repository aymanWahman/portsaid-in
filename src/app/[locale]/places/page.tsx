
import Image from "next/image";
import { Pages, Routes } from "@/constants/enums";
import { getCurrentLocale } from "@/lib/getCurrentLocale";
import getTrans from "@/lib/translation";
import Link from "@/components/link";
import { Translations } from "@/types/translations";

const TouristSpots = async () => {
  const locale = await getCurrentLocale();
  const translations: Translations = await getTrans(locale);

  return (
    <main className="container mb-7 pt-28">
      <h1 className="text-xl md:text-3xl font-semibold text-primary  text-center font-serif ">
        {translations.places.title}
      </h1>
      <h2 className="text-lg md:text-xl  text-center text-accent my-3 font-serif">
        {translations.places.subtitle}
      </h2>

    

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-center font-serif">
        {/* Restaurants */}
        <div className="mx-auto ">
          <Link href={`/${locale}/${Routes.PLACES}/${Pages.RESTAURANT}`}>
            <h2 className="font-extrabold text-xl md:text-4xl my-7 text-accent hover:text-primary">
              {translations.places.RESTAURANT}
            </h2>
          </Link>
          {/* <h2 className="font-bold text-xl md:text-4xl my-7 ">المطاعم</h2> */}
          <Link href={`/${locale}/${Routes.PLACES}/${Pages.RESTAURANT}`}>
            <Image
              className="rounded-xl shadow-2xl shadow-black w-[400px] h-[220px] hover:scale-105 transition-transform duration-300"
              src="https://res.cloudinary.com/dktod7mod/image/upload/v1756466905/ChatGPT_Image_Aug_29_2025_02_23_41_PM_zkophj.png"
              alt={translations.places.RESTAURANT}
              width={280}
              height={140}
              priority
            />
          </Link>
        </div>

        {/* Hotels */}
        <div className="mx-auto">
          <Link href={`/${locale}/${Routes.PLACES}/${Pages.HOTEL}`}>
            <h2 className="font-extrabold text-xl md:text-4xl my-7 text-accent hover:text-primary">
              {translations.places.HOTEL}
            </h2>
          </Link>
          {/* <h2 className="font-bold text-xl md:text-4xl my-7"> الفنادق</h2> */}
          <Link href={`/${locale}/${Routes.PLACES}/${Pages.HOTEL}`}>
            <Image
              className="rounded-xl shadow-2xl shadow-black w-[400px] h-[220px] hover:scale-105 transition-transform duration-300"
              src="https://res.cloudinary.com/dktod7mod/image/upload/v1756466994/ChatGPT_Image_Aug_29_2025_02_21_24_PM_yvxhb2.png"
              alt={translations.places.HOTEL}
              width={280}
              height={140}
              loading="lazy"
            />
          </Link>
        </div>

        {/* Gardens */}
        <div className="mx-auto">
          <Link href={`/${locale}/${Routes.PLACES}/${Pages.GARDEN}`}>
            <h2 className="font-extrabold text-xl md:text-4xl my-7 text-accent hover:text-primary">
              {translations.places.GARDEN}
            </h2>
          </Link>
          {/* <h2 className="font-bold text-xl md:text-4xl my-7"> الحدائق</h2> */}
          <Link href={`/${locale}/${Routes.PLACES}/${Pages.GARDEN}`}>
            <Image
              className="rounded-xl shadow-2xl shadow-black w-[400px] h-[220px] hover:scale-105 transition-transform duration-300"
              src="https://res.cloudinary.com/dktod7mod/image/upload/v1756467619/ChatGPT_Image_Aug_29_2025_02_37_27_PM_syxix4.png"
              alt={translations.places.GARDEN}
              width={280}
              height={140}
              loading="lazy"
              priority={false}
            />
          </Link>
        </div>
    {/* Beaches */}
        <div className="mx-auto">
          <Link href={`/${locale}/${Routes.PLACES}/${Pages.BEACH}`}>
            <h2 className="font-extrabold text-xl md:text-4xl my-7 text-accent hover:text-primary">
              {translations.places.BEACH}
            </h2>
          </Link>
          {/* <h2 className="font-bold text-xl md:text-4xl my-7"> الشواطئ</h2> */}
          <Link href={`/${locale}/${Routes.PLACES}/${Pages.BEACH}`}>
            <Image
              className="rounded-xl shadow-2xl shadow-black w-[400px] h-[220px] hover:scale-105 transition-transform duration-300"
              src="https://res.cloudinary.com/dktod7mod/image/upload/v1756467287/ChatGPT_Image_Aug_29_2025_02_33_55_PM_iq3dui.png"
              alt={translations.places.BEACH}
              width={280}
              height={140}
              priority
            />
          </Link>
        </div>
    {/* Clothes */}
        <div className="mx-auto">
          <Link href={`/${locale}/${Routes.PLACES}/${Pages.CLOTHING}`}>
            <h2 className="font-extrabold text-xl md:text-4xl my-7 text-accent hover:text-primary">
              {translations.places.CLOTHING}
            </h2>
          </Link>
          
          <Link href={`/${locale}/${Routes.PLACES}/${Pages.CLOTHING}`}>
            <Image
              className="rounded-xl shadow-2xl shadow-black w-[400px] h-[220px] hover:scale-105 transition-transform duration-300"
              src="https://res.cloudinary.com/dktod7mod/image/upload/v1757246981/product_images/portsaidIn/clothing_tnjxkq.jpg"
              alt={translations.places.CLOTHING}
              width={280}
              height={140}
              priority
            />
          </Link>
        </div>

    {/* Hospitals */}
        <div className="mx-auto">
          <Link href={`/${locale}/${Routes.PLACES}/${Pages.HOSPITALS}`}>
            <h2 className="font-extrabold text-xl md:text-4xl my-7 text-accent hover:text-primary">
              {translations.places.HOSPITALS}
            </h2>
          </Link>
          
          <Link href={`/${locale}/${Routes.PLACES}/${Pages.HOSPITALS}`}>
            <Image
              className="rounded-xl shadow-2xl shadow-black w-[400px] h-[220px] hover:scale-105 transition-transform duration-300"
              src="https://res.cloudinary.com/dktod7mod/image/upload/v1756332059/ChatGPT_Image_Aug_28_2025_12_57_17_AM_bcja46.png"
              alt={translations.places.HOSPITALS}
              width={280}
              height={140}
              priority
            />
          </Link>
        </div>

    {/* Pharmacy */}
        <div className="mx-auto">
          <Link href={`/${locale}/${Routes.PLACES}/${Pages.PHARMACIES}`}>
            <h2 className="font-extrabold text-xl md:text-4xl my-7 text-accent hover:text-primary">
              {translations.places.PHARMACIES}
            </h2>
          </Link>
          
          <Link href={`/${locale}/${Routes.PLACES}/${Pages.PHARMACIES}`}>
            <Image
              className="rounded-xl shadow-2xl shadow-black w-[400px] h-[220px] hover:scale-105 transition-transform duration-300"
              src="https://res.cloudinary.com/dktod7mod/image/upload/v1757247143/product_images/portsaidIn/pharmacy_npd2rr.jpg"
              alt={translations.places.PHARMACIES}
              width={280}
              height={140}
              priority
            />
          </Link>
        </div>
    
        
      </section>


    </main>
  );
};

export default TouristSpots;


