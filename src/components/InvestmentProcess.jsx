import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const InvestmentProcess = () => {
  const sectionRef = useRef(null);
  const processesRef = useRef(null);

  const processes = [
    {
      id: "01",
      category: "CONSULTATION",
      title: "Initial Assessment",
      description: "Understanding your investment goals and preferences through in-depth consultation.",
      items: [
        "Investment profile analysis",
        "Portfolio objectives definition",
        "Risk assessment"
      ]
    },
    {
      id: "02",
      category: "CURATION",
      title: "Property Selection",
      description: "Curating a selection of premium properties that align with your investment criteria.",
      items: [
        "Market research",
        "Property evaluation",
        "ROI analysis"
      ]
    },
    {
      id: "03",
      category: "VERIFICATION",
      title: "Due Diligence",
      description: "Comprehensive analysis and verification of all investment aspects.",
      items: [
        "Legal verification",
        "Financial assessment",
        "Market validation"
      ]
    },
    {
      id: "04",
      category: "EXECUTION",
      title: "Investment Completion",
      description: "Seamless execution of the investment process from start to finish.",
      items: [
        "Transaction management",
        "Documentation handling",
        "Post-sale support"
      ]
    }
  ];

  useEffect(() => {
    const container = sectionRef.current;
    const processElements = processesRef.current.children;

    gsap.set(processElements, {
      opacity: 0,
      display: 'none'
    });
    gsap.set(processElements[0], {
      opacity: 0,
      display: 'block'
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        pin: true,
        start: "top top",
        end: "+=300%",
        scrub: 0.5,
        snap: {
          snapTo: "labelsDirectional",
          duration: { min: 0.3, max: 0.6 },
          ease: "power1.inOut"
        }
      }
    });

    processes.forEach((_, i) => {
      tl.addLabel(`step${i}`, i);
    });

    Array.from(processElements).forEach((process, i) => {
      tl.to(process, {
        display: 'block',
        duration: 0.01
      }, `step${i}`);

      tl.to(process, {
        opacity: 1,
        duration: 0.5
      }, `step${i}+=0.01`);

      if (i !== processElements.length - 1) {
        tl.to(process, {
          opacity: 0,
          duration: 0.5
        }, `step${i+1}-=0.5`);

        tl.to(process, {
          display: 'none',
          duration: 0.01
        }, `step${i+1}`);
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-black text-white min-h-screen">
      {/* Header fijo */}
      <div className="absolute top-0 left-0 w-full p-8 md:p-16 lg:p-24 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-sm tracking-[0.4em] text-white/60">02</span>
            <div className="w-12 h-[1px] bg-white/20"></div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide mb-6">
            Investment
            <br />
            Process
          </h2>
          <p className="text-white/60 text-base md:text-lg font-light max-w-md">
            A structured approach to luxury real estate investment, ensuring precision and excellence at every step.
          </p>
        </div>
      </div>

      {/* Contenedor de procesos */}
      <div 
        ref={processesRef}
        className="min-h-screen flex flex-col justify-center items-center"
      >
        {processes.map((process) => (
          <div 
            key={process.id}
            className="process-item absolute w-full max-w-4xl px-4 md:px-8 lg:px-0 mx-auto"
          >
            <div className="relative">
              {/* Número grande */}
              <div className="absolute -left-4 md:-left-24 lg:-left-40 top-0 opacity-10">
                <span className="text-[120px] md:text-[180px] lg:text-[240px] text-white font-extralight">
                  {process.id}
                </span>
              </div>

              {/* Contenido */}
              <div className="relative ml-20 md:ml-32 lg:ml-40 pt-16 md:pt-24">
                <span className="text-sm tracking-[0.3em] text-white/40 block mb-4">
                  {process.category}
                </span>
                <h3 className="text-2xl md:text-3xl lg:text-4xl text-white font-light mb-6">
                  {process.title}
                </h3>
                <p className="text-white/60 text-base md:text-lg mb-12 max-w-2xl">
                  {process.description}
                </p>

                {/* Lista de items */}
                <div className="space-y-4">
                  {process.items.map((item, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center gap-4 text-white/80"
                    >
                      <div className="w-8 h-[1px] bg-white/20"></div>
                      <span className="text-sm md:text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Indicadores de progreso */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {processes.map((_, idx) => (
          <div
            key={idx}
            className="w-2 h-2 rounded-full bg-white/20"
          ></div>
        ))}
      </div>
    </section>
  );
};

export default InvestmentProcess;