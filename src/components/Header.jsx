import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = ["Home", "About", "Gallery", "Technology"];

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300`}
      style={{ padding: '20px 100px' }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-3xl font-bold text-white tracking-wider font-heading">SHOEX</div>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-10">
          {navLinks.map(link => (
            <li key={link} className="group">
              <a href={`#${link.toLowerCase()}`} className="relative text-gray-300 hover:text-white transition-colors duration-300 text-lg">
                {link}
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white text-3xl">
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-black bg-opacity-95 shadow-lg py-5">
            <ul className="flex flex-col items-center space-y-6">
              {navLinks.map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-white transition-colors text-xl">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
