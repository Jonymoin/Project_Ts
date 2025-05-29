import { motion } from "framer-motion";

export default function Experience() {
  return (
    <div className="bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 py-12 px-6 rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold text-center text-indigo-800 mb-10">
        Washing Machine Repair by Experts
      </h2>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left Image and Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <img
            src="images/wash11.jpg"
            alt="Washing machine repair"
            className="rounded-xl shadow-md mx-auto mb-4"
          />
          <p className="text-lg font-semibold text-indigo-700">
            6+ Years of Experience in Appliance Repair
          </p>
          <p className="text-sm text-gray-700 mt-2">
            Our technicians are certified and have been trusted by thousands of happy clients.
          </p>
        </motion.div>

        {/* Right Image and Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <img
            src="images/wash12.jpg"
            alt="Technician repairing washing machine"
            className="rounded-xl shadow-md mx-auto mb-4"
          />
          <p className="text-lg font-semibold text-indigo-700">
            Dedicated & Professional Team
          </p>
          <p className="text-sm text-gray-700 mt-2">
            We ensure every job is done with care, precision, and customer satisfaction in mind.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
