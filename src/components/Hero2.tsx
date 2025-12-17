import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero2 = () => {
  return (
    <section
      id="hero"
      className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden bg-slate-950 mt-16" 
      /* h-[80vh] limita el alto, mt-16 deja espacio para el navbar */
    >
      {/* Fondo sutil */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          
          {/* LADO IZQUIERDO: TEXTO */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-4 tracking-wider uppercase">
              Transporte Profesional
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              Movemos personas. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-100">
                Conectamos destinos.
              </span>
            </h1>

            <p className="mt-4 text-base md:text-lg text-slate-400 leading-relaxed max-w-lg">
              Seguridad y confort en cada trayecto. LUCIAN es la agencia de ómnibus 
              que prioriza tu tiempo y comodidad.
            </p>

            {/* BOTONES */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/services"
                className="group px-6 py-3 rounded-xl bg-blue-600 text-white font-bold shadow-lg shadow-blue-600/30 hover:bg-blue-700 transition-all flex items-center gap-2 text-sm"
              >
                Ver servicios
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <button className="px-6 py-3 rounded-xl border border-slate-700 text-slate-300 font-bold hover:bg-white/5 transition-all text-sm">
                Contactar
              </button>
            </div>

            {/* REDES SOCIALES MÁS PEQUEÑAS */}
            <div className="mt-8 flex items-center gap-4">
              <div className="flex gap-4">
                {[
                  { icon: <FaFacebookF />, link: "#" },
                  { icon: <FaInstagram />, link: "#" },
                  { icon: <FaWhatsapp />, link: "#" },
                ].map((social, i) => (
                  <a 
                    key={i}
                    href={social.link}
                    className="text-slate-500 hover:text-blue-400 transition-colors text-lg"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* LADO DERECHO: IMAGEN MÁS COMPACTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[45%] relative"
          >
            <div className="relative group">
              {/* Resplandor de fondo para la imagen */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              
              <img
                src="/1.jpg"
                alt="Lucian Bus"
                className="relative z-10 w-full h-[350px] lg:h-[450px] object-cover rounded-[2rem] shadow-2xl"
              />
              
              {/* Tarjeta flotante más discreta */}
              <div className="absolute -bottom-4 -right-4 z-20 bg-slate-900 border border-slate-800 p-4 rounded-2xl shadow-2xl hidden md:block">
                <p className="text-blue-400 font-black text-lg leading-none">100%</p>
                <p className="text-slate-500 text-[10px] uppercase font-bold tracking-tighter">Seguridad</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};