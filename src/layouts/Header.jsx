import React, { useState } from 'react';
import { Link,useLocation } from 'react-router-dom';
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
 

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
      <div
  className={`w-full h-[100px] bg-cover bg-center flex items-center justify-around ${
    location.pathname === "/washing-machine" ? "" : "bg-cover bg-center"
  }`}
  style={
    location.pathname === "/washing-machine"
      ? { backgroundColor: "#3A59D1" } // dark slate color or any you want
      : { backgroundImage: "url('/images/headerbg.jpg')" }
  }
>


  <Link to="/">
    <div className="flex">
      <img
        src={
          location.pathname === "/washing-machine"
            ? "/images/logo101.jpg"
            : "/images/logo1.png"
        }
        alt="Logo"
        className="w-20 rounded-xl"
      />
    </div>
  </Link>


        {/* Large screen menu */}
        
        <div className="hidden lg:flex gap-8">
        <img 
    src="/images/header.png" 
    alt="Professional painting service" 
    loading="lazy" 
    className="w-[120px] object-cover z-0"
  />
        <Link
            to="/"
            className={`text-lg uppercase font-semibold py-10 px-2 z-50 hover:bg-black ${
              location.pathname === "/" ? "text-red-600" : "text-white"
            }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`text-lg uppercase font-semibold py-10 px-2 z-50 hover:bg-black ${
              location.pathname === "/about" ? "text-red-600" : "text-white"
            }`}
          >
            About Us
          </Link>
          <Link
            to="/washing-machine"
            className={`text-lg uppercase font-semibold py-10 px-2 z-50 hover:bg-black ${
              location.pathname === "/washing-machine" ? "text-red-600" : "text-white"
            }`}
          >
            Washing Machine
          </Link>

          {/* Dropdown for Services on Large Screen */}
          
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
              <Link to="/washing-machine" className="text-lg font-semibold" onClick={() => setMenuOpen(false)}>
                Washing Machine
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/about" className="text-lg font-semibold" onClick={() => setMenuOpen(false)}>
                About Us
              </Link>
            </li>
           
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
