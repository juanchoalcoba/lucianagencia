import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero2 = () => {
  return (
    <section
      id="hero"
      className="relative 
    /* Móvil: altura automática con espacio arriba y abajo */
    h-auto py-12 
    /* Desktop: Altura mínima para que llene la pantalla y centrado vertical */
    lg:min-h-[85vh] lg:h-screen lg:flex lg:items-center 
    overflow-hidden bg-linear-to-br from-slate-800 via-black to-slate-800 mt-16"
    >
      {/* Fondo sutil */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 relative z-10">

        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* LADO IZQUIERDO: TEXTO */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            /* CAMBIO: Centrado en móvil, izquierda en desktop */
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-bold mb-4 tracking-wider uppercase">
              Transporte Profesional
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              Movemos personas. <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-slate-300 to-blue-300">
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

              <Link to="/reservas" className="px-6 py-3 rounded-xl border border-slate-700 cursor-pointer text-slate-300 font-bold hover:bg-white hover:text-black transition-all text-sm">
                Reservas
              </Link>
            </div>

            {/* REDES SOCIALES */}
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-4">
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

          {/* LADO DERECHO: IMAGEN */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[45%] relative"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-cyan-500 rounded-4xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

              <img
                src="/1.jpg"
                alt="Lucian Bus"
                /* CAMBIO: Altura ajustable en móvil para que no sea gigante */
                className="relative z-10 w-full h-62.5 sm:h-87.5 lg:h-90 object-cover rounded-4xl shadow-2xl"
              />

              {/* Tarjeta flotante (la mantenemos oculta en móviles muy pequeños si estorba) */}
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




