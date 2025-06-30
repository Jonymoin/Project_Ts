import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { HiOutlineMailOpen } from "react-icons/hi";

const ContactUs = () => {
  const form = useRef();
  const [selectedService, setSelectedService] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // ❗️ New error state

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_pvhjqpe', 'template_vpxorak', form.current, {
        publicKey: 'tIp9OJwHrRrvZ8dq-',
      })
      .then(
        () => {
          setSuccessMessage("✅ Your message has been sent successfully!");
          form.current.reset();
          setSelectedService("");

          setTimeout(() => {
            setSuccessMessage("");
          }, 3000);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setErrorMessage("❌ Mail pathate problem hocche. Please call us instead.");

          setTimeout(() => {
            setErrorMessage("");
          }, 4000);
        }
      );
  };

  return (
    <>
      <div className='bg-gradient-to-r from-gray-700 via-violet-900 to-slate-500'>
        <div className='max-w-[90%] mx-auto py-12 flex flex-col md:flex-row gap-20 md:gap-4'>
          {/* Left side: image & text */}
          <div className='md:w-1/2 w-full rounded-xl relative'>
            <div>
              <img src="/images/wash3.jpg" alt="Washing machine repair service" className='rounded-2xl grayscale' />
            </div>
            <div className='flex items-center justify-center text-white absolute gap-6 right-0 left-0 bottom-0 md:bottom-5 pl-[3%] pb-6 bg-gradient-to-t from-black via-transparent to-slate-700'>
              <div className=' text-center space-y-4'>
                <h1>Washing Machine Repair Service</h1>
                <h2 className='text-[24px] text-cyan-500 font-semibold'>Having issues with your washing machine?</h2>
                
                <p className='text-[21px] text-'>👉 Fill out the form or 📞 call us now for a quick booking!</p>
                <a
      href="tel:+6584608380"
      className="inline-block bg-cyan-500 hover:bg-red-700 text-white text-[18px] font-bold px-6 py-3 rounded-xl shadow-md transition duration-300"
    >
      📞 Call Us Now
    </a>
              </div>
            </div>
          </div>

          {/* Right side: form */}
          <div className='md:w-1/2'>
            <h3 className='text-center uppercase text-cyan-500 font-bold tracking-widest'>Get in Touch</h3>
            <h3 className='text-center text-[28px] font-montserrat'>Effortless Booking with Us</h3>

            {/* ✅ Success Message */}
            {successMessage && (
              <div className="bg-green-500 text-white p-3 rounded-md text-center mb-3">
                {successMessage}
              </div>
            )}

            {/* ❌ Error Message */}
            {errorMessage && (
              <div className="bg-red-600 text-white p-3 rounded-md text-center mb-3">
                {errorMessage}
              </div>
            )}

            <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-3'>
              <input type="text" name="user_name" className='text-black py-3 px-2 rounded-lg' placeholder='Name*' required />
              <input type="number" name="user_number" className='text-black py-3 px-2 rounded-lg' placeholder='Phone*' required />
              <input type="email" name="user_email" className='text-black py-3 px-2 rounded-lg' placeholder='Email*' required />
              <textarea name="message" className='text-black h-[100px] py-3 px-2 rounded-lg' placeholder='Write a message*' required />
              <button type='submit' className='bg-gradient-to-r from-[#51BD41] to-cyan-500 hover:bg-white hover:text-red-500 text-white font-bold w-[150px] mt-4 py-3 mx-auto rounded-lg'>
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
