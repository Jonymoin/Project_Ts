import React from 'react';
import { useLocation } from 'react-router-dom';
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const HeaderTop = () => {
  const location = useLocation();

  // Set WhatsApp number based on current route
  const whatsappNumber =
    location.pathname === '/service/washing-machine' ? '+65 8466 1400' : '+65 8165 0541';

  const whatsappLink =
    location.pathname === '/service/washing-machine'
      ? 'https://wa.me/6584661400'
      : 'https://wa.me/6581650541';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black text-[#48b2d7] flex mx-auto md:justify-between gap-4 py-3 px-4 shadow-md">
      <p className="text-xl font-semibold">Call Us Now</p>
      <div className="flex text-base md:text-2xl items-center hover:scale-110 transition-all duration-300 font-semibold">
        <div>
          <FaWhatsapp />
        </div>
        <div className="flex items-center px-1">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer"
          data-clarity-label="whatsapp-header"
>
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
