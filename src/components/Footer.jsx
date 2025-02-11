import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, Instagram, Twitter, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [hoveredButton, setHoveredButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navigationLinks = [
    ['PROPERTIES', '/properties'],
    ['INVESTMENT', '/investment'],
    ['PORTFOLIO', '/portfolio'],
    ['INSIGHTS', '/insights'],
    ['ABOUT', '/about']
  ];

  const contactInfo = [
    { icon: Mail, text: 'info@premiumestate.com' },
    { icon: Phone, text: '+1 (555) 123-4567' },
    { icon: MapPin, text: '280 Park Avenue, New York' }
  ];

  return (
    <footer className="relative bg-black text-white pt-24 pb-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/4 top-0 bottom-0 w-[1px] bg-white/5"></div>
        <div className="absolute right-1/4 top-0 bottom-0 w-[1px] bg-white/5"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] border border-white/5 rounded-full translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-8 relative">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 pb-16 border-b border-white/10">
          {/* Brand Column */}
          <div className="space-y-8">
            <Link to="/" className="block">
              <span className="text-xl font-light tracking-[0.2em]">
                PREMIUM<span className="ml-2 text-gray-400">ESTATE</span>
              </span>
            </Link>
            <p className="text-gray-400 font-light leading-relaxed">
              Setting new standards in luxury real estate investment through expertise, 
              technology, and unwavering commitment to excellence.
            </p>
            <div className="flex space-x-6">
              {[Instagram, Twitter, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="group relative w-10 h-10 flex items-center justify-center"
                >
                  <div className="absolute inset-0 border border-white/10 transform group-hover:scale-90 transition-transform duration-300"></div>
                  <Icon className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-light mb-8">Navigation</h3>
            <ul className="space-y-4">
              {navigationLinks.map(([label, path]) => (
                <li key={label}>
                  <Link
                    to={path}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-light mb-8">Contact</h3>
            <div className="space-y-6">
              {contactInfo.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center space-x-3">
                  <Icon className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-400">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-light mb-8">Newsletter</h3>
            <div className="space-y-4">
              <p className="text-gray-400">Stay updated with our latest insights and news.</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-white/5 border border-white/10 px-4 py-2 text-white focus:outline-none focus:border-white/30 transition-colors duration-300 w-full"
                />
                <button className="bg-white text-black px-6 py-2 ml-2 hover:bg-white/90 transition-colors duration-300">
                  JOIN
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">
            © 2025 Premium Estate. All rights reserved.
          </div>
          <div className="flex space-x-8 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            onHoverStart={() => setHoveredButton(true)}
            onHoverEnd={() => setHoveredButton(false)}
            className="fixed bottom-8 right-8 z-50"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-white rounded-full transition-transform duration-300" 
                style={{
                  transform: hoveredButton ? 'scale(1)' : 'scale(0)',
                  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              />
              <div className="relative w-12 h-12 border border-white/20 rounded-full flex items-center justify-center group">
                <ArrowUp 
                  className="w-5 h-5 transition-colors duration-300"
                  style={{ color: hoveredButton ? 'black' : 'white' }}
                />
              </div>
            </div>
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;