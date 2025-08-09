import React from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './whatsappGlow.css'; // for custom animation

const WhatsAppButton = () => {
  const location = useLocation();

  const isWashingPage = location.pathname === '/service/washing-machine';
  const whatsappNumber = isWashingPage ? '6584608380' : '6584608380';
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  const handleClick = (e) => {
    e.preventDefault();

    if (window.gtag_report_conversion) {
      window.gtag_report_conversion(whatsappLink);
    } else {
      window.location.href = whatsappLink;
    }
  };

  return (
    <a
      href={whatsappLink}
      onClick={handleClick}
      target="_blank"
      data-gtm-event="whatsapp_float"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="whatsapp-glow fixed bottom-5 right-5 bg-white p-4 rounded-full shadow-lg flex items-center justify-center z-50 hover:scale-105 transition-transform"
      data-clarity-label="whatsapp-floating"
    >
      <FontAwesomeIcon icon={faWhatsapp} className="text-green-500 w-8 h-8" />
    </a>
  );
};

export default WhatsAppButton;
