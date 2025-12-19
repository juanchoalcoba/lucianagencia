import { motion } from 'framer-motion';
import { Clock, Star, ArrowUpRight, Bus } from 'lucide-react';

// Definición de la interfaz para TypeScript
interface Destination {
  id: number;
  title: string;
  location: string;
  duration: string;
  price: string;
  rating: number;
  image: string;
  color: string;
  category: string;
}

// Datos adaptados a la región de Durazno, Uruguay
const destinations: Destination[] = [
  {
    id: 1,
    title: "Florianópolis Mágico",
    location: "Brasil",
    duration: "7 Noches",
    price: "$550",
    rating: 4.9,
    image: "./floripa.jpg",
    color: "bg-emerald-500",
    category: "Playa"
  },
  {
    id: 2,
    title: "Bariloche Invierno",
    location: "Argentina",
    duration: "6 Noches",
    price: "$480",
    rating: 4.8,
    image: "./bari.jpg",
    color: "bg-sky-500",
    category: "Aventura"
  },
  {
    id: 3,
    title: "Termas del Daymán",
    location: "Salto, Uruguay",
    duration: "3 Días",
    price: "$180",
    rating: 4.7,
    image: "./termas.webp",
    color: "bg-orange-500",
    category: "Relax"
  },
  { 
    id: 4,
    title: "Buenos Aires City",
    location: "Argentina",
    duration: "3 Noches",
    price: "$290",
    rating: 5.0,
    image: "./bsas.jpg",
    color: "bg-indigo-600",
    category: "Escapada"
  }
];

const DestinationCard = ({ dest, index }: { dest: Destination, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white rounded-[2.5rem] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full"
    >
      {/* Contenedor de Imagen */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={dest.image} 
          alt={dest.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Badge de Localización */}
        <div className="absolute top-5 left-5">
          <span className="bg-white/95 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-sm">
            {dest.location}
          </span>
        </div>
        {/* Overlay gradiente suave al hacer hover */}
        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Cuerpo de la Tarjeta */}
      <div className="p-7 flex flex-col grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-black text-gray-800 leading-tight tracking-tight">
            {dest.title}
          </h3>
          <div className="flex items-center gap-1 text-amber-500 bg-amber-50 px-2.5 py-1 rounded-xl">
            <Star size={12} fill="currentColor" />
            <span className="text-xs font-black">{dest.rating}</span>
          </div>
        </div>

        {/* Info Técnica Corregida (Diseño Prolijo) */}
        <div className="flex flex-wrap gap-2 mb-8">
          <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-xl text-slate-600">
            <Clock size={14} className="text-indigo-500" />
            <span className="text-[11px] font-bold uppercase tracking-tight">{dest.duration}</span>
          </div>
          <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-xl text-slate-600">
            <Bus size={14} className="text-indigo-500" />
            <span className="text-[11px] font-bold uppercase tracking-tight">Bus Semi-Cama</span>
          </div>
        </div>

        {/* Footer con Precio y Botón */}
        <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.15em] leading-none mb-1.5">Desde Durazno</span>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-black text-gray-900 tracking-tighter">{dest.price}</span>
              <span className="text-[10px] font-bold text-gray-400 uppercase">USD</span>
            </div>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className={`${dest.color} w-12 h-12 rounded-2xl text-white shadow-lg flex items-center justify-center transition-all shadow-indigo-100 group-hover:shadow-indigo-200`}
          >
            <ArrowUpRight size={24} strokeWidth={2.5} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

const DestinationsGrid = () => {
  return (
    <section className="py-24 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        {/* Cabecera de la Sección */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="text-center md:text-left">
            <span className="text-indigo-300 font-black tracking-[0.25em] uppercase text-[10px] mb-4 block border-l-4 border-indigo-600 pl-4 ml-2 md:ml-0">
              Temporada 2025 / 2026
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-200 tracking-tighter leading-[0.9] mb-4">
              Destinos <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-purple-200">Premium</span>
            </h2>
          </div>
          <p className="text-slate-300 max-w-sm font-medium text-lg leading-relaxed text-center md:text-right italic">
            "Viajá seguro, viajá con Lucian. Salidas directas desde el centro del país."
          </p>
        </div>

        {/* Grid de Destinos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((dest, index) => (
            <DestinationCard key={dest.id} dest={dest} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsGrid;