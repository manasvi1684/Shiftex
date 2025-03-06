import React, { useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets.js";
import { Menu, X } from "lucide-react"; // Import icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white shadow-lg">
      <div className="mx-auto flex items-center py-4 px-8 max-h-20">
        
        {/* Logo - Clickable Link to Home */}
        <div className="flex items-center">
          <Link to="/">
            <img 
              src={assets.SL} 
              alt="Shiftix Logo" 
              className="h-auto w-auto max-w-[180px] cursor-pointer" // Added cursor-pointer for better UX
            />
          </Link>
        </div>

        {/* Navigation Links & Menu Button */}
        <div className="flex-grow flex justify-end items-center space-x-10">
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-10">
            <Link to="/" className="hover:text-gray-300">Home</Link>
            <Link to="/productsandservices" className="hover:text-gray-300">Services</Link>
            <Link to="/aboutus" className="hover:text-gray-300">About Us</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 bg-black py-4">
          <Link to="/" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/productsandservices" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/aboutus" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>About Us</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
