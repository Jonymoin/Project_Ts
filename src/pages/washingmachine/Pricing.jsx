import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";

const Pricing = () => {
  const problems = [
    "Any ERROR codes",
    "Water leakage issues",
    "Water not draining properly",
    "Door Lock Problem",
    "General cleaning & deep cleaning",
    "Broken door latch",
    "Drum not spinning or making noise",
    "Power or wiring problems",
    "Strange vibrations during wash cycle",
  ];

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8 mt-10">
      <h2 className="text-3xl font-bold text-indigo-600 mb-4 text-center">
        Affordable Pricing Details
      </h2>

      <p className="text-gray-700 mb-6 text-lg leading-relaxed">
        We repair almost all types of washing machines. The cost depends on the
        condition and the type of issue, but most problems fall within the range
        of{" "}
        <span className="font-semibold">$70 to $180</span>.
      </p>

      <h3 className="text-xl font-semibold text-gray-800 mb-3">
        Some common problems we fix:
      </h3>

      <ul className="space-y-3 text-gray-700 text-[18px] font-semibold">
        {problems.map((problem, index) => (
          <li key={index} className="flex items-start gap-2">
            <AiOutlineCheckCircle className="text-green-600 text-2xl mt-1" />
            <span>{problem}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pricing;
