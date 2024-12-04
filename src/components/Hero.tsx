'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative h-[60vh] w-full">
      <Image
        src="/imgs/portsaid8.jpg"
        alt="بورسعيد"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          مرحباً بكم في بورسعيد
        </h1>
        <p className="text-xl md:text-2xl">
          عروس البحر المتوسط
        </p>
      </div>
    </div>
  );
}
