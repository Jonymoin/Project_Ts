import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Check, Star, Shield, Clock, Wrench, Award, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';

const TVMountingWebsite = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const heroSlides = [
    {
      image: '/images/wall1.webp',
      headline: 'Professional TV Wall Mounting',
      subheadline: 'Expert Installation Services Across Singapore'
    },
    {
      image: '/images/wall2.webp',
      headline: 'Secure & Safe Installation',
      subheadline: 'Certified Technicians You Can Trust'
    },
    {
      image: '/images/wall3.webp',
      headline: 'Premium Bracket Solutions',
      subheadline: 'Fixed, Tilt & Full-Motion Mounts Available'
    },
    {
      image: '/images/wall4.webp',
      headline: 'Same-Day Service Available',
      subheadline: 'Quick Response Time for Your Convenience'
    }
  ];

  const galleryImages = [
    '/images/wall5.webp', '/images/wall6.webp', '/images/wall7.webp', 
    '/images/wall8.webp', '/images/wall9.webp', '/images/wall10.webp'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const services = [
    { title: 'TV Wall Mounting', desc: 'Professional mounting for all TV sizes' },
    { title: 'Bracket Installation', desc: 'Fixed, tilt, and full-motion brackets' },
    { title: 'Cable Concealment', desc: 'Clean, wire-free appearance' },
    { title: 'Wall Assessment', desc: 'Expert evaluation of wall strength' }
  ];

  const whyChoose = [
    { icon: Shield, title: 'Fully Insured', desc: 'Complete protection for your property and equipment' },
    { icon: Award, title: 'Certified Technicians', desc: 'Trained professionals with years of experience' },
    { icon: Clock, title: 'Same-Day Service', desc: 'Fast response and flexible scheduling' },
    { icon: Wrench, title: 'Quality Tools', desc: 'Professional-grade equipment and materials' },
    { icon: Star, title: '5-Star Rated', desc: 'Trusted by hundreds of satisfied customers' },
    { icon: Check, title: 'Warranty Included', desc: 'All installations backed by our guarantee' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gray-900 text-white py-4 px-6 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">TV Mount Pro SG</div>
          <div className="flex gap-6 items-center">
            <a href="#services" className="hover:text-blue-400 transition">Services</a>
            <a href="#gallery" className="hover:text-blue-400 transition">Gallery</a>
            <a href="#contact" className="bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-700 transition">
              Book Now
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section with Slideshow */}
      <section className="relative h-screen overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10" />
            <img
              src={slide.image}
              alt={slide.headline}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-4">
              <div className="max-w-4xl">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
                  {slide.headline}
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 mb-8">
                  {slide.subheadline}
                </p>
                <div className="flex gap-4 justify-center">
                  <a href="https://wa.me/6581313085" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition transform hover:scale-105">
                    Get Free Quote
                  </a>
                  <a href="tel:+6581313085" className="bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition transform hover:scale-105">
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex gap-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Our Services</h2>
          <p className="text-gray-600 text-center mb-12 text-lg">
            Comprehensive TV mounting solutions for homes and offices
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-xl transition">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Check className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Why Choose Us</h2>
          <p className="text-gray-300 text-center mb-12 text-lg">
            Singapore's most trusted TV mounting service
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChoose.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-gray-800 p-6 rounded-xl hover:bg-gray-750 transition">
                  <Icon className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Our Work Gallery</h2>
          <p className="text-gray-600 text-center mb-12 text-lg">
            Browse our recent TV mounting installations
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((img, index) => (
              <div key={index} className="relative overflow-hidden rounded-xl group cursor-pointer">
                <img
                  src={img}
                  alt={`Installation ${index + 1}`}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <span className="text-white font-semibold">View Project</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Mount Your TV?</h2>
          <p className="text-xl mb-8">Get a free quote today and schedule your installation</p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <div className="flex items-center gap-3">
              <Phone className="w-6 h-6" />
              <a href="tel:+6565813130585" className="text-xl font-semibold hover:underline">
                +65 6581 3130 85
              </a>
            </div>
            <div className="flex items-center gap-3">
              <MessageCircle className="w-6 h-6" />
              <a href="https://wa.me/6581650541" target="_blank" rel="noopener noreferrer" className="text-xl font-semibold hover:underline">
                WhatsApp Us
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-6 h-6" />
              <a href="mailto:homerepairsng@gmail.com" className="text-xl font-semibold hover:underline">
                homerepairsng@gmail.com
              </a>
            </div>
          </div>
          <div className="mt-8 flex items-center justify-center gap-3 text-lg">
            <MapPin className="w-6 h-6" />
            <span>Serving All of Singapore</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="mb-2">© 2024 TV Mount Pro SG. All rights reserved.</p>
          <p className="text-sm">Professional TV Wall Mounting Services in Singapore</p>
        </div>
      </footer>
    </div>
  );
};

export default TVMountingWebsite;