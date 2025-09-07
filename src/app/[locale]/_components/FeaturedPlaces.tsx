'use client';

import Image from 'next/image';
import Link from "@/components/link";
import { motion } from 'framer-motion';
// import { Pages, Routes } from "@/constants/enums";
import { useParams } from "next/navigation";

const places = [
  {
    id: 1,
    name: 'قناة السويس',
    nameEn: 'Suez Canal',
    image: 'https://res.cloudinary.com/dktod7mod/image/upload/v1757246327/portfoad_cbij2b.jpg',
    description: 'شريان الملاحة العالمي',
    descriptionEn: 'The global navigation artery',
    link: '/places/suez-canal'
  },
  {
    id: 2,
    name: 'شاطئ بورسعيد',
    nameEn: 'Port Said Beach',
    image: 'https://res.cloudinary.com/dktod7mod/image/upload/v1756467287/ChatGPT_Image_Aug_29_2025_02_33_55_PM_iq3dui.png',
    description: 'أجمل شواطئ البحر المتوسط',
    descriptionEn: 'The most beautiful beaches of the Mediterranean',
    link: '/places/beach'
  },
  {
    id: 3,
    name: 'المتحف الحربي',
    nameEn: 'Military Museum',
    image: 'https://res.cloudinary.com/dktod7mod/image/upload/v1757246137/museum_w6yowj.jpg',
    description: 'تاريخ المقاومة الشعبية',
    descriptionEn: '  History of popular resistance',
    link: '/places/military-museum'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

export default function FeaturedPlaces() {
    
    const { locale } = useParams();
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-seaBlue mb-8">
        {locale === 'ar' ? 'أماكن مميزة في بورسعيد' : 'Featured Places in Port Said' }
        </h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {places.map((place) => (
            <motion.div
              key={place.id}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
            >
              <Link href={place.link}>
                <div className="relative h-48">
                  <Image
                    src={place.image}
                    alt={locale === 'ar' ? place.name : place.nameEn || place.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-xl font-semibold mb-2 text-seaBlue">{locale === 'ar' ? place.name : place.nameEn || place.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {locale === 'ar' ? place.description : place.descriptionEn || place.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
