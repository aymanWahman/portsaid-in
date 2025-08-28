// components/ReviewSection.tsx
"use client";

import { useEffect, useState } from "react";

export interface ReviewSectionProps {
  itemId: string;
  itemType: 'place' | 'property' | 'restaurant' | 'hotel' | 'pharmacy' | 'clothing';
}

export default function ReviewSection({ itemId, itemType }: ReviewSectionProps) {
  // منطق جلب وعرض التقييمات
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/reviews?itemId=${itemId}&type=${itemType}`);
        const data = await response.json();
        setReviews(data.reviews);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [itemId, itemType]);

  if (loading) {
    return <div>جاري تحميل التقييمات...</div>;
  }

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">التقييمات</h3>
      {reviews.length === 0 ? (
        <p>لا توجد تقييمات حتى الآن</p>
      ) : (
        reviews.map(review => (
          <div key={review.id} className="border p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <h4 className="font-medium">{review.userName}</h4>
              <div className="flex">
                {'⭐'.repeat(review.rating)}
              </div>
            </div>
            <p className="text-gray-600 mt-2">{review.comment}</p>
            <p className="text-sm text-gray-400 mt-2">
              {new Date(review.createdAt).toLocaleDateString('ar-EG')}
            </p>
          </div>
        ))
      )}
    </div>
  );
}