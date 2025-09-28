import React from 'react'
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

import { TbArrowBigRightLinesFilled } from "react-icons/tb";
import { FaMapMarkerAlt } from "react-icons/fa";

import { MdEmail } from "react-icons/md";
import { useLocation } from 'react-router-dom';




const Footer = () => {
    const services = [
       { id: 1, name: "Washing Machine", slug: "washing-machine"},
       { id: 2, name: "electrical service", slug: "electrical-service"},
       { id: 3, name: "plumbing service", slug: "plumbing-service"},
       
       { id: 6, name: "Air-Conditioning Service", slug: "air-conditioning-service" },
       
     
     ];
  const location = useLocation();

  // 👉 Logic: Declare variables BEFORE return
  const isWashingMachinePage = location.pathname === '/service/washing-machine';

  const phoneNumber = isWashingMachinePage ? '+65 8460 8380' : '+65 8165 0541';
  const whatsappNumber = isWashingMachinePage ? '+65 8460 8380' : '+65 8165 0541';
  const whatsappLink = isWashingMachinePage ? 'https://wa.me/6584608380' : 'https://wa.me/6584608380';
  const getLogoSrc = () => {
    switch (location.pathname) {
      case "/":
        return "/images/logo5.webp";
      
      case "/service/washing-machine":
        return "/images/logo6.webp";
      
      default:
        return "/images/logo5.webp"; // fallback logo
    }
  };
  return (
   <>
    <div className='flex flex-col md:flex-row md:justify-around bg-gray-800 text-white pt-10 items-center gap-10 md:gap-0 w-full relative'>
  <img 
    src="/images/bg14.webp" 
    alt="Background of handyman services" 
    className="absolute inset-0 w-full h-full object-cover -z-10" 
    loading="lazy" 
  />
        <div className='logo flex flex-col items-center gap-3'>
        <h3 className='text-[28px] font-semibold font-roboto'>SARIMON ENGINEERING PTE. LTD</h3>

        <img
      src={getLogoSrc()}
      alt="repair service singapore"
      className="w-24"
      loading='lazy'
    />
                 <p>362A CHANGI ROAD <br />  KENG YEE GARDEN <br />SINGAPORE (419823)     </p>

        </div>
        <div>
        <p className='text-2xl text-center'>Quick Links</p>
        <div className='w-36 h-1 bg-[#1598FF] ml-3'></div>
          <ul className='text-xl space-y-3 ml-46 mt-4'>
          <li>
            
            <Link to="/about" className='flex items-center gap-2 hover:text-[#1598FF]'><TbArrowBigRightLinesFilled /> About Us</Link>
          </li>
          <li>
            
            <Link to="/privacypolicy" className='flex items-center gap-2 hover:text-[#1598FF]'><TbArrowBigRightLinesFilled/> Privacy Policy</Link>
          </li>
          <li>
            
            <Link to="/terms&conditions" className='flex items-center gap-2 hover:text-[#1598FF]'><TbArrowBigRightLinesFilled/> Terms & Conditions</Link>
          </li>
          </ul>
        </div>
        <div className='service'>
            <p className='text-2xl text-center '>Our Services</p>
            
            <div className='w-36 h-1 bg-[#1598FF] ml-10'></div>
            <ul className='grid grid-cols-1 gap-3 mt-5'>
            {services.map((service) => (
                <li key={service.id} className="py-2 px-4 hover:bg-[#1598FF] transition-all duration-100 rounded-xl">
                  <Link to={`/service/${service.slug}`} className='flex items-center'>
                    <TbArrowBigRightLinesFilled/>{service.name}
                  </Link>
                </li>
              ))}
            </ul>
       
        </div>
        <div className='contact space-y-5'>
            <h3 className='text-xl'>Contact Us</h3>
            <div className='w-36 h-1 bg-[#1598FF]'></div>
            <p className='flex items-center gap-2'> <FaMapMarkerAlt /  >362A CHANGI ROAD <br />  KENG YEE GARDEN <br />SINGAPORE (419823)    
 </p>
            <p className='text-xl
            '>Call : <span className=''>{phoneNumber}</span></p>
            <a href={whatsappLink} target='blank' data-gtm-event="whatsapp_btm" rel='noopener noreferrer' className="flex items-center gap-1 text-xl hover:underline"
            data-clarity-label="whatsapp-footer"> <FaWhatsapp /> <span className=''>{whatsappNumber}</span></a> 
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
    <p>All Rights Reserve to @homerepairsg.</p>
       </div>
   </>
  )
}

export default Footer