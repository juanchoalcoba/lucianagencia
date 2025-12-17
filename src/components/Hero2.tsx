import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Hero2 = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Imagen de fondo */}
      <motion.img
        src="/1.jpg"
        alt="LUCIAN buses"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full object-cover opacity-90"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-blue-900/70 to-blue-950/70" />

      {/* Contenido */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-6 text-white"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
          Movemos personas.
          <span className="block text-blue-200">
            Conectamos destinos.
          </span>
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-lg text-blue-100">
          LUCIAN es una agencia de ómnibus enfocada en seguridad,
          puntualidad y confort.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/services"
            className="px-8 py-4 rounded-2xl bg-white text-blue-700 font-semibold shadow-xl hover:scale-105 transition"
          >
            Ver servicios
          </Link>

          <button className="px-8 py-4 rounded-2xl border border-white/40 hover:bg-white/10 transition">
            Contactar
          </button>
        </div>

        {/* Social icons */}
        <div className="mt-10 flex justify-center gap-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white hover:scale-110 transition-all"
          >
            <FaFacebookF size={38} />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-orange-600 hover:scale-110 transition-all"
          >
            <FaInstagram size={30} />
          </a>

          <a
            href="https://wa.me/541112345678"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-green-400 hover:scale-110 transition-all"
          >
            <FaWhatsapp size={30} />
          </a>
        </div>
      </motion.div>
    </section>
  );
};
