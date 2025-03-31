import { useState } from "react";

const ReviewSection = () => {
  const [reviews, setReviews] = useState([
    { name: "John Doe", rating: 5, comment: "Great service! Highly recommended." },
    { name: "Jane Smith", rating: 5, comment: "Good experience." },
  ]);

  const [formData, setFormData] = useState({ name: "", rating: 5, comment: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setReviews([...reviews, formData]);
    setFormData({ name: "", rating: 5, comment: "" });
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">⭐ Customer Reviews</h2>

      {/* Review List */}
      <div className="space-y-4 mb-6">
        {reviews.map((review, index) => (
          <div key={index} className="p-4 border rounded-lg">
            <h3 className="font-bold">{review.name}</h3>
            <p className="text-yellow-500">{"⭐".repeat(review.rating)}</p>
            <p className="text-gray-700">{review.comment}</p>
          </div>
        ))}
      </div>

      {/* Review Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full p-2 border rounded-md"
          required
        />
        <select
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        >
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>{num} Star</option>
          ))}
        </select>
        <textarea
          name="comment"
          value={formData.comment}
          onChange={handleChange}
          placeholder="Your Review"
          className="w-full p-2 border rounded-md"
          required
        ></textarea>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md">
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default ReviewSection;