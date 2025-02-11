import React from 'react';
import { motion } from 'framer-motion';

const MarketInsights = () => {
    const marketMetrics = [
        {
            title: "Market Growth",
            value: "8.4%",
            trend: "+12%",
            details: [
                { label: "Property Value", score: 92 },
                { label: "Market Demand", score: 87 },
                { label: "Investment Flow", score: 78 }
            ]
        },
        {
            title: "ROI Potential",
            value: "12.6%",
            trend: "+32%",
            details: [
                { label: "Rental Yield", score: 89 },
                { label: "Capital Growth", score: 91 },
                { label: "Risk Assessment", score: 85 }
            ]
        }
    ];

    const keyStats = [
        {
            label: "Investment Return",
            value: "$1.24M",
            // Usando diseños geométricos minimalistas en lugar de emojis
            icon: (
                <svg className="w-6 h-6 text-white/40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
            )
        },
        {
            label: "Market Share",
            value: "76%",
            icon: (
                <svg className="w-6 h-6 text-white/40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
                    <path strokeLinecap="round" strokeWidth="1.5" d="M12 2C6.48 2 2 6.48 2 12" />
                </svg>
            )
        },
        {
            label: "Growth Rate",
            value: "245%",
            icon: (
                <svg className="w-6 h-6 text-white/40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 20V4m0 0l7 7m-7-7l-7 7" />
                </svg>
            )
        },
        {
            label: "Performance Score",
            value: "92/100",
            icon: (
                <svg className="w-6 h-6 text-white/40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            )
        }
    ];

    return (
        <section className="bg-black text-white py-24 relative overflow-hidden">
            {/* Fondo geométrico */}
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
                {/* Header */}
                <div className="mb-16">
                    <div className="w-24 h-[1px] bg-white/20 mb-8"></div>
                    <h2 className="text-6xl font-extralight tracking-wider mb-6">
                        Market Insights
                    </h2>
                    <p className="text-gray-400 text-xl max-w-3xl">
                        Real-time analysis and trends from our active investments, showing consistent growth in key metrics that matter most.
                    </p>
                </div>

                {/* Métricas Principales */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {marketMetrics.map((metric, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="bg-neutral-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/5"
                        >
                            <div className="flex justify-between items-start mb-8">
                                <div>
                                    <h3 className="text-2xl font-light mb-2">{metric.title}</h3>
                                    <span className="text-5xl font-light">{metric.value}</span>
                                </div>
                                <span className="text-green-400 text-lg">{metric.trend}</span>
                            </div>
                            <div className="space-y-6">
                                {metric.details.map((detail, idx) => (
                                    <div key={idx} className="space-y-2">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-400">{detail.label}</span>
                                            <span className="text-white">{detail.score}%</span>
                                        </div>
                                        <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${detail.score}%` }}
                                                transition={{ duration: 1, delay: idx * 0.2 }}
                                                className="h-full bg-blue-500"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Estadísticas Clave */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {keyStats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative bg-neutral-900/50 backdrop-blur-sm rounded-xl p-8 border border-white/5 hover:border-white/20 transition-all duration-300"
                        >
                            <div className="flex items-start space-x-4">
                                <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors duration-300">
                                    {stat.icon}
                                </div>
                                <div>
                                    <div className="text-sm text-gray-400 mb-1">{stat.label}</div>
                                    <div className="text-3xl font-light">{stat.value}</div>
                                </div>
                            </div>
                            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-white/0 via-white/40 to-white/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MarketInsights;