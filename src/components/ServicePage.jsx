import React from 'react'
import { LuWashingMachine } from 'react-icons/lu';
import { BiDish } from 'react-icons/bi';
import { TbAirConditioning } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const Hero3 = () => {
  const services = [
    { name: "Washing Machine", slug: "washing-machine", icon: LuWashingMachine },
    { name: "Dishwasher Repair", slug: "dishwasher-repair", icon: BiDish },
   
    
    { name: "Air-Conditioning Service", slug: "air-conditioning", icon: TbAirConditioning },
    
   
    
  ];

  return (
    <div style={{
      width: '100%',
      backgroundImage: "url('/images/bg15.jpg')",
    }}>
      <div className='mt-[200px] md:mt-[100px] max-w-[90%] mx-auto'>
        <h2 className='text-center text-6xl font-bold md:py-24'>Our Services</h2>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 p-4'>
          {services.map(service => (
            <Link key={service.slug} to={`/service/${service.slug}`}>
              <div className='bg-[#0070f7] flex flex-col items-center py-10 text-white rounded-lg shadow-lg cursor-pointer group hover:bg-black transition-all duration-500'>
                <div className='bg-black p-4 rounded-full text-2xl group-hover:bg-[#0070f7]'>
                  <service.icon />
                </div>
                <h3 className='text-xl font-semibold text-center'>{service.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero3;
