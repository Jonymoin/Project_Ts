import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "Why is my dishwasher not draining properly?",
    answer: "This could be due to a clogged drain hose, blocked filter, or a faulty drain pump. A professional inspection is recommended."
  },
  {
    question: "Is it worth repairing an old dishwasher?",
    answer: "If your dishwasher is less than 10 years old and the repair cost is reasonable, it’s often worth repairing. We can assess and advise accordingly."
  },
  {
    question: "Why does my dishwasher smell bad?",
    answer: "Bad smells are usually caused by food debris trapped in the filter or hidden components. A deep clean service can fix this."
  },
  {
    question: "How often should a dishwasher be serviced?",
    answer: "We recommend servicing your dishwasher every 12 months to ensure optimal performance and avoid major breakdowns."
  },
  {
    question: "Can you fix all brands of dishwashers?",
    answer: "Yes, our technicians are trained to repair all major dishwasher brands including Bosch, Electrolux, Samsung, LG, and more."
  }
];

const DishwasherFAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
          Dishwasher Repair FAQs
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg shadow-sm">
              <button
                className="w-full flex justify-between items-center p-4 text-left text-lg font-medium text-gray-700 focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                {openIndex === index ? (
                  <FaChevronUp className="text-gray-500" />
                ) : (
                  <FaChevronDown className="text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DishwasherFAQs;
