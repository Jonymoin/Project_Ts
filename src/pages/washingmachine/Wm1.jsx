import React, { useRef, useState } from 'react';


const ContactUs = () => {
  const form = useRef();
const [successMessage, setSuccessMessage] = useState("");
const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const response = await fetch("https://formspree.io/f/xdkzrenn", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setSuccessMessage("Your message has been sent successfully!");
      e.target.reset();

      // Hide success message after 3 seconds
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    } else {
      setSuccessMessage("Something went wrong. Please try again.");
    }
  };
  

  return (
    <>
      <div className='bg-gradient-to-r from-gray-700 via-violet-900 to-slate-500'>
        <div className='max-w-[90%] mx-auto py-12 flex flex-col md:flex-row gap-20 md:gap-4'>
          {/* Left side: image & text */}
          <div className='md:w-1/2 w-full rounded-xl relative'>
            <div>
              <img src="/images/wm2.webp" fetchpriority="high" width="500" height="500" alt="Washing machine repair service" className='rounded-2xl grayscale' />
            </div>
            <div className='flex items-center justify-center text-black absolute gap-6 right-0 left-0 bottom-0 md:bottom-5 pl-[3%] pb-6 bg-gradient-to-t from-black via-transparent to-slate-700'>
              <div className=' text-center space-y-4'>
                <h1 className='font-bold text-white'>Washing Machine Repair Service</h1>
                <h2 className='text-[24px] text-cyan-500 font-semibold'>Having issues with your washing machine?</h2>
                
                
                <a
      href="tel:+6584608380"
      data-gtm-event="call_middle"
      className="inline-block bg-[#00FFFF] hover:bg-red-700 text-black text-[18px] font-bold px-6 py-3 rounded-xl shadow-md transition duration-300"
    >
      📞 Call Us Now
    </a>
              </div>
            </div>
          </div>

          {/* Right side: form */}
          <div className='md:w-1/2 hidden md:block'>
            <h3 className='text-center uppercase text-cyan-500 font-bold tracking-widest'>Get in Touch</h3>
            <h3 className='text-center text-[28px] font-montserrat'>Effortless Booking with Us</h3>

            {/* ✅ Success Message */}
            {successMessage && (
              <div className="bg-green-500 text-black p-3 rounded-md text-center mb-3">
                {successMessage}
              </div>
            )}

            

            <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
              <input
                type="text"
                name="name"
                className='text-black py-3 px-2 rounded-lg'
                placeholder='Name*'
                required
              />

              <input
                type="tel"
                name="phone"
                className='text-black py-3 px-2 rounded-lg'
                placeholder='Phone*'
                required
              />
              <input
                type="tel"
                name="email"
                className='text-black py-3 px-2 rounded-lg'
                placeholder='Email*'
                required
              />

              <textarea
                name="message"
                className='text-black h-[100px] py-3 px-2 rounded-lg'
                placeholder='Describe your problem*'
                required
              />

              <button
                type='submit'
                className='bg-gradient-to-r from-black to-blue-800 hover:bg-white hover:text-red-500 text-black font-bold w-[150px] mt-4 py-3 mx-auto rounded-lg'
              >
                Send Mail
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
