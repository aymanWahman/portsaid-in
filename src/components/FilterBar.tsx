'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  MagnifyingGlassIcon, 
  MapPinIcon, 
  StarIcon, 
  AdjustmentsHorizontalIcon 
} from '@heroicons/react/24/outline';

interface FilterBarProps {
  onSearch: (query: string) => void;
  onSortChange: (sort: string) => void;
  onFilterChange: (filters: string[]) => void;
  totalResults: number;
}

const FilterBar: React.FC<FilterBarProps> = ({
  onSearch,
  onSortChange,
  onFilterChange,
  totalResults
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-custom-light dark:shadow-custom-dark p-4 mb-6 sticky top-20 z-10"
    >
      {/* Search Bar */}
      <div className="relative mb-4">
        <MagnifyingGlassIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="ابحث عن مكان..."
          className="w-full pl-4 pr-10 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-seaBlue focus:border-transparent outline-none transition-colors"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>

      <div className="flex flex-wrap gap-4">
        {/* Sort Options */}
        <div className="flex-1 min-w-[200px]">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            ترتيب حسب
          </label>
          <select
            onChange={(e) => onSortChange(e.target.value)}
            className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg px-3 py-2 focus:ring-2 focus:ring-seaBlue focus:border-transparent outline-none transition-colors"
          >
            <option value="rating">التقييم</option>
            <option value="distance">المسافة</option>
            <option value="name">الاسم</option>
          </select>
        </div>

        {/* Filter Options */}
        <div className="flex-1 min-w-[200px]">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            تصفية حسب
          </label>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => onFilterChange(['rating_4plus'])}
              className="flex items-center gap-1 px-3 py-1 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-full text-sm transition-colors"
            >
              <StarIcon className="w-4 h-4 text-yellow-400" />
              ٤+ نجوم
            </button>
            <button
              onClick={() => onFilterChange(['nearby'])}
              className="flex items-center gap-1 px-3 py-1 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-full text-sm transition-colors"
            >
              <MapPinIcon className="w-4 h-4 text-seaBlue" />
              قريب مني
            </button>
            <button
              onClick={() => onFilterChange(['all'])}
              className="flex items-center gap-1 px-3 py-1 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-full text-sm transition-colors"
            >
              <AdjustmentsHorizontalIcon className="w-4 h-4 text-gray-500" />
              الكل
            </button>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
        {totalResults} نتيجة
      </div>
    </motion.div>
  );
};

export default FilterBar;
