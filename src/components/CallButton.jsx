import React from 'react';
import { useLocation } from 'react-router-dom';
import { Phone } from 'lucide-react';

const CallButton = () => {
  const location = useLocation();

  // Identify which page we are on
  const isWashingPage = location.pathname === '/washing-machine';
  const phoneNumber = isWashingPage ? 'tel:6581650541' : 'tel:6581650541';

  return (
    <a
      href={phoneNumber}
      className="fixed bottom-5 left-5 bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-lg flex items-center gap-2 z-50"
    >
      <Phone size={20} />
      Call Now
    </a>
  );
};

export default CallButton;
