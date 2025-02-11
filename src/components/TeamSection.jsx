import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Plus } from 'lucide-react';

// Importar imágenes
import member1Image from '../assets/member1.jpg';
import member2Image from '../assets/member2.jpg';
import member3Image from '../assets/member3.jpg';
import member4Image from '../assets/member4.jpg';

const TeamSection = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isRevealed, setIsRevealed] = useState(false);

  const teamMembers = [
    {
      id: "01",
      name: "Alexander Mitchell",
      position: "Founder & CEO",
      image: member1Image,
      experience: "20+ years",
      location: "NEW YORK",
      stats: {
        deals: "350+",
        value: "$2.8B",
        clients: "120+"
      },
      expertise: [
        "Investment Strategy",
        "Portfolio Development",
        "Market Analysis"
      ],
      quote: "Excellence in luxury real estate is not just about properties, it's about creating lasting value."
    },
    {
      id: "02",
      name: "Victoria Reynolds",
      position: "Senior Investment Advisor",
      image: member2Image,
      experience: "15+ years",
      location: "LONDON",
      stats: {
        deals: "280+",
        value: "$1.9B",
        clients: "95+"
      },
      expertise: [
        "Property Acquisition",
        "Value Optimization",
        "Client Relations"
      ],
      quote: "Every investment should tell a story of growth and opportunity."
    },
    {
      id: "03",
      name: "James Henderson",
      position: "Head of Operations",
      image: member3Image,
      experience: "12+ years",
      location: "DUBAI",
      stats: {
        deals: "220+",
        value: "$1.5B",
        clients: "75+"
      },
      expertise: [
        "Process Optimization",
        "Team Leadership",
        "Strategic Planning"
      ],
      quote: "Efficiency and precision are the foundations of successful operations."
    },
    {
      id: "04",
      name: "Sophia Clarke",
      position: "Legal Advisor",
      image: member4Image,
      experience: "18+ years",
      location: "SINGAPORE",
      stats: {
        deals: "300+",
        value: "$2.1B",
        clients: "85+"
      },
      expertise: [
        "Legal Strategy",
        "Risk Management",
        "Compliance"
      ],
      quote: "In luxury real estate, attention to detail makes all the difference."
    }
  ];

  useEffect(() => {
    setTimeout(() => setIsRevealed(true), 500);
  }, []);

  return (
    <section className="relative bg-black text-white min-h-screen py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/4 top-0 bottom-0 w-[1px] bg-white/5"></div>
        <div className="absolute right-1/4 top-0 bottom-0 w-[1px] bg-white/5"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] border border-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      </div>

      <div className="max-w-[1800px] mx-auto px-4 md:px-8 lg:px-16 relative">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-24"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-sm tracking-[0.4em] text-white/60">03</span>
            <div className="w-12 h-[1px] bg-white/20"></div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-light">Meet Our<br />Experts</h2>
            <p className="text-base lg:text-lg text-white/60 max-w-lg">
              A dedicated team of industry leaders committed to delivering exceptional value in luxury real estate investment.
            </p>
          </div>
        </motion.div>

        {/* Team Grid */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: isRevealed ? 1 : 0, y: isRevealed ? 0 : 100 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group relative"
              >
                {/* Member Card */}
                <div 
                  className={`relative aspect-square cursor-pointer transition-all duration-700
                    ${selectedMember === member.id ? 'scale-95' : 'hover:scale-95'}`}
                  onClick={() => setSelectedMember(selectedMember === member.id ? null : member.id)}
                >
                  {/* Image */}
                  <div className="absolute inset-0 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/30 transition-opacity duration-300 group-hover:opacity-50"></div>
                  </div>

                  {/* Initial Info */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
                    <div className="flex justify-between items-start">
                      <span className="text-6xl font-extralight opacity-20">{member.id}</span>
                      <span className="text-sm tracking-[0.2em]">{member.location}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-light mb-2">{member.name}</h3>
                      <p className="text-sm text-white/60">{member.position}</p>
                    </div>
                  </div>

                  {/* Hover Indicator */}
                  <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Plus className="w-6 h-6" />
                  </div>
                </div>

                {/* Expanded Content */}
                <AnimatePresence>
                  {selectedMember === member.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.5 }}
                      className="relative bg-neutral-900/80 backdrop-blur-sm border-t border-white/10"
                    >
                      <div className="p-8 space-y-8">
                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4">
                          <div>
                            <span className="block text-2xl font-light">{member.stats.deals}</span>
                            <span className="text-sm text-white/60">Transactions</span>
                          </div>
                          <div>
                            <span className="block text-2xl font-light">{member.stats.value}</span>
                            <span className="text-sm text-white/60">Volume</span>
                          </div>
                          <div>
                            <span className="block text-2xl font-light">{member.stats.clients}</span>
                            <span className="text-sm text-white/60">Clients</span>
                          </div>
                        </div>

                        {/* Quote */}
                        <p className="text-lg italic text-white/80">"{member.quote}"</p>

                        {/* Expertise */}
                        <div className="space-y-4">
                          {member.expertise.map((skill, idx) => (
                            <div key={idx} className="flex items-center gap-4">
                              <div className="w-8 h-[1px] bg-white/20"></div>
                              <span className="text-white/60">{skill}</span>
                            </div>
                          ))}
                        </div>

                        {/* CTA */}
                        <motion.button
                          className="group flex items-center gap-4"
                          whileHover={{ x: 10 }}
                        >
                          <span className="text-sm tracking-[0.2em] text-white/60 group-hover:text-white transition-colors duration-300">
                            FULL PROFILE
                          </span>
                          <ArrowRight className="w-4 h-4 text-white/60 group-hover:text-white transition-colors duration-300" />
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;