import React from "react";
import { FaWhatsapp, FaStar, FaTools, FaClock } from "react-icons/fa";

const WashingMachineRepairCard = () => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 max-w-4xl mx-auto">
      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-900">
        Washing Machine Repair — <span className="text-red-600">Fast & Reliable</span>
      </h2>
      <p className="text-gray-600 mt-1">
        Certified technicians • Affordable pricing • Parts replacement available
      </p>

      {/* Buttons */}
      <div className="flex items-center gap-4 mt-4">
        <a
          href="https://wa.me/6584608380"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-lg text-lg font-semibold transition"
        >
          <FaWhatsapp className="text-xl" />
          WhatsApp Us
        </a>
        <a
  onClick={() => {
    const contactSection = document.getElementById("contact-us");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  }}
  className="border border-gray-400 hover:border-red-500 text-gray-800 hover:text-red-500 px-5 py-3 rounded-lg font-semibold transition cursor-pointer"
>
  Request a Quote
</a>

      </div>

      {/* Small note */}
      <p className="text-sm text-gray-500 mt-2">
        Technician at your door within 60 minutes in most locations. 7 days a week.
      </p>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="flex flex-col items-center">
          <FaStar className="text-yellow-500 text-2xl" />
          <p className="font-bold text-lg">4.9</p>
          <p className="text-gray-500 text-sm">Google Rating</p>
        </div>
        <div className="flex flex-col items-center">
          <FaTools className="text-purple-500 text-2xl" />
          <p className="font-bold text-lg">1200+</p>
          <p className="text-gray-500 text-sm">Repairs Done</p>
        </div>
        <div className="flex flex-col items-center">
          <FaClock className="text-pink-500 text-2xl" />
          <p className="font-bold text-lg">Same-day service</p>
          <p className="text-gray-500 text-sm">Service</p>
        </div>
      </div>
    </div>
  );
};

export default WashingMachineRepairCard;
