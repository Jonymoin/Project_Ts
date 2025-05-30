import React from 'react';
import { FaWrench, FaTools, FaSyncAlt, FaRegCheckCircle, FaHeadset } from "react-icons/fa";

const OurServices = () => {
  return (
    <div className="bg-gray-100 py-20 px-5">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
           Services We Cover
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          
          {/* Service 1: Washing Machine Repair */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center">
            <FaWrench className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Washing Machine Repair</h3>
            <p className="text-gray-600">We provide fast and reliable repairs for all brands of washing machines. Call us now!</p>
          </div>

          {/* Service 2: Washing Machine Installation */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center">
            <FaTools className="text-4xl text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Washing Machine Installation</h3>
            <p className="text-gray-600">Get your new washing machine installed by professionals with a guarantee of perfect performance.</p>
          </div>

          {/* Service 3: Preventative Maintenance */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center">
            <FaSyncAlt className="text-4xl text-yellow-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Preventative Maintenance</h3>
            <p className="text-gray-600">Regular maintenance services to ensure that your washing machine continues to work smoothly.</p>
          </div>

          {/* Service 4: Emergency Repair Services */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center">
            <FaRegCheckCircle className="text-4xl text-red-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Emergency Repair Services</h3>
            <p className="text-gray-600">Need urgent help? Our team is available 24/7 to handle emergency washing machine repairs.</p>
          </div>

          {/* Service 5: Washing Machine Cleaning */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center">
            <FaHeadset className="text-4xl text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Washing Machine Cleaning</h3>
            <p className="text-gray-600">Get a deep clean for your washing machine to remove dirt, mold, and residue for a fresher wash.</p>
          </div>

          {/* Service 6: Spare Parts Replacement */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center">
            <FaWrench className="text-4xl text-teal-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Spare Parts Replacement</h3>
            <p className="text-gray-600">We offer replacement of all washing machine parts, from motors to pumps and more.</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default OurServices;
