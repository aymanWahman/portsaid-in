import React, { useState } from 'react';

interface Review {
  id: number;
  name: string;
  comment: string;
  rating: number;
}

const ReviewsSection = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [newReview, setNewReview] = useState({ name: '', comment: '', rating: 0 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setReviews([...reviews, { ...newReview, id: reviews.length + 1 }]);
    setNewReview({ name: '', comment: '', rating: 0 });
  };

  return (
    <section className="my-8 px-4">
      <h2 className="text-2xl font-bold mb-4">User Reviews</h2>
      <form onSubmit={handleSubmit} className="mb-6">
        <input
          type="text"
          placeholder="Your Name"
          value={newReview.name}
          onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
          required
          className="block w-full mb-2 p-2 border rounded"
        />
        <textarea
          placeholder="Your Review"
          value={newReview.comment}
          onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
          required
          className="block w-full mb-2 p-2 border rounded"
        ></textarea>
        <select
          value={newReview.rating}
          onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
          required
          className="block w-full mb-4 p-2 border rounded"
        >
          <option value={0}>Select Rating</option>
          {[1, 2, 3, 4, 5].map((star) => (
            <option key={star} value={star}>
              {star} Star{star > 1 ? 's' : ''}
            </option>
          ))}
        </select>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Submit Review
        </button>
      </form>

      <div>
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <div key={review.id} className="border-b mb-4 pb-2">
              <h3 className="font-semibold">{review.name}</h3>
              <p className="text-sm">{review.comment}</p>
              <p className="text-yellow-500">{'⭐'.repeat(review.rating)}</p>
            </div>
          ))
        ) : (
          <p>No reviews yet. Be the first to add one!</p>
        )}
      </div>
    </section>
  );
};

export default ReviewsSection;
