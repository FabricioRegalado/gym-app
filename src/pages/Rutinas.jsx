import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
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
    <div
      ref={contentRef}
      style={{
        maxHeight: expanded ? `${contentHeight}px` : '0px',
        overflow: 'hidden',
        transition: 'max-height 0.5s ease-in-out'
      }}
      aria-expanded={expanded}
    >
      {children}
    </div>
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
    const userData = JSON.parse(sessionStorage.getItem('userData'));
    const adjustedToday = today === 0 ? 0 : today - 1;
    if (userData && userData.username === 'ricardo') {
      return adjustedToday;
    }
    return adjustedToday > 4 ? 0 : adjustedToday;
  };

  const todayIndex = getTodayIndex();

  const handleCardToggle = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const getCardStatus = (index) => {
    const today = new Date().getDay();
    const adjustedToday = today === 0 ? 0 : today - 1;
    if (index < adjustedToday) return 'past';
    if (index === adjustedToday) return 'current';
    return 'future';
  };

  const statusStyles = {
    past: 'bg-gray-100 border border-gray-300 text-gray-500 cursor-not-allowed',
    current: 'bg-green-500 border border-green-600 text-white hover:border-green-700 cursor-pointer',
    future: 'bg-red-500 border border-red-600 text-white cursor-not-allowed'
  };

  if (error) {
    return (
      <div className="relative min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-red-500">Ocurrió un error</h2>
          <p className="text-lg text-gray-300 mt-4">No se pudieron cargar las rutinas. Por favor, intenta nuevamente más tarde.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-gray-900 text-gray-100 pb-24">
      <div className="absolute inset-0 bg-gray-900" />
      <div className="absolute inset-0 bg-gray-800/30" />

      <div className="relative z-10 pt-10 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-extrabold text-green-400">Mis Rutinas</h2>
            <div className="mx-auto w-48 h-1 bg-green-400 my-6" />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-lg text-gray-300 mb-4"
            >
              {`Hoy es ${rutinas[todayIndex]?.dia || 'día de descanso'}`}
            </motion.p>
            <div className="flex justify-center gap-4 text-sm">
              <span className="flex items-center gap-2 text-green-400">
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                Día actual
              </span>
              <span className="flex items-center gap-2 text-red-500">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                Próximamente
              </span>
              <span className="flex items-center gap-2 text-gray-100">
                <div className="w-2 h-2 bg-gray-100 rounded-full" />
                Completado
              </span>
            </div>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {rutinas && rutinas.map((rutina, idx) => {
              const status = getCardStatus(idx);
              const isCurrent = status === 'current';
              return (
                <motion.div
                  key={rutina.dia}
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div
                    onClick={() => isCurrent && handleCardToggle(idx)}
                    className={`p-6 rounded-2xl shadow-lg transition-all duration-300 relative overflow-hidden ${statusStyles[status]} ${
                      expandedCard === idx ? 'ring-2 ring-gray-100/50' : ''
                    }`}
                  >
                    {isCurrent && (
                      <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-transparent via-gray-100/30 to-transparent -translate-x-full animate-shine" />
                    )}

                    <div className="flex items-center justify-between border-b border-gray-600 pb-3 mb-4">
                      <div>
                        <h3 className={`text-xl font-bold ${status === 'future' ? 'text-white' : 'text-gray-800'}`}>
                          {rutina.dia}
                        </h3>
                        <p className={`text-sm mt-1 ${status === 'future' ? 'text-white' : 'text-gray-800'}`}>
                          {rutina.titulo}
                        </p>
                      </div>
                      <span className="text-sm bg-gray-800/30 px-3 py-1 rounded-full border border-gray-600">
                        {rutina.duracion}
                      </span>
                    </div>

                    <ExpandableContent expanded={expandedCard === idx}>
                      <div className="mt-4 text-base space-y-6 text-gray-300">
                        {rutina.tipo === "detallada" ? (
                          rutina.contenido.secciones && rutina.contenido.secciones.map((seccion, sIdx) => (
                            <motion.div
                              key={sIdx}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              className="group"
                            >
                              <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-600">
                                <h3 className="text-lg font-semibold text-white">
                                  {seccion.grupoMuscular}
                                </h3>
                                <span className="text-sm bg-gray-800/30 px-2 py-1 rounded-full">
                                  {seccion.ejercicios.length} ejercicios
                                </span>
                              </div>
                              <ul className="space-y-4">
                                {seccion.ejercicios && seccion.ejercicios.map((ejercicio, eIdx) => (
                                  <motion.li
                                    key={eIdx}
                                    whileHover={{ translateX: 5 }}
                                    className="bg-gray-800/50 p-4 rounded-xl border border-gray-600 hover:border-gray-500 transition-all relative"
                                  >
                                    <div className="absolute left-0 top-0 h-full w-1 bg-green-400" />
                                    
                                    {ejercicio.link && (
                                      <a
                                        href={ejercicio.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 bg-green-400 hover:bg-green-500 text-white text-xs px-3 py-1 rounded-full transition-colors mb-2"
                                      >
                                        <svg
                                          className="w-4 h-4"
                                          fill="none"
                                          stroke="currentColor"
                                          viewBox="0 0 24 24"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                          />
                                        </svg>
                                        Ejemplo
                                      </a>
                                    )}

                                    <h4 className="font-bold text-yellow-400 mb-3">
                                      {ejercicio.nombre}
                                    </h4>

                                    <div className="grid grid-cols-2 gap-4 mb-1">
                                      <div>
                                        <p className="text-sm text-white">
                                          <strong>Series:</strong>
                                          {ejercicio.series && ejercicio.series.map((serie, idx) => (
                                            <span key={idx} className="block ml-4">{serie}</span>
                                          ))}
                                        </p>
                                      </div>
                                      <div>
                                        <p className="text-sm text-white">
                                          <strong>Reps:</strong>
                                          {ejercicio.repeticiones && ejercicio.repeticiones.map((rep, idx) => (
                                            <span key={idx} className="block ml-4">{rep}</span>
                                          ))}
                                        </p>
                                      </div>
                                    </div>

                                    <div className="flex flex-col gap-1 text-sm">
                                      <p>
                                        <span className="text-red-500">Descanso:</span>{" "}
                                        <span className="text-gray-100">{ejercicio.descanso}</span>
                                      </p>
                                      {ejercicio.tecnica && (
                                        <p>
                                          <span className="text-gray-400">Técnica:</span>{" "}
                                          <span className="text-gray-800">{ejercicio.tecnica}</span>
                                        </p>
                                      )}
                                    </div>

                                    {ejercicio.detalle && (
                                      <p className="mt-2 text-sm text-white italic">
                                        {ejercicio.detalle}
                                      </p>
                                    )}
                                  </motion.li>
                                ))}
                              </ul>
                            </motion.div>
                          ))
                        ) : (
                          <ul className="space-y-3">
                            {rutina.contenido.ejercicios && rutina.contenido.ejercicios.map((ej, ejIdx) => (
                              <li key={ejIdx} className="bg-gray-800/30 p-3 rounded-lg border border-gray-600">
                                {ej}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </ExpandableContent>

                    <div className="mt-4 pt-3 border-t border-gray-600">
                      {status === "current" && (
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          className="w-full flex items-center justify-between group"
                        >
                          <span className="text-sm text-gray-100 group-hover:text-gray-400">
                            {expandedCard === idx ? "Ocultar detalles" : "Mostrar detalles"}
                          </span>
                          <svg
                            className={`w-5 h-5 text-gray-100 transform transition-transform ${expandedCard === idx ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                          </svg>
                        </motion.button>
                      )}

                      {status === "future" && (
                        <div className="flex items-center justify-center gap-2 text-red-500">
                          <svg className="w-5 h-5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Disponible el {rutina.dia}
                        </div>
                      )}

                      {status === "past" && (
                        <div className="flex items-center justify-center gap-2 text-green-400">
                          <svg
                            className="w-5 h-5 text-green-400 animate-bounce"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          Completado
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rutinas;