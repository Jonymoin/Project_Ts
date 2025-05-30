import React from 'react';
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactHero = () => {
  return (
    <div className='bg-[#51BD41] flex flex-col'  style={{
        width: '100%',
        
        backgroundImage: "url('/images/bg14.png')",
        backgroundPosition: 'center',
        
       }}>
      <div className="max-w-6xl py-16 mx-auto flex flex-col items-center gap-8">
        
        <h1 className="text-3xl text-black md:text-5xl font-bold text-center">
          Fast & Reliable Washing Machine Repair
        </h1>
         <h2>Best Services All Over Singapore</h2>
        <p className="text-lg md:text-2xl text-black text-center">
          One call can fix it all. Quick appointments available!
        </p>
          <img src="/images/logo6.jpg"  alt="washing machine service logo" className='w-32 rounded-xl'  />
        <div className="flex flex-col md:flex-row items-center gap-10 md:ml-14 mt-8">
          
          {/* WhatsApp */}
          <a 
            href="http://wa.me/6584661400" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-black text-white hover:bg-green-600 px-6 py-3 rounded-full text-xl transition"
          >
            <FaWhatsapp className="text-2xl" />
            +65 8466 1400
          </a>

          {/* Middle Image */}
          <img src="/images/telephone.png" alt="Telephone" className="w-20 md:w-28" />

          {/* Email */}
          <a 
            href="mailto:homerepairsng@gmail.com" 
            className="flex items-center gap-3 bg-black text-white hover:bg-blue-600 px-6 py-3 rounded-full text-xl transition"
          >
            <MdEmail className="text-2xl" />
            homerepairsng@gmail.com
          </a>

        </div>
        
      </div>
    </div>
  );
}

export default ContactHero;
