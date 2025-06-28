import React from 'react';
import { useLocation } from 'react-router-dom';
import { FaPhoneAlt } from 'react-icons/fa';
import './whatsappGlow.css'; // Reusing the glow animation

const CallButton = () => {
  const location = useLocation();

  const isWashingPage = location.pathname === '/service/washing-machine';
  const phoneNumber = isWashingPage ? '84608380' : '81650541';
  const telLink = `tel:+65${phoneNumber}`;

  const handleClick = (e) => {
    e.preventDefault();

    if (window.gtag_report_conversion) {
      window.gtag_report_conversion(telLink);
    } else {
      window.location.href = telLink;
    }
  };

  return (
    <a
      href={telLink}
      onClick={handleClick}
      className="whatsapp-glow fixed bottom-5 left-5 bg-white p-4 rounded-full shadow-lg flex items-center justify-center z-50 hover:scale-105 transition-transform"
      data-clarity-label="call-floating"
    >
      <FaPhoneAlt className="text-red-500 w-6 h-6" />
    </a>
  );
};

export default CallButton;
