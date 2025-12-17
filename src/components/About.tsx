import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldCheck, Clock } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  useEffect(() => {
    gsap.to(".about-image", {
      scrollTrigger: {
        trigger: ".about-section",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
      y: -50,
    });
  }, []);

  return (
    <section id="nosotros" className="about-section py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="about-image relative">
          <img
            src="1.jpg"
            className="rounded-2xl shadow-2xl"
          />
        </div>

        <div>
          <h2 className="text-4xl font-bold text-blue-900 mb-6">
            Más que un viaje, una experiencia
          </h2>

          <div className="grid grid-cols-2 gap-6">
            <div className="flex gap-4">
              <ShieldCheck className="text-blue-500" />
              <div>Seguridad 24/7</div>
            </div>
            <div className="flex gap-4">
              <Clock className="text-blue-500" />
              <div>Puntualidad</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
