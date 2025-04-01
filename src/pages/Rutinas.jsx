import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import rutinasData from '../data/rutinasData';
import rutinasDataRicardo from '../data/rutinasDataRicardo';

function ExpandableContent({ expanded, children }) {
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [children, expanded]);

  return (
    <AnimatePresence>
      {expanded && (
        <motion.div
          ref={contentRef}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: contentHeight }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          aria-expanded={expanded}
          className="overflow-hidden"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Rutinas() {
  const [expandedCard, setExpandedCard] = useState(null);
  const [rutinas, setRutinas] = useState(rutinasData);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const userData = JSON.parse(sessionStorage.getItem('userData'));
      if (userData && userData.username === 'ricardo') {
        setRutinas(rutinasDataRicardo);
      }
    } catch (error) {
      console.error('Error al obtener los datos del usuario:', error);
      setError(error);
    }
  }, []);

  const getTodayIndex = () => {
    const today = new Date().getDay();
    const adjustedToday = today === 0 ? 0 : today - 1; // Adjust for Sunday as the first day
    return adjustedToday;
  };

  const todayIndex = getTodayIndex();

  const getCardStatus = (index) => {
    const adjustedToday = todayIndex;
    if (index < adjustedToday) return 'past';
    if (index === adjustedToday) return 'current';
    return 'future';
  };

  const handleCardToggle = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    hover: { y: -3, borderColor: '#60a5fa' }
  };

  const statusStyles = {
    past: 'bg-gray-800 border-2 border-gray-700/50 text-gray-400 cursor-not-allowed',
    current: 'bg-gray-900 border-2 border-blue-500/80 hover:border-blue-400 text-white hover:shadow-2xl cursor-pointer',
    future: 'bg-gray-900 border-2 border-red-500/50 text-gray-500 cursor-not-allowed'
  };

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-red-400">Error de carga</h2>
          <p className="text-lg text-gray-300 mt-4 max-w-md mx-auto">
            No se pudieron cargar las rutinas. Por favor, intenta recargar la página.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative pb-24 bg-gray-950 text-white px-4">
      <div className="relative z-10 pt-12 pb-16 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
            Plan de Entrenamiento
          </h2>
          <div className="mx-auto w-48 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 my-6 rounded-full" />
          
          <div className="flex justify-center gap-6 text-sm">
            <span className="flex items-center gap-2 font-medium">
              <div className="w-3 h-3 bg-blue-500 rounded-full ring-2 ring-blue-300" />
              Día actual
            </span>
            <span className="flex items-center gap-2 font-medium">
              <div className="w-3 h-3 bg-red-500 rounded-full ring-2 ring-red-300 animate-pulse" />
              Próximamente
            </span>
            <span className="flex items-center gap-2 font-medium">
              <div className="w-3 h-3 bg-gray-600 rounded-full ring-2 ring-gray-400" />
              Completado
            </span>
          </div>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {rutinas && rutinas.map((rutina, idx) => {
            const status = getCardStatus(idx);
            const isCurrent = status === 'current';
            
            return (
              <motion.div
                key={rutina.dia}
                variants={cardVariants}
                initial="initial"
                animate="animate"
                whileHover={isCurrent ? "hover" : {}}
                transition={{ 
                  delay: idx * 0.1,
                  type: 'spring',
                  stiffness: 300
                }}
                className={`p-5 rounded-xl ${statusStyles[status]} transition-all duration-300 ${
                  expandedCard === idx ? 'ring-2 ring-blue-400' : ''
                }`}
                onClick={() => isCurrent && handleCardToggle(idx)}
              >
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-gray-700">
                  <div>
                    <h3 className="text-xl font-bold tracking-tight">{rutina.dia}</h3>
                    <p className="text-sm mt-1 font-medium text-gray-300">{rutina.titulo}</p>
                  </div>
                  <span className="text-xs font-semibold bg-gray-800 px-2.5 py-1 rounded-full border border-gray-600">
                    {rutina.duracion}
                  </span>
                </div>

                <ExpandableContent expanded={expandedCard === idx}>
                  <div className="mt-4 text-base space-y-6">
                    {rutina.tipo === "detallada" ? (
                      rutina.contenido.secciones.map((seccion, sIdx) => (
                        <motion.div
                          key={sIdx}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 * sIdx }}
                        >
                          <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-700">
                            <h3 className="text-lg font-semibold text-cyan-300">{seccion.grupoMuscular}</h3>
                            <span className="text-xs font-medium bg-gray-800 px-2 py-1 rounded-full">
                              {seccion.ejercicios.length} ejercicios
                            </span>
                          </div>
                          <ul className="space-y-3">
                            {seccion.ejercicios.map((ejercicio, eIdx) => (
                              <motion.li
                                key={eIdx}
                                whileHover={{ scale: 1.02 }}
                                className="relative p-4 rounded-lg border border-gray-700 bg-gray-900/50 backdrop-blur-sm"
                              >
                                <div className="absolute left-0 top-0 h-full w-1 bg-blue-500 rounded-l" />
                                {ejercicio.link && (
                                  <a
                                    href={ejercicio.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 bg-gradient-to-r from-green-400 to-cyan-400 hover:from-green-300 hover:to-cyan-300 text-black text-xs px-3 py-1 rounded-full transition-all mb-2 font-bold"
                                  >
                                    Ejemplo
                                  </a>
                                )}
                                <h4 className="font-bold text-blue-300 mb-3">{ejercicio.nombre}</h4>
                                <div className="grid grid-cols-2 gap-4 mb-1 text-xs text-gray-200">
                                  <div>
                                    <strong className="text-cyan-300">Series:</strong>
                                    <br />
                                    {Array.isArray(ejercicio.series) ? (
                                      ejercicio.series.map((serie, idx) => (
                                        <span key={idx}>
                                          {serie}
                                          <br />
                                        </span>
                                      ))
                                    ) : (
                                      <span>{ejercicio.series}</span>
                                    )}
                                  </div>
                                  <div>
                                    <strong className="text-cyan-300">Reps:</strong>
                                    <br />
                                    {Array.isArray(ejercicio.repeticiones) ? (
                                      ejercicio.repeticiones.map((rep, idx) => (
                                        <span key={idx}>
                                          {rep}
                                          <br />
                                        </span>
                                      ))
                                    ) : (
                                      <span>{ejercicio.repeticiones}</span>
                                    )}
                                  </div>
                                </div>
                                <p className="text-xs text-gray-400">
                                  <strong className="text-cyan-300">Descanso:</strong> {ejercicio.descanso}
                                </p>
                                {ejercicio.tecnica && (
                                  <p className="text-xs mt-1 text-gray-400">
                                    <strong className="text-cyan-300">Técnica:</strong> {ejercicio.tecnica}
                                  </p>
                                )}
                                {ejercicio.detalle && (
                                  <p className="text-xs mt-1 text-gray-300 italic">
                                    {ejercicio.detalle}
                                  </p>
                                )}
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      ))
                    ) : (
                      <ul className="space-y-2">
                        {rutina.contenido.ejercicios.map((ej, ejIdx) => (
                          <li 
                            key={ejIdx} 
                            className="p-3 rounded-md border border-gray-700 bg-gray-900/50 text-sm font-medium hover:bg-gray-800/50 transition-colors"
                          >
                            {ej}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </ExpandableContent>

                <div className="mt-4 pt-3 border-t border-gray-700">
                  <span className={`text-xs font-bold ${
                    status === 'current' ? 'text-blue-400' :
                    status === 'future' ? 'text-red-400' :
                    'text-gray-500'
                  }`}>
                    {status === "current" && "▶ EN PROGRESO"}
                    {status === "future" && "⏳ PRÓXIMAMENTE"}
                    {status === "past" && "✓ COMPLETADO"}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Rutinas;