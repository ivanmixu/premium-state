import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import case1Image from '../assets/case-1.jpg';
import case2Image from '../assets/case-2.jpg';
import case3Image from '../assets/case-3.jpg';
import case4Image from '../assets/case-4.jpg';

const SuccessStories = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [activeCategory, setActiveCategory] = useState('all');

    const projects = [
        {
            id: 1,
            category: 'mixed',
            title: "Urban Regeneration Project",
            location: "Seattle, Washington",
            roi: "16.7%",
            investmentPeriod: "48 months",
            totalInvestment: "$12.5M",
            metrics: [
                { label: "Units Developed", value: "280+" },
                { label: "Total Area", value: "45,000 sqft" },
                { label: "Occupancy Rate", value: "98%" }
            ],
            image: case1Image,
        },
        {
            id: 2,
            category: 'residential',
            title: "Sustainable Housing Complex",
            location: "Portland, Oregon",
            roi: "14.5%",
            investmentPeriod: "36 months",
            totalInvestment: "$8.7M",
            metrics: [
                { label: "Units Developed", value: "210+" },
                { label: "Total Area", value: "35,000 sqft" },
                { label: "Green Certification", value: "LEED Platinum" }
            ],
            image: case2Image,
        },
        {
            id: 3,
            category: 'residential',
            title: "Community Innovation Hub",
            location: "San Francisco, California",
            roi: "15.3%",
            investmentPeriod: "42 months",
            totalInvestment: "$15.2M",
            metrics: [
                { label: "Units Developed", value: "180+" },
                { label: "Total Area", value: "40,000 sqft" },
                { label: "Community Impact", value: "350+ Jobs" }
            ],
            image: case3Image,
        },
        {
            id: 4,
            category: 'commercial',
            title: "Tech Innovation Center",
            location: "San Jose, California",
            roi: "18.2%",
            investmentPeriod: "60 months",
            totalInvestment: "$22.5M",
            metrics: [
                { label: "Units Developed", value: "120+" },
                { label: "Total Area", value: "50,000 sqft" },
                { label: "Tenant Satisfaction", value: "95%" }
            ],
            image: case4Image,
        },
    ];

    const categories = [
        { id: 'all', label: 'ALL PROJECTS' },
        { id: 'residential', label: 'RESIDENTIAL' },
        { id: 'commercial', label: 'COMMERCIAL' },
        { id: 'mixed', label: 'MIXED-USE' }
    ];

    const filteredProjects = projects.filter(
        project => activeCategory === 'all' || project.category === activeCategory
    );

    const projectsPerPage = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
    const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

    const nextPage = () => {
        setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
    };

    const prevPage = () => {
        setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
    };

    const displayedProjects = filteredProjects.slice(
        currentPage * projectsPerPage, 
        (currentPage + 1) * projectsPerPage
    );

    return (
        <section className="bg-black text-white py-12 sm:py-16 md:py-24 px-4 md:px-12 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Diagonal lines */}
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute h-[1px] w-full bg-white/5 transform -rotate-45"
                        style={{ top: `${i * 10}%` }}
                    />
                ))}
                {/* Vertical lines */}
                <div className="hidden md:block absolute left-1/4 top-0 bottom-0 w-[1px] bg-white/5"></div>
                <div className="hidden md:block absolute right-1/4 top-0 bottom-0 w-[1px] bg-white/5"></div>
                {/* Decorative circle */}
                <div className="absolute top-0 right-0 w-48 md:w-96 h-48 md:h-96 bg-gradient-to-b from-white/5 to-transparent rounded-full blur-3xl -mr-24 md:-mr-48 -mt-24 md:-mt-48"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header - Responsive typography */}
                <div className="mb-8 md:mb-16">
                    <div className="w-16 md:w-24 h-[1px] bg-white/20 mb-6 md:mb-8"></div>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-extralight tracking-tight mb-4 md:mb-6">
                        Investment Success Stories
                    </h2>
                    <p className="text-lg md:text-xl text-neutral-400 max-w-3xl">
                        Transformative investments that drive sustainable growth, create value, and 
                        deliver exceptional returns across diverse real estate sectors.
                    </p>
                </div>

                {/* Category Navigation - Scrollable on mobile */}
                <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0 mb-8 md:mb-16">
                    <div className="flex space-x-4 md:space-x-8 min-w-max md:min-w-0">
                        {categories.map((cat) => (
                            <motion.button
                                key={cat.id}
                                onClick={() => {
                                    setActiveCategory(cat.id);
                                    setCurrentPage(0);
                                }}
                                className={`
                                    text-xs md:text-sm tracking-wider relative py-2 whitespace-nowrap
                                    ${activeCategory === cat.id 
                                        ? 'text-white' 
                                        : 'text-neutral-500 hover:text-neutral-300'
                                    }
                                `}
                            >
                                {cat.label}
                                {activeCategory === cat.id && (
                                    <motion.div
                                        layoutId="categoryUnderline"
                                        className="absolute -bottom-1 left-0 right-0 h-[1px] bg-white"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </motion.button>
                        ))}
                    </div>
                </div>

                {/* Projects Grid - Responsive columns */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={`${activeCategory}-${currentPage}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                    >
                        {displayedProjects.map((project, index) => (
                            <motion.div 
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ 
                                    opacity: 1, 
                                    y: 0,
                                    transition: { delay: index * 0.1 }
                                }}
                                className="group bg-neutral-900/50 backdrop-blur-sm rounded-lg md:rounded-2xl overflow-hidden border border-white/5 hover:border-white/20 transition-colors duration-300"
                            >
                                {/* Image Container */}
                                <div className="relative overflow-hidden">
                                    <div className="relative h-[200px] sm:h-[250px] md:h-[300px] overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                    </div>
                                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1.5 text-sm">
                                        <span className="text-green-400">
                                            ROI {project.roi}
                                        </span>
                                    </div>
                                </div>

                                {/* Project Details */}
                                <div className="p-4 sm:p-5 md:p-6">
                                    <div className="mb-4">
                                        <h3 className="text-xl md:text-2xl font-light mb-2">{project.title}</h3>
                                        <p className="text-sm md:text-base text-neutral-400">{project.location}</p>
                                    </div>

                                    <div className="grid grid-cols-3 gap-3 md:gap-4 border-t border-neutral-800 pt-4 md:pt-6">
                                        {project.metrics.map((metric, index) => (
                                            <div key={index} className="text-center">
                                                <span className="block text-[10px] md:text-xs text-neutral-500 uppercase mb-1">
                                                    {metric.label}
                                                </span>
                                                <span className="text-sm md:text-lg font-light">
                                                    {metric.value}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-4 md:mt-6 flex justify-between items-center border-t border-neutral-800 pt-4">
                                        <div>
                                            <span className="text-[10px] md:text-xs text-neutral-500 block mb-1">Investment</span>
                                            <span className="text-lg md:text-xl font-light">{project.totalInvestment}</span>
                                        </div>
                                        <div>
                                            <span className="text-[10px] md:text-xs text-neutral-500 block mb-1">Period</span>
                                            <span className="text-lg md:text-xl font-light">{project.investmentPeriod}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Controls - Adjusted for mobile */}
                <div className="flex justify-between mt-8 md:mt-16">
                    <motion.button
                        onClick={prevPage}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group flex items-center space-x-2 md:space-x-4 relative px-4 md:px-6 py-2 md:py-3"
                    >
                        <div className="absolute inset-0 bg-white/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right"></div>
                        <div className="h-[1px] w-6 md:w-10 bg-white/20 group-hover:bg-white/50 transition-colors duration-300"></div>
                        <span className="relative z-10 text-xs md:text-sm tracking-[0.2em] text-white/50 group-hover:text-white transition-colors duration-300">PREV</span>
                    </motion.button>
                    <motion.button
                        onClick={nextPage}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group flex items-center space-x-2 md:space-x-4 relative px-4 md:px-6 py-2 md:py-3"
                    >
                        <div className="absolute inset-0 bg-white/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                        <span className="relative z-10 text-xs md:text-sm tracking-[0.2em] text-white/50 group-hover:text-white transition-colors duration-300">NEXT</span>
                        <div className="h-[1px] w-6 md:w-10 bg-white/20 group-hover:bg-white/50 transition-colors duration-300"></div>
                    </motion.button>
                </div>
            </div>
        </section>
    );
};

export default SuccessStories;