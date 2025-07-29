import React from 'react'

const Hero4 = () => {
  return (
    <>
    <h3 className='text-center mt-10 text-xl md:text-6xl text-white bg-gradient-to-r from-slate-950 to-[#0070f7]'>Reason To Hire Us</h3>
     <div className='flex flex-col md:flex-row relative text-2xl md:text-4xl text-white'>
        <div className='md:w-1/2 py-10 md:py-0 md:h-[520px] bg-black gap-8 flex flex-col justify-center object-cover bg-cover'
        style={{ backgroundImage: "url('/images/hero2.jpg')" }}>
             <li>Trusted and qualified experts</li>
             <li>Professional service</li>
             <li>Local expertise</li>
        </div>
        <div className='md:w-1/2 py-10 md:py-0 md:h-[520px] md:pl-[100px] gap-8 flex flex-col justify-center bg-cover'
        style={{ backgroundImage: "url('/images/bg5.jpg')" }}>
             <li>Worry-free experience</li>
             <li>Convenient scheduling</li>
             <li>Upfront costs</li>
        </div>
    </div>
    </>
  )
}

export default Hero4