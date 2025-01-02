'use client';
import { FC, useState } from 'react';

const DriverRating: FC = () => {
  const [rating, setRating] = useState<number | null>(null);

  const handleRating = (rate: number) => {
    setRating(rate);
    alert(`شكرًا لتقييمك للسائق: ${rate} نجوم!`);
  };

  return (
    <section dir='rtl' className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">قيم السائق</h2>
      <div className="flex space-x-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => handleRating(star)}
            className={`p-2 text-yellow-400 ${
              rating && star <= rating ? 'text-yellow-600' : ''
            }`}
          >
            ★
          </button>
        ))}
      </div>
    </section>
  );
};

export default DriverRating;