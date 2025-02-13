import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import backgroundImage from '../assets/background-3.jpg';

const HeroSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const title = sectionRef.current.querySelector('.hero-title');
    const subtitle = sectionRef.current.querySelector('.hero-subtitle');
    const stats = sectionRef.current.querySelectorAll('.stat-item');
    const cta = sectionRef.current.querySelector('.cta-wrapper');

    gsap.set([title, subtitle, stats, cta], { 
      opacity: 0,
      y: 30 
    });

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.to(title, {
      opacity: 1,
      y: 0,
      duration: 1.5,
      delay: 0.5
    })
    .to(subtitle, {
      opacity: 1,
      y: 0,
      duration: 1
    }, '-=1')
    .to(stats, {
      opacity: 1,
      y: 0,
      stagger: 0.2,
      duration: 1
    }, '-=0.5')
    .to(cta, {
      opacity: 1,
      y: 0,
      duration: 1
    }, '-=0.8');
  }, []);


  return (
    <section 
      ref={sectionRef} 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background con overlay - mantener igual */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            filter: 'brightness(0.4)'
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Líneas decorativas - mantener igual */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-0 bottom-0 w-[1px] bg-white/10 hidden md:block"></div>
        <div className="absolute right-1/4 top-0 bottom-0 w-[1px] bg-white/10 hidden md:block"></div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-32">
        <div className="text-center space-y-6 md:space-y-8">
          {/* Título principal - Actualizando tipografía */}
          <h1 className="hero-title overflow-hidden">
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extralight tracking-tight text-white">
              EXCLUSIVE
            </span>
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extralight tracking-tight text-white/80 mt-2 sm:mt-4">
              PROPERTIES
            </span>
          </h1>

          {/* Subtítulo - Ajustando peso y tracking */}
          <p className="hero-subtitle text-lg sm:text-xl md:text-2xl text-white/60 font-light tracking-wide max-w-3xl mx-auto px-4">
            Discover extraordinary living spaces curated for the most discerning clients
          </p>

          {/* Stats Grid - Ajustando números para Cabinet Grotesk */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto mt-8 sm:mt-12 md:mt-16 px-4">
            {[
              { value: '350+', label: 'PROPERTIES' },
              { value: '12', label: 'LOCATIONS' },
              { value: '15Y', label: 'EXPERIENCE' },
            ].map((stat, index) => (
              <div key={index} className="stat-item text-center">
                <div className="text-3xl sm:text-4xl font-thin text-white mb-2">{stat.value}</div>
                <div className="text-xs sm:text-sm tracking-widest text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons - Refinando tipografía */}
          <div className="cta-wrapper flex flex-col sm:flex-row justify-center sm:space-x-6 space-y-4 sm:space-y-0 mt-8 sm:mt-12 px-4">
            <button className="group relative px-6 sm:px-8 py-3 sm:py-4 overflow-hidden w-full sm:w-auto">
              <div className="absolute inset-0 border border-white/20 transition-colors duration-300 group-hover:border-white/40"></div>
              <span className="relative z-10 text-sm font-light tracking-widest text-white/80 group-hover:text-white transition-colors duration-300">
                VIEW PORTFOLIO
              </span>
            </button>
            <button className="group relative px-6 sm:px-8 py-3 sm:py-4 overflow-hidden w-full sm:w-auto">
              <div className="absolute inset-0 bg-white transform origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></div>
              <span className="relative z-10 text-sm font-light tracking-widest text-white group-hover:text-black transition-colors duration-300">
                CONTACT US
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Ajustando tipografía */}
      <div className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <div className="w-[1px] h-12 sm:h-16 bg-gradient-to-b from-white/0 via-white/20 to-white/0"></div>
        <span className="text-white/40 text-xs sm:text-sm font-light tracking-widest mt-4">SCROLL</span>
      </div>
    </section>
  );
};

export default HeroSection;