import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);
  const lineRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    // Animación de entrada
    const tl = gsap.timeline();
    tl.fromTo(navRef.current,
      { 
        y: -20, 
        opacity: 0 
      },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1.2, 
        ease: "power3.out",
        delay: 0.5 
      }
    );

    const links = navRef.current.querySelectorAll('.nav-link');
    tl.fromTo(links, 
      { 
        y: -10, 
        opacity: 0 
      },
      { 
        y: 0, 
        opacity: 1, 
        stagger: 0.1, 
        duration: 0.8,
        ease: "power2.out" 
      }, 
      "-=0.8"
    );

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkHover = (index) => {
    gsap.to(lineRefs.current[index], {
      width: '100%',
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const handleLinkLeave = (index) => {
    gsap.to(lineRefs.current[index], {
      width: '0%',
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const navLinks = [
    { href: "/properties", label: "PROPERTIES" },
    { href: "/investment", label: "INVESTMENT" },
    { href: "/portfolio", label: "PORTFOLIO" },
    { href: "/insights", label: "INSIGHTS" },
    { href: "/about", label: "ABOUT US" }
  ];

  return (
    <nav 
      ref={navRef}
      className={`fixed w-full z-50 transition-all duration-700 ${
        isScrolled ? 'py-4 bg-black/50 backdrop-blur-md' : 'py-8 bg-transparent'
      }`}
    >
      <div className="max-w-[1800px] mx-auto px-12">
        <div className="flex items-center">
          {/* Logo */}
          <Link 
            to="/" 
            className="group relative mr-auto"
          >
            <div className="flex items-center space-x-1">
              <span className="text-white text-sm tracking-[0.4em] font-light">
                PREMIUM
              </span>
              <span className="text-white/60 text-sm tracking-[0.4em] font-extralight">
                ESTATE
              </span>
            </div>
            <span className="absolute bottom-[-4px] left-0 h-[1px] bg-white/30 w-0 group-hover:w-full transition-all duration-300"></span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link, index) => (
              <div 
                key={link.href}
                className="nav-link relative group"
                onMouseEnter={() => handleLinkHover(index)}
                onMouseLeave={() => handleLinkLeave(index)}
              >
                <Link 
                  to={link.href} 
                  className="text-white/80 hover:text-white text-xs tracking-[0.3em] font-light transition-colors duration-300"
                >
                  {link.label}
                </Link>
                <div 
                  ref={(el) => lineRefs.current[index] = el}
                  className="absolute bottom-[-4px] left-0 h-[1px] bg-white/30 w-0"
                ></div>
              </div>
            ))}

            {/* Contact Button */}
            <Link 
              to="/contact" 
              className="nav-link group relative overflow-hidden px-6 py-2 ml-4"
            >
              <div className="absolute inset-0 border border-white/20 transition-colors duration-300 group-hover:border-white/40"></div>
              <div className="absolute inset-0 bg-white transform origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></div>
              <span className="relative z-10 text-xs tracking-[0.3em] text-white font-light transition-colors duration-300 group-hover:text-black">
                CONTACT
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden group relative ml-auto"
          >
            <Menu className="text-white/80 hover:text-white transition-colors duration-300" size={20} />
            <span className="absolute bottom-[-4px] left-0 h-[1px] bg-white/30 w-0 group-hover:w-full transition-all duration-300"></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden absolute left-0 right-0 top-full bg-black/95 backdrop-blur-md transition-all duration-500 ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <div className="px-12 py-8 space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="block text-white/60 text-xs tracking-[0.3em] font-light hover:text-white transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block text-white/60 text-xs tracking-[0.3em] font-light hover:text-white transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              CONTACT
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/5"></div>
    </nav>
  );
};

export default Navbar;