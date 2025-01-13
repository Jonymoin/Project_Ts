import React from 'react'

const Hero2 = () => {
  return (


    <main className='bg-gradient-to-r from-blue-600 to-green-600 '>
      <div className='max-w-[90%] font-montserrat mx-auto flex flex-col-reverse md:flex-row font-mplus py-[50px] gap-[50px] md:gap-28'>
        <div className='md:w-[50%]  max-h-[500px]'>
           <div>
           <img src="/images/wm3.jpg" alt="" className='md:w-[500px] h-[550px]'/>
           <div className=' bg-[#37B126] text-white px-16 py-8 text-4xl font-bold'>
                <p>4+ Years of <br />Experience</p>
            </div>
           </div>
            
        </div>
        <div className='md:w-[50%]'>
        <h3 className='text-[#37B126] font-bold text-xl'>Securing Everything</h3>
        <h2 className='text-4xl font-semibold mb-4 text-white'>Making Home Maintenance Hassle-Free</h2>
        <img src="/images/wm2.jpg" alt="Washing Machine" className='max-h-[600px]' />
        <p className='mt-5 font-roboto text-white'>
        At Singapore Business Directory, we are a team of skilled professionals devoted to delivering top-notch home services in Singapore. Backed by years of expertise and a commitment to excellence, we take pride in being your reliable partner for all your home maintenance and improvement needs.
        </p>
        </div>
    </div>
    </main>
  )
}

export default Hero2