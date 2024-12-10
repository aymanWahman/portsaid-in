'use client';

import React from 'react';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/24/solid';
import { PhoneIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';

interface NearbyPlaceDetailsProps {
  place: {
    name: string;
    type: string;
    image?: string;
    rating?: number;
    phone?: string;
    address?: string;
    openingHours?: string;
    description?: string;
    coordinates?: [number, number];
  };
  onClose: () => void;
}

export default function NearbyPlaceDetails({ place, onClose }: NearbyPlaceDetailsProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        <div className="relative h-48 w-full">
          {place.image ? (
            <Image
              src={place.image}
              alt={place.name}
              fill
              className="object-cover rounded-t-xl"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 dark:bg-gray-700 rounded-t-xl" />
          )}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2">{place.name}</h3>
          
          {place.rating && (
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  className={`w-5 h-5 ${
                    i < place.rating! ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                />
              ))}
              <span className="text-sm text-gray-600 dark:text-gray-400 mr-2">
                ({place.rating}/٥)
              </span>
            </div>
          )}

          {place.description && (
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {place.description}
            </p>
          )}

          <div className="space-y-3">
            {place.address && (
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <MapPinIcon className="w-5 h-5 text-seaBlue" />
                <span>{place.address}</span>
              </div>
            )}

            {place.phone && (
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <PhoneIcon className="w-5 h-5 text-seaBlue" />
                <a href={`tel:${place.phone}`} className="hover:text-seaBlue">
                  {place.phone}
                </a>
              </div>
            )}

            {place.openingHours && (
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <ClockIcon className="w-5 h-5 text-seaBlue" />
                <span>{place.openingHours}</span>
              </div>
            )}
          </div>

          <div className="mt-6 flex gap-2">
            <button
              onClick={() => window.open(`https://www.google.com/maps/search/${encodeURIComponent(place.name)}`)}
              className="flex-1 bg-seaBlue text-white py-2 px-4 rounded-lg hover:bg-opacity-90 transition"
            >
              فتح في خرائط جوجل
            </button>
            {place.phone && (
              <button
                onClick={() => window.open(`tel:${place.phone}`)}
                className="flex-1 border border-seaBlue text-seaBlue py-2 px-4 rounded-lg hover:bg-seaBlue hover:text-white transition"
              >
                اتصل الآن
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
