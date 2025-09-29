import React, { useState } from 'react';
import { Phone, MessageCircle, Wrench, Clock, Shield, CheckCircle, Star, MapPin, Mail, ChevronDown, ChevronUp, Droplets, Zap } from 'lucide-react';
import HeroSection from './HeroSection';

const PlumbingSG = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const phoneNumber = "+6581650541";
  const whatsappLink = `https://wa.me/6581650541?text=Hello,%20I%20need%20plumbing%20service%20assistance.`;

  const plumbingServices = [
    'Pipe leak repairs',
    'Tap and faucet replacement', 
    'Toilet unclogging',
    'Water heater repair',
    'Kitchen & bathroom plumbing',
    'Drain cleaning and unclogging',
    'Shower installation and repair',
    'Sink and basin repairs',
    'Water pipe installation',
    'Plumbing inspection services'
  ];

  const faqs = [
    {
      question: "What should I do if my toilet is overflowing?",
      answer: "First, turn off the water supply valve behind the toilet. Remove the toilet tank lid and lift the flapper to stop water flow. Clean up any water immediately and call us for professional repair to prevent further damage."
    },
    {
      question: "How quickly can you respond to emergency plumbing calls?",
      answer: "We offer 24/7 emergency plumbing services and can typically reach you within 30-60 minutes depending on your location in Singapore. Our emergency hotline is always available."
    },
    {
      question: "What are your typical service charges?",
      answer: "Our service charges range from $50 to $180, depending on the complexity of the job. Most common plumbing issues are resolved within this price range. We provide transparent quotes before starting any work."
    },
    {
      question: "Do you provide services for both residential and commercial properties?",
      answer: "Yes, we provide comprehensive plumbing services for HDB flats, condominiums, landed properties, offices, and commercial establishments across Singapore."
    },
    {
      question: "What should I do if I have a major water leak?",
      answer: "Immediately turn off your main water supply, move valuables away from the affected area, and call us right away. For severe leaks, you may also need to contact your building management or PUB if it affects common areas."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Sticky Header */}
      <header className="bg-blue-900 shadow-xl sticky top-0 z-50 border-b border-blue-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-around md:justify-between items-center">
            {/* Logo */}
            <div className='hidden md:block'>
              <div className="flex items-center space-x-3">
              <div className="bg-cyan-600 p-2 rounded-lg">
                <Droplets className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">PlumbingSG</h1>
                <p className="text-sm text-blue-200">Professional Service</p>
              </div>
            </div>
            </div>

            {/* Contact Buttons */}
            <div className="flex space-x-3">
              <a 
                href={`tel:${phoneNumber}`} 
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors font-semibold"
              >
                <Phone className="h-4 w-4" />
                <span>Call Now</span>
              </a>
              <a 
                href={whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors font-semibold"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </header>
       <HeroSection />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-slate-900 py-20 border-b border-slate-700">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 text-white">
            Professional Plumbing Services in Singapore
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
            Expert plumbing solutions for your home and business. From emergency repairs to installations, 
            our skilled plumbers provide fast, reliable service with transparent pricing across Singapore.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
            <a 
              href={`tel:${phoneNumber}`} 
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors flex items-center justify-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>+65 84608380</span>
            </a>
            <a 
              href={whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors flex items-center justify-center space-x-2"
            >
              <MessageCircle className="h-5 w-5" />
              <span>WhatsApp Us</span>
            </a>
          </div>
          <p className="text-blue-200">Available 24/7 • Emergency Service • All areas in Singapore</p>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="py-16 bg-slate-800 border-b border-slate-700">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Why Choose Our Plumbing Service</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-700 p-8 rounded-lg shadow-lg text-center border border-slate-600">
              <div className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">24/7 Emergency Service</h3>
              <p className="text-slate-300">Round-the-clock emergency plumbing services available. We're here when you need us most.</p>
            </div>
            <div className="bg-slate-700 p-8 rounded-lg shadow-lg text-center border border-slate-600">
              <div className="bg-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">No Hidden Charges</h3>
              <p className="text-slate-300">Transparent pricing with upfront quotes. No surprise fees or hidden costs after the job is done.</p>
            </div>
            <div className="bg-slate-700 p-8 rounded-lg shadow-lg text-center border border-slate-600">
              <div className="bg-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Experienced Plumbers</h3>
              <p className="text-slate-300">Licensed and experienced plumbers with years of expertise in all types of plumbing work.</p>
            </div>
            <div className="bg-slate-700 p-8 rounded-lg shadow-lg text-center border border-slate-600">
              <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Quick Response Time</h3>
              <p className="text-slate-300">Fast response times with most emergency calls attended within 30-60 minutes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Plumbing Services */}
      <section className="py-16 bg-slate-900 border-b border-slate-700">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Our Plumbing Services</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-800 p-8 rounded-lg border border-slate-600">
              <div className="grid md:grid-cols-2 gap-6">
                {plumbingServices.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-slate-200 text-lg">{service}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-cyan-900 border border-cyan-700 rounded-lg">
                <p className="text-cyan-200 text-center font-semibold text-lg">
                  <em>If your issue is not listed here, feel free to call us for assistance.</em>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Affordable Pricing */}
      <section className="py-16 bg-slate-800 border-b border-slate-700">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-white">Affordable Pricing</h2>
            <div className="bg-gradient-to-r from-cyan-600 to-emerald-600 text-white p-8 rounded-lg inline-block mb-8">
              <h3 className="text-3xl font-bold mb-2">$50 – $180</h3>
              <p className="text-lg">Most plumbing repairs and services</p>
            </div>
            <div className="bg-slate-700 p-8 rounded-lg border border-slate-600">
              <p className="text-slate-300 text-lg leading-relaxed">
                <em>Pricing depends on the complexity of the job, but most plumbing issues are solved within this range.</em>
              </p>
              <p className="text-slate-300 mt-4">
                We provide transparent quotes before starting any work, so you know exactly what to expect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-slate-900 border-b border-slate-700">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Why Choose PlumbingSG?</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-emerald-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-white">Fast and Reliable Service</h3>
                    <p className="text-slate-300">Quick response times and dependable solutions that get your plumbing working properly again.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-emerald-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-white">Transparent Pricing</h3>
                    <p className="text-slate-300">No hidden fees or surprise charges. We provide clear, upfront pricing for all our services.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-emerald-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-white">Skilled Technicians</h3>
                    <p className="text-slate-300">Licensed and experienced plumbers who can handle any plumbing challenge professionally.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-emerald-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-white">Serving All of Singapore</h3>
                    <p className="text-slate-300">Comprehensive plumbing services available across all areas of Singapore, from HDB to private properties.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-800 border-b border-slate-700">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4">
                <button
                  className="w-full text-left bg-slate-700 border border-slate-600 rounded-lg p-6 hover:bg-slate-600 focus:outline-none focus:border-cyan-500 transition-colors"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold text-lg pr-8 text-white">{faq.question}</h3>
                    {openFaq === index ? (
                      <ChevronUp className="h-5 w-5 text-slate-400" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-slate-400" />
                    )}
                  </div>
                </button>
                {openFaq === index && (
                  <div className="bg-slate-600 border-l border-r border-b border-slate-500 rounded-b-lg p-6">
                    <p className="text-slate-200 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-cyan-600 p-3 rounded-lg">
                  <Droplets className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">PlumbingSG</h3>
                  <p className="text-slate-400">Professional Plumbing Service</p>
                </div>
              </div>
              <p className="text-slate-300 mb-6">
                We are Singapore's trusted plumbing service provider, offering fast, reliable, 
                and affordable solutions for all your plumbing needs. Available 24/7 for emergencies.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Contact Details</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-orange-400" />
                  <div>
                    <p className="font-bold text-white">Phone</p>
                    <p className="text-slate-300">+65 84608380</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-red-400" />
                  <div>
                    <p className="font-bold text-white">Email</p>
                    <p className="text-slate-300">homerepairsng@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MessageCircle className="h-6 w-6 text-green-400" />
                  <div>
                    <p className="font-bold text-white">WhatsApp</p>
                    <p className="text-slate-300">+65 84608380</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-purple-400" />
                  <div>
                    <p className="font-bold text-white">Location</p>
                    <p className="text-slate-300">Singapore</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex space-x-4">
                <a 
                  href={`tel:${phoneNumber}`} 
                  className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-bold transition-colors flex items-center space-x-2"
                >
                  <Phone className="h-4 w-4" />
                  <span>Call Now</span>
                </a>
                <a 
                  href={whatsappLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-bold transition-colors flex items-center space-x-2"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-12 pt-8 text-center">
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PlumbingSG;