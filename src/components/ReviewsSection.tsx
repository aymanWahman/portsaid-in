import React, { useState, useEffect } from 'react';

interface Review {
  _id: string;
  name: string;
  comment: string;
  rating: number;
  createdAt: string;
}

const ReviewsSection = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [newReview, setNewReview] = useState({ name: '', comment: '', rating: 0 });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await fetch('/api/reviews');
      const data = await response.json();
      setReviews(data);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newReview),
      });

      if (response.ok) {
        setNewReview({ name: '', comment: '', rating: 0 });
        fetchReviews(); // Refresh the reviews list
      }
    } catch (error) {
      console.error('Error submitting review:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section dir="rtl" className="my-8 px-4">
      <h2 className="text-2xl font-bold mb-4 text-center">التقييمات</h2>
      
      <form onSubmit={handleSubmit} className="mb-6 max-w-lg mx-auto">
        <input
          type="text"
          placeholder="الاسم"
          value={newReview.name}
          onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
          required
          className="block w-full mb-2 p-2 border rounded"
        />
        <textarea
          placeholder="اكتب تقييمك"
          value={newReview.comment}
          onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
          required
          className="block w-full mb-2 p-2 border rounded h-24"
        ></textarea>
        <select
          value={newReview.rating}
          onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
          required
          className="block w-full mb-4 p-2 border rounded"
        >
          <option value={0}>اختر التقييم</option>
          {[1, 2, 3, 4, 5].map((star) => (
            <option key={star} value={star}>
              {star} ⭐
            </option>
          ))}
        </select>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-seaBlue text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
        >
          {isSubmitting ? 'جاري الإرسال...' : 'إرسال التقييم'}
        </button>
      </form>

      <div className="max-w-2xl mx-auto">
        <h3 className="text-xl font-semibold mb-4 text-center">التقييمات السابقة</h3>
        {reviews.length === 0 ? (
          <p className="text-center text-gray-500">لا توجد تقييمات حتى الآن</p>
        ) : (
          <div className="space-y-4">
            {reviews.map((review) => (
              <div key={review._id} className="border p-4 rounded-lg shadow">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold">{review.name}</h4>
                  <div className="text-yellow-500">
                    {'⭐'.repeat(review.rating)}
                  </div>
                </div>
                <p className="text-gray-700">{review.comment}</p>
                <p className="text-sm text-gray-500 mt-2">
                  {new Date(review.createdAt).toLocaleDateString('ar-EG')}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ReviewsSection;
