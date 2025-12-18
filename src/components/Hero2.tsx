import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero2 = () => {
  return (
    <section
      id="hero"
      className="
        relative overflow-hidden mt-16
        h-auto py-12
        lg:min-h-[85vh] lg:h-screen lg:flex lg:items-center
      "
    >
      {/* IMAGEN DE FONDO FULL */}
      <div className="absolute inset-0 z-0">
        <img
          src="/fondo.jpg"
          alt="Fondo Lucian"
          className="w-full h-full object-cover object-center"
        />

        {/* OVERLAYS */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-slate-900/70 to-blue-900/40" />
      </div>

      {/* CONTENIDO */}
      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

          {/* LADO IZQUIERDO: TEXTO */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-bold mb-4 tracking-wider uppercase">
              Transporte Profesional
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              Movemos personas. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-300 to-blue-300">
                Conectamos destinos.
              </span>
            </h1>

            <p className="mt-4 text-sm md:text-lg text-slate-300 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Seguridad y confort en cada trayecto. LUCIAN es la agencia de
              ómnibus que prioriza tu tiempo y comodidad.
            </p>

            {/* BOTONES */}
            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
              <Link
                to="/services"
                className="group px-6 py-3 rounded-xl bg-blue-800 text-white font-bold shadow-lg shadow-blue-600/30 hover:bg-blue-700 transition-all flex items-center gap-2 text-sm"
              >
                Ver servicios
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/reservas"
                className="px-6 py-3 rounded-xl border border-slate-700 text-slate-300 font-bold hover:bg-white hover:text-black transition-all text-sm"
              >
                Reservas
              </Link>
            </div>

            {/* REDES */}
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-4">
              {[FaFacebookF, FaInstagram, FaWhatsapp].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-slate-500 hover:text-blue-400 transition-colors text-lg"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </motion.div>

          {/* LADO DERECHO: IMAGEN ORIGINAL (SIN CAMBIOS) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[45%] relative"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

              <img
                src="/1.jpg"
                alt="Lucian Bus"
                className="relative z-10 w-full h-[250px] sm:h-[350px] lg:h-[360px] object-cover rounded-[2rem] shadow-2xl"
              />

              <div className="absolute -bottom-4 -right-2 z-20 bg-slate-900 border border-slate-800 p-4 rounded-2xl shadow-2xl">
                <p className="text-blue-400 font-black text-lg leading-none">
                  100%
                </p>
                <p className="text-slate-500 text-[10px] uppercase font-bold tracking-tighter">
                  Seguridad
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
