import React, { useState } from "react";
import { 
  CheckCircle, ShieldCheck, Clock, Wrench, ThumbsUp, 
  Award, Headphones, DollarSign 
} from "lucide-react";

const WhyChooseUs = () => {
  const [showPricing, setShowPricing] = useState(false);

  const points = [
    { icon: <ShieldCheck className="w-8 h-8 text-green-500" />, title: "Trusted Service" },
    { icon: <Clock className="w-8 h-8 text-blue-500" />, title: "Quick Response Time" },
    { icon: <Wrench className="w-8 h-8 text-red-500" />, title: "Expert Technicians" },
    { icon: <ThumbsUp className="w-8 h-8 text-yellow-500" />, title: "High Customer Satisfaction" },
    { icon: <Award className="w-8 h-8 text-purple-500" />, title: "Certified Professionals" },
    { icon: <Headphones className="w-8 h-8 text-pink-500" />, title: "24/7 Customer Support" },
    { 
      icon: <DollarSign className="w-8 h-8 text-indigo-500" />, 
      title: "Affordable Pricing", 
      onClick: () => setShowPricing(!showPricing) 
    },
    { icon: <CheckCircle className="w-8 h-8 text-teal-500" />, title: "Guaranteed Repairs" },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((point, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition cursor-pointer"
              onClick={point.onClick}
            >
              {point.icon}
              <h3 className="mt-4 text-xl font-semibold">{point.title}</h3>
            </div>
          ))}
        </div>

        {/* Affordable Pricing Details */}
        {showPricing && (
          <div className="mt-12 max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6 text-left">
            <h3 className="text-2xl font-bold mb-4 text-indigo-600">Affordable Pricing Details</h3>
            <p className="text-gray-700 mb-4">
              We repair almost all types of washing machines. The cost depends on the condition and 
              the type of issue, but most problems fall within the range of <span className="font-semibold">$70 to $180</span>.
            </p>
            <p className="font-semibold mb-2">Some common problems we fix:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Error codes & electronic faults</li>
              <li>Water leakage issues</li>
              <li>General cleaning & deep cleaning</li>
              <li>Broken door latch</li>
              <li>Drum not spinning or making noise</li>
              <li>Water not draining properly</li>
              <li>Power or wiring problems</li>
              <li>Strange vibrations during wash cycle</li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default WhyChooseUs;
