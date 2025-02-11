import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Importar imágenes
import member1Image from '../assets/member1.jpg';
import member2Image from '../assets/member2.jpg';
import member3Image from '../assets/member3.jpg';
import member4Image from '../assets/member4.jpg';

const TeamSection = () => {
  const [hoveredMember, setHoveredMember] = useState(null);

  const teamMembers = [
    {
      id: "01",
      name: "Alexander Mitchell",
      role: "Founder & Senior Advisor",
      image: member1Image,
      description: "Over 20 years of experience in luxury real estate investment.",
      location: "NEW YORK"
    },
    {
      id: "02",
      name: "Victor Reynolds",
      role: "Investment Director",
      image: member2Image,
      description: "Specializing in high-value property acquisitions.",
      location: "LONDON"
    },
    {
      id: "03",
      name: "James Henderson",
      role: "Senior Investment Advisor",
      image: member3Image,
      description: "Leading our portfolio management strategies.",
      location: "DUBAI"
    },
    {
      id: "04",
      name: "Steven Clarke",
      role: "Legal Advisor",
      image: member4Image,
      description: "Expert in international real estate law.",
      location: "SINGAPORE"
    }
  ];

  return (
    <section className="relative bg-black text-white py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/4 top-0 bottom-0 w-[1px] bg-white/5"></div>
        <div className="absolute right-1/4 top-0 bottom-0 w-[1px] bg-white/5"></div>
      </div>

      <div className="max-w-[1800px] mx-auto px-8 relative">
        {/* Section Header */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-sm tracking-[0.4em] text-white/60">03</span>
            <div className="w-12 h-[1px] bg-white/20"></div>
          </div>
          <div className="grid grid-cols-2 gap-16 items-end">
            <h2 className="text-7xl font-light">Our Team</h2>
            <p className="text-lg text-white/60">
              Meet our team of experts dedicated to delivering exceptional value in luxury real estate investment.
            </p>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              {/* Member Card */}
              <div className="group cursor-pointer">
                {/* Image Container */}
                <div className="relative aspect-[3/4] overflow-hidden mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                  
                  {/* Hover Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredMember === member.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute bottom-8 left-8">
                      <span className="text-sm tracking-[0.2em] text-white/80">
                        {member.location}
                      </span>
                    </div>
                  </motion.div>
                </div>

                {/* Member Info */}
                <div className="relative">
                  <div className="absolute -left-4 top-0 -translate-y-1/2">
                    <span className="text-8xl font-extralight text-white/10">{member.id}</span>
                  </div>
                  <div className="relative">
                    <span className="text-sm tracking-[0.2em] text-white/60 block mb-2">
                      {member.role}
                    </span>
                    <h3 className="text-xl font-light mb-2">{member.name}</h3>
                    <motion.p
                      className="text-sm text-white/60 leading-relaxed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredMember === member.id ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {member.description}
                    </motion.p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;