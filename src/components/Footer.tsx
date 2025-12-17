import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";



const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="text-2xl font-black text-blue-900">
          LUCIAN.
        </div>

        <p className="text-slate-500 text-npm sm">
          © 2024 Transporte Lucian. Todos los derechos reservados.
        </p>

        <div className="flex gap-4">
          <FaFacebookF className="text-blue-900 cursor-pointer hover:text-blue-500 transition-colors" />
          <FaInstagram className="text-blue-900 cursor-pointer hover:text-blue-500 transition-colors" />
          <FaWhatsapp className="text-blue-900 cursor-pointer hover:text-blue-500 transition-colors" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
