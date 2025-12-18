import { useState } from 'react';
import { Calendar, Users, Clock, MapPin, ChevronRight, Bus } from 'lucide-react';

interface Destination {
  id: number;
  name: string;
  country: string;
  img: string;
}

interface Booking {
  destination: Destination | null;
  guests: number;
  date: string;
  time: string;
}

const ReservationSystem = () => {
  const [, setStep] = useState(1);
  const [booking, setBooking] = useState<Booking>({
    destination: null,
    guests: 2,
    date: '',
    time: ''
  });

  const destinations = [
    { id: 1, name: 'Florianopolis', country: 'Brasil', img: './floripa.jpg' },
    { id: 2, name: 'Bariloche', country: 'Argentina', img: './bari.jpg' },
    { id: 3, name: 'Buenos Aires', country: 'Argentina', img: './bsas.jpg' },
    { id: 4, name: 'Asunción', country: 'Paraguay', img: './asuncion.jpg' },
  ];

  const times = ['08:00 AM', '11:30 AM', '15:00 PM', '18:30 PM'];

  const handleSelectDest = (dest: Destination) => {
    setBooking({ ...booking, destination: dest });
    setStep(2);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-800 via-black to-slate-800 pt-32 pb-12 px-4">
      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-light text-gray-100 tracking-tight">
            Reserva tu <span className="font-serif italic border-b-2 border-gold-500">Experiencia</span>
          </h1>
          <p className="text-gray-300 mt-3 uppercase tracking-widest text-xs">
            Destinos exclusivos curados por Lucian
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* COLUMNA IZQUIERDA */}
          <div className="lg:col-span-2 space-y-12">

            {/* PASO 1 */}
            <section>
              <div className="flex items-center mb-6">
                <span className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center text-sm mr-3 font-bold">1</span>
                <h2 className="text-xl font-medium text-gray-100 tracking-tight">
                  Selecciona tu destino
                </h2>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {destinations.map((dest) => (
                  <button
                    key={dest.id}
                    onClick={() => handleSelectDest(dest)}
                    className={`group relative overflow-hidden rounded-2xl aspect-[3/4] transition-all duration-500 ${
                      booking.destination?.id === dest.id
                        ? 'ring-4 ring-offset-2 ring-gold-500'
                        : 'hover:scale-[1.02]'
                    }`}
                  >
                    <img
                      src={dest.img}
                      alt={dest.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-left">
                      <p className="text-white font-bold text-sm leading-tight">
                        {dest.name}
                      </p>
                      <p className="text-gray-300 text-[10px] uppercase tracking-wider">
                        {dest.country}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </section>

            {/* PASO 2 */}
            <section className={`transition-all duration-700 ${
              booking.destination ? 'opacity-100' : 'opacity-30 pointer-events-none translate-y-4'
            }`}>
              <div className="flex items-center mb-6">
                <span className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center text-sm mr-3 font-bold">2</span>
                <h2 className="text-xl font-medium text-gray-100 tracking-tight">
                  Detalles del viaje
                </h2>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <label className="block text-[10px] uppercase tracking-widest text-gray-300 mb-2 ml-1">
                    Fecha de salida
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="date"
                      className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 bg-white focus:ring-2 focus:ring-gold-500 outline-none shadow-sm"
                      onChange={(e) => setBooking({ ...booking, date: e.target.value })}
                    />
                  </div>
                </div>

                <div className="w-full md:w-48">
                  <label className="block text-[10px] uppercase tracking-widest text-gray-300 mb-2 ml-1">
                    Viajeros
                  </label>
                  <div className="relative">
                    <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <select
                      value={booking.guests}
                      onChange={(e) => setBooking({ ...booking, guests: parseInt(e.target.value) })}
                      className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 bg-white appearance-none font-medium shadow-sm"
                    >
                      {[1, 2, 4, 6, 8].map(n => (
                        <option key={n} value={n}>
                          {n} {n === 1 ? 'Persona' : 'Personas'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </section>

            {/* PASO 3 */}
            <section className={`transition-all duration-700 ${
              booking.date ? 'opacity-100' : 'opacity-30 pointer-events-none translate-y-4'
            }`}>
              <div className="flex items-center mb-6">
                <span className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center text-sm mr-3 font-bold">3</span>
                <h2 className="text-xl font-medium text-gray-100 tracking-tight">
                  Horario de embarque
                </h2>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {times.map((t) => (
                  <button
                    key={t}
                    onClick={() => setBooking({ ...booking, time: t })}
                    className={`py-4 rounded-2xl font-semibold transition-all flex flex-col items-center justify-center border ${
                      booking.time === t
                        ? 'bg-gold-600 border-gold-600 text-white shadow-lg shadow-gold-100'
                        : 'bg-white border-gray-200 text-gray-800 hover:border-gold-400'
                    }`}
                  >
                    <Clock size={14} className="mb-1 text-gray-500" />
                    {t}
                  </button>
                ))}
              </div>
            </section>
          </div>

          {/* COLUMNA DERECHA – TICKET */}
          <div className="relative">
            <div className="sticky top-32 bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100">
              <div className="bg-black p-8 text-white">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-serif italic font-light tracking-widest">LUCIAN</h3>
                  <Bus className="text-gold-500 rotate-45" size={20} />
                </div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400">
                  Boarding Pass Summary
                </p>
              </div>

              <div className="p-8 space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <label className="text-[10px] uppercase text-gray-400 block mb-1">Destino</label>
                    <p className="font-bold text-gray-800 text-xl">
                      {booking.destination?.name || '—'}
                    </p>
                  </div>
                  <MapPin className="text-gold-500" size={20} />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] uppercase text-gray-400 block mb-1">Pasajeros</label>
                    <p className="font-semibold text-gray-700">{booking.guests} Adultos</p>
                  </div>
                  <div>
                    <label className="text-[10px] uppercase text-gray-400 block mb-1">Hora</label>
                    <p className="font-semibold text-gray-700">{booking.time || '—'}</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-dashed border-gray-200">
                  <label className="text-[10px] uppercase text-gray-400 block mb-1">Fecha Programada</label>
                  <p className="font-bold text-gray-800">
                    {booking.date || 'Selecciona una fecha'}
                  </p>
                </div>

                <button
                  disabled={!booking.time}
                  className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all group ${
                    booking.time
                      ? 'bg-gold-600 text-slate-800 hover:bg-gold-700 shadow-xl shadow-gold-100'
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  RESERVAR AHORA
                  <ChevronRight size={18} className="group-hover:translate-x-1 text-black transition-transform" />
                </button>
              </div>

              <div className="bg-gray-50 py-4 px-8 border-t border-gray-100">
                <div className="flex justify-center gap-1">
                  {[...Array(20)].map((_, i) => (
                    <div key={i} className="w-1 h-4 bg-gray-600 rounded-full" />
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ReservationSystem;
