import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="py-4 fixed w-full top-0 z-50 bg-[#fffae5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src={logo} className="h-16" alt="logo" title="logo" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-16">
            <a
              href="/"
              className="relative font-montserrat text-sm font-medium text-primary-black hover:text-primary-black transition-colors 
              before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-primary-yellow before:transition-all before:duration-300 hover:before:w-full"
            >
              HOME
            </a>
            <a
              href="/about"
              className="relative font-montserrat text-sm font-medium text-primary-black hover:text-primary-black transition-colors 
              before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-primary-yellow before:transition-all before:duration-300 hover:before:w-full"
            >
              ABOUT
            </a>
            <a
              href="/services"
              className="relative font-montserrat text-sm font-medium text-primary-black hover:text-primary-black transition-colors 
              before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-primary-yellow before:transition-all before:duration-300 hover:before:w-full"
            >
              OUR SERVICES
            </a>
            <a
              href="/corporate"
              className="relative font-montserrat text-sm font-medium text-primary-black hover:text-primary-black transition-colors 
              before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-primary-yellow before:transition-all before:duration-300 hover:before:w-full"
            >
              CORPORATE
            </a>
            <a
              href="/merch"
              className="relative font-montserrat text-sm font-medium text-primary-black hover:text-primary-black transition-colors 
              before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-primary-yellow before:transition-all before:duration-300 hover:before:w-full"
            >
              MENDING MERCH
            </a>
            <a
              href="/resources"
              className="relative font-montserrat text-sm font-medium text-primary-black hover:text-primary-black transition-colors 
              before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-primary-yellow before:transition-all before:duration-300 hover:before:w-full"
            >
              RESOURCES
            </a>
            <button className="bg-primary-yellow text-primary-black px-6 py-2 rounded-lg font-montserrat text-sm font-medium hover:bg-primary-black hover:text-primary-yellow transition-colors">
              LET'S TALK
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-primary-black">
              <div className="w-6 h-6 flex items-center justify-center">
                <div className={`menu-icon ${isOpen ? "open" : ""}`}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`mobile-menu md:hidden absolute top-full right-0 w-full ${
            isOpen ? "open" : ""
          }`}
        >
          <div className="bg-primary-yellow rounded-br-[40px] p-8">
            <div className="flex flex-col space-y-6">
              <a
                href="/"
                className="font-montserrat text-sm font-medium text-primary-black"
              >
                HOME
              </a>
              <a
                href="/about"
                className="font-montserrat text-sm font-medium text-primary-black"
              >
                ABOUT
              </a>
              <a
                href="/services"
                className="font-montserrat text-sm font-medium text-primary-black"
              >
                OUR SERVICES
              </a>
              <a
                href="/corporate"
                className="font-montserrat text-sm font-medium text-primary-black"
              >
                CORPORATE
              </a>
              <a
                href="/merch"
                className="font-montserrat text-sm font-medium text-primary-black"
              >
                MENDING MERCH
              </a>
              <a
                href="/resources"
                className="font-montserrat text-sm font-medium text-primary-black"
              >
                RESOURCES
              </a>
              <div className="pt-2">
                <svg
                  className="ml-[120px]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M40.5 9.3h-33a3 3 0 0 0-3 3v20a3 3 0 0 0 3 3h1.64v7.4l8.26-7.4h23.1a3 3 0 0 0 3-3v-20a3 3 0 0 0-3-3m-29.75 13h26.5m-26.5-6h26.5m-26.5 12h16.5"
                    stroke-width="1"
                  />
                </svg>
                <button className="bg-white text-primary-black px-6 py-2 rounded-lg font-montserrat text-sm font-medium flex items-center">
                  LET'S TALK
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default App;
