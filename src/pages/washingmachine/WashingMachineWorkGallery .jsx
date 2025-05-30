import { div } from 'framer-motion/client';
import React from 'react';

const images = [
  
  '/images/wash2.jpg',
  '/images/wash3.jpg',
  '/images/wash4.jpg',
  '/images/wash5.jpg',
  '/images/wash6.jpg',
  '/images/wash7.jpg',
  '/images/wash8.jpg',
  '/images/wash9.jpg',
  '/images/wash10.jpg',
  '/images/wash11.jpg',
  '/images/wash12.jpg',
  '/images/wash13.jpg',
  '/images/wash14.jpg',
  
];

const WashingMachineWorkGallery = () => {
  return (
    <div className='bg-[#d00000]'>
      <div className="max-w-6xl mx-auto px-4 py-10 ">
      <h2 className="text-3xl font-bold mb-4 text-center">Our Washing Machine Repair Work</h2>
      <p className="text-black mb-8 text-center max-w-2xl mx-auto">
        Our experienced technicians are dedicated to providing reliable washing machine repair services. 
        Whether it's a minor fix or a major breakdown, we diagnose and solve the issue efficiently. 
        Below are some real images of our team in action, helping customers get their machines back in working condition.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <div key={index} className="overflow-hidden rounded-xl shadow-md">
            <img
              src={src}
              alt={`Washing machine repair work ${index + 1}`}
              className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default WashingMachineWorkGallery;
