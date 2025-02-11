import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, Clock, MapPin, Mail, Phone, MessageSquare } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const [activeTab, setActiveTab] = useState('contact');
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const sectionRef = useRef(null);
  const formRef = useRef(null);

  const locations = [
    {
      city: "New York",
      address: "280 Park Avenue, Manhattan",
      phone: "+1 (212) 555-0123",
      email: "nyc@premiumestate.com"
    },
    {
      city: "London",
      address: "30 St Mary Axe, London",
      phone: "+44 20 7123 4567",
      email: "london@premiumestate.com"
    },
    {
      city: "Dubai",
      address: "Downtown Dubai, UAE",
      phone: "+971 4 123 4567",
      email: "dubai@premiumestate.com"
    }
  ];

  const availableTimes = [
    "09:00", "10:00", "11:00", "14:00", "15:00", "16:00"
  ];

  useEffect(() => {
    const title = sectionRef.current.querySelector('.section-title');
    const content = sectionRef.current.querySelector('.content-wrapper');
    const tabs = sectionRef.current.querySelector('.tabs-wrapper');

    gsap.set([title, content, tabs], { 
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
    .to(tabs, {
      opacity: 1,
      y: 0,
      duration: 0.8
    }, "-=0.6")
    .to(content, {
      opacity: 1,
      y: 0,
      duration: 0.8
    }, "-=0.6");

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic
  };

  const renderContactForm = () => (
    <form ref={formRef} onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
      <div className="col-span-2 md:col-span-1">
        <label className="block text-sm text-gray-400 mb-2">Full Name</label>
        <input
          type="text"
          className="w-full bg-white/5 border border-white/10 rounded-none px-4 py-3 text-white focus:border-white/30 focus:outline-none transition-colors duration-300"
          required
        />
      </div>
      <div className="col-span-2 md:col-span-1">
        <label className="block text-sm text-gray-400 mb-2">Email Address</label>
        <input
          type="email"
          className="w-full bg-white/5 border border-white/10 rounded-none px-4 py-3 text-white focus:border-white/30 focus:outline-none transition-colors duration-300"
          required
        />
      </div>
      <div className="col-span-2">
        <label className="block text-sm text-gray-400 mb-2">Investment Interest</label>
        <select className="w-full bg-white/5 border border-white/10 rounded-none px-4 py-3 text-white focus:border-white/30 focus:outline-none transition-colors duration-300">
          <option value="residential">Residential Properties</option>
          <option value="commercial">Commercial Properties</option>
          <option value="mixed">Mixed-Use Development</option>
        </select>
      </div>
      <div className="col-span-2">
        <label className="block text-sm text-gray-400 mb-2">Message</label>
        <textarea
          rows="4"
          className="w-full bg-white/5 border border-white/10 rounded-none px-4 py-3 text-white focus:border-white/30 focus:outline-none transition-colors duration-300"
          required
        ></textarea>
      </div>
      <div className="col-span-2">
        <button
          type="submit"
          className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden"
        >
          <div className="absolute inset-0 bg-white transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          <span className="relative z-10 text-sm tracking-[0.2em] text-white group-hover:text-black transition-colors duration-300">
            SEND MESSAGE
          </span>
        </button>
      </div>
    </form>
  );

  const renderScheduleMeeting = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-light mb-4">Select Date</h3>
          <div className="grid grid-cols-7 gap-2">
            {[...Array(31)].map((_, i) => (
              <button
                key={i}
                onClick={() => setSelectedDate(i + 1)}
                className={`p-2 text-sm border ${
                  selectedDate === i + 1
                    ? 'border-white text-white'
                    : 'border-white/10 text-gray-400 hover:border-white/30'
                } transition-colors duration-300`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-xl font-light mb-4">Select Time</h3>
          <div className="grid grid-cols-3 gap-3">
            {availableTimes.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`p-3 text-sm border ${
                  selectedTime === time
                    ? 'border-white text-white'
                    : 'border-white/10 text-gray-400 hover:border-white/30'
                } transition-colors duration-300`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="space-y-6">
        <div className="bg-white/5 border border-white/10 p-6">
          <h3 className="text-xl font-light mb-4">Meeting Details</h3>
          <div className="space-y-4">
            {selectedDate && selectedTime ? (
              <>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Calendar className="w-5 h-5" />
                  <span>Date: {selectedDate} February, 2025</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Clock className="w-5 h-5" />
                  <span>Time: {selectedTime}</span>
                </div>
              </>
            ) : (
              <p className="text-gray-400">Please select a date and time for your meeting.</p>
            )}
          </div>
        </div>
        {selectedDate && selectedTime && (
          <button className="w-full group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden">
            <div className="absolute inset-0 bg-white transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            <span className="relative z-10 text-sm tracking-[0.2em] text-white group-hover:text-black transition-colors duration-300">
              CONFIRM MEETING
            </span>
          </button>
        )}
      </div>
    </div>
  );

  const renderLocations = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {locations.map((location, index) => (
        <motion.div
          key={location.city}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          className="group relative bg-white/5 border border-white/10 p-8 hover:border-white/30 transition-colors duration-300"
        >
          <h3 className="text-2xl font-light mb-6">{location.city}</h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3 text-gray-400">
              <MapPin className="w-5 h-5 mt-1" />
              <span>{location.address}</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-400">
              <Phone className="w-5 h-5" />
              <span>{location.phone}</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-400">
              <Mail className="w-5 h-5" />
              <span>{location.email}</span>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-white/0 via-white/50 to-white/0"></div>
        </motion.div>
      ))}
    </div>
  );

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
            Contact Us
          </h2>
          <p className="text-gray-400 text-xl font-light max-w-3xl mx-auto">
            Begin your premium investment journey today. Our team of experts is ready to guide you 
            through every step of the process.
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="tabs-wrapper flex justify-center mb-16">
          <div className="inline-flex border border-white/10">
            {[
              { id: 'contact', icon: MessageSquare, label: 'CONTACT' },
              { id: 'schedule', icon: Calendar, label: 'SCHEDULE MEETING' },
              { id: 'locations', icon: MapPin, label: 'LOCATIONS' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`group relative flex items-center space-x-2 px-8 py-4 ${
                  activeTab === tab.id ? 'text-white bg-white/5' : 'text-gray-400'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span className="text-sm tracking-wider">{tab.label}</span>
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white/5"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="content-wrapper">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {activeTab === 'contact' && renderContactForm()}
              {activeTab === 'schedule' && renderScheduleMeeting()}
              {activeTab === 'locations' && renderLocations()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;