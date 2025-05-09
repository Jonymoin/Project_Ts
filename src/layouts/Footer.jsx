import React from 'react'
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { TbArrowBigRightLinesFilled } from "react-icons/tb";
import { FaMapMarkerAlt } from "react-icons/fa";

import { MdEmail } from "react-icons/md";
import { useLocation } from 'react-router-dom';




const Footer = () => {
  const location = useLocation();

  // 👉 Logic: Declare variables BEFORE return
  const isWashingMachinePage = location.pathname === '/washing-machine';

  const phoneNumber = isWashingMachinePage ? '+65 8466 1400' : '+65 8165 0541';
  const whatsappNumber = isWashingMachinePage ? '+65 8466 1400' : '+65 8165 0541';
  const whatsappLink = isWashingMachinePage ? 'https://wa.me/6584661400' : 'https://wa.me/6581650541';
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
        <h3 className='text-[28px] font-semibold font-roboto'>LEO <span className='text-red-600'>ENGINEERING</span> PTE. LTD.</h3>

        <img
  src={isWashingMachinePage ? "/images/logo101.jpg" : "/images/logo.png"}
  alt="repair service singapore"
  className="w-24"
/>
        <p>18 BOON LAY WAY <br />
            TRADEHUB 21 <br />
            SINGAPORE (609966)</p>
        </div>
        <div>
        <p className='text-2xl text-center tracking-[10px]'>Quick <span className='text-red-600'>Links</span></p>
        <div className='w-36 h-1 bg-red-600 ml-36'></div>
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
        
        <div className='contact space-y-5'>
            <h3 className='text-xl'>Contact <span className='text-red-600'>Us</span></h3>
            <div className='w-36 h-1 bg-red-600'></div>
            <p className='flex items-center gap-2'> <FaMapMarkerAlt /  >Address : 18 BOON LAY WAY ,TRADEHUB 21
            , <br />SINGAPORE (609966) </p>
            <p className='text-xl
            '>Call : <span className=''>{phoneNumber}</span></p>
            <a href="{whatsappLink}" target='blank' rel='noopener noreferrer' className="flex items-center gap-1 text-xl hover:underline"><FaWhatsapp /> <span className=''>{whatsappNumber}</span></a> 
            <a
          href="mailto:homerepairsng@gmail.com"
          className=" hover:underline flex items-center gap-2 text-xl"
        ><MdEmail />
          <span className=''>homerepairsng@gmail.com</span>
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