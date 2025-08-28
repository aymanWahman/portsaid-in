"use client";

import { useRouter } from "next/navigation";

interface FilterComponentProps {
  regionFilter: string;
  categoryFilter: string;
  uniqueRegions: string[];
  uniqueCategories: string[];
  translations?: {
    selectRegion?: string;
    selectCategory?: string;
    all?: string;
  };
}

const FilterComponent = ({
  regionFilter,
  categoryFilter,
  uniqueRegions,
  uniqueCategories,
  translations = {}
}: FilterComponentProps) => {
  const router = useRouter();
  
  const {
    selectRegion = "Select Region",
    selectCategory = "Select Category",
    all = "All"
  } = translations;

  const handleFilterChange = (filterType: string, value: string) => {
    // إنشاء URLSearchParams جديدة
    const params = new URLSearchParams(window.location.search);
    
    if (value === "All") {
      params.delete(filterType);
    } else {
      params.set(filterType, value);
    }
    
    // تحديث الرابط مع الحفاظ على المسار الحالي
    router.push(`${window.location.pathname}?${params.toString()}`);
  };

  return (
    <div className="flex flex-wrap gap-6 mb-6 justify-center">
      <div>
        <label className="block text-lg text-accent font-bold mb-2">
          {selectRegion}
        </label>
        <select
          value={regionFilter}
          onChange={(e) => handleFilterChange("region", e.target.value)}
          className="border px-4 py-2 rounded"
        >
          <option value="All">{all}</option>
          {uniqueRegions.map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-lg text-accent font-bold mb-2">
          {selectCategory}
        </label>
        <select
          value={categoryFilter}
          onChange={(e) => handleFilterChange("category", e.target.value)}
          className="border px-4 py-2 rounded"
        >
          <option value="All">{all}</option>
          {uniqueCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterComponent;