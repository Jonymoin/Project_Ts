import {
    PhoneCall,
    CalendarDays,
    Hammer,
    PaintRoller,
    Eye,
    Headphones
  } from "lucide-react";
  
  const steps = [
    {
      id: 1,
      icon: <PhoneCall className="w-8 h-8 text-primary" />,
      title: "Friendly Consultation",
      desc: "We start with a no-pressure chat to understand your painting needs. This includes a free site visit to assess the space and provide honest, tailored advice.",
    },
    {
      id: 2,
      icon: <CalendarDays className="w-8 h-8 text-primary" />,
      title: "Clear Project Timeline",
      desc: "Once confirmed, we schedule your project and keep you updated every step of the way. No guessing or chasing—just clear communication.",
    },
    {
      id: 3,
      icon: <Hammer className="w-8 h-8 text-primary" />,
      title: "Detailed Prep Work",
      desc: "Great results start with solid prep. We handle surface repairs, masking, furniture protection, and more to make sure the paint goes on perfect.",
    },
    {
      id: 4,
      icon: <PaintRoller className="w-8 h-8 text-primary" />,
      title: "Professional Painting",
      desc: "Our team applies top-quality paint in two full coats with precision and care—leaving your walls smooth, vibrant, and fresh.",
    },
    {
      id: 5,
      icon: <Eye className="w-8 h-8 text-primary" />,
      title: "Final Walkthrough",
      desc: "Before we pack up, we walk through everything with you. We’ll fix any touch-ups on the spot and make sure you're 100% happy with the result.",
    },
    {
        id: 6,
        icon: <Headphones className="w-8 h-8 text-primary" />,
        title: "After-Service Support",
        desc: "Even after the job is done, we’re here for you. If you notice anything after we leave or have questions, just reach out—our team is always happy to help.",
      },
  ];
  
  const OurProcess = () => {
    return (
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Our Painting Process
        </h2>
        <div className="relative border-l-4 border-primary pl-6 space-y-12">
          {steps.map((step) => (
            <div key={step.id} className="relative">
              <div className="absolute -left-10 bg-white border-2 border-primary rounded-full w-10 h-10 flex items-center justify-center">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-1">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default OurProcess;
  