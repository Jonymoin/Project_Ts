import React from 'react'
import { Phone, MessageCircle } from "lucide-react";
const Hero = () => {
  return (
    <div>
        <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-6">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Homerepair <span className="text-blue-200">SG</span>
          </h1>
          <p className="text-2xl md:text-4xl mb-2 font-bold"><span className='uppercase'>Singapore's</span> Best Washing Machine Repair Services</p>
          <p className="text-lg opacity-90 mb-8">Fast, Reliable & Affordable Solutions in Singapore</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:+6581313085"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transform hover:scale-105 transition-all duration-200 shadow-lg flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Now: +65 8460 8380
            </a>
            <a 
              href="https://wa.me/6581313085"
              className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transform hover:scale-105 transition-all duration-200 shadow-lg flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Quote
            </a>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Hero