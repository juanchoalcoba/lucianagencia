import { motion, AnimatePresence } from "framer-motion";
import { Bus, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar2 = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* Glass background */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-xl border-b border-blue-200/30" />

      <div className="relative mx-auto w-full max-w-[1280px] px-6">
        <div className="flex items-center justify-between h-16">
          {/* LOGO */}
          <Link
            to="/"
            className="flex items-center gap-2 font-black text-blue-900 tracking-tight"
          >
            <div className="p-2 rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/30">
              <Bus className="w-5 h-5" />
            </div>
            <span className="text-lg">LUCIAN</span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-10 text-sm font-semibold text-slate-700">
            {[
              { label: "Inicio", to: "/" },
              { label: "Nosotros", to: "#nosotros" },
              { label: "Servicios", to: "/services" },
              { label: "Contacto", to: "#contact" },
            ].map((item, i) => (
              <Link
                key={i}
                to={item.to}
                className="relative group transition-colors hover:text-blue-600"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-blue-600 transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* CTA DESKTOP */}
          <div className="hidden md:block">
            <Link
              to="/services"
              className="px-5 py-2 rounded-xl bg-blue-600 text-white text-sm font-bold shadow-lg shadow-blue-600/30 hover:bg-blue-700 transition-all"
            >
              Reservar
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-xl bg-blue-600 text-white shadow-lg"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-b border-blue-100"
          >
            <div className="px-6 py-6 space-y-4 text-slate-700 font-semibold">
              {["Inicio", "Nosotros", "Servicios", "Contacto"].map(
                (item, i) => (
                  <a
                    key={i}
                    href="#"
                    className="block py-2 text-lg hover:text-blue-600 transition-colors"
                  >
                    {item}
                  </a>
                )
              )}

              <a
                href="#contact"
                className="block mt-4 text-center px-6 py-3 rounded-xl bg-blue-600 text-white font-bold shadow-lg shadow-blue-600/30"
              >
                Reservar ahora
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
