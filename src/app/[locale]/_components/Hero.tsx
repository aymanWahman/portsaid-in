import Link from '@/components/link';
import { buttonVariants } from '@/components/ui/button';
import { Languages, Routes } from '@/constants/enums';
import { getCurrentLocale } from '@/lib/getCurrentLocale';
import getTrans from '@/lib/translation';
import { ArrowRightCircle } from 'lucide-react';
import Image from 'next/image';

async function Hero() {
  const locale = await getCurrentLocale();

  const { home } = await getTrans(locale);
  const { hero } = home;
  return (
    <section className='section-gap'>

<div className="relative h-[40vh] container mx-auto">
      <div className="container mx-auto px-4 h-full relative">
        <div className="relative h-full w-full rounded-xl overflow-hidden">
          <Image
            src="/imgs/portsaid21.jpg"
            alt={hero.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <h1 className="text-3xl md:text-6xl font-bold mb-7">
              {hero.welcome}
            </h1>
            <p className="text-lg md:text-2xl ">
              {hero.welcome2}
            </p>
          </div>
        </div>
      </div>
    </div>

      
      <div className='container section-gap grid grid-cols-1 md:grid-cols-2 '>
        <div className='px-2 pb-6 md:pb-0 flex flex-col justify-center'>
          <h1 className='text-4xl font-semibold text-primary'>{hero.title}</h1>
          <p className='text-accent my-4'>{hero.description}</p>
          <div className='flex items-center gap-4'>
            <Link
              href={`/${locale}/${Routes.TOURIST_SPOTS}`}
              className={`${buttonVariants({
                size: 'lg',
              })} space-x-2 !px-4 !rounded-full uppercase`}
            >
              {hero.shoppingNow}
              <ArrowRightCircle
                className={`!w-5 !h-5 ${
                  locale === Languages.ARABIC ? 'rotate-180 ' : ''
                }`}
              />
            </Link>
            <Link
              href={`/${Routes.ABOUT}`}
              className='flex gap-2 items-center text-black hover:text-primary duration-200 transition-colors font-semibold'
            >
              {hero.about}
              <ArrowRightCircle
                className={`!w-5 !h-5 ${
                  locale === Languages.ARABIC ? 'rotate-180 ' : ''
                }`}
              />
            </Link>
          </div>
        </div>

          {/* Video Section */}
  
            <div className="relative  rounded-lg overflow-hidden shadow-2xl border-4 border-gray-500">
              <video
                className="w-full h-full object-cover"
                autoPlay
                controls
                preload="none"
                poster="https://res.cloudinary.com/dktod7mod/image/upload/v1732627109/photo_4_2024-11-24_15-47-45_k9dapv.jpg"
              >
                <source
                  src="https://res.cloudinary.com/dktod7mod/video/upload/v1732624266/portsaidView_i63tmz.mp4"
                  type="video/mp4"
                />
                متصفحك لا يدعم تشغيل الفيديو
              </video>
            </div>
            {/* <p className="mb-4 mt-2 text-gray-500 dark:text-seagullGray">
              اكتشف جمال بورسعيد من خلال مناظرها الخلابة
            </p> */}
          

      </div>
    </section>
  );
}
export default Hero;

