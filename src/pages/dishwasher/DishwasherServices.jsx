import React from 'react';
import { FaUtensils, FaCogs, FaWater, FaBolt, FaPumpSoap, FaTools } from "react-icons/fa";

const DishwasherServices = () => {
  return (
    <div className="bg-[#f8fafc] py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">
          Dishwasher Services We Provide
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-cyan-400 p-6 rounded-xl shadow hover:shadow-xl transition duration-300">
            <FaUtensils className="text-4xl text-indigo-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Dishwasher Repair</h3>
            <p className="text-gray-600">Quick and expert repair service for all types and brands of dishwashers.</p>
          </div>

          {/* Service 2 */}
          <div className="bg-cyan-400 p-6 rounded-xl shadow hover:shadow-xl transition duration-300">
            <FaTools className="text-4xl text-green-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Installation Services</h3>
            <p className="text-gray-600">We install dishwashers safely and properly to ensure long-term performance.</p>
          </div>

          {/* Service 3 */}
          <div className="bg-cyan-400 p-6 rounded-xl shadow hover:shadow-xl transition duration-300">
            <FaWater className="text-4xl text-blue-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Water Drainage Fix</h3>
            <p className="text-gray-600">Solving drainage or water flow issues that affect dishwasher efficiency.</p>
          </div>

          {/* Service 4 */}
          <div className="bg-cyan-400 p-6 rounded-xl shadow hover:shadow-xl transition duration-300">
            <FaBolt className="text-4xl text-red-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Power & Control Issues</h3>
            <p className="text-gray-600">Troubleshooting control board, power supply, and startup problems.</p>
          </div>

          {/* Service 5 */}
          <div className="bg-cyan-400 p-6 rounded-xl shadow hover:shadow-xl transition duration-300">
            <FaPumpSoap className="text-4xl text-yellow-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Deep Cleaning Service</h3>
            <p className="text-gray-600">We provide internal cleaning for better hygiene and smell-free washing.</p>
          </div>

          {/* Service 6 */}
          <div className="bg-cyan-400 p-6 rounded-xl shadow hover:shadow-xl transition duration-300">
            <FaCogs className="text-4xl text-teal-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Spare Parts Replacement</h3>
            <p className="text-gray-600">We replace faulty dishwasher parts like pumps, spray arms, and filters.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DishwasherServices;
