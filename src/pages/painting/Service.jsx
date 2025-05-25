import React from "react";
import { motion } from "framer-motion";

const policies = [
  {
    title: "Free Site Inspection",
    desc: "We offer a completely free site inspection—no strings attached. Our experienced team will assess your space, understand your needs, and recommend the best painting solution tailored to your home or business. It’s the first step in making your vision a reality.",
    img: "/images/Inspections.jpg",
  },
  {
    title: "Upgrade Anti-Mould Ceiling Paint in All Bathrooms",
    desc: "Protect your bathrooms against Singapore’s humid climate by upgrading to our premium anti-mould ceiling paint. This affordable add-on keeps ceilings clean, prevents fungal growth, and adds years to your paint job. Ask us for a quote during inspection.",
    img: "/images/antimould.jpg",
  },
  {
    title: "Your Home, Fully Protected",
    desc: "We treat your space with care. From furniture covers to floor sheets, our team ensures full protection of your home throughout the entire painting process. We go the extra mile to leave your home just as clean as we found it—only fresher.",
    img: "/images/protection.jpg",
  },
  {
    title: "Surface Repairs & Plastering Included",
    desc: "A beautiful finish starts with a smooth surface. Our painting package includes minor plastering to fix wall cracks, dents, or rough textures. We make sure every coat goes on even and looks flawless.",
    img: "/images/plastering.jpg",
  },
  {
    title: "2 Full Coats for Lasting Coverage",
    desc: "Every project includes two proper coats of premium paint—not just a quick touch-up. This ensures strong, long-lasting color and protection against peeling or fading. We don’t cut corners—we cover them.",
    img: "/images/Coats.webp",
  },
  {
    title: "Only Fresh, Top-Grade Paint Used",
    desc: "At EverFresh Painting, we use only high-quality, freshly sourced paints from trusted brands. You’ll never get leftovers from a past job—just crisp, vibrant color that lasts and keeps your walls looking new.",
    img: "/images/products.jpeg",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const BusinessPolicies = () => {
  return (
    <div className="px-4 py-10 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Why Choose EverFresh Painting?
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {policies.map((policy, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <img
              src={policy.img}
              alt={policy.title}
              className="w-full h-40 object-cover rounded-xl mb-4"
            />
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              {policy.title}
            </h2>
            <p className="text-gray-600 text-sm">{policy.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BusinessPolicies;
