import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { HiOutlineMailOpen } from "react-icons/hi";

 const ContactUs = () => {
  const form = useRef();
  const [selectedService,setSelectedService] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

   const services = [
          
            "Washing Machine Repair" ,  
            "Install Your TV" ,
            "CC TV Installation", 
            "Electrical Service" ,
            "Plumbing Service" ,
            "Air-Conditioning Service" , 
            "Painting" ,
            "Intercom Issues",
            "Carpenter" ,
            "Dishwasher Repair", 
            "Water Choke Trobleshoot" , 
            "Mover Service" ,
            "Automatic Door Issues" , 
            "Kitchen Exhaust Fan",
            "All Kinds of Ducting Work", 
            "Automatic Gate Issues" ,
           ]

  return (
    <>
    <div className='bg-[#37B126]'>
    <div className='max-w-[90%] mx-auto py-12 mt-[50px] flex flex-col md:flex-row gap-4'>
      <div className='md:w-1/2 w-full rounded-xl relative'>
      <div>
        <img src="/images/bg8.jpg" alt="" className='rounded-2xl grayscale' />
      </div>
      
        <div className='flex items-center justify-center text-white absolute gap-4 right-0 left-0 bottom-0 md:bottom-5 pl-[3%] pb-6 bg-gradient-to-t from-black via-transparent  to-slate-700'>
          <div className='border-2 p-4 rounded-full border-yellow-500 text-yellow-500 text-4xl'><HiOutlineMailOpen /></div>
          <div>
          <p className='text-[24px]'>24/7 Emergency Service</p>
          <p className='text-[21px]'>leo.engrg@gmail.com</p>
          </div>
        </div>
        
       
      </div>
       <div className='md:w-1/2'>
       <h3 className='text-center uppercase text-slate-700 font-bold tracking-widest'>get in touch</h3>
<h3 className='text-center text-[28px] font-montserrat'>Effortless Booking with us</h3>
<form ref={form} onSubmit={sendEmail} className='flex flex-col gap-3'>

<input type="text" name="user_name" className='text-black py-3 px-2 rounded-lg' placeholder='Name*'/>

<input type="number" name="user_number" className='text-black py-3 px-2 rounded-lg' placeholder='Phone*' />

<input type="email" name="user_email" className='text-black py-3 px-2 rounded-lg' placeholder='Email*'/>
<label htmlFor="">Select Service</label>
<select className='bg-white text-black py-3 px-2 rounded-lg' name="selected_service" value={selectedService} onChange={(e)=>setSelectedService(e.target.value)}>
<option value="" disabled>
  --select a service --
</option>
{services.map((service,index)=>(
  <option key={index} value={service}>{service}</option>
))} </select>


<textarea name="message" className='text-black h-[100px
] py-3 px-2 rounded-lg' placeholder='Write a message*' />
<button type='submit' className='bg-gradient-to-r from-black to-blue-800 hover:bg-white hover:text-red-500 text-white font-bold w-[150px] mt-4 py-3 mx-auto rounded-lg'> Send Mail</button>
</form>
       </div>
</div>
    </div>
    </>
    
  );
};

export default ContactUs