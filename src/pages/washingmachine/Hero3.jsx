import React from 'react';
import {
  LuWashingMachine
} from 'react-icons/lu';
import {
  BiDish, BiCctv
} from 'react-icons/bi';
import {
  MdOutlineResetTv,  MdElectricBolt,
} from 'react-icons/md';
import {
   FaPaintRoller
} from 'react-icons/fa6';

import {
  TbAirConditioning
} from 'react-icons/tb';


import {
  Link
} from 'react-router-dom';

const Hero3 = () => {
  const services = [
    { id: 1, name: "Washing Machine", slug: "washing-machine", icon: LuWashingMachine },
    { id: 2, name: "Dishwasher Repair", slug: "dishwasher-repair", icon: BiDish },
    { id: 3, name: "CC TV Installation", slug: "cctv-installation", icon: BiCctv },
    { id: 4, name: "Install Your TV", slug: "tv-installation", icon: MdOutlineResetTv },
    { id: 5, name: "Air-Conditioning Service", slug: "air-conditioning-service", icon: TbAirConditioning },
    { id: 6, name: "Painting", slug: "painting", icon: FaPaintRoller },
   
    { id: 7, name: "Electrical Service", slug: "electrical-service", icon: MdElectricBolt },
    
  ];

  return (
    <div className='mt-[200px] md:mt-[100px] max-w-[90%] mx-auto'>
      <h2 className='text-center text-5xl font-bold md:py-16 text-black'>Our Services</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4'>
        {services.map((service, index) => (
          <div
            key={service.id}
            className="rounded-xl overflow-hidden shadow-lg bg-white"
          >
            <div
              className="h-[180px] bg-cover bg-center relative"
              style={{ backgroundImage: `url(/images/service${index + 1}.jpg)` }}
            >
              <Link to={`/service/${service.slug}`}>
              <div className="absolute top-2 left-2 bg-white p-2 rounded-full text-[#0070f7] text-2xl shadow">
                <service.icon />
              </div>
              </Link>
            </div>
            <div className="p-4 text-center">
              <h3 className="text-xl font-bold mb-2">{service.name}</h3>
              <Link
                to={`/service/${service.slug}`}
                className="inline-block bg-[#0070f7] text-white px-4 py-2 rounded-full hover:bg-white hover:text-[#0070f7] border border-[#0070f7] transition-all duration-300"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero3;
