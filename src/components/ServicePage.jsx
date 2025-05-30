import React from 'react'
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
    { name: "Washing Machine", slug: "washing-machine", icon: LuWashingMachine },
    { name: "Dishwasher Repair", slug: "dishwasher-repair", icon: BiDish },
    { name: "CC TV Installation", slug: "cctv-installation", icon: BiCctv },
    { name: "Install Your TV", slug: "tv-installation", icon: MdOutlineResetTv },
    { name: "Plumbing Service", slug: "plumbing", icon: MdPlumbing },
    { name: "Air-Conditioning Service", slug: "air-conditioning", icon: TbAirConditioning },
    { name: "Painting", slug: "painting", icon: FaPaintRoller },
    { name: "Intercom Issues", slug: "intercom-service", icon: FaIntercom },
    { name: "Carpenter", slug: "carpentry", icon: MdCarpenter },
    { name: "Electrical Service", slug: "electrical-service", icon: MdElectricBolt },
    { name: "Water Choke Troubleshoot", slug: "water-troubleshooting", icon: FaHouseFloodWaterCircleArrowRight },
    { name: "Mover Service", slug: "mover-service", icon: MdMoveUp },
    { name: "Automatic Door Issues", slug: "automatic-door", icon: MdDoorSliding },
    { name: "Kitchen Exhaust Fan", slug: "kitchen-exhaust", icon: PiFanFill },
    { name: "All Kinds of Ducting Work", slug: "ducting-work", icon: BsNoiseReduction },
    { name: "Automatic Gate Issues", slug: "automatic-gate", icon: GiOpenGate },
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
              <div className='bg-[#37B126] flex flex-col items-center py-10 text-white rounded-lg shadow-lg cursor-pointer group hover:bg-black transition-all duration-500'>
                <div className='bg-black p-4 rounded-full text-2xl group-hover:bg-[#37B126]'>
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
