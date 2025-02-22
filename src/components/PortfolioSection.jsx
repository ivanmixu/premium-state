import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import project1Image from '../assets/project-1.jpg';
import project2Image from '../assets/project-2.jpg';
import project3Image from '../assets/project-3.jpg';

gsap.registerPlugin(ScrollTrigger);

const PortfolioSection = () => {
  const [activeProject, setActiveProject] = useState(0);
  const sectionRef = useRef(null);
  
  const projects = [
    {
      id: 1,
      name: "Luxury Tower I",
      location: "New York City",
      image: project1Image,
      year: "2023",
      value: "$85M",
      category: "Residential",
      details: {
        size: "25,000 sqft",
        units: "45 luxury apartments",
        status: "Completed",
        return: "12% annual ROI"
      }
    },
    {
      id: 2,
      name: "Ocean View Resort",
      location: "Miami Beach",
      image: project2Image,
      year: "2024",
      value: "$120M",
      category: "Hospitality",
      details: {
        size: "120,000 sqft",
        units: "200 rooms",
        status: "Under Development",
        return: "15% projected ROI"
      }
    },
    {
      id: 3,
      name: "Urban Complex III",
      location: "Chicago",
      image: project3Image,
      year: "2022",
      value: "$95M",
      category: "Mixed-Use",
      details: {
        size: "80,000 sqft",
        units: "60 units + retail",
        status: "Operational",
        return: "10.5% annual ROI"
      }
    }
  ];

  const handleProjectChange = (index) => {
    gsap.to(".project-content", {
      opacity: 0,
      y: 20,
      duration: 0.3,
      onComplete: () => {
        setActiveProject(index);
        gsap.to(".project-content", {
          opacity: 1,
          y: 0,
          duration: 0.5
        });
      }
    });
  };

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-black text-white py-24 overflow-hidden">
      {/* Líneas de fondo */}
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-0 bottom-0 w-[1px] bg-white/5"></div>
        <div className="absolute right-1/4 top-0 bottom-0 w-[1px] bg-white/5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título de sección */}
        <div className="text-center mb-12 md:mb-20">
          <div className="w-24 h-[1px] bg-white/20 mx-auto mb-8"></div>
          <h2 className="section-title text-3xl md:text-4xl lg:text-5xl font-light tracking-wider mb-4 md:mb-6">
            FEATURED PROJECTS
          </h2>
          <p className="text-gray-400 text-base md:text-lg font-light max-w-2xl mx-auto">
            Explore our collection of premium real estate investments
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Menú de proyectos */}
          <div className="lg:col-span-3">
            <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible space-x-4 lg:space-x-0 lg:space-y-1 pb-4 lg:pb-0">
              {projects.map((project, index) => (
                <button
                  key={project.id}
                  onClick={() => handleProjectChange(index)}
                  className={`group min-w-[200px] lg:min-w-0 lg:w-full text-left px-4 lg:px-6 py-4 relative transition-all duration-300 ${
                    activeProject === index ? 'bg-white/5' : 'hover:bg-white/5'
                  }`}
                >
                  {/* Línea indicadora */}
                  <div className={`absolute left-0 top-0 lg:bottom-0 w-full lg:w-[2px] h-[2px] lg:h-full transition-all duration-300 ${
                    activeProject === index ? 'bg-white scale-x-100 lg:scale-x-100 lg:scale-y-100' : 'bg-white/20 scale-x-0 lg:scale-y-0 group-hover:scale-x-100 lg:group-hover:scale-y-100'
                  }`}></div>
                  
                  <div className="space-y-2">
                    <span className="block text-sm text-white/40">{project.category}</span>
                    <span className={`block text-base lg:text-lg transition-colors duration-300 ${
                      activeProject === index ? 'text-white' : 'text-white/60'
                    }`}>{project.name}</span>
                    <span className="block text-sm text-white/40">{project.location}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Contenido del proyecto */}
          <div className="lg:col-span-9 project-content">
            <div className="relative h-[40vh] md:h-[50vh] lg:h-[60vh] mb-6 lg:mb-8 overflow-hidden group">
              {/* Imagen del proyecto */}
              <div
                className="absolute inset-0 bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700"
                style={{ backgroundImage: `url(${projects[activeProject].image})` }}
              />
              
              {/* Overlay con gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Información superpuesta */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 lg:p-8">
                <div className="max-w-3xl">
                  <div className="flex items-center space-x-4 mb-2 md:mb-4 text-sm">
                    <span className="text-white/60">{projects[activeProject].year}</span>
                    <span className="w-1 h-1 bg-white/40 rounded-full"></span>
                    <span className="text-white/60">{projects[activeProject].value}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-light mb-2 md:mb-4">{projects[activeProject].name}</h3>
                  <p className="text-lg md:text-xl text-white/80">{projects[activeProject].location}</p>
                </div>
              </div>
            </div>

            {/* Detalles del proyecto */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {Object.entries(projects[activeProject].details).map(([key, value]) => (
                <div key={key} className="space-y-2">
                  <span className="block text-xs md:text-sm text-white/40 uppercase tracking-wider">
                    {key}
                  </span>
                  <span className="block text-base md:text-lg">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;