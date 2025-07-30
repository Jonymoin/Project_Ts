import React from 'react';
import { motion } from 'framer-motion';

const reasons = [
  {
    title: '1. Save Money on Repairs',
    description:
      'A well-maintained dishwasher prevents unexpected breakdowns and costly repairs. Regular cleaning and servicing help you avoid major issues before they happen.',
  },
  {
    title: '2. Improve Cleaning Performance',
    description:
      'A trouble-free dishwasher ensures your dishes come out spotless every time. No more residue, cloudiness, or double washing.',
    
  },
  {
    title: '3. Extend Appliance Lifespan',
    description:
      'Just like any machine, dishwashers last longer when cared for. Simple steps like checking filters and running vinegar cycles can add years to its life.',
  },
  {
    title: '4. Save Water & Electricity',
    description:
      'A clean and smooth-running dishwasher uses less water and energy per load. This makes it not only eco-friendly but also lighter on your monthly bills.',
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const DishwasherCare = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-8 lg:px-16">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Why Keeping Your Dishwasher Trouble-Free is Important
      </motion.h2>

      <div className="grid gap-10 md:grid-cols-2">
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            className="flex flex-col md:flex-row items-center gap-6 bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition-shadow"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
           
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {reason.title}
              </h3>
              <p className="text-gray-600 text-sm">{reason.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default DishwasherCare;
