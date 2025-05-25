import React from "react";
import {
  Smile,
  BadgeCheck,
  Wallet,
  ThumbsUp
} from "lucide-react";

const differences = [
  {
    title: "Friendly Team",
    desc: "From the first call to the final touch-up, you’ll experience warm, respectful, and clear communication. We believe in building trust through friendliness and transparency.",
    icon: <Smile className="w-10 h-10 text-primary mb-3" />,
  },
  {
    title: "Experienced Professionals",
    desc: "Our painters are skilled, certified, and seasoned. We’ve worked on HDBs, condos, landed homes, and commercial spaces across Singapore — and we know how to get it right.",
    icon: <BadgeCheck className="w-10 h-10 text-primary mb-3" />,
  },
  {
    title: "Affordable Rates",
    desc: "We provide fair, honest pricing with no hidden charges. Whether it's a full repaint or a touch-up, you'll know exactly what you're paying for — and it's always worth it.",
    icon: <Wallet className="w-10 h-10 text-primary mb-3" />,
  },
  {
    title: "Customer Satisfaction First",
    desc: "Our job isn’t done until you're 100% satisfied. We listen to your feedback, address concerns promptly, and go the extra mile to ensure a smooth, happy experience.",
    icon: <ThumbsUp className="w-10 h-10 text-primary mb-3" />,
  },
];

const WhatMakesUsDifferent = () => {
  return (
    <div className="px-4 py-10 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        What Makes Us Different?
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {differences.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
          >
            {item.icon}
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              {item.title}
            </h2>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatMakesUsDifferent;
