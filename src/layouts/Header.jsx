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
  
const getLogoSrc = () => {
    switch (location.pathname) {
      case "/":
        return "/images/logo5.jpg";
      case "/service/painting":
        return "/images/logo1.png";
      case "/service/washing-machine":
        return "/images/logo6.jpg";
      case "/service/false-ceiling":
        return "/images/logo1.png";
      default:
        return "/images/logo5.jpg"; // fallback logo
    }
  };

  return (   
    <div className="relative pt-[50px]">
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
    location.pathname === "/service/washing-machine" ? "" : "bg-cover bg-center"
  }`}
  style={
    location.pathname === "/service/painting"
      ? { backgroundImage: "url('/images/headerbg.jpg')" } // dark slate color or any you want
      :{ backgroundColor: "#51BD41" } 
  }
>


 <Link to="/">
      <div className="flex">
        <img
          src={getLogoSrc()}
          alt="Logo"
          className="w-20 rounded-xl"
        />
      </div>
    </Link>


        {/* Large screen menu */}
        
        <div className="hidden lg:flex gap-8">
        
        <Link
            to="/"
            className={`text-lg uppercase font-semibold py-10 px-2 z-50 hover:bg-blue-500 ${
              location.pathname === "/" ? "text-black" : "text-white"
            }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`text-lg uppercase font-semibold py-10 px-2 z-50 hover:bg-blue-500 ${
              location.pathname === "/about" ? "text-black" : "text-white"
            }`}
          >
            About Us
          </Link>
          <Link
            to="/service/washing-machine"
            className={`text-lg uppercase font-semibold py-10 px-2 z-50 hover:bg-blue-500 ${
              location.pathname === "/service/washing-machine" ? "text-black" : "text-white"
            }`}
          >
            Washing Machine
          </Link>
          <Link
            to="/service/painting"
            className={`text-lg uppercase font-semibold py-10 px-2 z-50 hover:bg-blue-500 ${
              location.pathname === "/service/painting" ? "text-black" : "text-white"
            }`}
          >
            Painting
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
              <Link to="/service/washing-machine" className="text-lg font-semibold" onClick={() => setMenuOpen(false)}>
                Washing Machine
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/service/painting" className="text-lg font-semibold" onClick={() => setMenuOpen(false)}>
                Painting
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
