'use client';

import React from 'react';

const LoadingCard = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-custom-light dark:shadow-custom-dark overflow-hidden animate-pulse">
      {/* Image Placeholder */}
      <div className="h-48 w-full bg-gray-200 dark:bg-gray-700" />

      <div className="p-4">
        {/* Title Placeholder */}
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-md mb-4 w-3/4" />

        {/* Description Placeholder */}
        <div className="space-y-2 mb-4">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full" />
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6" />
        </div>

        {/* Info Placeholders */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gray-200 dark:bg-gray-700 rounded-full" />
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2" />
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gray-200 dark:bg-gray-700 rounded-full" />
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/3" />
          </div>
        </div>

        {/* Button Placeholder */}
        <div className="mt-4 h-10 bg-gray-200 dark:bg-gray-700 rounded-lg w-full" />
      </div>
    </div>
  );
};

export const LoadingGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(6)].map((_, i) => (
        <LoadingCard key={i} />
      ))}
    </div>
  );
};

export default LoadingCard;
