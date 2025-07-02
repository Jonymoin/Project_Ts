import React from 'react';
import WhyChooseUs from '../washingmachine/WhyChooseUs';
import DishwasherServices from './DishwasherServices';
import DishwasherFAQs from './DishwasherFAQs';
import DishwasherCare from './DishwasherCare';
import ContactUs from '../../components/ContactUs';

const Dishwasher = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-[#f4f4f4] py-12 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-cyan-400">Dishwasher Repair in Singapore</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Fast & reliable dishwasher repair services across Singapore. Book your repair today with our expert technicians.
        </p>
      </section>

      {/* Service Details */}
      <section className="py-10 px-6 md:px-20 grid md:grid-cols-1 gap-10">
         <section className="bg-cyan-400 text-white py-10 text-center">
  <h3 className="text-3xl font-bold mb-4">Need Fast Dishwasher Repair?</h3>
  <p className="mb-6 text-lg">Message us now and get your dishwasher fixed by Singapore’s top appliance experts.</p>
  
  <a
    href="https://wa.me/6584608380"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-white text-green-600 px-6 py-3 font-semibold rounded-full shadow-md hover:bg-gray-100 transition"
  >
    💬 WhatsApp Us: +65 8460 8380
  </a>
</section>

        <div>
            <DishwasherServices />
            <DishwasherCare />
            <DishwasherFAQs />
          <WhyChooseUs />
          <ContactUs />
        </div>
      </section>

      {/* Call to Action */}
     
    </div>
  );
};

export default Dishwasher;
