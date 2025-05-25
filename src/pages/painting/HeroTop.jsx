import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";



const HeroTop = () => {
  return (
    <div className='bg-red-500 flex flex-col'  style={{
        width: '100%',
        
        backgroundImage: "url('/images/bg14.png')",
        backgroundPosition: 'center',
        
       }}>
        

       <div className='flex flex-col items-center py-[50px] md:py-[100px] gap-5'>
       <h3 className='text-[20px] md:text-[35px] text-center'>One Call Can Solve All Your Painting Problems</h3>
        <img src="/images/telephone.png" alt="Washing Machine Repair Service" />
        <h3 className='text-[20px] md:text-[35px] font-bold'>Call Us Now +65 8165 0541</h3>
        <p className='text-[20px] text-center md:text-[35px]'>And, We Have More Options To Contact Us</p>
        <div className='flex items-center flex-col gap-7 md:flex-row md:justify-around'>
        <div className='flex text-xl md:text-4xl items-center hover:scale-110 transition-all duration-300 font-semibold'>
            <div className=''>
                        <FaWhatsapp />
            </div>
            <div className='flex items-center px-1'>
         <a href="http://wa.me/6581650541" target='blank' rel='noopener noreferrer'> +65 8165 0541</a> 
        </div>
        </div>
        <div><img src="/images/logo.png" alt="" className='w-[70px]' /></div>
        <div className='flex items-center gap-1 text-xl md:text-2xl'>
            <MdEmail />
            <a
          href="mailto:homerepairsng@gmail.com"
          className=" hover:underline"
        >
          homerepairsng@gmail.com
        </a>
            
        </div>
        </div>
        
       </div>
       
    </div>
  )
}

export default HeroTop