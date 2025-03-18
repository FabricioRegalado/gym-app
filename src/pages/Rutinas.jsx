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
    const today = new Date().getDay(); // 0 (Domingo) - 6 (Sábado)
    const adjustedToday = today === 0 ? 6 : today - 1; // Ajuste para domingo
    return adjustedToday > 4 ? 0 : adjustedToday;
  };

  const todayIndex = getTodayIndex();

  const handleCardToggle = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const getCardStatus = (index) => {
    if (index < todayIndex) return 'past';
    if (index === todayIndex) return 'current';
    return 'future';
  };

  const statusStyles = {
    past: 'bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 cursor-not-allowed',
    current:
      'bg-gradient-to-br from-green-700/90 via-emerald-600/90 to-cyan-500/90 border border-cyan-400/30 hover:border-cyan-300/50 cursor-pointer',
    future: 'bg-amber-800/70 backdrop-blur-sm border border-amber-600/50 cursor-not-allowed'
  };

  if (error) {
    return (
      <div className="relative min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-red-500">Ocurrió un error</h2>
          <p className="text-lg text-gray-300 mt-4">No se pudieron cargar las rutinas. Por favor, intenta nuevamente más tarde.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-black text-white pb-24">
      {/* Fondo */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-stripes.png')] opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-emerald-900/30" />

      <div className="relative z-10 pt-10 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-extrabold bg-gradient-to-r from-green-300 to-cyan-400 bg-clip-text text-transparent">
              Mis Rutinas
            </h2>
            <div className="mx-auto w-48 h-1 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full my-6" />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-lg text-cyan-200/80 mb-4"
            >
              {`Hoy es ${rutinas[todayIndex]?.dia || 'día de descanso'}`}
            </motion.p>
            <div className="flex justify-center gap-4 text-sm">
              <span className="flex items-center gap-2 text-emerald-300">
                <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                Día actual
              </span>
              <span className="flex items-center gap-2 text-amber-300">
                <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
                Próximamente
              </span>
              <span className="flex items-center gap-2 text-gray-400">
                <div className="w-2 h-2 bg-gray-400 rounded-full" />
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
                    className={`p-6 rounded-2xl shadow-xl transition-all duration-300 relative overflow-hidden ${statusStyles[status]} ${
                      expandedCard === idx ? 'ring-2 ring-cyan-400/50' : ''
                    }`}
                  >
                    {isCurrent && (
                      <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-shine" />
                    )}

                    <div className="flex items-center justify-between border-b border-cyan-400/20 pb-3 mb-4">
                      <div>
                        <h3 className="text-xl font-bold bg-gradient-to-r from-green-300 to-cyan-300 bg-clip-text text-transparent">
                          {rutina.dia}
                        </h3>
                        <p className="text-sm text-gray-300 mt-1">{rutina.titulo}</p>
                      </div>
                      <span className="text-sm bg-black/30 px-3 py-1 rounded-full border border-cyan-400/20">
                        {rutina.duracion}
                      </span>
                    </div>

                    <ExpandableContent expanded={expandedCard === idx}>
                      <div className="mt-4 text-base space-y-6">
                        {rutina.tipo === "detallada" ? (
                          rutina.contenido.secciones && rutina.contenido.secciones.map((seccion, sIdx) => (
                            <motion.div
                              key={sIdx}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              className="group"
                            >
                              <div className="flex items-center justify-between mb-4 pb-2 border-b border-cyan-400/20">
                                <h3 className="text-lg font-semibold text-cyan-200">
                                  {seccion.grupoMuscular}
                                </h3>
                                <span className="text-sm bg-cyan-900/30 px-2 py-1 rounded-full">
                                  {seccion.ejercicios.length} ejercicios
                                </span>
                              </div>
                              <ul className="space-y-4">
                                {seccion.ejercicios && seccion.ejercicios.map((ejercicio, eIdx) => (
                                  <motion.li
                                    key={eIdx}
                                    whileHover={{ translateX: 5 }}
                                    className="bg-gray-900/50 p-4 rounded-xl border border-cyan-400/10 hover:border-cyan-400/20 transition-all relative"
                                  >
                                    <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-cyan-400 to-emerald-400 rounded-l" />
                                    
                                    {ejercicio.link && (
                                      <a
                                        href={ejercicio.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 bg-cyan-600/80 hover:bg-cyan-500/90 text-white text-xs px-3 py-1 rounded-full transition-colors mb-2"
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

                                    <h4 className="font-bold text-cyan-300 mb-3">
                                      {ejercicio.nombre}
                                    </h4>

                                    {/* Sección de Series y Reps en dos columnas */}
                                    <div className="grid grid-cols-2 gap-4 mb-1">
                                      <div>
                                        <p className="text-sm text-green-400">
                                          <strong>Series:</strong>
                                          {ejercicio.series && ejercicio.series.map((serie, idx) => (
                                            <span key={idx} className="block ml-4">{serie}</span>
                                          ))}
                                        </p>
                                      </div>
                                      <div>
                                        <p className="text-sm text-amber-400">
                                          <strong>Reps:</strong>
                                          {ejercicio.repeticiones && ejercicio.repeticiones.map((rep, idx) => (
                                            <span key={idx} className="block ml-4">{rep}</span>
                                          ))}
                                        </p>
                                      </div>
                                    </div>

                                    <div className="flex flex-col gap-1 text-sm">
                                      <p>
                                        <span className="text-gray-500">Descanso:</span>{" "}
                                        <span className="text-blue-300">{ejercicio.descanso}</span>
                                      </p>
                                      {ejercicio.tecnica && (
                                        <p>
                                          <span className="text-gray-500">Técnica:</span>{" "}
                                          <span className="text-purple-300">{ejercicio.tecnica}</span>
                                        </p>
                                      )}
                                    </div>

                                    {ejercicio.detalle && (
                                      <p className="mt-2 text-sm text-gray-300 italic">
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
                              <li key={ejIdx} className="bg-gray-800/30 p-3 rounded-lg border border-cyan-400/10">
                                {ej}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </ExpandableContent>

                    <div className="mt-4 pt-3 border-t border-cyan-400/20">
                      {status === "current" && (
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          className="w-full flex items-center justify-between group"
                        >
                          <span className="text-sm text-cyan-300 group-hover:text-cyan-200">
                            {expandedCard === idx ? "Ocultar detalles" : "Mostrar detalles"}
                          </span>
                          <svg
                            className={`w-5 h-5 text-cyan-400 transform transition-transform ${expandedCard === idx ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                          </svg>
                        </motion.button>
                      )}

                      {status === "future" && (
                        <div className="flex items-center justify-center gap-2 text-amber-300">
                          <svg className="w-5 h-5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Disponible el {rutina.dia}
                        </div>
                      )}

                      {status === "past" && (
                        <div className="flex items-center justify-center gap-2 text-gray-400">
                          <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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