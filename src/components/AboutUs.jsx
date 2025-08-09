import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <motion.section
      className="min-h-screen px-6 py-12 bg-gradient-to-br from-sky-50 to-blue-100"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-800 mb-2">
          About Us
        </h1>
        <p className="text-lg text-gray-700">
          Learn more about <strong>SARIMON ENGINEERING PTE. LTD.</strong>, our mission, and corporate details.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Overview */}
        <motion.div
          className="bg-white shadow-lg rounded-2xl p-6"
          whileHover={{ scale: 1.02 }}
        >
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Company Overview</h2>
          <p className="text-gray-700 leading-relaxed">
            <strong>SARIMON ENGINEERING PTE. LTD.</strong> is an Exempt Private Company Limited by Shares, incorporated in Singapore.
            The company is currently <span className="text-green-600 font-semibold">Live</span> and operates primarily as a renovation contractor. 
            Our registered office is located at the <strong>TRADEHUB 21</strong> building.
          </p>
        </motion.div>

        {/* Corporate Profile */}
        <motion.div
          className="bg-white shadow-lg rounded-2xl p-6"
          whileHover={{ scale: 1.02 }}
        >
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Corporate Profile</h2>
          <ul className="text-gray-700 space-y-2">
            <li><strong>UEN:</strong> 202404071H</li>
            <li><strong>Company Name:</strong> SARIMON ENGINEERING PTE. LTD.</li>
            <li><strong>Status:</strong> Live Company</li>
            <li><strong>Registration Type:</strong> Exempt Private Company Limited by Shares</li>
            <li><strong>Incorporated On:</strong> 5 September 2022</li>
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="bg-white shadow-lg rounded-2xl p-6"
          whileHover={{ scale: 1.02 }}
        >
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Contact Information</h2>
          <p className="text-gray-700">
            <strong>Registered Address:</strong><br />
            362A Changi Road,<br />
            Keng Yee Garden,<br />
            Singapore 419823
          </p>
        </motion.div>

        {/* Industry Info */}
        <motion.div
          className="bg-white shadow-lg rounded-2xl p-6"
          whileHover={{ scale: 1.02 }}
        >
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Industry classNameification</h2>
          <ul className="text-gray-700 space-y-2">
            <li><strong>SSIC Code:</strong> 43210</li>
            <li><strong>Principal Activity:</strong> Electrical Work</li>
            <li><strong>Industry:</strong> Renovation Contractors</li>
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutUs;
