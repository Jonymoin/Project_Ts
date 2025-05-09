import React, { useEffect, useState } from "react";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

const StarRating = ({ rating, onSelect }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    const full = i <= rating;
    stars.push(
      <span
        key={i}
        onClick={() => onSelect(i)}
        className="cursor-pointer text-yellow-400 text-xl"
      >
        {full ? <FaStar /> : <FaRegStar />}
      </span>
    );
  }
  return <div className="flex">{stars}</div>;
};

const AverageStars = ({ avg }) => {
  const fullStars = Math.floor(avg);
  const halfStar = avg - fullStars >= 0.5;
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= fullStars) {
      stars.push(<FaStar key={i} className="text-yellow-400" />);
    } else if (i === fullStars + 1 && halfStar) {
      stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-yellow-400" />);
    }
  }

  return <div className="flex items-center gap-1">{stars}</div>;
};

const ReviewComponent = () => {
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState({
    name: "",
    rating: 5,
    comment: "",
    photo: "",
  });
  const [visibleCount, setVisibleCount] = useState(5);

  useEffect(() => {
    const storedReviews = localStorage.getItem("user-reviews");
    if (storedReviews) {
      setReviews(JSON.parse(storedReviews));
    }
  }, []);

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm({ ...form, photo: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReviews = [form, ...reviews];
    setReviews(newReviews);
    localStorage.setItem("user-reviews", JSON.stringify(newReviews));
    setForm({ name: "", rating: 5, comment: "", photo: "" });
  };

  const averageRating =
    reviews.reduce((acc, r) => acc + Number(r.rating), 0) / reviews.length || 0;

  const visibleReviews = reviews.slice(0, visibleCount);

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-4">
      <h2 className="text-2xl font-bold">User Reviews</h2>
      <div className="flex items-center gap-2">
      <p>
  ⭐ Average Rating: {averageRating.toFixed(2)} / 5 ({reviews.length} reviews)
</p>

        <AverageStars avg={averageRating} />
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          placeholder="Your name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={handlePhotoUpload}
          className="w-full border p-2 rounded"
        />
        <StarRating
          rating={form.rating}
          onSelect={(value) => setForm({ ...form, rating: value })}
        />
        <textarea
          placeholder="Write your review..."
          value={form.comment}
          onChange={(e) => setForm({ ...form, comment: e.target.value })}
          className="w-full border p-2 rounded"
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Submit Review
        </button>
      </form>

      {/* Reviews */}
      <div className="space-y-4">
        {visibleReviews.map((r, i) => (
          <div
            key={i}
            className="flex items-start space-x-3 border p-3 rounded shadow-sm"
          >
            <img
              src={r.photo || "https://via.placeholder.com/50"}
              alt={r.name}
              className="w-22 h-19 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold">{r.name}</p>
              <StarRating rating={r.rating} onSelect={() => {}} />
              <p>{r.comment}</p>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < reviews.length && (
        <div className="text-center mt-4">
          <button
            onClick={() => setVisibleCount((prev) => prev + 5)}
            className="text-blue-600 underline font-semibold"
          >
            See More
          </button>
        </div>
      )}
    </div>
  );
};

export default ReviewComponent;
