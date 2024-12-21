'use client';

import Image from 'next/image';


export default function Hero() {
  return (
    <div className="relative h-[40vh] w-full">
      <div className="container mx-auto px-4 h-full relative">
        <div className="relative h-full w-full rounded-xl overflow-hidden">
          <Image
            src="/imgs/portsaid21.jpg"
            alt="بورسعيد"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-7">
              مرحباً بكم في بورسعيد
            </h1>
            <p className="text-xl md:text-2xl ">
              عروس البحر المتوسط
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}