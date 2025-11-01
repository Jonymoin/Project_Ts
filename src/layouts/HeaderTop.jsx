import React from 'react'; 
import { useLocation } from 'react-router-dom';
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Phone, MessageCircle} from 'lucide-react';


const HeaderTop = () => {
  const location = useLocation();

  const isWashingPage = location.pathname === '/service/washing-machine';
  const isPlumbingPage = location.pathname === '/service/electrical-service';

  // WhatsApp number & link conditionally set
  const whatsappNumber = isPlumbingPage 
    ? '+65 81313085' 
    : '+65 81313085';

  const whatsappLink = isPlumbingPage
    ? 'https://wa.me/6581313085'
    : 'https://wa.me/6581313085';

  // Phone number conditionally set
  const phoneNumber = isPlumbingPage 
    ? '+6581313085' 
    : '+6581313085';

  const handleWhatsAppClick = (e) => {
    e.preventDefault(); 

    if (window.gtag_report_conversion) {
      window.gtag_report_conversion(whatsappLink); 
    } else {
      window.location.href = whatsappLink; 
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-blue-900 flex mx-auto justify-between gap-4 py-3 px-4 shadow-md">
      <a
        href={`tel:${phoneNumber}`}
        data-gtm-event="call_top"
        className="flex items-center gap-4 text-white bg-orange-600 hover:bg-red-700 font-semibold px-4 py-1 rounded shadow-md transition duration-300"
      >
        
         <Phone className="h-4 w-4" />
                         <span>Call Now</span>
      </a>
      <div className="flex text-2xl items-center transition-all duration-300 font-semibold">
        <div className="inline-block  bg-green-600 hover:bg-red-700 text-white text-[15px] font-bold px-6 py-1 rounded shadow-md transition duration-300">
          <a
            href={whatsappLink}
            onClick={handleWhatsAppClick}
            target="_blank"
            rel="noopener noreferrer"
            data-gtm-event="whatsapp_top"
            data-clarity-label="whatsapp-header"
            className="flex items-center gap-2"
          > 
            <MessageCircle className="h-4 w-4" />
                            <span>WhatsApp</span>
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
