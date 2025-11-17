// src/components/Header.jsx
import { useState, useEffect } from 'react';
import { FaSearch, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // Detect scroll for sticky header effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '/about' },
    { name: 'Features', href: '#features' },
    { name: 'Services', href: '#services' },
    { name: 'Products', href: '#products' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '/query' }
  ];

  return (
    <header className={`bg-white shadow-md sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
      
      {/* Top Header - Hidden on small mobile */}
      {/* <div className="hidden sm:block bg-gradient-blue-cyan text-white py-2 px-4">
        <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0 text-xs sm:text-sm">
          <p className="text-center sm:text-left">Welcome to Solar Supplier - Your trusted solar energy partner</p>
          <div className="flex gap-3 sm:gap-4">
            <a href="#help" className="hover:text-gray-200 transition-colors">Help</a>
            <a href="#contact" className="hover:text-gray-200 transition-colors">Contact</a>
          </div>
        </div>
      </div> */}

      {/* Main Header */}
      <div className="max-w-[1400px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-3 md:py-4">
        <div className="flex justify-between items-center gap-4">
          
          {/* Logo - Responsive sizing */}
          <div className="flex items-center gap-2">
            <span className="text-xl sm:text-2xl md:text-3xl">☀️</span>
            <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-heading font-bold text-primary whitespace-nowrap">
              ARVI E SOLAR
            </span>
          </div>

          {/* Navigation - Desktop/Tablet */}
          <nav className="hidden lg:flex gap-4 xl:gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-darkBlue hover:text-primary transition-colors font-medium text-sm xl:text-base whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

       

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-2xl text-primary p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Search Bar - Shown when search icon clicked */}
        {searchOpen && (
          <div className="md:lg:hidden mt-3 pb-2 animate-fadeIn">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                autoFocus
              />
              <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-primary" />
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Mobile Menu Drawer */}
          <div className="fixed top-0 right-0 h-full w-64 sm:w-80 bg-white shadow-2xl z-50 lg:hidden transform transition-transform duration-300 ease-out overflow-y-auto">
            {/* Close Button */}
            <div className="flex justify-between items-center p-4 border-b">
              <span className="text-lg font-heading font-bold text-primary">Menu</span>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-2xl text-darkBlue hover:text-primary transition-colors p-2"
                aria-label="Close Menu"
              >
                <FaTimes />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col p-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-darkBlue hover:text-primary hover:bg-gray-50 transition-all py-3 px-4 rounded-lg font-medium border-b border-gray-100 last:border-0"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Mobile Search */}
            {/* <div className="p-4 border-t">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-primary" />
              </div>
            </div> */}

            {/* Mobile Cart
            <div className="p-4 border-t md:hidden">
              <button className="w-full flex items-center justify-between px-4 py-3 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors">
                <span className="font-semibold">Shopping Cart</span>
                <div className="relative">
                  <FaShoppingCart className="text-xl" />
                  <span className="absolute -top-2 -right-2 bg-secondary text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    0
                  </span>
                </div>
              </button>
            </div> */}
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
