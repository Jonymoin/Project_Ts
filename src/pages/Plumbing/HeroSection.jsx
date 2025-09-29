import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const images = [
    "/images/plumbing1.jpg",
    "/images/plumbing2.jpg",
    "/images/plumbing3.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto change image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className="relative h-[90vh] w-full flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: `url(${images[currentIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 1s ease-in-out",
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text content */}
      <div className="relative z-10 max-w-2xl px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Best Plumber in Singapore
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Cheapest Rates • Professional Service • 24/7 Emergency Support
        </p>
        <p className="text-base md:text-lg leading-relaxed">
          Looking for reliable plumbing services in Singapore? We provide expert
          repairs, installations, and emergency plumbing solutions at the most
          affordable prices. From leaking taps to major pipe issues – we’ve got
          you covered!
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
