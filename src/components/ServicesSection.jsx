import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

// Importar imágenes
import image1 from '../assets/selection.jpg';
import image2 from '../assets/investment.jpg';
import image3 from '../assets/management.jpg';
import image4 from '../assets/case-1.jpg';

const NewServicesSection = () => {
  const [activeService, setActiveService] = useState(null);
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      id: "01",
      title: "Property Selection",
      image: image1,
      subtitle: "PREMIUM PORTFOLIO",
      category: "ACQUISITION",
      description: "Access to exclusive off-market properties in prime locations worldwide.",
      features: [
        { title: "Premium Properties", value: "350+" },
        { title: "Exclusive Locations", value: "12" },
        { title: "Success Rate", value: "95%" }
      ],
      details: [
        "Ultra-luxury residences",
        "Commercial properties",
        "Development opportunities"
      ]
    },
    {
      id: "02",
      title: "Investment Strategy",
      image: image2,
      subtitle: "STRATEGIC PLANNING",
      category: "INVESTMENT",
      description: "Comprehensive investment strategies tailored to maximize returns.",
      features: [
        { title: "AUM", value: "$2.8B+" },
        { title: "Annual ROI", value: "18%" },
        { title: "Client Portfolio", value: "85+" }
      ],
      details: [
        "Market analysis",
        "Risk management",
        "Portfolio optimization"
      ]
    },
    {
      id: "03",
      title: "Asset Management",
      image: image3,
      subtitle: "PORTFOLIO CARE",
      category: "MANAGEMENT",
      description: "Professional management services for your luxury real estate portfolio.",
      features: [
        { title: "Managed Assets", value: "180+" },
        { title: "Service Locations", value: "8" },
        { title: "Client Satisfaction", value: "98%" }
      ],
      details: [
        "Property maintenance",
        "Tenant relations",
        "Value enhancement"
      ]
    },
    {
      id: "04",
      title: "Advisory Services",
      image: image4,
      subtitle: "EXPERT GUIDANCE",
      category: "ADVISORY",
      description: "Expert consultation and guidance throughout your investment journey.",
      features: [
        { title: "Expert Advisors", value: "25+" },
        { title: "Years Experience", value: "15" },
        { title: "Client Success", value: "96%" }
      ],
      details: [
        "Investment consulting",
        "Legal advisory",
        "Market intelligence"
      ]
    }
  ];

  return (
    <section className="relative bg-black text-white py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Vertical lines */}
        <div className="absolute left-1/4 top-0 bottom-0 w-[1px] bg-white/5"></div>
        <div className="absolute right-1/4 top-0 bottom-0 w-[1px] bg-white/5"></div>
        
        {/* Diagonal lines */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute h-[1px] w-full bg-white/5 transform -rotate-45"
            style={{ top: `${i * 10}%` }}
          />
        ))}

        {/* Geometric elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] border border-white/5 rounded-full opacity-20"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[1200px] h-[1200px] border border-white/5 rounded-full opacity-10"></div>
      </div>

      <div className="max-w-[1800px] mx-auto px-4 md:px-8 lg:px-16 relative">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-32">
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="text-sm tracking-[0.4em] text-white/60">01</span>
            <div className="w-12 h-[1px] bg-white/20"></div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-light mb-8">Our Services</h2>
          <p className="text-base lg:text-lg text-white/60 max-w-2xl mx-auto">
            Comprehensive luxury real estate investment solutions crafted for discerning investors seeking exceptional opportunities.
          </p>
        </div>

        {/* Services Display */}
        <div className="flex flex-col lg:flex-row gap-8 lg:space-x-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="w-full lg:w-1/4 relative"
              onHoverStart={() => setHoveredService(service.id)}
              onHoverEnd={() => setHoveredService(null)}
              onClick={() => setActiveService(activeService === service.id ? null : service.id)}
            >
              {/* Service Card */}
              <div className="relative group cursor-pointer">
                {/* Image Container */}
                <div className="relative aspect-[3/4] overflow-hidden mb-8">
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    animate={{
                      scale: hoveredService === service.id ? 1.05 : 1
                    }}
                    transition={{ duration: 0.7 }}
                  />
                  <div className="absolute inset-0 bg-black/30"></div>
                  
                  {/* Hover Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredService === service.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 flex flex-col justify-end p-8">
                      <div className="overflow-hidden h-12">
                        <motion.div
                          initial={{ y: 40 }}
                          animate={{ y: hoveredService === service.id ? 0 : 40 }}
                          transition={{ duration: 0.3 }}
                          className="flex items-center gap-2 text-sm tracking-[0.2em]"
                        >
                          EXPLORE <ArrowUpRight className="w-4 h-4" />
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Number and Text */}
                <div className="relative">
                  <div className="absolute -left-4 lg:-left-8 top-0 opacity-10">
                    <span className="text-[80px] lg:text-[120px] font-extralight">{service.id}</span>
                  </div>
                  <div className="relative pl-12 lg:pl-16">
                    <motion.span
                      className="text-sm tracking-[0.2em] text-white/60 block mb-2"
                      animate={{
                        color: hoveredService === service.id ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.6)'
                      }}
                    >
                      {service.category}
                    </motion.span>
                    <h3 className="text-xl lg:text-2xl font-light">{service.title}</h3>
                  </div>
                </div>

                {/* Expandable Content */}
                <AnimatePresence>
                  {activeService === service.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pt-12 space-y-12">
                        {/* Features Grid */}
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="bg-white/5 backdrop-blur-sm p-4">
                              <span className="block text-xl lg:text-2xl font-light mb-1">{feature.value}</span>
                              <span className="text-xs lg:text-sm text-white/60">{feature.title}</span>
                            </div>
                          ))}
                        </div>

                        {/* Description */}
                        <p className="text-base lg:text-lg text-white/80 leading-relaxed">
                          {service.description}
                        </p>

                        {/* Details */}
                        <div className="space-y-4">
                          {service.details.map((detail, idx) => (
                            <div key={idx} className="flex items-center gap-4">
                              <div className="w-8 h-[1px] bg-white/20"></div>
                              <span className="text-sm lg:text-base text-white/60">{detail}</span>
                            </div>
                          ))}
                        </div>

                        {/* CTA Button */}
                        <motion.button
                          className="group flex items-center gap-4"
                          whileHover={{ x: 10 }}
                        >
                          <span className="text-sm tracking-[0.2em] text-white/60 group-hover:text-white transition-colors duration-300">
                            LEARN MORE
                          </span>
                          <ArrowRight className="w-4 h-4 text-white/60 group-hover:text-white transition-colors duration-300" />
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewServicesSection;