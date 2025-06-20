import React from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const WhatsAppButton = () => {
  const location = useLocation();

  // পাথ অনুযায়ী নম্বর নির্বাচন
  const isWashingPage = location.pathname === '/service/washing-machine';
  const whatsappNumber = isWashingPage ? '6584661400' : '6581650541';

  return (
    <a
      href={`https://wa.me/${whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-white p-4 rounded-full shadow-lg flex items-center justify-center z-50 hover:scale-105 transition-transform"
      data-clarity-label="whatsapp-floating"
    >
      <FontAwesomeIcon icon={faWhatsapp} className="text-green-500 w-6 h-6" />
    </a>
  );
};

export default WhatsAppButton;
