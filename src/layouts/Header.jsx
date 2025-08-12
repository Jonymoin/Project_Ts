import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenuAlt3 } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';

const serviceLinks = [
  { name: "Washing Machine", slug: "washing-machine" },
  { name: "Dishwasher Repair", slug: "dishwasher-repair" },
  { name: "Air-Conditioning Service", slug: "air-conditioning-service" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServiceOpen, setMobileServiceOpen] = useState(false);
  const location = useLocation();

  const getLogoSrc = () => {
    switch (location.pathname) {
      case "/service/washing-machine":
        return "/images/logo6.webp";
      default:
        return "/images/logo5.webp";
    }
  };

  return (
    <div className="relative pt-[50px] mt-3">
      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => {
            setMenuOpen(false);
            setMobileServiceOpen(false);
          }}
        />
      )}

      {/* Header */}
      <div
        className="w-full h-[100px] bg-[#cf0] bg-cover bg-center flex items-center justify-between px-6 lg:px-16 z-50"
      >
        <Link to="/">
          <img src={getLogoSrc()} alt="Logo" className="w-20 rounded-xl" loading='lazy'/>
        </Link>

        {/* Large screen menu */}
        <div className="hidden lg:flex gap-8 items-center">
          <Link
            to="/"
            className={`text-lg uppercase font-semibold px-4 py-2 rounded-md transition-all duration-300 hover:bg-blue-500 ${
              location.pathname === "/" ? "text-black bg-white" : "text-black"
            }`}
          >
            Home
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              className={`text-lg uppercase font-semibold px-4 py-2 rounded-md transition-all duration-300 hover:bg-blue-500 ${
                location.pathname.includes("/service")
                  ? "text-black bg-white"
                  : "text-black"
              }`}
              aria-label="Toggle navigation menu"
            >
              Services
            </button>
            <div className={`absolute top-full left-0 bg-white text-black rounded-md shadow-lg w-64 z-50 ${dropdownOpen ? "block" : "hidden"}`}>
              <ul className="py-2">
                {serviceLinks.map((service) => (
                  <li key={service.slug}>
                    <Link
                      to={`/service/${service.slug}`}
                      className="block px-4 py-2 hover:bg-blue-100"
                      onClick={() => setDropdownOpen(false)}
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Link
            to="/about"
            className={`text-lg uppercase font-semibold px-4 py-2 rounded-md transition-all duration-300 hover:bg-blue-500 ${
              location.pathname === "/about" ? "text-black bg-white" : "text-black"
            }`}
          >
            About Us
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-4xl text-black"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="sr-only">Open Menu</span>
          <HiMenuAlt3 />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-lg transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } w-4/5 z-50 lg:hidden`}
      >
        <div className="p-4">
          <button
           className="text-xl mb-4"
           onClick={() => setMenuOpen(false)}
           aria-label="Close menu"
          >
         <IoClose />
          </button>

          <ul className="space-y-4 text-lg font-semibold">
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            </li>
            <li>
              <button
                onClick={() => setMobileServiceOpen(!mobileServiceOpen)}
                className="w-full text-left"
              >
                Services
              </button>
              {mobileServiceOpen && (
                <ul className="ml-4 mt-2 space-y-2 text-sm font-normal text-gray-700">
                  {serviceLinks.map((service) => (
                    <li key={service.slug}>
                      <Link
                        to={`/service/${service.slug}`}
                        onClick={() => setMenuOpen(false)}
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
