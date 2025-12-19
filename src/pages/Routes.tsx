import { motion } from "framer-motion";
import {  Clock } from "lucide-react";

type RouteFrequency = {
  day: string;
  time: string;
};

type Route = {
  id: number;
  origin: string;
  destination: string;
  duration: string;
  frequency: RouteFrequency[];
};

const ROUTES: Route[] = [
  {
    id: 1,
    origin: "Durazno",
    destination: "BsAs",
    duration: "8h aprox.",
    frequency: [
      { day: "Lunes", time: "22:00" },
      { day: "Sábados", time: "21:00" },
    ],
  },
  {
    id: 2,
    origin: "Durazno",
    destination: "Asunción",
    duration: "10h aprox.",
    frequency: [
      { day: "Martes", time: "20:30" },
    ],
  },
  {
    id: 3,
    origin: "Durazno",
    destination: "Florianópolis",
    duration: "14h aprox.",
    frequency: [
      { day: "viernes", time: "05:00" },
    ],
  },
  {
    id: 4,
    origin: "Durazno",
    destination: "Bariliche",
    duration: "14h aprox.",
    frequency: [
      { day: "martes", time: "05:00" },
    ],
  },
];

 const Rutas = () => {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* BACKGROUND CINEMATOGRÁFICO */}
      <div className="absolute inset-0 z-0">
        <img
          src="/1.jpg"
          alt="Rutas Lucian"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-325 mx-auto px-6 py-20">
        
        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-blue-400 uppercase tracking-widest text-xs mb-4">
            Rutas Activas
          </p>
          <h1 className="text-4xl md:text-6xl font-black leading-tight">
            El viaje comienza <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-slate-200 to-blue-400">
              mucho antes de subir.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-slate-300 text-lg">
            Conectamos ciudades estratégicas con salidas programadas,
            comodidad premium y máxima seguridad.
          </p>
        </motion.div>

        {/* MAPA INTERACTIVO (SIMULADO) */}
        

        {/* LISTADO + FRECUENCIAS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {ROUTES.map((route) => (
            <motion.div
              key={route.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl bg-linear-to-br from-slate-900/80 to-black/80 border border-white/10 p-8 shadow-xl"
            >
              <h3 className="text-2xl font-black mb-2">
                {route.origin} – {route.destination}
              </h3>

              <p className="text-slate-400 text-sm mb-6">
                Viaje directo · Servicio premium
              </p>

              <div className="space-y-4">
                {route.frequency.map((f, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between rounded-xl bg-black/40 px-5 py-3"
                  >
                    <div className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-blue-400" />
                      <span className="text-sm">{f.day}</span>
                    </div>
                    <span className="font-bold text-blue-400">
                      {f.time}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Rutas