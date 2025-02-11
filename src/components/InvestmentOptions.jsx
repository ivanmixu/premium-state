import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import investmentOptionsImage from '../assets/background-2.jpg';

const InvestmentOptions = () => {
  const sectionRef = useRef(null);

  const investmentOptions = [
    {
      title: "Residential Property",
      minInvestment: "$100K",
      expectedReturn: "12-15%",
      description: "Stable income through residential real estate investments in high-growth urban markets.",
      highlights: [
        "Low entry barrier",
        "Consistent rental income",
        "Long-term appreciation"
      ]
    },
    {
      title: "Commercial Real Estate",
      minInvestment: "$500K",
      expectedReturn: "15-20%",
      description: "Strategic investments in commercial properties with high potential for value appreciation.",
      highlights: [
        "Diversified income streams",
        "Longer lease terms",
        "Higher potential returns"
      ]
    },
    {
      title: "Mixed-Use Development",
      minInvestment: "$250K",
      expectedReturn: "18-22%",
      description: "Innovative projects combining residential, commercial, and community spaces.",
      highlights: [
        "Multiple revenue sources",
        "Urban regeneration focus",
        "Sustainable investment approach"
      ]
    }
  ];

  return (
    <section ref={sectionRef} className="relative bg-black text-white py-32 overflow-hidden">
      {/* Líneas decorativas */}
      <div className="absolute inset-0">
        <div className="absolute h-[800px] w-[800px] border border-white/5 rounded-full left-1/2 -translate-x-1/2 -top-1/2"></div>
        <div className="absolute h-[600px] w-[600px] border border-white/5 rounded-full left-1/2 -translate-x-1/2 -top-1/2"></div>
        <div className="absolute h-[400px] w-[400px] border border-white/5 rounded-full left-1/2 -translate-x-1/2 -top-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header posicionado a la izquierda */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-24 h-[1px] bg-white/20 mb-8"></div>
              <h2 className="text-6xl font-light tracking-wider mb-6 leading-tight">
                Choose Your
                <br />
                Investment
                <br />
                Path
              </h2>
              <p className="text-gray-400 text-lg font-light">
                Select from our carefully curated investment options designed to meet your financial goals and risk tolerance.
              </p>
            </motion.div>
          </div>
          
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="aspect-square rounded-full overflow-hidden"
            >
              <img 
                src={investmentOptionsImage} 
                alt="Investment Options" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50"></div>
            </motion.div>
          </div>
        </div>

        {/* Investment Options con diseño escalonado */}
        <div className="space-y-6">
          {investmentOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className={`flex flex-col md:flex-row gap-8 items-center ${
                index % 2 === 0 ? 'md:ml-0' : 'md:ml-[10%]'
              }`}>
                {/* Número grande */}
                <div className="text-8xl font-thin text-white/10 w-32 text-center">
                  0{index + 1}
                </div>

                {/* Contenido principal */}
                <div className="flex-1 bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 group-hover:border-white/20 transition-colors duration-300">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-light mb-4">{option.title}</h3>
                      <p className="text-gray-400 font-light mb-6">
                        {option.description}
                      </p>
                      <div className="space-y-2">
                        {option.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-300">
                            <div className="w-8 h-[1px] bg-white/20 mr-3"></div>
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="space-y-6">
                        <div>
                          <div className="text-sm text-gray-400 mb-1">Starting from</div>
                          <div className="text-4xl font-light">{option.minInvestment}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-400 mb-1">Expected Return</div>
                          <div className="text-4xl font-light text-green-400">{option.expectedReturn}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-24"
        >
          <button className="group relative inline-flex items-center gap-4 px-8 py-4">
            <span className="relative z-10 text-sm tracking-[0.2em] text-white group-hover:text-black transition-colors duration-300">
              START INVESTING
            </span>
            <div className="w-8 h-[1px] bg-white group-hover:bg-black transition-colors duration-300 relative z-10"></div>
            <div className="absolute inset-0 bg-white transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default InvestmentOptions;