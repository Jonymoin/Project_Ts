import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { HiOutlineMailOpen } from "react-icons/hi";

const ContactUs = () => {
  const form = useRef();
  const [selectedService, setSelectedService] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); // Success message state

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_pvhjqpe', 'template_vpxorak', form.current, {
        publicKey: 'tIp9OJwHrRrvZ8dq-',
      })
      .then(
        () => {
          setSuccessMessage("Your message has been sent successfully!"); // Show success message
          form.current.reset(); // Reset form fields
          setSelectedService(""); // Reset dropdown selection

          // Hide the message after 3 seconds
          setTimeout(() => {
            setSuccessMessage("");
          }, 3000);
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  

  return (
    <>
      <div className='bg-gradient-to-r from-gray-700 via-violet-900 to-slate-500'>
        <div className='max-w-[90%] mx-auto py-12 mt-[50px] flex flex-col md:flex-row gap-4'>
          <div className='md:w-1/2 w-full rounded-xl relative'>
            <div>
              <img src="/images/handyman5.webp" alt="Washing machine repair service" className='rounded-2xl grayscale' />
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
          
          <div className='md:w-1/2'>
            <h3 className='text-center uppercase text-slate-700 font-bold tracking-widest'>Get in Touch</h3>
            <h3 className='text-center text-[28px] font-montserrat'>Effortless Booking with Us</h3>

            {/* Success message popup */}
            {successMessage && (
              <div className="bg-green-500 text-white p-3 rounded-md text-center mb-3">
                {successMessage}
              </div>
            )}

            <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-3'>
              <input type="text" name="user_name" className='text-black py-3 px-2 rounded-lg' placeholder='Name*' required />

              <input type="number" name="user_number" className='text-black py-3 px-2 rounded-lg' placeholder='Phone*' required />

              <input type="email" name="user_email" className='text-black py-3 px-2 rounded-lg' placeholder='Email*' required />

              
              

              <textarea name="message" className='text-black h-[100px] py-3 px-2 rounded-lg' placeholder='Write a message*' required />

              <button type='submit' className='bg-gradient-to-r from-black to-blue-800 hover:bg-white hover:text-red-500 text-white font-bold w-[150px] mt-4 py-3 mx-auto rounded-lg'>
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
