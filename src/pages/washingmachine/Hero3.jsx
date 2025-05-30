import React from 'react';
import { LuWashingMachine } from 'react-icons/lu';
import { BiDish, BiCctv } from 'react-icons/bi';
import { MdOutlineResetTv, MdMoveUp, MdPlumbing, MdElectricBolt, MdCarpenter, MdDoorSliding } from 'react-icons/md';
import { FaHouseFloodWaterCircleArrowRight, FaIntercom, FaPaintRoller } from 'react-icons/fa6';
import { GiOpenGate } from 'react-icons/gi';
import { TbAirConditioning } from 'react-icons/tb';
import { PiFanFill } from 'react-icons/pi';
import { BsNoiseReduction } from 'react-icons/bs';

import { Link } from 'react-router-dom';

const Hero3 = () => {
  const services = [
    { id: 1, name: "Washing Machine", slug: "washing-machine", icon: LuWashingMachine },
    { id: 2, name: "Dishwasher Repair", slug: "dishwasher-repair", icon: BiDish },
    { id: 3, name: "CC TV Installation", slug: "cctv-installation", icon: BiCctv },
    { id: 4, name: "Install Your TV", slug: "tv-installation", icon: MdOutlineResetTv },
    { id: 5, name: "Plumbing Service", slug: "plumbing-service", icon: MdPlumbing },
    { id: 6, name: "Air-Conditioning Service", slug: "air-conditioning-service", icon: TbAirConditioning },
    { id: 7, name: "Painting", slug: "painting", icon: FaPaintRoller },
    { id: 8, name: "Intercom Issues", slug: "intercom-system-service", icon: FaIntercom },
    { id: 9, name: "Carpenter", slug: "carpentry-service", icon: MdCarpenter },
    { id: 10, name: "Electrical Service", slug: "electrical-service", icon: MdElectricBolt },
    { id: 11, name: "Water Choke Troubleshoot", slug: "water-troubleshooting", icon: FaHouseFloodWaterCircleArrowRight },
    { id: 12, name: "Mover Service", slug: "mover-service", icon: MdMoveUp },
    { id: 13, name: " Door Lock", slug: "door-lock", icon: MdDoorSliding },
    { id: 14, name: "Kitchen Exhaust Fan", slug: "kitchen-exhaust-fan", icon: PiFanFill },
    { id: 15, name: "All Kinds of Ducting Work", slug: "ducting-work", icon: BsNoiseReduction },
    { id: 16, name: " Window Repair", slug: "Window-repair", icon: GiOpenGate }
  ];

  return (
    <div>
      <div className='mt-[200px] md:mt-[100px] max-w-[90%] mx-auto'>
        <h2 className='text-center text-6xl font-bold md:py-24 text-black'>Our Services</h2>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 p-4'>
          {services.map((service, index) => (
            <div
              key={service.id}
              className="relative group h-[250px] rounded-xl overflow-hidden shadow-lg"
              style={{
                backgroundImage: `url(/images/service${index + 1}.jpg)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-60 group-hover:bg-opacity-80 transition-all duration-300 flex flex-col justify-center items-center text-white">
                <div className='text-3xl mb-4 bg-white text-[#37B126] p-3 rounded-full'>
                  <service.icon />
                </div>
                <h3 className='text-xl font-semibold text-center'>{service.name}</h3>
                <Link to={`/service/${service.slug}`} className="absolute bottom-4 right-4 bg-[#37B126] hover:bg-white hover:text-[#37B126] px-4 py-1 rounded-full font-bold text-sm transition-all">
                  See More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero3;
