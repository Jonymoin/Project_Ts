import { useParams } from 'react-router-dom';
import ContactUs from './ContactUs';

const ServicePage = () => {
  const { id } = useParams();
  

  const services = [
    {id :1 , name:"Washing Machine Repair",
      images:[
        "/images/wm6.jpg",
        "/images/wm2.jpg",
        "/images/wm3.jpg",
      ],
    
      description:"Is your washing machine acting up? Don’t let laundry day stress you out! Our expert washing machine repair service in Singapore is here to help. From leaks and noisy spin cycles to electrical faults, our skilled technicians can diagnose and fix any issue efficiently. We work with all major brands, ensuring your appliance gets the care it deserves. With affordable rates and same-day service options, you’ll have your machine up and running in no time. Trust us for reliable repairs that extend the life of your washing machine and keep your household running smoothly."},
      { id: 3, name: "CCTV Installation Services ", description: "Secure your home or business with our professional CCTV installation services in Singapore. Our team specializes in installing high-quality surveillance systems tailored to your specific needs. Whether it’s for residential or commercial use, we provide expert guidance on camera placement, system setup, and connectivity to ensure optimal coverage and security. With a focus on reliable and efficient service, we help you monitor your property 24/7 for peace of mind. Protect what matters most with our affordable and trusted CCTV installation solutions. Contact us today for a consultation and free quote!" },

      { id: 4, name: "TV Installation Service", description: "Need help setting up your new TV? Our professional TV installation service in Singapore is here to make it easy for you. Whether it’s mounting your TV on the wall or setting it up on a stand, our skilled technicians ensure a secure and perfectly aligned installation. We handle all cable management, ensuring a clean and clutter-free look for your space. From flat screens to curved and smart TVs, we cater to all models and sizes. Sit back, relax, and let us bring the cinema experience to your home. Reliable, efficient, and hassle-free—book your installation today!" },


    { id: 5, name: "Plumbing Service", description: "Leaky faucets, clogged drains, or pipe issues? Our professional plumbing service in Singapore has you covered! We provide a full range of plumbing solutions, including leak repairs, drain cleaning, pipe installation, and water heater servicing. Our experienced plumbers ensure fast and efficient fixes to minimize disruptions to your daily routine. Whether it’s a small repair or a major plumbing project, we use the latest tools and techniques to get the job done right the first time. Count on us for reliable, affordable, and hassle-free plumbing services. Call us today for expert assistance!" },
    { id: 6, name: "Air Conditioning Service", description: "Is your air conditioner not cooling effectively or making strange noises? Our expert air conditioning service in Singapore is here to ensure your comfort. We specialize in aircon repairs, servicing, and installations for all types and brands. From cleaning clogged filters to fixing refrigerant leaks, our technicians provide efficient solutions to keep your system running smoothly. Regular maintenance can extend the lifespan of your unit and improve energy efficiency. Don’t let the heat get to you—contact us today for reliable and affordable aircon services that keep your home or office cool and comfortable!" },
    { id: 7, name: "Painting Service", description: "Looking to refresh your space with a new coat of paint? Our professional painting service in Singapore offers top-quality solutions for homes, offices, and commercial spaces. Whether it’s a single room or an entire property, our skilled painters ensure smooth finishes and vibrant colors that transform your space. We use premium, eco-friendly paints that are safe and long-lasting. From color selection to the final touch-ups, we handle every detail with care and precision. Revamp your walls and create a stunning environment effortlessly. Contact us today for reliable and affordable painting services!" },
    { id: 8, name: "Intercom System Service", description: "Enhance the security and convenience of your property with our reliable intercom system services in Singapore. Whether you need a new intercom installation, system upgrade, or repair, our skilled technicians are here to assist. We work with the latest audio and video intercom technologies to ensure seamless communication and added safety for your home or office. From troubleshooting connectivity issues to integrating advanced features, we provide efficient and affordable solutions tailored to your needs. Trust us to keep your intercom system working perfectly—contact us today for expert assistance!" },
    { id: 9, name: "Carpentry Service", description: "Need custom furniture or repairs? Our professional carpentry service in Singapore offers tailored solutions for your home or office. From crafting stylish cabinets and wardrobes to fixing broken furniture or doors, our skilled carpenters deliver high-quality workmanship with precision. We also specialize in custom woodwork, creating pieces that match your style and fit your space perfectly. Using premium materials and modern techniques, we ensure durable and elegant results. Whether it’s a small repair or a large project, trust us for reliable and affordable carpentry services. Transform your space with our expertise—contact us today!" },
    
    { id: 2, name: "Dishwasher Repair Services",
      images:[
        "/images/dish.jpg",
        "",
        "/images/",
      ], 
      description: "Is your dishwasher acting up? Our expert dishwasher repair services in Singapore are here to help! From water drainage issues and faulty spray arms to electrical problems and strange noises, we diagnose and fix all types of dishwasher malfunctions. Our skilled technicians work with all major brands, using quality tools and parts to ensure long-lasting solutions. Save time and money by restoring your dishwasher to perfect working condition instead of replacing it. Trust us for quick, reliable, and affordable repair services. Contact us today to get your dishwasher running smoothly again!" },
      

    { id: 10, name: "Electrical Service", description: "Having electrical issues or need new installations? Our reliable electrical service in Singapore is here to help! From fixing faulty wiring and power outages to installing new sockets, switches, or lighting fixtures, our licensed electricians provide safe and efficient solutions for all your needs. Whether it’s residential or commercial work, we ensure compliance with safety standards and deliver long-lasting results. No job is too big or small for our experienced team. Trust us to keep your home or business powered and safe. Contact us today for prompt and affordable electrical services!" },

    { id: 11, name: "Water Troubleshooting Services", description: "Facing water issues at home or the office? Our expert handyman services in Singapore specialize in water troubleshooting to address leaks, low pressure, clogged pipes, or mysterious damp spots. With years of experience, we quickly identify the root cause and provide effective solutions to prevent further damage. Whether it’s a dripping tap, a leaking ceiling, or water flow problems, we ensure prompt and reliable service. Trust our skilled professionals to restore your water system’s functionality with minimal disruption. Contact us today for fast, affordable, and quality water troubleshooting services tailored to your needs." },
    

    { id: 12, name: "Mover Service", description: "Planning a move? Our professional mover services in Singapore make relocating stress-free and seamless. Whether you're moving homes, offices, or just a few items, our experienced team ensures your belongings are handled with care and transported safely. From packing and loading to unloading and setup, we provide a complete moving solution tailored to your needs. Equipped with the right tools and vehicles, we handle moves of all sizes efficiently and on time. Trust us to make your moving experience smooth, hassle-free, and affordable. Contact us today for a reliable and professional moving service!" },
    { id: 13, name: "Automatic Door Issues", description: "Facing issues with your automatic doors? We’ve got you covered! Our professional automatic door repair service in Singapore specializes in diagnosing and fixing a wide range of problems, including sensor malfunctions, motor issues, and alignment errors. Whether it’s for residential, commercial, or industrial use, our experienced technicians ensure swift and reliable solutions to restore smooth operation. With our prompt service and commitment to quality, you can count on us to keep your automatic doors functioning perfectly. Don’t let a faulty door disrupt your routine—contact us today for expert assistance!" },
    { id: 14, name: "Kitchen Exhaust Fan", description: "Ensure a clean and odor-free kitchen with our professional kitchen exhaust fan services in Singapore. Whether you need installation, repair, or maintenance, our skilled technicians handle all types of exhaust fan systems efficiently. We resolve issues like poor ventilation, noisy fans, or grease buildup to restore optimal performance. A well-functioning kitchen exhaust fan improves air quality, removes smoke and odors, and enhances your cooking experience. Trust us for reliable, fast, and affordable solutions tailored to your needs. Contact us today to keep your kitchen fresh and comfortable!" },
    { id: 15, name: "All Kinds of Ducting Work", description: "Looking for professional ducting work services? We specialize in all kinds of ducting solutions in Singapore, including installation, repair, and maintenance for residential, commercial, and industrial spaces. Our expertise covers air conditioning ducts, kitchen exhaust ducts, ventilation systems, and more. We ensure proper airflow, energy efficiency, and durability with high-quality materials and skilled craftsmanship. Whether it’s a new project or upgrading an existing system, we deliver customized solutions to meet your needs. Trust us for reliable, efficient, and cost-effective ducting services. Contact us today for a consultation!" },
    { id: 16, name: "Automatic Gate Issues", description: "Having trouble with your automatic gate? Our expert automatic gate repair services in Singapore are here to resolve any issues quickly and efficiently. Whether it’s a malfunctioning motor, sensor problems, remote control issues, or a gate that won’t open or close, our skilled technicians provide reliable solutions for all gate types and brands. We ensure smooth operation, enhanced security, and long-lasting performance. Don’t let a faulty gate compromise your convenience or safety—contact us today for prompt, affordable, and professional automatic gate repair services!" },
  ];

  const service = services.find((service) => service.id === parseInt(id));
    
  if (!service) {
    return <h2>Service not found!</h2>;
   
  }
  const backgroundImage = service.images && service.images[0];


  const imagePath = `/images/service-${service.id}.jpg`;


  return (
    <main>
      {backgroundImage && (
       <div
       className="h-[400px] flex flex-col items-center justify-center text-white bg-cover bg-center bg-no-repeat"
       style={{
         backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImage})`,
       }}
     >
       <h2 className="text-4xl font-bold font-montserrat">{service.name}</h2>
       <p className='text-2xl'>
  Call Us Now:  
   <a href="tel:+6568698390" className="text-[#37B126] hover:underline">
     65 8694 8390
  </a>
</p>
       
     </div>
      )}
      <div className='bg-[#] font-roboto text-white py-4'>
      <h2 className='text-center text-4xl text-[#8f6c8c] font-extrabold'>{service.name}</h2>
      <div className='max-w-[80%] shadow-2xl  mx-auto bg-[#94c6c7] p-8 mt-6'>
      <p>{service.description}</p>
      <div className="flex justify-center mt-6">
        <img
          src={imagePath}
          alt={service.name}
          className="w-full max-h-[400px] rounded-lg shadow-lg"
        />
      </div>
      </div>
      {service.images && service.images[1] && service.images[2] && (
          <div className="flex flex-col md:flex-row gap-3 bg-[#37B126] py-4 justify-center mb-6">
            <img
              src={service.images[1]}
              alt={`${service.name} highlighted`}
              className="md:w-[40%] w-[85%] mx-auto max-h-[400px] rounded-lg shadow-lg"
            />
            <img
              src={service.images[2]}
              alt={`${service.name} highlighted`}
              className="md:w-[40%] max-h-[400px] w-[85%] mx-auto rounded-lg shadow-lg"
            />
          </div>
        )}
       <ContactUs />
      
    </div>
    </main>

);
};

export default ServicePage;
