import { useState } from "react";
import { motion } from "framer-motion";

const initialReviews = [
  { name: "Amanda Tan", rating: 5, comment: "Excellent service, fixed my washer in no time!" },
  { name: "Bryan Lim", rating: 4.5, comment: "Very professional and punctual team!" },
  { name: "Cheryl Goh", rating: 4.7, comment: "Satisfied with the work, will recommend!" },
  { name: "David Lee", rating: 5, comment: "Quick, efficient, and friendly." },
  { name: "Elaine Wong", rating: 4.6, comment: "Good experience overall!" },
  { name: "Farhan Rahman", rating: 4.8, comment: "Clean work and on-time." },
  { name: "Grace Tan", rating: 5, comment: "Very reliable technician, thank you!" },
  { name: "Hui Min", rating: 4.9, comment: "Affordable and professional." },
  { name: "Ivan Teo", rating: 5, comment: "Extremely happy with the service!" },
  { name: "Jasmine Koh", rating: 4.7, comment: "Well done, great support." },
  { name: "Kenneth Ong", rating: 4.8, comment: "Technician was very knowledgeable and helpful." },
  { name: "Li Wei", rating: 5, comment: "Repair was done faster than expected. Impressed!" },
  { name: "Melissa Tan", rating: 4.9, comment: "Very responsive and fixed the issue quickly." },
  { name: "Nicholas Ng", rating: 4.7, comment: "Smooth process, no hidden charges. Recommended!" },
  { name: "Olivia Chan", rating: 4.6, comment: "Good value for money and excellent support." },
  { name: "Patrick Lim", rating: 4.9, comment: "You can trust their service. Honest & skilled." },
  { name: "Queenie Goh", rating: 5, comment: "Customer service was very helpful and polite." },
  { name: "Rachel Toh", rating: 4.8, comment: "No complaints at all. Highly recommended!" },
  { name: "Samuel Chua", rating: 4.7, comment: "Very detailed explanation before repair." },
  { name: "Tina Lau", rating: 4.6, comment: "Technician was on time and respectful." },
  { name: "Umar Abdul", rating: 4.8, comment: "Great service and reliable staff." },
  { name: "Valerie Tan", rating: 5, comment: "Best repair experience I've had so far!" },
  { name: "Wei Jie", rating: 4.7, comment: "Their follow-up after service is excellent." },
  { name: "Xiu Ying", rating: 4.9, comment: "Super professional and very fast." },
  { name: "Yong Kang", rating: 5, comment: "Solved my issue on the first visit itself!" },
  { name: "Zoe Lim", rating: 4.8, comment: "Appreciate the honesty and fair pricing." },
  { name: "Adam Tan", rating: 4.6, comment: "Technician explained everything clearly." },
  { name: "Beatrice Wong", rating: 5, comment: "Very satisfied with the quality of work." },
  { name: "Calvin Yeo", rating: 4.9, comment: "Superb service and highly responsive team." },
  { name: "Debbie Chan", rating: 4.7, comment: "Everything was smooth from start to end." },
  { name: "Eugene Fong", rating: 5, comment: "Best in Singapore! Fixed what others couldn't." },
  { name: "Fiona Lim", rating: 4.8, comment: "Technician was very polite and efficient." },
  { name: "Gerald Ong", rating: 5, comment: "Good workmanship and friendly attitude." },
  { name: "Hazel Neo", rating: 4.7, comment: "Good communication and prompt repair." },
  { name: "Imran Hassan", rating: 4.6, comment: "Very dependable and trustworthy service." },
  { name: "Joanne Tay", rating: 4.9, comment: "Loved the fast and clean service!" },
  { name: "Keith Tan", rating: 5, comment: "Very professional and transparent pricing." },
  { name: "Lydia Lim", rating: 4.8, comment: "Came on time and fixed everything properly." },
  { name: "Marcus Goh", rating: 4.7, comment: "Reliable service and quality repair work." },
  { name: "Natalie Chia", rating: 4.9, comment: "Definitely will recommend to friends!" },
  { name: "Oscar Lee", rating: 4.6, comment: "Quick, neat and courteous service." },
];


const ReviewCard = ({ name, rating, comment }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all"
  >
    <div className="flex items-center mb-2">
      <div className="bg-indigo-500 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center text-lg mr-3">
        {name.charAt(0)}
      </div>
      <div>
        <p className="font-semibold text-indigo-700">{name}</p>
        <p className="text-yellow-500 text-sm">
          {"★".repeat(Math.floor(rating))}{" "}
          <span className="text-gray-500 ml-1 text-xs">({rating.toFixed(1)})</span>
        </p>
      </div>
    </div>
    <p className="text-gray-700 text-sm">{comment}</p>
  </motion.div>
);

export default function ReviewSection() {
  const [reviews, setReviews] = useState(initialReviews);
  const [visibleCount, setVisibleCount] = useState(5);

  const [formData, setFormData] = useState({ name: "", rating: "", comment: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddReview = (e) => {
    e.preventDefault();
    const { name, rating, comment } = formData;

    if (!name || !rating || !comment) return;

    const newReview = {
      name,
      rating: parseFloat(rating),
      comment,
    };

    setReviews((prev) => [newReview, ...prev]);
    setFormData({ name: "", rating: "", comment: "" });
  };

  const visibleReviews = reviews.slice(0, visibleCount);
  const averageRating =
    reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

  return (
    <div className="relative bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 py-12 px-6 rounded-2xl shadow-inner">
      <h2 className="text-3xl font-bold text-center text-indigo-800 mb-6">
        What Our Customers Say
      </h2>

      <div className="absolute inset-0 opacity-5 bg-[url('/review-bg.jpg')] bg-cover bg-center rounded-2xl pointer-events-none"></div>

      {/* Add Review Form */}
      <form
        onSubmit={handleAddReview}
        className="bg-white p-6 rounded-xl shadow-md mb-10 max-w-xl mx-auto z-10 relative"
      >
        <h3 className="text-xl font-bold text-indigo-700 mb-4">Add Your Review</h3>
        <div className="mb-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full px-4 py-2 rounded border"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <input
            type="number"
            name="rating"
            placeholder="Rating (1 - 5)"
            step="0.1"
            min="1"
            max="5"
            className="w-full px-4 py-2 rounded border"
            value={formData.rating}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <textarea
            name="comment"
            placeholder="Your comment"
            className="w-full px-4 py-2 rounded border"
            value={formData.comment}
            onChange={handleInputChange}
          />
        </div>
        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
        >
          Submit Review
        </button>
      </form>

      {/* Reviews Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {visibleReviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>

      {visibleCount < reviews.length && (
        <div className="text-center mt-8 relative z-10">
          <button
            onClick={() => setVisibleCount((prev) => prev + 5)}
            className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition"
          >
            See more reviews
          </button>
        </div>
      )}

      <p className="text-center text-gray-600 mt-6 relative z-10 font-bold">
        ⭐ {reviews.length} Verified Reviews · Average Rating:{" "}
        <strong>{averageRating.toFixed(1)}</strong>
      </p>
    </div>
  );
}
