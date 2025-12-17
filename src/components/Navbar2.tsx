import { motion } from "framer-motion";
import { Bus, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

/* =========================
NAVBAR
========================= */
export const Navbar2 = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur border-b border-blue-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2 text-blue-900 font-extrabold text-xl">
          <Bus className="w-6 h-6" /> LUCIAN
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link to="/" className="hover:text-blue-600">
            Inicio
          </Link>
          <a href="#nosotros" className="hover:text-blue-600">
            Nosotros
          </a>
          <Link to="/services" className="hover:text-blue-600">
            Servicios
          </Link>
          <a href="#contact" className="hover:text-blue-600">
            Contacto
          </a>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          className="md:hidden bg-white px-6 pb-6 space-y-4"
        >
          <a href="#hero" className="block">
            Inicio
          </a>
          <a href="#about" className="block">
            Nosotros
          </a>
          <a href="#services" className="block">
            Servicios
          </a>
          <a href="#contact" className="block">
            Contacto
          </a>
        </motion.div>
      )}
    </nav>
  );
};
