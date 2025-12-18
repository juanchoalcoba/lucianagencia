import { motion } from "framer-motion";
import {
  Bus,
  Building2,
  Users,
  Map,
  CalendarCheck,
  Briefcase,
} from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Bus,
      title: "Traslados Ejecutivos",
      description:
        "Servicios puerta a puerta para empresas, ejecutivos y delegaciones, con puntualidad y confort garantizados.",
      points: [
        "Flota moderna y climatizada",
        "Conductores profesionales",
        "Disponibilidad programada o inmediata",
      ],
    },
    {
      icon: Map,
      title: "Excursiones Turísticas",
      description:
        "Viajes planificados a destinos turísticos con recorridos diseñados para disfrutar sin preocupaciones.",
      points: [
        "Excursiones regionales y nacionales",
        "Itinerarios personalizados",
        "Coordinación y asistencia permanente",
      ],
    },
    {
      icon: Users,
      title: "Viajes Grupales",
      description:
        "Soluciones de transporte para grupos grandes, eventos sociales, deportivos o educativos.",
      points: [
        "Gestión logística integral",
        "Capacidad adaptable",
        "Seguridad y organización",
      ],
    },
    {
      icon: Building2,
      title: "Servicios Corporativos",
      description:
        "Alianzas con empresas para cubrir necesidades de movilidad diaria o eventos especiales.",
      points: [
        "Contratos mensuales",
        "Traslados de personal",
        "Optimización de costos",
      ],
    },
    {
      icon: CalendarCheck,
      title: "Viajes Programados",
      description:
        "Planificación anticipada de traslados recurrentes o especiales, asegurando cumplimiento de horarios.",
      points: [
        "Reservas anticipadas",
        "Coordinación de rutas",
        "Soporte operativo",
      ],
    },
    {
      icon: Briefcase,
      title: "Soluciones a Medida",
      description:
        "Diseñamos servicios personalizados según las necesidades específicas de cada cliente.",
      points: [
        "Atención personalizada",
        "Flexibilidad total",
        "Escalabilidad del servicio",
      ],
    },
  ];

  return (
    <section
      id="servicios"
      className="relative py-40 bg-slate-950 overflow-hidden"
    >
      {/* Decorative background */}

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-200">
            Servicios pensados para <br />
            <span className="text-blue-200">cada tipo de viaje</span>
          </h2>

          <p className="mt-6 text-lg text-slate-400">
            En LUCIAN ofrecemos soluciones de transporte adaptadas a distintos
            contextos: turismo, empresas, grupos y traslados especiales.
            Nuestra experiencia nos permite responder con eficiencia,
            seguridad y calidad.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="mt-24 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl p-10 shadow-xl border border-slate-100"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">
                <service.icon className="w-7 h-7 text-blue-900" />
              </div>

              <h3 className="mt-8 text-2xl font-bold text-blue-950">
                {service.title}
              </h3>

              <p className="mt-6 text-slate-600">
                {service.description}
              </p>

              <ul className="mt-6 space-y-2 text-slate-600">
                {service.points.map((point, idx) => (
                  <li key={idx} className="relative pl-4 text-slate-600 leading-relaxed">
  <span className="absolute left-0 top-[0.65em] w-2 h-2 rounded-full bg-blue-800" />
  {point}
</li>

                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
