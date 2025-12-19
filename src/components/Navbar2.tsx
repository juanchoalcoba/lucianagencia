import { motion, AnimatePresence } from "framer-motion";
import { Bus, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar2 = () => {
  const [open, setOpen] = useState(false);

  // Definimos los links una sola vez para evitar errores
  const navLinks = [
    { label: "Inicio", to: "/" },
    { label: "Destinos", to: "/destinos" },
    { label: "Servicios", to: "/services" },
    { label: "Rutas", to: "/rutas" }, // Cambiado a ruta si usas router, o "#contact"
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* Glass background */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-xl border-b border-blue-200/30" />

      <div className="relative mx-auto w-full max-w-7xl px-6">
        <div className="flex items-center justify-between h-16">
          {/* LOGO */}
          <Link
            to="/"
            className="flex items-center gap-2 font-black text-blue-900 tracking-tight"
          >
            <div className="p-2 rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/30">
              <Bus className="w-5 h-5" />
            </div>
            <span className="text-lg tracking-tighter">LUCIAN</span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-10 text-sm font-semibold text-slate-700">
            {navLinks.map((item, i) => (
              <Link
                key={i}
                to={item.to}
                className="relative group transition-colors hover:text-blue-600"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-blue-600 transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* CTA DESKTOP */}
          <div className="hidden md:block">
            <Link
              to="/reservas"
              className="px-5 py-2 rounded-xl bg-blue-800 text-white text-sm font-bold shadow-lg shadow-blue-600/30 hover:bg-blue-700 transition-all"
            >
              Reservar
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-xl bg-blue-600 text-white shadow-lg transition-transform active:scale-90"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white/98 backdrop-blur-2xl border-b border-blue-100 overflow-hidden"
          >
            <div className="px-6 py-8 space-y-4 text-slate-700 font-semibold">
              {navLinks.map((item, i) => (
                <Link
                  key={i}
                  to={item.to} // <--- AQUÍ ESTABA EL ERROR, ahora usa item.to
                  onClick={() => setOpen(false)} // Cierra el menú al hacer click
                  className="block py-3 text-xl tracking-tight hover:text-blue-600 transition-colors border-b border-slate-50 last:border-0"
                >
                  {item.label}
                </Link>
              ))}

              <Link
                to="/reservas"
                onClick={() => setOpen(false)}
                className="block mt-6 text-center px-6 py-4 rounded-2xl bg-blue-600 text-white font-extrabold shadow-xl shadow-blue-600/30 active:scale-95 transition-transform"
              >
                Reservar ahora
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};