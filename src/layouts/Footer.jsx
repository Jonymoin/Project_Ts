import React from 'react'
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { TbArrowBigRightLinesFilled } from "react-icons/tb";
import { FaMapMarkerAlt } from "react-icons/fa";

import { MdEmail } from "react-icons/md";



const Footer = () => {
    const services = [
        { id: 1, name: "Washing Machine Repair" },
        { id: 2, name: "Dishwasher Repair" },
        { id: 3, name: "CC TV Installation" },
        { id: 4, name: "TV Installation Service" },
     

        { id: 5, name: "Plumbing Service" },
        { id: 6, name: "Air-Conditioning Service" },
        { id: 7, name: "Painting" },
        { id: 8, name: "Intercom Issues" },
        { id: 9, name: "Carpenter" },
        { id: 10, name: "Electrical Service" },
        { id: 11, name: "Water Choke Troubleshoot" },
        { id: 12, name: "Mover Service" },
        { id: 13, name: "Automatic Door Issues" },
        { id: 14, name: "Kitchen Exhaust Fan" },
        { id: 15, name: "All Kinds of Ducting Work" },
        { id: 16, name: "Automatic Gate Issues" }
      ];
  return (
   <>
    <div className='flex flex-col md:flex-row md:justify-around bg-gray-800 text-white pt-10 items-center gap-10 md:gap-0 w-full relative'>
  <img 
    src="/images/bg14.png" 
    alt="Background of handyman services" 
    className="absolute inset-0 w-full h-full object-cover -z-10" 
    loading="lazy" 
  />
        <div className='logo flex flex-col items-center gap-3'>
        <h3 className='text-[28px] font-semibold font-roboto'>LEO <span className='text-[#37B126]'>ENGINEERING</span> PTE. LTD.</h3>

        <img src="/images/hero.png" alt="repair service singapore" className='w-14'/>
        <p>18 BOON LAY WAY <br />
            TRADEHUB 21 <br />
            SINGAPORE (609966)</p>
        </div>
        <div>
        <p className='text-2xl text-center tracking-[10px]'>Quick <span className='text-[#37B126]'>Links</span></p>
        <div className='w-36 h-1 bg-[#37B126] ml-36'></div>
          <ul className='text-xl space-y-3 ml-6 mt-4'>
          <li>
            
            <Link to="/about" className='flex items-center gap-2 hover:text-[#37B126]'><TbArrowBigRightLinesFilled /> About Us</Link>
          </li>
          <li>
            
            <Link to="/privacypolicy" className='flex items-center gap-2 hover:text-[#37B126]'><TbArrowBigRightLinesFilled/> Privacy Policy</Link>
          </li>
          <li>
            
            <Link to="/terms&conditions" className='flex items-center gap-2 hover:text-[#37B126]'><TbArrowBigRightLinesFilled/> Terms & Conditions</Link>
          </li>
          </ul>
        </div>
        <div className='service'>
            <p className='text-2xl text-center tracking-[10px]'>Our <span className='text-[#37B126]'>Services</span></p>
            
            <div className='w-36 h-1 bg-[#37B126] ml-36'></div>
            <ul className='grid grid-cols-1 md:grid-cols-2 gap-3'>
            {services.map((service) => (
                <li key={service.id} className="py-2 px-4 hover:bg-[#37B126]">
                  <Link to={`/service/${encodeURIComponent(service.name.toLowerCase().replace(/\s+/g, '-'))}`} className='flex items-center gap-2'>
                  
                  <IoIosArrowDroprightCircle />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
       
        </div>
        <div className='contact space-y-5'>
            <h3 className='text-xl'>Contact <span className='text-[#37B126]'>Us</span></h3>
            <div className='w-36 h-1 bg-[#37B126]'></div>
            <p className='flex items-center gap-2'> <FaMapMarkerAlt /  >Address : 18 BOON LAY WAY ,TRADEHUB 21
            , <br />SINGAPORE (609966) </p>
            <p className='text-xl
            '>Call : <span className='text-[#37B126]'>+65 8165 0541</span></p>
            <a href="http://wa.me/6581650541" target='blank' rel='noopener noreferrer' className="flex items-center gap-1 text-xl hover:underline"><FaWhatsapp /> <span className='text-[#37B126]'>+65 869 48390</span></a> 
            <a
          href="mailto:homerepairsng@gmail.com"
          className=" hover:underline flex items-center gap-2 text-xl"
        ><MdEmail />
          <span className='text-[#37B126]'>homerepairsng@gmail.com</span>
        </a>
        </div>
    </div>
       <div className='bg-gray-800 pt-8 text-white flex flex-col items-center'>
        
    <hr className='w-[80%] mx-auto h-2 pt-10'/>
    <p>All Rights Reserve to @LEO ENGINEERING PTE. LTD.</p>
       </div>
   </>
  )
}

export default Footer