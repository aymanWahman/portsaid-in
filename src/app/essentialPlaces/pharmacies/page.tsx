'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PharmaciesData from '../../../components/DataPharmacies';
import ReviewsSection from "../../../components/ReviewsSection";

const Pharmacies: React.FC = () => {
  const router = useRouter();

  const handleViewMap = (coordinates: [number, number], name: string, image: string, address: string) => {
    router.push(`/tourist-spots/map?coordinates=${encodeURIComponent(coordinates.join(','))}&name=${encodeURIComponent(name)}&image=${encodeURIComponent(image)}&address=${encodeURIComponent(address)}`);
  };

  const [regionFilter, setRegionFilter] = useState<string>('All');
  const [categoryFilter, setCategoryFilter] = useState<string>('All');

  const [showReviews, setShowReviews] = useState<{ [key: number]: boolean }>({});

  const toggleReviews = (id: number) => {
    setShowReviews((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredPharmacies = PharmaciesData.filter(
    (DATA) =>
      (regionFilter === 'All' || DATA.region === regionFilter) &&
      (categoryFilter === 'All' || DATA.category === categoryFilter)
  );

  const uniqueRegions = ['All', ...new Set(PharmaciesData.map((d) => d.region))];
  const uniqueCategories = ['All', ...new Set(PharmaciesData.map((d) => d.category))];

  return (
    <div dir="rtl" className="p-4 mt-14">
      <div className="text-center">
        <Link href="/essentialPlaces" className="text-xl text-sandyGold hover:text-seaBlue transition">
          الأماكن الهامة
        </Link>
      </div>
      <h1 className="text-center text-2xl font-bold mt-3 mb-4 text-seaBlue">
        الصيدليات
      </h1>

      <div className="flex flex-wrap gap-6 mb-6 justify-center">
        <div>
          <label className="block text-lg text-sandyGold font-bold mb-2">اختر المنطقة:</label>
          <select
            value={regionFilter}
            onChange={(e) => setRegionFilter(e.target.value)}
            className="border px-4 py-2 rounded"
          >
            {uniqueRegions.map((region) => (
              <option key={region} value={region}>
                {region === 'All' ? 'الكل' : region}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-lg text-sandyGold font-bold mb-2">اختر الفئة:</label>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="border px-4 py-2 rounded"
          >
            {uniqueCategories.map((category) => (
              <option key={category} value={category}>
                {category === 'All' ? 'الكل' : category}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-3">
        {filteredPharmacies.map((DATA) => (
          <div key={DATA.id} className="border rounded-lg overflow-hidden shadow-xl bg-seagullGray">
            <Image
              src={DATA.image}
              alt={DATA.name}
              className="w-full h-[200px] object-cover"
              width="300"
              height="200"
            />
            <div className="px-4 py-2 space-y-1">
              <h2 className="text-xl font-bold text-seaBlue p-2 mb-3 text-center rounded-lg border-t-2 border-seaBlue shadow shadow-seaBlue">{DATA.name}</h2>
              <p className="text-md text-gray-500 text-center px-2">{DATA.description}</p>
              <p className="text-sm text-gray-700">
                <strong>المنطقة:</strong> {DATA.region}
              </p>
              <p className="text-sm text-gray-700">
                <strong>العنوان:</strong> {DATA.address}
              </p>
              <p className="text-sm text-gray-700">
                <strong>التلفون:</strong> {DATA.contact}
              </p>
              <div className="flex justify-center gap-4 mt-4">
                <button
                  className="bg-seaBlue px-4 py-2 rounded-s-xl border-2 border-gray-600"
                  onClick={() =>
                    handleViewMap(
                      DATA.coordinates,
                      DATA.name,
                      DATA.image,
                      DATA.address
                    )
                  }
                >
                  عرض الخريطة
                </button>
                <button
                  className="px-4 py-2 rounded-e-xl border-2 border-gray-600 hover:bg-seaBlue"
                  onClick={() => toggleReviews(DATA.id)}
                >
                  {showReviews[DATA.id] ? 'إخفاء التقييمات' : 'عرض التقييمات'}
                </button>
              </div>
            </div>
            {showReviews[DATA.id] && <ReviewsSection />}
          </div>
        ))}
      </div>

      <section className="text-center mt-3">
        <Link href="/essentialPlaces">
          <button className="bg-seaBlue text-white font-bold px-6 py-2 rounded mt-4 hover:bg-sandyGold transition-colors">
            العودة للأماكن الهامة
          </button>
        </Link>
      </section>
    </div>
  );
};

export default Pharmacies;
