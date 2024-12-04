'use client';

import Image from 'next/image';
import Link from 'next/link';

const places = [
  {
    id: 1,
    name: 'قناة السويس',
    image: '/imgs/portFuad.jpg',
    description: 'شريان الملاحة العالمي',
    link: '/places/suez-canal'
  },
  {
    id: 2,
    name: 'شاطئ بورسعيد',
    image: '/imgs/portsaid1.jpg',
    description: 'أجمل شواطئ البحر المتوسط',
    link: '/places/beach'
  },
  {
    id: 3,
    name: 'المتحف الحربي',
    image: '/imgs/museum.jpg',
    description: 'تاريخ المقاومة الشعبية',
    link: '/places/military-museum'
  }
];

export default function FeaturedPlaces() {
  return (
    <section className="py-12 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          معالم سياحية مميزة
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {places.map((place) => (
            <Link href={place.link} key={place.id}>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
                <div className="relative h-48">
                  <Image
                    src={place.image}
                    alt={place.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-xl font-semibold mb-2">{place.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {place.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
