'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { StarIcon } from '@heroicons/react/24/solid';
import { StarIcon as StarOutlineIcon } from '@heroicons/react/24/outline';

interface Review {
  id: string;
  placeId: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  createdAt: string;
}

interface ReviewSectionProps {
  placeId: string;
  initialReviews?: Review[];
}

export default function ReviewSection({ placeId, initialReviews = [] }: ReviewSectionProps) {
  const { data: session } = useSession();
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!session) {
      alert('يرجى تسجيل الدخول لإضافة تقييم');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          placeId,
          rating,
          comment,
        }),
      });

      if (!response.ok) throw new Error('فشل إرسال التقييم');

      const newReview = await response.json();
      setReviews([newReview, ...reviews]);
      setRating(0);
      setComment('');
    } catch (error) {
      console.error('Error submitting review:', error);
      alert('حدث خطأ أثناء إرسال التقييم');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold">التقييمات والتعليقات</h3>
      
      {/* نموذج إضافة تقييم */}
      <form onSubmit={handleSubmit} className="space-y-4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
        <div className="flex items-center gap-2 justify-center">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              className="focus:outline-none"
            >
              {star <= rating ? (
                <StarIcon className="w-8 h-8 text-yellow-400" />
              ) : (
                <StarOutlineIcon className="w-8 h-8 text-gray-300" />
              )}
            </button>
          ))}
        </div>
        
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="اكتب تعليقك هنا..."
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-seaBlue focus:border-transparent dark:bg-gray-700 dark:border-gray-600"
          rows={4}
          required
        />
        
        <button
          type="submit"
          disabled={isSubmitting || !session}
          className="w-full bg-seaBlue text-white py-2 px-4 rounded-lg hover:bg-opacity-90 transition disabled:opacity-50"
        >
          {isSubmitting ? 'جاري الإرسال...' : 'إرسال التقييم'}
        </button>
      </form>

      {/* قائمة التقييمات */}
      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold">{review.userName}</span>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`w-5 h-5 ${
                      i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300">{review.comment}</p>
            <span className="text-sm text-gray-500 mt-2 block">
              {new Date(review.createdAt).toLocaleDateString('ar-EG')}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
