import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import mobileLogo from "../../assets/images/mobile-logo-nav.png";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 z-40" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />
      <nav className="py-4 fixed w-full top-0 z-50 bg-[#fffae5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-around items-center">
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
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <img src={logo} className="h-16 sm:h-8 md:h-16 lg:h-16 sm:-ms-3" alt="logo" title="logo" />
              </Link>
            </div>
            <button className="md:hidden bg-primary-yellow text-primary-black px-3 py-2 rounded-lg font-montserrat text-sm font-medium hover:bg-primary-black hover:text-primary-yellow transition-colors tracking-wide">
              LET'S TALK
            </button>
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-16">
              <a
                href="/"
                className="relative font-montserrat text-sm font-medium text-primary-black hover:text-primary-black transition-colors 
              before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-primary-yellow before:transition-all before:duration-300 hover:before:w-full tracking-wide"
              >
                HOME
              </a>
              <a
                href="/about"
                className="relative font-montserrat text-sm font-medium text-primary-black hover:text-primary-black transition-colors 
              before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-primary-yellow before:transition-all before:duration-300 hover:before:w-full tracking-wide"
              >
                ABOUT
              </a>
              <a
                href="/services"
                className="relative font-montserrat text-sm font-medium text-primary-black hover:text-primary-black transition-colors 
              before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-primary-yellow before:transition-all before:duration-300 hover:before:w-full tracking-wide"
              >
                OUR SERVICES
              </a>
              <a
                href="/corporate"
                className="relative font-montserrat text-sm font-medium text-primary-black hover:text-primary-black transition-colors 
              before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-primary-yellow before:transition-all before:duration-300 hover:before:w-full tracking-wide"
              >
                CORPORATE
              </a>
              <a
                href="/merch"
                className="relative font-montserrat text-sm font-medium text-primary-black hover:text-primary-black transition-colors 
              before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-primary-yellow before:transition-all before:duration-300 hover:before:w-full tracking-wide"
              >
                MENDING MERCH
              </a>
              <a
                href="/resources"
                className="relative font-montserrat text-sm font-medium text-primary-black hover:text-primary-black transition-colors 
              before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-primary-yellow before:transition-all before:duration-300 hover:before:w-full tracking-wide"
              >
                RESOURCES
              </a>
              <button className="bg-primary-yellow text-primary-black px-6 py-2 rounded-lg font-montserrat text-sm font-medium hover:bg-primary-black hover:text-primary-yellow transition-colors tracking-wide">
                LET'S TALK
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`mobile-menu md:hidden absolute top-0 left-0 w-3/4 ${
              isOpen ? "open" : ""
            }`}
          >
            <div className="bg-[#efc345] rounded-br-[40px] p-8">
              <div className="flex flex-col space-y-6">
                <img
                  src={mobileLogo}
                  alt="mobile-logo"
                  className="h-16 w-full"
                />
                <a
                  href="/"
                  className="font-montserrat text-md font-medium text-black tracking-wide"
                >
                  HOME
                </a>
                <a
                  href="/about"
                  className="font-montserrat text-md font-medium text-black tracking-wide"
                >
                  ABOUT
                </a>
                <a
                  href="/services"
                  className="font-montserrat text-md font-medium text-black tracking-wide"
                >
                  OUR SERVICES
                </a>
                <a
                  href="/corporate"
                  className="font-montserrat text-md font-medium text-black tracking-wide"
                >
                  CORPORATE
                </a>
                <a
                  href="/merch"
                  className="font-montserrat text-md font-medium text-black tracking-wide"
                >
                  MENDING MERCH
                </a>
                <a
                  href="/resources"
                  className="font-montserrat text-md font-medium text-black tracking-wide"
                >
                  RESOURCES
                </a>
                <div className="pt-2">
                  <svg
                    version="1.2"
                    className="ml-[120px]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 21 13"
                    width="40"
                    height="30"
                  >
                    <path
                      style={{ fill: "#22110f" }}
                      className="a"
                      d="m2.6 12.2c-0.4-0.5-0.9-1.2-1.1-1.9q-0.3-0.5-0.4-1.1-0.1-0.5-0.2-1 0-0.6 0-1.2c0-0.2 0-0.2 0.1-0.4q0-0.3 0.1-0.6c0.2-0.7 0.5-1.4 1-1.9 0.5-0.6 1.2-1.1 1.9-1.5 0.7-0.4 1.5-0.7 2.3-1 1.7-0.5 3.4-0.6 5.2-0.5 1.7 0.1 3.4 0.5 5 1 0.8 0.3 1.5 0.7 2.1 1.2 0.2 0.3 0.5 0.6 0.6 1 0.2 0.3 0.3 0.6 0.3 0.9q0 0.6-0.3 1.1-0.3 0.6-0.8 1c-0.5 0.5-1.3 0.8-2 1.1-1.5 0.5-3.1 0.6-4.7 0.8-2.3 0.1-4.7 0.1-7-0.1q-0.3-0.1-0.7-0.1c-0.3 0-0.7-0.1-0.9-0.1-0.3 0-0.6 0.2-0.7 0.4-0.2 0.2-0.2 0.4-0.2 0.6-0.1 0.7-0.1 1.3-0.2 2q0 0.2 0 0.4 0 0.1 0 0.1c0 0.1 0-0.1 0 0q0 0.1 0 0.1c-0.1 0.2 0 0.5 0.3 0.5 0.2 0.1 0.5 0 0.5-0.3 0.1-0.6 0.1-1.3 0.2-1.9q0-0.3 0-0.5 0-0.1 0-0.2 0-0.1 0.1-0.1c0-0.1-0.1 0.1 0 0q0-0.1 0-0.2c0 0.1 0 0 0 0 0.1 0 0.3 0 0.4 0q0.3 0.1 0.5 0.1c2.4 0.2 4.8 0.3 7.2 0.2 1.7-0.1 3.5-0.3 5.2-0.8 0.8-0.2 1.6-0.6 2.3-1.1 0.7-0.6 1.4-1.3 1.6-2.3 0.4-1.8-1-3.4-2.5-4.2-0.9-0.4-1.7-0.7-2.6-0.9q-1.4-0.3-2.7-0.5c-3.6-0.4-7.6 0.2-10.4 2.5-1.3 1.1-2 2.7-2.1 4.4-0.1 1.6 0.4 3.3 1.3 4.7q0.3 0.5 0.7 0.9c0.1 0.2 0.4 0.2 0.6 0 0.2-0.1 0.2-0.4 0-0.6z"
                    />
                    <path
                      className="a"
                      style={{ fill: "#22110f" }}
                      d="m12.3 5.3c0 0.6 0.5 1.1 1.2 1.1 0.6 0 1.1-0.5 1.1-1.1 0-0.6-0.5-1.1-1.1-1.1-0.7 0-1.2 0.5-1.2 1.1z"
                    />
                    <path
                      className="a"
                      style={{ fill: "#22110f" }}
                      d="m8.9 5.3c0 0.6 0.5 1.1 1.2 1.1 0.6 0 1.1-0.5 1.1-1.1 0-0.6-0.5-1.1-1.1-1.1-0.7 0-1.2 0.5-1.2 1.1z"
                    />
                    <path
                      className="a"
                      style={{ fill: "#22110f" }}
                      d="m5.5 5.3c0 0.6 0.5 1.1 1.2 1.1 0.6 0 1.1-0.5 1.1-1.1 0-0.6-0.5-1.1-1.1-1.1-0.7 0-1.2 0.5-1.2 1.1z"
                    />
                  </svg>
                  <button className="bg-white text-primary-black px-4 py-4 rounded-lg font-montserrat text-md font-bold flex items-center tracking-wide">
                    LET'S TALK
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default App;
