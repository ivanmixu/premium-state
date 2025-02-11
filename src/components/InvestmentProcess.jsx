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

    // Limpiar cualquier ScrollTrigger existente
    ScrollTrigger.getAll().forEach(t => t.kill());

    // Configuración inicial
    gsap.set(processElements, {
      opacity: 0,
      display: 'none'
    });
    gsap.set(processElements[0], {
      opacity: 0,
      display: 'block'
    });

    // Timeline principal
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

    // Añadir labels para el snap
    processes.forEach((_, i) => {
      tl.addLabel(`step${i}`, i);
    });

    // Animaciones para cada proceso
    Array.from(processElements).forEach((process, i) => {
      // Al inicio de cada sección
      tl.to(process, {
        display: 'block',
        duration: 0.01
      }, `step${i}`);

      // Fade in
      tl.to(process, {
        opacity: 1,
        duration: 0.5
      }, `step${i}+=0.01`);

      // Si no es el último, configurar su salida
      if (i !== processElements.length - 1) {
        // Fade out
        tl.to(process, {
          opacity: 0,
          duration: 0.5
        }, `step${i+1}-=0.5`);

        // Ocultar completamente
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
    <section 
      ref={sectionRef}
      className="relative min-h-screen bg-black overflow-hidden"
    >
      {/* Header fijo */}
      <div className="absolute top-0 left-0 p-8 md:p-16 lg:p-24 z-10">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-sm text-white/60 tracking-[0.3em]">02</span>
          <div className="w-12 h-[1px] bg-white/20"></div>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-light tracking-wide mb-6">
          Investment
          <br />
          Process
        </h2>
        <p className="text-white/60 text-base md:text-lg font-light max-w-md">
          A structured approach to luxury real estate investment, ensuring precision and excellence at every step.
        </p>
      </div>

      {/* Contenedor de procesos */}
      <div 
        ref={processesRef}
        className="min-h-screen flex flex-col justify-center items-center relative"
      >
        {processes.map((process) => (
          <div 
            key={process.id}
            className="process-item absolute w-full max-w-4xl px-8 md:px-16 lg:px-0 left-0 right-0 mx-auto"
          >
            <div className="relative">
              {/* Número grande */}
              <div className="absolute -left-8 md:-left-24 lg:-left-40 top-0 opacity-10">
                <span className="text-[120px] md:text-[180px] lg:text-[240px] text-white font-extralight">
                  {process.id}
                </span>
              </div>

              {/* Contenido */}
              <div className="ml-24 md:ml-32 lg:ml-40">
                <span className="text-sm text-white/40 tracking-[0.3em] block mb-4">
                  {process.category}
                </span>
                <h3 className="text-3xl md:text-4xl text-white font-light mb-6">
                  {process.title}
                </h3>
                <p className="text-white/60 text-lg mb-12 max-w-2xl">
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
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Indicadores de progreso (opcional) */}
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