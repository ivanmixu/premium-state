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

    const projectsPerPage = 3;
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
        <section className="bg-black text-white py-24 px-4 md:px-12 relative overflow-hidden">
            {/* Fondo geométrico */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Líneas diagonales */}
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute h-[1px] w-full bg-white/5 transform -rotate-45"
                        style={{ top: `${i * 10}%` }}
                    />
                ))}
                {/* Líneas verticales */}
                <div className="absolute left-1/4 top-0 bottom-0 w-[1px] bg-white/5"></div>
                <div className="absolute right-1/4 top-0 bottom-0 w-[1px] bg-white/5"></div>
                {/* Círculo decorativo */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-b from-white/5 to-transparent rounded-full blur-3xl -mr-48 -mt-48"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="mb-16">
                    <div className="w-24 h-[1px] bg-white/20 mb-8"></div>
                    <h2 className="text-6xl font-extralight tracking-tight mb-6">
                        Investment Success Stories
                    </h2>
                    <p className="text-neutral-400 text-xl max-w-3xl">
                        Transformative investments that drive sustainable growth, create value, and 
                        deliver exceptional returns across diverse real estate sectors.
                    </p>
                </div>

                {/* Category Navigation */}
                <div className="flex space-x-8 mb-16">
                    {categories.map((cat) => (
                        <motion.button
                            key={cat.id}
                            onClick={() => {
                                setActiveCategory(cat.id);
                                setCurrentPage(0);
                            }}
                            className={`
                                text-sm tracking-wider relative py-2
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

                {/* Projects Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={`${activeCategory}-${currentPage}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="grid grid-cols-3 gap-8"
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
                                className="group bg-neutral-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/5 hover:border-white/20 transition-colors duration-300"
                            >
                                {/* Image Container */}
                                <div className="relative overflow-hidden">
                                    <div className="relative h-[300px] overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                    </div>
                                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm rounded-full px-4 py-2">
                                        <span className="text-green-400">
                                            ROI {project.roi}
                                        </span>
                                    </div>
                                </div>

                                {/* Project Details */}
                                <div className="p-6">
                                    <div className="mb-4">
                                        <h3 className="text-2xl font-light mb-2">{project.title}</h3>
                                        <p className="text-neutral-400">{project.location}</p>
                                    </div>

                                    <div className="grid grid-cols-3 gap-4 border-t border-neutral-800 pt-6">
                                        {project.metrics.map((metric, index) => (
                                            <div key={index} className="text-center">
                                                <span className="block text-xs text-neutral-500 uppercase mb-1">
                                                    {metric.label}
                                                </span>
                                                <span className="text-lg font-light">
                                                    {metric.value}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-6 flex justify-between items-center border-t border-neutral-800 pt-4">
                                        <div>
                                            <span className="text-xs text-neutral-500 block mb-1">Total Investment</span>
                                            <span className="text-xl font-light">{project.totalInvestment}</span>
                                        </div>
                                        <div>
                                            <span className="text-xs text-neutral-500 block mb-1">Investment Period</span>
                                            <span className="text-xl font-light">{project.investmentPeriod}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Controls */}
                <div className="flex justify-between mt-16">
                    <motion.button
                        onClick={prevPage}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group flex items-center space-x-4 relative px-6 py-3"
                    >
                        <div className="absolute inset-0 bg-white/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right"></div>
                        <div className="h-[1px] w-10 bg-white/20 group-hover:bg-white/50 transition-colors duration-300"></div>
                        <span className="relative z-10 text-sm tracking-[0.2em] text-white/50 group-hover:text-white transition-colors duration-300">PREV</span>
                    </motion.button>
                    <motion.button
                        onClick={nextPage}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group flex items-center space-x-4 relative px-6 py-3"
                    >
                        <div className="absolute inset-0 bg-white/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                        <span className="relative z-10 text-sm tracking-[0.2em] text-white/50 group-hover:text-white transition-colors duration-300">NEXT</span>
                        <div className="h-[1px] w-10 bg-white/20 group-hover:bg-white/50 transition-colors duration-300"></div>
                    </motion.button>
                </div>
            </div>
        </section>
    );
};

export default SuccessStories;