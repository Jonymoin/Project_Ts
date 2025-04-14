import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const HeaderTop = () => {
  return (
    <nav className='flex bg-black text-[#48b2d7] mx-auto md:justify-between gap-4 py-3'>
        <p className='text-xl font-semibold'>Need any Help?</p>
        <div className='flex text-base md:text-2xl items-center hover:scale-110 transition-all duration-300 font-semibold'>
                    <div className=''>
                                <FaWhatsapp />
                    </div>
                    <div className='flex items-center px-1'>
                 <a href="http://wa.me/6581650541" target='blank' rel='noopener noreferrer'> +65 8165 0541</a> 
                </div>
                </div>
            <div className='hidden md:block'>
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
    </nav>
  )
}

export default HeaderTop