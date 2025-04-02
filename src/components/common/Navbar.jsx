import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.jpg';
import { usePostHog } from 'posthog-js/react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
      const posthog = usePostHog();
  
  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-indigo-50 shadow-lg p-4 fixed w-full top-0 z-50 text-indigo-900">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-black font-bold text-xl items-center md:gap-2 gap-1 flex">
          <img
            className="bg-transparent block mix-blend-multiply"
            src={logo}
            alt="Logo"
          />
          <div className="flex flex-col justify-start">
            Kuvi 
            <span>Networks</span>
          </div>
        </Link>
        
        <input 
          type="checkbox" 
          className="hidden peer" 
          id="menu-toggle" 
          checked={isMenuOpen} 
          onChange={() => setIsMenuOpen(!isMenuOpen)}
        />
        <label htmlFor="menu-toggle" className="lg:hidden block cursor-pointer" aria-label="Menu">
          <div className="space-y-1 md:space-y-2">
            <span className="w-6 h-1 md:w-8 bg-indigo-950 rounded-full block transition-all duration-300"></span>
            <span className="w-6 h-1 md:w-8 bg-indigo-950 rounded-full block transition-all duration-300"></span>
            <span className="w-6 h-1 md:w-8 bg-indigo-950 rounded-full block transition-all duration-300"></span>
          </div>
        </label>

        <div 
          ref={menuRef} 
          className={`lg:flex lg:flex-row lg:relative lg:top-0 lg:bg-transparent lg:shadow-none lg:mt-0 bg-indigo-50 shadow-lg mt-6 ${isMenuOpen ? 'flex' : 'hidden'} peer-checked:flex flex-col items-center absolute top-16 left-0 right-0 z-50 transition-all duration-300 pb-2 lg:pb-0`}>
          
          {/* <Link 
            to="/" 
            className="text-indigo-900 px-4 py-2 text-sm md:text-base md:font-semibold hover:bg-indigo-500 hover:rounded-md hover:text-indigo-50 transition duration-200"
            onClick={handleMenuItemClick}
          >
            Home
          </Link> */}

          <Link 
            to="/how-it-works" 
            className="text-indigo-900 px-4 py-2 text-[1.2rem] md:text-base md:font-semibold hover:bg-indigo-500 hover:rounded-md hover:text-indigo-50 transition duration-200"
            onClick={handleMenuItemClick}
          >
            How it works
          </Link>

          <Link 
            to="/services" 
            className="text-indigo-900 px-4 py-2 text-[1.2rem] md:text-base md:font-semibold hover:bg-indigo-500 hover:rounded-md hover:text-indigo-50 transition duration-200"
            onClick={handleMenuItemClick}
          >
           Our services
          </Link>

          <Link 
            to="/why-us" 
            className="text-indigo-900 px-4 py-2 text-[1.2rem] md:text-base md:font-semibold hover:bg-indigo-500 hover:rounded-md hover:text-indigo-50 transition duration-200"
            onClick={handleMenuItemClick}
          >
            Why us
          </Link>

          <Link 
            to="/join-us" 
            className="text-indigo-900 px-4 py-2 text-[1.2rem] md:text-base md:font-semibold hover:bg-indigo-500 hover:rounded-md hover:text-indigo-50 transition duration-200"
            onClick={handleMenuItemClick}
          >
            Join us
          </Link>

          <Link 
            to="/privacy-policy" 
            className="text-indigo-900 px-4 py-2 text-[1.2rem] md:text-base md:font-semibold hover:bg-indigo-500 hover:rounded-md hover:text-indigo-50 transition duration-200"
            onClick={handleMenuItemClick}
          >
            Privacy Policy
          </Link>
          <a
            href="https://calendly.com/kuvi-networks/explore-kuvi-networks"  
            target="_blank"
            rel="noopener noreferrer"
            className="m-2 inline-flex border border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 justify-center rounded-md py-3 px-8 bg-indigo-600 text-base font-medium text-indigo-50 shadow-sm"
            onClick={() => {
              posthog?.capture('navbar_schedule_call_clicked');
              handleMenuItemClick();
            }}
          >
            Schedule a call
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;