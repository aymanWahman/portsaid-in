'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPinIcon, StarIcon, ClockIcon, PhoneIcon } from '@heroicons/react/24/outline';

interface PlaceCardProps {
  id: string;
  name: string;
  description: string;
  image: string;
  rating?: number;
  address?: string;
  openingHours?: string;
  phone?: string;
  type: 'tourist' | 'restaurant' | 'hotel';
}

const PlaceCard: React.FC<PlaceCardProps> = ({
  id,
  name,
  description,
  image,
  rating,
  address,
  openingHours,
  phone,
  type
}) => {
  const typeColors = {
    tourist: 'border-greenN-500',
    restaurant: 'border-orange-500',
    hotel: 'border-purple-500'
  };

  const typeBackgrounds = {
    tourist: 'bg-greenN-50 text-greenN-700',
    restaurant: 'bg-orange-50 text-orange-700',
    hotel: 'bg-purple-50 text-purple-700'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-custom-light dark:shadow-custom-dark overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transform group-hover:scale-110 transition-transform duration-300"
        />
        {rating && (
          <div className="absolute top-2 left-2 rtl:right-2 rtl:left-auto bg-white dark:bg-gray-800 rounded-full px-2 py-1 flex items-center gap-1 shadow-md">
            <StarIcon className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
        )}
        <div className={`absolute top-2 right-2 rtl:left-2 rtl:right-auto ${typeBackgrounds[type]} rounded-full px-3 py-1 text-sm font-medium`}>
          {type === 'tourist' ? 'معلم سياحي' : type === 'restaurant' ? 'مطعم' : 'فندق'}
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-seaBlue transition-colors">
          {name}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
          {description}
        </p>

        <div className="space-y-2">
          {address && (
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <MapPinIcon className="w-4 h-4 text-seaBlue" />
              <span className="line-clamp-1">{address}</span>
            </div>
          )}
          {openingHours && (
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <ClockIcon className="w-4 h-4 text-seaBlue" />
              <span>{openingHours}</span>
            </div>
          )}
          {phone && (
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <PhoneIcon className="w-4 h-4 text-seaBlue" />
              <span dir="ltr">{phone}</span>
            </div>
          )}
        </div>

        <Link 
          href={`/${type === 'tourist' ? 'tourist-spots' : type === 'restaurant' ? 'restaurants' : 'hotels'}/${id}`}
          className="mt-4 inline-block w-full text-center bg-seaBlue hover:bg-seaBlue-600 text-white py-2 rounded-lg transition-colors"
        >
          عرض التفاصيل
        </Link>
      </div>

      <div className={`absolute top-0 right-0 w-1 h-full ${typeColors[type]}`} />
    </motion.div>
  );
};

export default PlaceCard;
