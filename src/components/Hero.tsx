import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });

      tl.from(".hero-badge", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      })
        .from(
          ".hero-title",
          {
            y: 80,
            opacity: 0,
            duration: 1,
            ease: "power4.out",
          },
          "-=0.2"
        )
        .from(
          ".hero-subtitle",
          {
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .from(
          ".hero-cta",
          {
            y: 30,
            opacity: 0,
            stagger: 0.15,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.3"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="inicio"
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="./1.jpg"
          alt="Transporte premium"
          className="w-full h-full object-cover scale-105"
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-linear-to-r from-blue-950 via-blue-900/80 to-transparent" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col justify-center items-center text-center">
        <div className="max-w-3xl  text-white">
          {/* Badge */}
          <div className="hero-badge inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-semibold text-blue-100">
            Transporte terrestre premium
          </div>

          {/* Title */}
          <h1 className="hero-title text-6xl md:text-8xl font-extrabold leading-[0.95] tracking-tight mb-8">
            Viaja con
            <br />
            <span className="text-blue-400">excelencia real</span>
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle text-xl md:text-2xl text-blue-100/90 max-w-xl mb-12 leading-relaxed">
            Seguridad, confort y puntualidad para quienes no negocian calidad
            en cada kilómetro.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="hero-cta bg-white text-blue-950 px-10 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all">
              Ver destinos
            </button>
            <button className="hero-cta bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all">
              Conocer la flota
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70 text-sm tracking-wide">
        Desliza para descubrir
      </div>
    </section>
  );
};

export default Hero;
