import React from "react";
import { motion } from "framer-motion"; // Motion ঠিক আছে

const Wm1 = () => {
  return (
    <div className="relative flex flex-col-reverse md:flex-row-reverse items-center justify-center w-full h-[500px] bg-cover bg-center" style={{
    width: '100%',
    
    backgroundImage: "url('/images/wash1.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
   }}>
    
    <div className="absolute font-roboto flex flex-col items-center justify-center h-full gap-4 text-blue-700"
    style={{
      width: '100%',
      
      backgroundImage: "url('/images/plumber.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      
     }}>
      {/* <h3 className='text-xl md:text-2xl font-roboto font-semibold'>Trusted Handyman Service</h3>
        <h2 className="text-2xl md:text-4xl font-bold">Singapore Business Directory</h2>
        <p className='text-center'>Have a home repair issue? <br /> Call 24 hours emergency services all time!</p> */}

        <h1 className='uppercase text-6xl text-[#d00000] font-extrabold md:tracking-[30px] md:text-[140px]  font-abril text-center'>Washing Machine Repair</h1>
         
        
      
    </div>
    {/* <div className='md:w-1/3'>
      <img src="/images/hero.png" alt="" className='w-[200px] md:w-[400px]'/>
    </div> */}


   </div>
  );
};

export default Wm1;
