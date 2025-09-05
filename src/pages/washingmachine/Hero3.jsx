import React from 'react';
import { LuWashingMachine } from 'react-icons/lu';
import { BiDish } from 'react-icons/bi';
import { TbAirConditioning } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const Hero3 = () => {
  const services = [
    { id: 1, name: "Washing Machine", slug: "washing-machine", icon: LuWashingMachine },
    { id: 2, name: "Dishwasher Repair", slug: "dishwasher-repair", icon: BiDish },
    { id: 3, name: "Air-Conditioning Service", slug: "air-conditioning-service", icon: TbAirConditioning },
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
            {/* Whole image area clickable */}
            <Link to={`/service/${service.slug}`}>
              <div
                className="h-[180px] bg-cover bg-center relative"
                style={{ backgroundImage: `url(/images/service${index + 1}.webp)` }}
              >
                <div className="absolute top-2 left-2 bg-white p-2 rounded-full text-[#1598FF] text-2xl shadow">
                  <service.icon />
                </div>
              </div>
            </Link>

            <div className="p-4 text-center">
              <h3 className="text-xl font-bold mb-2">{service.name}</h3>
              <Link
                to={`/service/${service.slug}`}
                className="inline-block bg-[#1598FF] text-black px-4 py-2 rounded-full hover:bg-white hover:text-[#1598FF] border border-[#1598FF] transition-all duration-300"
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
