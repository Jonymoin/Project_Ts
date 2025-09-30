import React, { useState, useEffect } from "react";

const HeroSectionElectro = () => {
  const slides = [
    {
      image: "/images/electro1.jpg",
      headline: "Trusted Electrician in Singapore",
      subtitle: "Safe • Affordable • Professional Electrical Services",
      description: "Need reliable electrical services in Singapore? Our certified electricians provide expert installations, repairs, and emergency support. From power trips and lighting setups to full wiring projects – we ensure safe and professional solutions at the best prices."
    },
    {
      image: "/images/electro2.jpg",
      headline: "24/7 Emergency Electrical Services",
      subtitle: "Fast Response • Licensed Experts • Same Day Service",
      description: "Experiencing a power outage or electrical emergency? Our team is available round the clock to handle urgent electrical issues. We respond quickly to ensure your safety and restore power efficiently."
    },
    {
      image: "/images/electro3.jpg",
      headline: "Complete Home Rewiring Solutions",
      subtitle: "Modern • Safe • Energy Efficient",
      description: "Upgrade your home's electrical system with our comprehensive rewiring services. We use the latest standards and quality materials to ensure your property is safe, compliant, and ready for modern electrical demands."
    },
    {
      image: "/images/electro4.jpg",
      headline: "Commercial Electrical Installations",
      subtitle: "Reliable • Scalable • Code Compliant",
      description: "Power your business with our professional commercial electrical services. From office fit-outs to industrial installations, we deliver reliable solutions that meet safety regulations and support your operations."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto change slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div
      className="relative h-[90vh] w-full flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: `url(${slides[currentIndex].image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 1s ease-in-out",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text content */}
      <div className="relative z-10 max-w-2xl px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 transition-opacity duration-500">
          {slides[currentIndex].headline}
        </h1>
        <p className="text-lg md:text-xl mb-6 transition-opacity duration-500">
          {slides[currentIndex].subtitle}
        </p>
        <p className="text-base md:text-lg leading-relaxed transition-opacity duration-500">
          {slides[currentIndex].description}
        </p>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? "bg-white w-8" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSectionElectro;