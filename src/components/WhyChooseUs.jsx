import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const [activeAdvantage, setActiveAdvantage] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const advantages = [
    {
      id: 1,
      title: "EXPERTISE & INNOVATION",
      shortDesc: "Redefining investment standards through expertise and innovation",
      description: "Our team of industry veterans brings decades of combined experience in real estate investment and portfolio management, backed by cutting-edge technology and innovative approaches.",
      expertise: [
        { area: "Market Analysis", level: 95 },
        { area: "Risk Management", level: 90 },
        { area: "Portfolio Optimization", level: 88 },
        { area: "Strategic Planning", level: 92 }
      ],
      achievements: [
        { value: "25+", label: "Years Experience" },
        { value: "$2.8B+", label: "Assets Managed" },
        { value: "150+", label: "Projects Completed" }
      ]
    },
    {
      id: 2,
      title: "TECHNOLOGY & DATA",
      shortDesc: "AI-powered insights driving investment success",
      description: "Leveraging advanced analytics and artificial intelligence to provide real-time market insights and predictive analysis for optimal investment decisions.",
      technologies: [
        { name: "AI Analytics", percentage: 95 },
        { name: "Blockchain Security", percentage: 88 },
        { name: "Smart Contracts", percentage: 92 },
        { name: "Data Science", percentage: 90 }
      ],
      metrics: [
        { value: "99.9%", label: "Analysis Accuracy" },
        { value: "24/7", label: "Market Monitoring" },
        { value: "500TB+", label: "Data Processed" }
      ]
    },
    {
      id: 3,
      title: "RECOGNITION & TRUST",
      shortDesc: "Global recognition for excellence in real estate investment",
      description: "Internationally acclaimed for our commitment to excellence, sustainable practices, and consistent delivery of exceptional investment returns.",
      awards: [
        { year: "2024", award: "Best Investment Manager" },
        { year: "2023", award: "Innovation Excellence" },
        { year: "2023", award: "Sustainable Investment" }
      ],
      certifications: [
        { name: "ISO 9001", status: "Certified" },
        { name: "ISO 27001", status: "Certified" },
        { name: "ESG Rating", status: "AAA" }
      ]
    }
  ];

  useEffect(() => {
    const title = sectionRef.current.querySelector('.section-title');
    const navigation = sectionRef.current.querySelector('.advantage-navigation');
    const contentWrapper = sectionRef.current.querySelector('.content-wrapper');

    gsap.set([title, navigation, contentWrapper], { 
      opacity: 0,
      y: 50 
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "+=300",
        toggleActions: "play none none reverse"
      }
    });

    tl.to(title, {
      opacity: 1,
      y: 0,
      duration: 0.8
    })
    .to(navigation, {
      opacity: 1,
      y: 0,
      duration: 0.8
    }, "-=0.6")
    .to(contentWrapper, {
      opacity: 1,
      y: 0,
      duration: 0.8
    }, "-=0.6");

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const renderAdvantageContent = (advantage) => {
    switch (advantage.id) {
      case 1:
        return (
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-8">
              <div className="space-y-4">
                {advantage.expertise.map((item, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">{item.area}</span>
                      <span className="text-white">{item.level}%</span>
                    </div>
                    <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${item.level}%` }}
                        transition={{ duration: 1, delay: idx * 0.2 }}
                        className="h-full bg-gradient-to-r from-blue-500 to-blue-400"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {advantage.achievements.map((achievement, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  className="bg-white/5 backdrop-blur-sm p-6 border border-white/10"
                >
                  <div className="text-3xl font-light mb-2">{achievement.value}</div>
                  <div className="text-sm text-gray-400">{achievement.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-6">
              {advantage.technologies.map((tech, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  className="relative"
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-400">{tech.name}</span>
                    <span className="text-sm text-white">{tech.percentage}%</span>
                  </div>
                  <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${tech.percentage}%` }}
                      transition={{ duration: 1 }}
                      className="h-full bg-gradient-to-r from-green-500 to-green-400"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="grid grid-rows-3 gap-4">
              {advantage.metrics.map((metric, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.2 }}
                  className="bg-white/5 backdrop-blur-sm p-6 border border-white/10 flex items-center justify-between"
                >
                  <span className="text-3xl font-light">{metric.value}</span>
                  <span className="text-sm text-gray-400">{metric.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-6">
              {advantage.awards.map((award, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  className="group flex items-center space-x-4 p-4 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20"
                >
                  <div className="text-2xl font-light text-white/40 group-hover:text-white/60 transition-colors duration-300">
                    {award.year}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-white">{award.award}</div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="space-y-6">
              {advantage.certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  className="flex items-center justify-between p-4 bg-white/5 backdrop-blur-sm border border-white/10"
                >
                  <span className="text-lg font-light">{cert.name}</span>
                  <span className="text-sm text-green-400">{cert.status}</span>
                </motion.div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section ref={sectionRef} className="relative bg-black text-white py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-0 bottom-0 w-[1px] bg-white/5"></div>
        <div className="absolute right-1/4 top-0 bottom-0 w-[1px] bg-white/5"></div>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute h-[1px] w-full bg-white/5 transform -rotate-45"
            style={{ top: `${i * 10}%` }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="w-24 h-[1px] bg-white/20 mx-auto mb-8"></div>
          <h2 className="section-title text-5xl md:text-6xl font-light tracking-wider mb-6">
            Why Choose Us
          </h2>
          <p className="text-gray-400 text-xl font-light max-w-3xl mx-auto">
            Setting new standards in real estate investment through expertise, 
            technology, and unwavering commitment to excellence.
          </p>
        </div>

        {/* Main Content */}
        <div className="relative">
          {/* Navigation */}
          <div className="advantage-navigation flex justify-center mb-16 relative">
            <div className="flex space-x-8">
              {advantages.map((advantage, index) => (
                <button
                  key={advantage.id}
                  onClick={() => setActiveAdvantage(index)}
                  className={`group relative px-6 py-3 transition-all duration-300 ${
                    activeAdvantage === index ? 'text-white' : 'text-gray-500'
                  }`}
                >
                  <span className="relative z-10 text-sm tracking-wider">
                    {advantage.title}
                  </span>
                  {activeAdvantage === index && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute inset-0 bg-white/5"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-white/0 via-white/50 to-white/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </button>
              ))}
            </div>
          </div>

          {/* Content Display */}
          <div className="content-wrapper">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeAdvantage}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-12"
              >
                {/* Advantage Header */}
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-light mb-4">
                    {advantages[activeAdvantage].shortDesc}
                  </h3>
                  <p className="text-gray-400 max-w-3xl mx-auto">
                    {advantages[activeAdvantage].description}
                  </p>
                </div>

                {/* Dynamic Content Based on Active Advantage */}
                {renderAdvantageContent(advantages[activeAdvantage])}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;