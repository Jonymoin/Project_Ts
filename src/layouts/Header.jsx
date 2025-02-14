import React, { useState } from 'react';
import { Link,useLocation } from 'react-router-dom';
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { FaArrowDown } from "react-icons/fa";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const services = [
    { id: 1, name: "Washing Machine Repair" },
    { id: 2, name: "Dishwasher Repair" },

    { id: 3, name: "CC TV Installation" },
    { id: 4, name: "TV Installation Service" },
    
    { id: 5, name: "Plumbing Service" },
    { id: 6, name: "Air-Conditioning Service" },
    { id: 7, name: "Painting" },
    { id: 8, name: "Intercom Issues" },
    { id: 9, name: "Carpenter" },
    { id: 10, name: "Electrical Service" },

    { id: 11, name: "Water Choke Troubleshoot" },
    { id: 12, name: "Mover Service" },
    { id: 13, name: "Automatic Door Issues" },
    { id: 14, name: "Kitchen Exhaust Fan" },
    { id: 15, name: "All Kinds of Ducting Work" },
    { id: 16, name: "Automatic Gate Issues" },
  ];

  const handleOutsideClick = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  return (   
    <div className="relative">
      {/* Overlay to close the menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 transition-all duration-1000"
          onClick={handleOutsideClick}
        ></div>
      )}

      {/* Header */}
      <div className=" bg-[#37B126] py-4 md:py-0 text-white flex justify-around items-center">
       <Link to="/">
       <div className='flex'>
       <img src="/images/hero.png" alt="" className='w-10' />
       <h1 className="text-2xl font-roboto font-bold">HomeRepair Services</h1>
       </div>
       </Link>

        {/* Large screen menu */}
        <div className="hidden lg:flex gap-8">
        <Link
            to="/"
            className={`text-lg font-semibold py-6 px-2 hover:bg-black ${
              location.pathname === "/" ? "text-yellow-400" : "text-white"
            }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`text-lg font-semibold py-6 px-2 hover:bg-black ${
              location.pathname === "/about" ? "text-yellow-400" : "text-white"
            }`}
          >
            About Us
          </Link>

          {/* Dropdown for Services on Large Screen */}
          <div className="relative group">
            <button className="text-lg py-6 px-2 hover:bg-black flex items-center gap-1 font-semibold ">
              Services
              <FaArrowDown/>
            </button>
            {/* Dropdown content visible on hover */}
            <ul className="absolute md:left-[-300px] mt-2 bg-[#37B126] rounded-lg shadow-lg md:w-[600px] opacity-0 md:grid md:grid-cols-4 group-hover:opacity-100 transition-opacity duration-300 z-50">
              {services.map((service) => (
                <li key={service.id} className="py-2 px-4 hover:bg-gray-300">
                   <Link to={`/service/${encodeURIComponent(service.name.toLowerCase().replace(/\s+/g, '-'))}`}>
                      {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Small screen menu toggle */}
        <button
          className="lg:hidden text-4xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <HiMenuAlt3  className=''/>
        </button>
      </div>
     {/* Side Menu for small screens */}
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-lg transition-transform duration-700 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } w-4/5 z-50 lg:hidden`}
      >
        <div className="p-4">
          <button
            className="text-xl mb-4"
            onClick={() => setMenuOpen(false)}
          >
            <IoClose />
          </button>

          <ul>
            <li className="mb-4">
              <Link to="/" className="text-lg font-semibold" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/about" className="text-lg font-semibold" onClick={() => setMenuOpen(false)}>
                About Us
              </Link>
            </li>
            <li className="mb-4">
              {/* Dropdown for Services on small screen */}
              <button
                className="text-lg font-semibold flex items-center gap-1"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Services
                <FaArrowDown/>
              </button>

              {dropdownOpen && (
                <ul className="ml-4 mt-2 bg-gray-800 rounded-lg shadow-lg text-white">
                  {services.map((service) => (
                    <li key={service.id} className="py-2 px-4 hover:bg-gray-300">
                      <Link
                        to={`/service/${encodeURIComponent(service.name.toLowerCase().replace(/\s+/g, '-'))}`}
                        onClick={() => {
                          setMenuOpen(false);
                          setDropdownOpen(false);
                        }}
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
