import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import rutinasData from '../data/rutinasData';
import rutinasDataRicardo from '../data/rutinasDataRicardo';
import rutinasDataWendy from '../data/rutinasDataWendy'; // Import Wendy's data

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
      if (userData) {
        if (userData.username === 'ricardo') {
          setRutinas(rutinasDataRicardo);
        } else if (userData.username === 'wendy') {
          setRutinas(rutinasDataWendy);
        }
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
    hover: { y: -3, borderColor: '#60a5fa', scale: 1.02 },
    exit: { opacity: 0, y: 20 }
  };

  const sectionVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 }
  };

  const listItemVariants = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    hover: { scale: 1.05 },
    exit: { opacity: 0, scale: 0.95 }
  };

  const statusStyles = {
    past: 'bg-gray-800 border-2 border-gray-700/50 text-gray-400 cursor-not-allowed',
    current: 'bg-gray-900 border-2 border-blue-500/80 hover:border-blue-400 text-white hover:shadow-2xl cursor-pointer',
    future: 'bg-gray-900 border-2 border-teal-500/50 text-gray-500 cursor-not-allowed'
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
    <div className="min-h-screen relative pb-32 bg-gray-950 text-white px-4 sm:pb-36">
      <div className="relative z-10 pt-12 pb-16 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
            Plan de Entrenamiento
          </h2>
          <div className="mx-auto w-48 h-1 bg-gradient-to-r from-blue-400 to-teal-400 my-6 rounded-full" />
          
          <div className="flex justify-center gap-6 text-sm">
            <span className="flex items-center gap-2 font-medium">
              <div className="w-3 h-3 bg-blue-400 rounded-full ring-2 ring-blue-300" />
              Día actual
            </span>
            <span className="flex items-center gap-2 font-medium">
              <div className="w-3 h-3 bg-teal-400 rounded-full ring-2 ring-teal-300 animate-pulse" />
              Próximamente
            </span>
            <span className="flex items-center gap-2 font-medium">
              <div className="w-3 h-3 bg-gray-600 rounded-full ring-2 ring-gray-400" />
              Completado
            </span>
          </div>
        </motion.div>

        <div
          className={`grid gap-6`}
          style={{
            gridTemplateColumns: `repeat(auto-fit, minmax(300px, 1fr))`,
            alignItems: 'start',
          }}
        >
          {rutinas && rutinas.map((rutina, idx) => {
            const status = getCardStatus(idx);
            const isCurrent = status === 'current';
            
            return (
              <motion.div
                key={rutina.dia}
                variants={cardVariants}
                initial="initial"
                animate="animate"
                exit="exit"
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
                          variants={sectionVariants}
                          initial="initial"
                          animate="animate"
                          exit="exit"
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
                                variants={listItemVariants}
                                initial="initial"
                                animate="animate"
                                whileHover="hover"
                                exit="exit"
                                className="relative p-4 rounded-lg border border-gray-700 bg-gray-900/50 backdrop-blur-sm"
                              >
                                <div className="absolute left-0 top-0 h-full w-1 bg-blue-500 rounded-l" />
                                {ejercicio.link && (
                                  <a
                                    href={ejercicio.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 bg-gradient-to-r from-blue-400 to-teal-400 hover:from-blue-300 hover:to-teal-300 text-black text-xs px-3 py-1 rounded-full transition-all mb-2 font-bold"
                                  >
                                    Ejemplo
                                  </a>
                                )}
                                <h4 className="font-bold text-blue-300 mb-3">{ejercicio.nombre}</h4>
                                <div className="flex flex-wrap gap-4 mb-4 text-xs text-gray-200">
                                  {ejercicio.series && ejercicio.series.map((serie, idx) => (
                                    <div key={idx} className="flex items-center gap-2">
                                      <span className="font-semibold text-teal-300">{serie.descripcion}:</span>
                                      <span>{serie.cantidad} - {serie.repeticiones}</span>
                                    </div>
                                  ))}
                                </div>
                                <p className="text-xs text-gray-400 mb-3">
                                  <strong className="text-teal-300">Descanso:</strong> {ejercicio.descanso || "No especificado"}
                                </p>
                                {ejercicio.detalle && (
                                  Array.isArray(ejercicio.detalle) ? (
                                    <ul className="text-xs mt-3 text-gray-300 space-y-2 pl-4 border-l-2 border-teal-400">
                                      {ejercicio.detalle.map((detalle, idx) => (
                                        <li key={idx} className="leading-relaxed">
                                          <span className="text-teal-300 font-medium">•</span> {detalle}
                                        </li>
                                      ))}
                                    </ul>
                                  ) : (
                                    <p className="text-xs mt-3 text-gray-300 pl-4 border-l-2 border-teal-400">
                                      <span className="text-teal-300 font-medium">•</span> {ejercicio.detalle}
                                    </p>
                                  )
                                )}
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      ))
                    ) : (
                      <ul className="space-y-2">
                        {rutina.contenido.ejercicios.map((ej, ejIdx) => (
                          <motion.li
                            key={ejIdx}
                            variants={listItemVariants}
                            initial="initial"
                            animate="animate"
                            whileHover="hover"
                            exit="exit"
                            className="p-3 rounded-md border border-gray-700 bg-gray-900/50 text-sm font-medium hover:bg-gray-800/50 transition-colors"
                          >
                            {ej}
                          </motion.li>
                        ))}
                      </ul>
                    )}
                  </div>
                </ExpandableContent>

                <div className="mt-4 pt-3 border-t border-gray-700">
                  <span className={`text-xs font-bold ${
                    status === 'current' ? 'text-blue-400' :
                    status === 'future' ? 'text-teal-400' :
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