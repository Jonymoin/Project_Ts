import React from "react";
import { FaWhatsapp, FaStar, FaTools, FaClock, FaPhoneAlt } from "react-icons/fa";

const WashingMachineRepairCard = () => {
  return (
    <div className="bg-gradient-to-r from-black to-gray-800 shadow-lg rounded-xl p-6 max-w-4xl mx-auto text-white">
      {/* Title */}
      <h2 className="text-2xl font-bold">
        Washing Machine Repair — <span className="text-red-500">Fast & Reliable</span>
      </h2>
      <p className="mt-1 text-gray-300">
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
          href="tel:+6584608380"
          className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-lg text-lg font-semibold transition"
        >
          <FaPhoneAlt className="text-xl" />
          Call Now
        </a>
      </div>

      {/* Small note */}
      <p className="text-sm text-gray-400 mt-2">
        Technician at your door within 60 minutes in most locations. 7 days a week.
      </p>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="flex flex-col items-center">
          <FaStar className="text-yellow-400 text-2xl" />
          <p className="font-bold text-lg">4.9</p>
          <p className="text-gray-400 text-sm">Google Rating</p>
        </div>
        <div className="flex flex-col items-center">
          <FaTools className="text-purple-400 text-2xl" />
          <p className="font-bold text-lg">1200+</p>
          <p className="text-gray-400 text-sm">Repairs Done</p>
        </div>
        <div className="flex flex-col items-center">
          <FaClock className="text-pink-400 text-2xl" />
          <p className="font-bold text-lg">Same-day service</p>
        </div>
      </div>
    </div>
  );
};

export default WashingMachineRepairCard;
