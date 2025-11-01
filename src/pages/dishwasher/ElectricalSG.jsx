import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Mail, Zap, Home, Shield, Clock, Star, CheckCircle, Menu, X, ArrowRight, Users, Award, Wrench, Lightbulb, Power, Settings, MapPin } from 'lucide-react';
import HeroSectionElectro from './HeroSectionElectro';

const ElectricalSG = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const phoneNumber = "+6581313085";
  const whatsappLink = `https://wa.me/6581313085?text=Hello,%20I%20need%20electrical%20service%20assistance.`;

  const services = [
    {
      icon: <Zap className="h-12 w-12" />,
      title: "Electrical Wiring",
      description: "Complete electrical wiring solutions for residential and commercial properties with safety compliance.",
      features: ["New installations", "Rewiring services", "Code compliance"]
    },
    {
      icon: <Lightbulb className="h-12 w-12" />,
      title: "Lighting Installation",
      description: "Professional lighting design and installation for indoor and outdoor spaces.",
      features: ["LED installations", "Smart lighting", "Decorative fixtures"]
    },
    {
      icon: <Power className="h-12 w-12" />,
      title: "Power Socket Repair",
      description: "Expert repair and installation of power outlets, switches, and electrical fittings.",
      features: ["Socket replacement", "Switch repairs", "USB outlets"]
    },
    {
      icon: <Settings className="h-12 w-12" />,
      title: "Electrical Troubleshooting",
      description: "Fast diagnosis and resolution of electrical problems and circuit issues.",
      features: ["Circuit testing", "Fault finding", "Safety inspections"]
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Emergency Services",
      description: "24/7 emergency electrical services for urgent repairs and safety issues.",
      features: ["24/7 availability", "Rapid response", "Safety priority"]
    },
    {
      icon: <Home className="h-12 w-12" />,
      title: "Home Automation",
      description: "Modern smart home electrical solutions for convenience and energy efficiency.",
      features: ["Smart switches", "Automation systems", "Energy monitoring"]
    }
  ];
const galleryImages = [
  { title: "Modern LED Installation", category: "Lighting", src: "/images/e1.jpg" },
  { title: "Electrical Panel Upgrade", category: "Wiring", src: "/images/e2.jpg" },
  { title: "Smart Home Setup", category: "Automation", src: "/images/e3.jpg" },
  { title: "Commercial Wiring", category: "Commercial", src: "/images/e4.jpg" },
  { title: "Outdoor Lighting", category: "Lighting", src: "/images/e5.jpg" },
  { title: "Emergency Repair", category: "Emergency", src: "/images/e6.jpg" }
];



  const testimonials = [
    {
      name: "Sarah Chen",
      location: "Orchard",
      text: "Excellent electrical service! They rewired our entire condo professionally and on time. Highly recommended for quality work.",
      rating: 5
    },
    {
      name: "David Lim",
      location: "Tampines",
      text: "Fast response for emergency electrical repair. The technician was knowledgeable and fixed our power outage quickly.",
      rating: 5
    },
    {
      name: "Michelle Wong",
      location: "Jurong West",
      text: "Professional LED lighting installation. The team was courteous and cleaned up perfectly after the job.",
      rating: 5
    },
    {
      name: "Robert Tan",
      location: "Bedok",
      text: "Great service for our office electrical upgrade. Transparent pricing and excellent workmanship throughout.",
      rating: 5
    }
  ];





  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-40 border-b border-blue-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-3 rounded-xl shadow-lg">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  ElectroSG
                </h1>
                <p className="text-sm text-gray-600">Professional Electrical Services</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Home</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Services</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">About</a>
              <a href="#gallery" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Gallery</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Reviews</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact</a>
            </nav>

            {/* Contact Buttons */}
            <div className="hidden lg:flex space-x-3">
              <a 
                href={`tel:${phoneNumber}`} 
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-xl flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Phone className="h-4 w-4" />
                <span className="font-semibold">Call Now</span>
              </a>
              <a 
                href={whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-xl flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <MessageCircle className="h-4 w-4" />
                <span className="font-semibold">WhatsApp</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
              <nav className="flex flex-col space-y-4">
                <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
                <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium">Services</a>
                <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium">About</a>
                <a href="#gallery" className="text-gray-700 hover:text-blue-600 font-medium">Gallery</a>
                <a href="#testimonials" className="text-gray-700 hover:text-blue-600 font-medium">Reviews</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
              </nav>
              <div className="flex space-x-3 mt-4">
                <a href={`tel:${phoneNumber}`} className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 flex-1 justify-center">
                  <Phone className="h-4 w-4" />
                  <span>Call</span>
                </a>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 flex-1 justify-center">
                  <MessageCircle className="h-4 w-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </header>
       <HeroSectionElectro />
      {/* Hero Section */}
      <section id="home" className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-indigo-600/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div>
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Professional
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent block">
                  Electrical Services
                </span>
                in Singapore
              </h1>
            </div>
            <div>
              <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
                Expert electrical solutions for your home and business. From wiring and installations 
                to emergency repairs, we deliver safe, reliable, and innovative electrical services.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
              <a 
                href={`tel:${phoneNumber}`} 
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center space-x-3"
              >
                <Phone className="h-6 w-6" />
                <span>+65 8131 3085</span>
              </a>
              <a 
                href={whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center space-x-3"
              >
                <MessageCircle className="h-6 w-6" />
                <span>WhatsApp Us</span>
              </a>
            </div>
            <div>
              <div className="flex justify-center space-x-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-600">24/7</div>
                  <div className="text-gray-600">Emergency Service</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">500+</div>
                  <div className="text-gray-600">Happy Customers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">15+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Electrical Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive electrical solutions designed to meet all your residential and commercial needs with the highest standards of safety and quality.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-100 hover:border-blue-200"
              >
                <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <button className="text-blue-600 font-semibold flex items-center space-x-2 group-hover:text-blue-700 transition-colors">
                    <a 
                href={whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-xl flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <MessageCircle className="h-4 w-4" />
                <span className="font-semibold">WhatsApp</span>
              </a>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Singapore's Trusted Electrical Experts
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                With over 15 years of experience, ElectroSG has been Singapore's premier electrical services provider, 
                delivering safe, reliable, and innovative solutions for homes and businesses across the island.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start space-x-3">
                  <Award className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Licensed & Certified</h3>
                    <p className="text-gray-600">Fully licensed electrical contractors with BCA certification.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Expert Team</h3>
                    <p className="text-gray-600">Skilled electricians with extensive training and experience.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Safety First</h3>
                    <p className="text-gray-600">Strict safety protocols and quality assurance measures.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">24/7 Support</h3>
                    <p className="text-gray-600">Emergency electrical services available round the clock.</p>
                  </div>
                </div>
              </div>
              <a 
                href="#contact" 
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <span>Get Free Quote</span>
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
            <div>
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <Zap className="h-12 w-12 mx-auto mb-4" />
                      <div className="text-3xl font-bold">15+</div>
                      <div>Years Experience</div>
                    </div>
                    <div className="text-center">
                      <Users className="h-12 w-12 mx-auto mb-4" />
                      <div className="text-3xl font-bold">500+</div>
                      <div>Projects Completed</div>
                    </div>
                    <div className="text-center">
                      <Award className="h-12 w-12 mx-auto mb-4" />
                      <div className="text-3xl font-bold">100%</div>
                      <div>Licensed Team</div>
                    </div>
                    <div className="text-center">
                      <Star className="h-12 w-12 mx-auto mb-4" />
                      <div className="text-3xl font-bold">4.9</div>
                      <div>Customer Rating</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Work Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {galleryImages.map((image, index) => (
    <div
      key={index}
      className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 h-64 bg-cover bg-center"
      style={{ backgroundImage: `url(${image.src})` }}
    >
      {/* Overlay gradient */}
      <div className="absolute bg-gradient-to-br from-blue-600/80 to-indigo-600/80 group-hover:from-blue-600/60 group-hover:to-indigo-600/60 transition-all duration-500"></div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-gray-900 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
          <h3 className="font-bold text-lg mb-2">{image.title}</h3>
          <span className="inline-block bg-white/30 px-3 py-1 rounded-full text-sm font-medium">
            {image.category}
          </span>
        </div>
      </div>
    </div>
  ))}
</div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers across Singapore have to say about our electrical services.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
              <div className="flex justify-center mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-8 w-8 fill-current" />
                  ))}
                </div>
              </div>
              <blockquote className="text-2xl lg:text-3xl text-gray-800 text-center mb-8 leading-relaxed font-medium">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              <div className="text-center">
                <div className="font-bold text-xl text-gray-900 mb-1">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-blue-600 font-medium">
                  {testimonials[currentTestimonial].location}, Singapore
                </div>
              </div>
              <div className="flex justify-center mt-8 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start your electrical project? Contact us today for a free consultation and quote.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="space-y-8">
                <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl">
                  <div className="bg-blue-600 p-3 rounded-xl">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Phone</h3>
                    <p className="text-blue-600 font-medium">+65 8131 3085</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl">
                  <div className="bg-green-600 p-3 rounded-xl">
                    <MessageCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">WhatsApp</h3>
                    <p className="text-green-600 font-medium">+65 8131 3085</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl">
                  <div className="bg-red-600 p-3 rounded-xl">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Email</h3>
                    <p className="text-red-600 font-medium">homerepairsng@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl">
                  <div className="bg-purple-600 p-3 rounded-xl">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Service Area</h3>
                    <p className="text-purple-600 font-medium">All areas in Singapore</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex space-x-4">
                <a 
                  href={`tel:${phoneNumber}`} 
                  className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-4 rounded-xl font-bold text-center hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Call Now
                </a>
                <a 
                  href={whatsappLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-4 rounded-xl font-bold text-center hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  WhatsApp
                </a>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">24/7 Emergency Service</h3>
              <p className="text-blue-100 mb-8 leading-relaxed">
                Electrical emergencies don't wait for business hours. Our emergency team is available 
                24/7 to handle urgent electrical issues and ensure your safety.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-blue-200" />
                  <span>Available 24 hours, 7 days a week</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-blue-200" />
                  <span>Licensed and insured electricians</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="h-5 w-5 text-blue-200" />
                  <span>Fast response time across Singapore</span>
                </div>
              </div>
              <div className="mt-8">
                <a 
                  href={`tel:${phoneNumber}`}
                  className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors inline-flex items-center space-x-2"
                >
                  <Phone className="h-5 w-5" />
                  <span>Emergency Hotline</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-3 rounded-xl">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                    ElectroSG
                  </h3>
                  <p className="text-gray-400">Professional Electrical Services</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Singapore's trusted electrical services provider for over 15 years. We deliver safe, 
                reliable, and innovative electrical solutions for homes and businesses across the island.
              </p>
              <div className="flex space-x-4">
                <a 
                  href={`tel:${phoneNumber}`}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors font-medium"
                >
                  Call Now
                </a>
                <a 
                  href={whatsappLink}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors font-medium"
                >
                  WhatsApp
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-400" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-300">+65 8131 3085</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageCircle className="h-5 w-5 text-green-400" />
                  <div>
                    <p className="font-medium">WhatsApp</p>
                    <p className="text-gray-300">+65 8131 3085</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-red-400" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-300">homerepairsng@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-purple-400" />
                  <div>
                    <p className="font-medium">Service Area</p>
                    <p className="text-gray-300">All areas in Singapore</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 ElectroSG. All rights reserved. | Licensed Electrical Contractor | BCA Certified
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ElectricalSG;