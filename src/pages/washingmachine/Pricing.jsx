import React from "react";
import { motion } from "framer-motion";

const Pricing = () => {
  const container = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const problems = [
    "Error codes & electronic faults",
    "Water leakage issues",
    "General cleaning & deep cleaning",
    "Broken door latch",
    "Drum not spinning or making noise",
    "Water not draining properly",
    "Power or wiring problems",
    "Strange vibrations during wash cycle",
  ];

  return (
    <motion.div
      className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8 mt-10"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.h2
        className="text-3xl font-bold text-indigo-600 mb-4 text-center"
        variants={item}
      >
        Affordable Pricing Details
      </motion.h2>

      <motion.p className="text-gray-700 mb-6 text-lg leading-relaxed" variants={item}>
        We repair almost all types of washing machines. The cost depends on the condition
        and the type of issue, but most problems fall within the range of{" "}
        <span className="font-semibold">$100 to $200</span>.
      </motion.p>

      <motion.h3
        className="text-xl font-semibold text-gray-800 mb-3"
        variants={item}
      >
        Some common problems we fix:
      </motion.h3>

      <motion.ul
        className="list-disc pl-6 space-y-2 text-gray-700"
        variants={container}
      >
        {problems.map((problem, index) => (
          <motion.li key={index} variants={item}>
            {problem}
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default Pricing;
