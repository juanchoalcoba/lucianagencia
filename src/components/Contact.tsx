import { Phone, Mail, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contacto"
      className="relative py-40 bg-linear-to-br from-blue-950 via-blue-900 to-blue-950 text-white overflow-hidden px-6"
    >
      {/* Decorative lights */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px]" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Hablemos sobre <br />
              <span className="text-cyan-100">tu próximo traslado</span>
            </h2>

            <p className="mt-6 text-lg text-blue-100 max-w-lg">
              Nuestro equipo está listo para ayudarte a planificar viajes
              corporativos, grupales o soluciones de transporte a medida.
            </p>

            <div className="mt-12 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                  <Phone className="text-cyan-400" />
                </div>
                <div>
                  <p className="font-semibold">Teléfono</p>
                  <p className="text-blue-200">+54 11 1234 5678</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                  <Mail className="text-cyan-400" />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-blue-200">contacto@lucian.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                  <MapPin className="text-cyan-400" />
                </div>
                <div>
                  <p className="font-semibold">Ubicación</p>
                  <p className="text-blue-200">
                    Av. Principal 123, Ciudad
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form className="relative bg-white/95 backdrop-blur-xl p-10 md:p-12 rounded-3xl shadow-2xl text-slate-900 space-y-6">
            <h3 className="text-2xl font-bold">
              Solicitar contacto
            </h3>

            <p className="text-slate-600 text-sm">
              Completa el formulario y nos comunicaremos a la brevedad.
            </p>

            <input
              type="text"
              placeholder="Nombre completo"
              className="w-full p-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />

            <input
              type="email"
              placeholder="Correo electrónico"
              className="w-full p-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />

            <textarea
              placeholder="Cuéntanos brevemente tu necesidad"
              rows={4}
              className="w-full p-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-blue-900 text-white font-semibold py-4 rounded-xl hover:bg-blue-800 transition-all"
            >
              Enviar consulta
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
