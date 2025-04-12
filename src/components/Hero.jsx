import React from 'react';

const Hero = () => {
  return (
    <div className="relative flex flex-col-reverse md:flex-row-reverse items-center justify-center w-full h-[500px] bg-cover bg-center">
      
      {/* Background Image (Lazy Loaded) */}
      <img 
        src="/images/bg13.jpg" 
        alt="washing machine repair" 
        loading="lazy" 
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay Image (Lazy Loaded) */}
      <div className="absolute flex flex-col items-center justify-center h-full w-full bg-cover bg-center">
        <img 
          src="/images/bg6.jpg" 
          alt="Dishwasher repair" 
          loading="lazy" 
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Hero Text */}
        <h1 className="uppercase text-6xl md:leading-[120px] text-white font-extrabold md:tracking-[10px] md:text-[120px] font-abril text-center z-10">
          AIR CON SERVICE & PROFESSIONAL PAINTER
        </h1>
      </div>
      
    </div>
  );
}

export default Hero;
