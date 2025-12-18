import { motion } from "framer-motion";
import { ShieldCheck, Clock, MapPin, Star } from "lucide-react";

export const About2 = () => {
  const items = [
    {
      icon: ShieldCheck,
      title: "Seguridad Operativa",
      text: "Unidades monitoreadas, conductores certificados y protocolos activos en cada trayecto.",
    },
    {
      icon: Clock,
      title: "Puntualidad Garantizada",
      text: "Planificación inteligente de rutas y compromiso absoluto con los horarios.",
    },
    {
      icon: MapPin,
      title: "Cobertura Estratégica",
      text: "Conectamos destinos clave con eficiencia, comodidad y continuidad.",
    },
  ];

  return (
    <section
      id="about"
      /* CAMBIO: pt-32 para dar aire arriba y pb-4 para cerrar bien abajo */
      className="relative pt-32 pb-4 bg-linear-to-br from-slate-800 via-black to-slate-800 text-white overflow-hidden"
    >
      {/* Decorative blur */}
      <div className="absolute -top-40 -right-40 w-125 h-125 bg-blue-900/30 rounded-full blur-[120px]" />
      <div className="absolute -bottom-40 -left-40 w-125 h-125 bg-cyan-500/20 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 text-sm tracking-wide">
            <Star className="w-4 h-4 text-yellow-400" />
            Experiencia que se nota
          </span>

          <h2 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">
            Más que transporte, <br />
            <span className="text-cyan-200">confianza en movimiento</span>
          </h2>

          <p className="mt-6 text-lg text-blue-100">
            En LUCIAN combinamos tecnología, experiencia y atención al detalle
            para ofrecer un servicio que cumple, responde y supera expectativas.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-20 grid md:grid-cols-3 gap-10">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative p-10 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl"
            >
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 flex items-center justify-center">
                <item.icon className="w-7 h-7 text-cyan-100" />
              </div>

              <h3 className="mt-8 text-2xl font-bold">{item.title}</h3>

              <p className="mt-4 text-blue-100 leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* IMAGEN FINAL AJUSTADA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center items-center mt-12 overflow-hidden"
        >
          <img
            src="./ultima.png"
            alt="Lucian Logo"
            className="
              object-contain
              /* Altura controlada: más pequeña en móvil para no generar scroll innecesario */
              h-64 sm:h-80 md:h-96 lg:h-110 
              block
              filter
              drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]
            "
          />
        </motion.div>
      </div>
    </section>
  );
};