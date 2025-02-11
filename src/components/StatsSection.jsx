import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const StatsSection = () => {
  const sectionRef = useRef(null);
  
  const stats = [
    {
      number: "15Y+",
      label: "Years of Excellence",
      description: "Setting industry standards in luxury real estate"
    },
    {
      number: "500+",
      label: "Properties Sold",
      description: "Premium properties in exclusive locations"
    },
    {
      number: "€2.8B+",
      label: "Transaction Volume",
      description: "Successfully managed investment volume"
    }
  ];

  const achievements = [
    {
      title: "Market Leadership",
      stats: [
        { value: "92%", label: "Client Satisfaction" },
        { value: "85%", label: "Market Share" },
        { value: "95%", label: "Investment Success Rate" }
      ]
    }
  ];

  useEffect(() => {
    const stats = sectionRef.current.querySelectorAll('.stat-number');
    const titles = sectionRef.current.querySelectorAll('.title');
    const bars = sectionRef.current.querySelectorAll('.progress-bar');
    const lines = sectionRef.current.querySelectorAll('.animate-line');

    gsap.set([stats, titles], { 
      opacity: 0, 
      y: 50 
    });
    gsap.set(lines, { scaleX: 0 });
    gsap.set(bars, { width: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse"
      }
    });

    tl.to(lines, {
      scaleX: 1,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.inOut"
    })
    .to(titles, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out"
    }, "-=0.4")
    .to(stats, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out"
    }, "-=0.6")
    .to(bars, {
      width: "100%",
      duration: 1,
      stagger: 0.2,
      ease: "power3.inOut"
    }, "-=0.4");

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* Fondo con gradiente y textura */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black">
        {/* Líneas diagonales animadas */}
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute h-[1px] w-full bg-white/5 transform -rotate-45"
            style={{
              top: `${i * 20}%`,
              animation: `moveRight ${15 + i * 2}s linear infinite`
            }}
          />
        ))}
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Lado izquierdo - Texto y misión */}
          <div className="relative">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <span className="text-sm tracking-[0.4em] text-white/60">04</span>
                <div className="animate-line w-12 h-[1px] bg-white/20"></div>
              </div>
              <h2 className="title text-4xl md:text-5xl lg:text-6xl font-light tracking-wider text-white">
                Our Impact
              </h2>
              <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-xl">
                A decade and a half of excellence in luxury real estate, delivering exceptional value to our distinguished clientele through strategic investments and unparalleled service.
              </p>
            </div>
          </div>

          {/* Lado derecho - Stats Grid */}
          <div className="grid grid-cols-1 gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="stat-number group"
              >
                <div className="space-y-2">
                  <div className="flex items-baseline space-x-4">
                    <span className="text-5xl md:text-6xl lg:text-7xl font-light text-white">
                      {stat.number}
                    </span>
                    <span className="text-lg text-white/60">{stat.label}</span>
                  </div>
                  <p className="text-gray-400 font-light">{stat.description}</p>
                  {/* Línea decorativa */}
                  <div className="absolute -bottom-4 left-0 w-full h-[1px] bg-gradient-to-r from-white/30 via-white/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              </motion.div>
            ))}

            {/* Performance Metrics */}
            {achievements.map((achievement, index) => (
              <div key={index} className="space-y-8 pt-8 border-t border-white/10">
                <h3 className="title text-2xl font-light text-white">{achievement.title}</h3>
                <div className="space-y-6">
                  {achievement.stats.map((item, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">{item.label}</span>
                        <span className="text-white">{item.value}</span>
                      </div>
                      <div className="h-1 bg-white/10 relative">
                        <div className="progress-bar absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 to-blue-400"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;