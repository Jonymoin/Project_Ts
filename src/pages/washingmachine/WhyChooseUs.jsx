import React from "react";
import { CheckCircle, ShieldCheck, Clock, Wrench, ThumbsUp, Award, Headphones, DollarSign } from "lucide-react"; // Icon import

const WhyChooseUs = () => {
  const points = [
    { icon: <ShieldCheck className="w-8 h-8 text-green-500" />, title: "Trusted Service" },
    { icon: <Clock className="w-8 h-8 text-blue-500" />, title: "Quick Response Time" },
    { icon: <Wrench className="w-8 h-8 text-red-500" />, title: "Expert Technicians" },
    { icon: <ThumbsUp className="w-8 h-8 text-yellow-500" />, title: "High Customer Satisfaction" },
    { icon: <Award className="w-8 h-8 text-purple-500" />, title: "Certified Professionals" },
    { icon: <Headphones className="w-8 h-8 text-pink-500" />, title: "24/7 Customer Support" },
    { icon: <DollarSign className="w-8 h-8 text-indigo-500" />, title: "Affordable Pricing" },
    { icon: <CheckCircle className="w-8 h-8 text-teal-500" />, title: "Guaranteed Repairs" },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((point, index) => (
            <div key={index} className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
              {point.icon}
              <h3 className="mt-4 text-xl font-semibold">{point.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
