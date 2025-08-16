import React from 'react';
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactHero = () => {
  return (
    <div
      className="bg-[#00FFFF] flex flex-col h-[800px] md:h-[600px] bg-cover bg-center"
    >
      <div className="max-w-6xl py-16 mx-auto flex flex-col items-center gap-6 px-4">
        
        <h1 className="text-3xl text-black md:text-5xl font-bold text-center leading-snug">
          Fast & Reliable Washing Machine Repair
        </h1>
        <h2 className="text-lg md:text-xl text-black text-center font-medium">
          Best Services All Over Singapore
        </h2>
        <h2 className="text-lg md:text-xl text-black text-center font-medium">
          Washer Repair
        </h2>
        <p className="text-base md:text-3xl text-black text-center max-w-2xl leading-relaxed">
          One call can fix it all. Quick appointments available!
        </p>

        {/* Logo */}
        <img
          src="/images/logo6.webp"
          alt="washing machine service logo"
          className="w-32 h-32 object-contain rounded-xl"
          width="128"
          height="128"
          loading="lazy"
        />

        {/* Contact Options */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 mt-8">

          {/* WhatsApp */}
          <a
            href="http://wa.me/6584608380"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-black text-white hover:bg-green-600 px-5 py-3 rounded-full text-lg transition"
            data-clarity-label="whatsapp-hero"
          >
            <FaWhatsapp className="w-6 h-6" />
            +65 8460 8380
          </a>

          {/* Middle Image */}
          <img
            src="/images/telephone.webp"
            alt="Telephone"
            className="w-20 h-20 md:w-28 md:h-28 object-contain"
            width="112"
            height="112"
            loading="lazy"
          />

          {/* Email */}
          <a
            href="mailto:homerepairsng@gmail.com"
            className="flex items-center gap-2 bg-black text-white hover:bg-blue-600 px-5 py-3 rounded-full text-lg transition"
          >
            <MdEmail className="w-6 h-6" />
            homerepairsng@gmail.com
          </a>

        </div>
      </div>
    </div>
  );
};

export default ContactHero;
