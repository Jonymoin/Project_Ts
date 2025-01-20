import React from 'react'
import { FaHome } from "react-icons/fa";
import { LuWashingMachine } from "react-icons/lu";
import { BiDish } from "react-icons/bi";
import { MdOutlineResetTv } from "react-icons/md";
import { MdMoveUp } from "react-icons/md";
import { FaHouseFloodWaterCircleArrowRight } from "react-icons/fa6";
import { FaIntercom } from "react-icons/fa";
import { BiCctv } from "react-icons/bi";
import { MdDoorSliding } from "react-icons/md";
import { GiOpenGate } from "react-icons/gi";
import { TbAirConditioning } from "react-icons/tb";
import { PiFanFill } from "react-icons/pi";
import { BsNoiseReduction } from "react-icons/bs";
import { FaPaintRoller } from "react-icons/fa6";
import { MdPlumbing } from "react-icons/md";
import { MdElectricBolt } from "react-icons/md";
import { MdCarpenter } from "react-icons/md";
import { Link } from 'react-router-dom';


const Hero3 = () => {
    const services = [
        {
            id:1 , name:"Washing Machine Repair" , icon: LuWashingMachine
        },
        {
            id:2 , name:"Dishwasher Repair" , icon: BiDish
        },
        
        {
            id:3 , name:"CC TV Installation" , icon: BiCctv
        },
        {
            id:4 , name:"Install Your TV" , icon: MdOutlineResetTv
        },
        
       
        {
            id:5 , name:"Plumbing Service" , icon: MdPlumbing
        },
        {
            id:6 , name:"Air-Conditioning Service" , icon: TbAirConditioning
        },
        {
            id:7 , name:"Painting" , icon: FaPaintRoller
        },
        {
            id:8 , name:"Intercom Issues" , icon: FaIntercom
        },
        {
            id:9 , name:"Carpenter" , icon: MdCarpenter
        },
        {
            id:10 , name:"Electrical Service" , icon: MdElectricBolt
        },
        
        {
            id:11 , name:"Water Choke Trobleshoot" , icon: FaHouseFloodWaterCircleArrowRight
        },
        {
            id:12 , name:"Mover Service" , icon: MdMoveUp
        },
        {
            id:13 , name:"Automatic Door Issues" , icon: MdDoorSliding
        },
        {
            id:14 , name:"Kitchen Exhaust Fan" , icon: PiFanFill
        },
        {
            id:15 , name:"All Kinds of Ducting Work" , icon: BsNoiseReduction
        },
        {
            id:16, name:"Automatic Gate Issues" , icon: GiOpenGate
        }


    ]
  return (

    <div style={{
        width: '100%',
        
        backgroundImage: "url('/images/bg15.jpg')",
        backgroundSize: '',
        backgroundPosition: '',
        backgroundRepeat: '',
       }}>
         <div className='mt-[200px] md:mt-[100px] max-w-[90%] mx-auto' >
        <h2 className='text-center text-6xl font-bold md:py-24'>Our Services</h2>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6 p-4'>
            {services.map((service) => (
                <Link to={`/service/${service.id}`}>
                <div key={service.id} className='bg-[#37B126] flex flex-col items-center py-10 text-white rounded-lg shadow-lg cursor-pointer group hover:bg-black transition-all duration-500'>
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
   
  )
}

export default Hero3