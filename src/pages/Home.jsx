import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import rutinasData from '../data/rutinasData';
import rutinasDataRicardo from '../data/rutinasDataRicardo';
import rutinasDataWendy from '../data/rutinasDataWendy';

function Typewriter({ words, className = '' }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (charIndex < words[wordIndex].text.length) {
      const t = setTimeout(() => setCharIndex(i => i + 1), 100);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setCharIndex(0);
        setWordIndex(i => (i + 1) % words.length);
      }, 800);
      return () => clearTimeout(t);
    }
  }, [charIndex, wordIndex, words]);

  useEffect(() => {
    const b = setInterval(() => setBlink(b => !b), 500);
    return () => clearInterval(b);
  }, []);

  const { text, colorClass } = words[wordIndex];
  return (
    <span className={`${className} ${colorClass}`}>
      {text.slice(0, charIndex)}
      <span className="inline-block">{blink ? '|' : ' '}</span>
    </span>
  );
}

function Home({
  profileImageUrl = "...",
  backgroundImageUrl = "..."
}) {
  const navigate = useNavigate();
  const userData = JSON.parse(sessionStorage.getItem('userData'));
  const username = userData?.username || 'Usuario';
  const rutinas = userData?.username === 'ricardo'
    ? rutinasDataRicardo
    : userData?.username === 'wendy'
      ? rutinasDataWendy
      : rutinasData;

  const todayIndex = new Date().getDay() === 0 ? 6 : new Date().getDay() - 1;
  const rutinaHoy = rutinas[todayIndex] || {};

  const getSaludo = () => {
    const h = new Date().getHours();
    if (h < 12) return '¡Buenos días';
    if (h < 18) return '¡Buenas tardes';
    return '¡Buenas noches';
  };
  const saludo = getSaludo();

  // Semanas en español
  const diasSemana = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
  const today = new Date();
  const weekStart = new Date(today);
  weekStart.setDate(today.getDate() - today.getDay());
  const weekDates = Array.from({ length: 7 }).map((_, i) => {
    const d = new Date(weekStart);
    d.setDate(weekStart.getDate() + i);
    return d;
  });

  // 8 palabras motivadoras en español
  const motivWords = [
    { text: 'Enfoque', colorClass: 'text-blue-400' },
    { text: 'Fuerza', colorClass: 'text-teal-400' },
    { text: 'Consistencia', colorClass: 'text-purple-400' },
    { text: 'Progreso', colorClass: 'text-yellow-400' },
    { text: 'Disciplina', colorClass: 'text-red-400' },
    { text: 'Superación', colorClass: 'text-pink-400' },
    { text: 'Motivación', colorClass: 'text-green-400' },
    { text: 'Resiliencia', colorClass: 'text-indigo-400' },
  ];

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Fondo */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0">
        <img
          src={backgroundImageUrl}
          alt="Fondo"
          className="w-full h-full object-cover opacity-20 blur-sm animate-pulse-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/80 to-black/70" />
      </motion.div>

      <div className="relative z-10 max-w-md mx-auto pt-8 pb-12 px-4 flex flex-col gap-6">
        {/* Saludo */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-gray-400">{saludo},</p>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
            {username}
          </h1>
        </motion.div>

        {/* Typewriter motivacional */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center text-lg"
        >
          <Typewriter words={motivWords} className="font-semibold" />
        </motion.div>

        {/* Calendario en español */}
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-7 gap-2"
        >
          {weekDates.map((d, i) => {
            const isToday =
              d.getDate() === today.getDate() &&
              d.getMonth() === today.getMonth();
            return (
              <div key={i} className="flex flex-col items-center">
                <span className={`text-xs ${isToday ? 'text-white font-bold' : 'text-gray-500'}`}>
                  {diasSemana[d.getDay()]}
                </span>
                <div
                  className={`mt-1 w-8 h-8 flex items-center justify-center rounded-full ${isToday
                      ? 'bg-gradient-to-r from-blue-500 to-teal-500'
                      : 'bg-white/10'
                    }`}
                >
                  <span className={isToday ? 'text-black' : 'text-gray-300'}>
                    {d.getDate()}
                  </span>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Tu plan de hoy */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, ease: [0.6, 0.05, 0.01, 0.9] }}
          className="space-y-4"
        >
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-gray-100 text-base font-medium tracking-tight">Tu plan de hoy</h3>
            <span className="text-xs text-emerald-400/80 bg-emerald-400/10 px-2 py-1 rounded-full">
              {rutinaHoy.contenido?.secciones?.length} secciones
            </span>
          </div>

          {rutinaHoy.contenido?.secciones?.map((sec, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 * i }}
              className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm
               border border-white/10 rounded-xl p-4 shadow-xl hover:border-white/20 transition-all"
            >
              {/* Barra de acento animada */}
              <motion.div
                className={`absolute top-0 left-0 w-1 h-full rounded-r-lg ${i % 2 === 0 ? 'bg-sky-500' : 'bg-emerald-500'
                  }`}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
              />

              <div className="flex items-center mb-3 ml-2">
                <h4 className="text-gray-100 font-semibold text-sm flex items-center">
                  <span className="mr-2 opacity-80">🏋️</span>
                  {sec.grupoMuscular}
                </h4>
              </div>

              <ul className="space-y-2.5 ml-6">
                {sec.ejercicios?.map((e, idx) => (
                  <li
                    key={idx}
                    className="text-gray-300 text-sm flex items-center hover:text-white transition-colors"
                  >
                    <span className="w-1.5 h-1.5 bg-current rounded-full mr-3 opacity-60" />
                    <span className="truncate">{e.nombre}</span>
                    {idx === 0 && (
                      <span className="ml-2 text-xs text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded">
                        Primero
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Botón flotante "Ver Rutinas" */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="fixed right-4 bottom-1/2 transform translate-y-1/2 z-50"
        >
          <motion.button
            onClick={() => navigate('/rutinas')}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0],
              boxShadow: [
                "0 0 15px rgba(0, 191, 255, 0.5)",
                "0 0 25px rgba(0, 191, 255, 0.7)",
                "0 0 15px rgba(0, 191, 255, 0.5)"
              ],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full shadow-xl hover:shadow-2xl transition-all border-4 border-white"
          >
            <FiArrowRight className="w-8 h-8 text-white" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
