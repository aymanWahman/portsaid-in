'use client';

import React from 'react';
import { MapIcon, BuildingOfficeIcon, HomeIcon } from '@heroicons/react/24/outline';

interface NearbyPlacesFilterProps {
  selectedTypes: string[];
  onTypeChange: (type: string) => void;
}

const filterTypes = [
  { id: 'restaurant', name: 'مطاعم', icon: BuildingOfficeIcon },
  { id: 'hotel', name: 'فنادق', icon: HomeIcon },
  { id: 'attraction', name: 'معالم سياحية', icon: MapIcon },
];

export default function NearbyPlacesFilter({ selectedTypes, onTypeChange }: NearbyPlacesFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {filterTypes.map((type) => {
        const Icon = type.icon;
        const isSelected = selectedTypes.includes(type.id);
        
        return (
          <button
            key={type.id}
            onClick={() => onTypeChange(type.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all
              ${isSelected 
                ? 'bg-seaBlue text-white shadow-md' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300'
              }`}
          >
            <Icon className="w-5 h-5" />
            <span>{type.name}</span>
            <span className="text-sm ml-1">
              ({type.id === 'restaurant' ? '٣' : type.id === 'hotel' ? '٢' : '٤'})
            </span>
          </button>
        );
      })}
    </div>
  );
}
