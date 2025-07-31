import React, { useState } from 'react';
import { HiOutlineMailOpen } from "react-icons/hi";

const ContactUs = () => {
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
        <div className='max-w-[90%] mx-auto py-12 mt-[50px] flex flex-col md:flex-row gap-4'>
          
          {/* Left image + contact info */}
          <div className='md:w-1/2 w-full rounded-xl relative'>
            <div>
              <img src="/images/handyman5.webp" loading='lazy' alt="Washing machine repair service" className='rounded-2xl grayscale' />
            </div>
            <div className='flex items-center justify-center text-white absolute gap-4 right-0 left-0 bottom-0 md:bottom-5 pl-[3%] pb-6 bg-gradient-to-t from-black via-transparent to-slate-700'>
              <div className='border-2 p-4 rounded-full border-yellow-500 text-yellow-500 text-4xl'>
                <HiOutlineMailOpen />
              </div>
              <div>
                <p className='text-[21px]'>24/7 Emergency Service</p>
                <p className='text-[21px]'>homerepairsng@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Form section */}
          <div className='md:w-1/2'>
            <h3 className='text-center uppercase text-slate-700 font-bold tracking-widest'>Get in Touch</h3>
            <h3 className='text-center text-[28px] font-montserrat'>Effortless Booking with Us</h3>

            {successMessage && (
              <div className="bg-green-500 text-white p-3 rounded-md text-center mb-3">
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

              <textarea
                name="message"
                className='text-black h-[100px] py-3 px-2 rounded-lg'
                placeholder='Describe your problem*'
                required
              />

              <button
                type='submit'
                className='bg-gradient-to-r from-black to-blue-800 hover:bg-white hover:text-red-500 text-white font-bold w-[150px] mt-4 py-3 mx-auto rounded-lg'
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
