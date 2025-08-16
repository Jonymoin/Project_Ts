import React from 'react';
import { useLocation } from 'react-router-dom';
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const HeaderTop = () => {
  const location = useLocation();

  const isWashingPage = location.pathname === '/service/washing-machine';
  const whatsappNumber = isWashingPage ? '+65 84608380' : '+65 84608380';
  const whatsappLink = isWashingPage
    ? 'https://wa.me/6584608380'
    : 'https://wa.me/6584608380';

  const handleWhatsAppClick = (e) => {
    e.preventDefault(); // Prevent default navigation

    if (window.gtag_report_conversion) {
      window.gtag_report_conversion(whatsappLink); // Track & redirect
    } else {
      window.location.href = whatsappLink; // Fallback redirect
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black  text-[#00FF00] flex mx-auto justify-between gap-4 py-3 px-4 shadow-md">
      <a
      href="tel:+6584608380"
      data-gtm-event="call_top"
      className="inline-block bg-[#00FF00] hover:bg-red-700 text-black/- text-[15px] font-bold px-4 py-1 rounded-xl shadow-md transition duration-300"
    >
      📞 Call Us Now
    </a>
      <div className="flex text-2xl items-center transition-all duration-300 font-semibold">
        <div>
          
        </div>
        <div className="inline-block bg-[#00FF00] hover:bg-red-700 text-black text-[15px] font-bold px-6 py-1 rounded-xl shadow-md transition duration-300">
          <a
            href={whatsappLink}
            onClick={handleWhatsAppClick}
            target="_blank"
            rel="noopener noreferrer"
            data-gtm-event="whatsapp_top"
            data-clarity-label="whatsapp-header"
            className='flex items-center'
          > 
          <FaWhatsapp />
            {whatsappNumber}
          </a>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="flex items-center gap-1 text-xl md:text-2xl">
          <MdEmail />
          <a
            href="mailto:homerepairsng@gmail.com"
            className="hover:underline"
          >
            homerepairsng@gmail.com
          </a>
        </div>
      </div>
    </nav>
  );
};

export default HeaderTop;
