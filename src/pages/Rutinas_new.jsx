import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiChevronUp, FiExternalLink, FiClock, FiTarget } from 'react-icons/fi';
import rutinasData from '../data/rutinasData';
import rutinasDataRicardo from '../data/rutinasDataRicardo';
import rutinasDataWendy from '../data/rutinasDataWendy';

function Rutinas() {
  const [expandedCard, setExpandedCard] = useState(null);
  const [rutinas, setRutinas] = useState(rutinasData);

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
    }
  }, []);

  const getTodayIndex = () => {
    const today = new Date().getDay();
    return today === 0 ? 6 : today - 1;
  };

  const todayIndex = getTodayIndex();

  const getCardStatus = (index) => {
    if (index < todayIndex) return 'past';
    if (index === todayIndex) return 'current';
    return 'future';
  };

  const handleCardToggle = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Plan de Entrenamiento
          </h1>
          <p className="text-gray-600">
            Tu rutina semanal personalizada
          </p>
        </motion.div>

        {/* Lista de rutinas */}
        <div className="space-y-4">
          {rutinas.map((rutina, index) => {
            const status = getCardStatus(index);
            const isExpanded = expandedCard === index;
            const isToday = status === 'current';

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-xl shadow-sm border transition-all duration-200 ${
                  isToday
                    ? 'border-blue-500 ring-2 ring-blue-100'
                    : status === 'past'
                    ? 'border-gray-200 opacity-75'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                {/* Header del card */}
                <div
                  className={`p-6 cursor-pointer ${
                    status === 'past' ? 'cursor-not-allowed' : ''
                  }`}
                  onClick={() => status !== 'past' && handleCardToggle(index)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm ${
                          isToday
                            ? 'bg-blue-600 text-white'
                            : status === 'past'
                            ? 'bg-gray-200 text-gray-500'
                            : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {diasSemana[index].slice(0, 3).toUpperCase()}
                      </div>
                      <div>
                        <h3 className={`font-bold text-lg ${
                          isToday ? 'text-blue-600' : status === 'past' ? 'text-gray-500' : 'text-gray-900'
                        }`}>
                          {rutina.titulo}
                        </h3>
                        <p className={`text-sm ${
                          status === 'past' ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          {diasSemana[index]}
                          {rutina.duracion && ` • ${rutina.duracion}`}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      {isToday && (
                        <span className="bg-blue-100 text-blue-600 text-xs font-semibold px-2 py-1 rounded-full">
                          HOY
                        </span>
                      )}
                      {status !== 'past' && (
                        <div className="text-gray-400">
                          {isExpanded ? <FiChevronUp /> : <FiChevronDown />}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Contenido expandible */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-gray-100 overflow-hidden"
                    >
                      <div className="p-6 pt-4">
                        {rutina.contenido?.secciones ? (
                          <div className="space-y-6">
                            {rutina.contenido.secciones.map((seccion, sIdx) => (
                              <motion.div
                                key={sIdx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: sIdx * 0.1 }}
                                className="border-l-4 border-blue-500 pl-4"
                              >
                                <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                                  <FiTarget className="mr-2 text-blue-600" />
                                  {seccion.grupoMuscular}
                                </h4>
                                
                                <div className="space-y-4">
                                  {seccion.ejercicios.map((ejercicio, eIdx) => (
                                    <div
                                      key={eIdx}
                                      className="bg-gray-50 rounded-lg p-4 border border-gray-200"
                                    >
                                      <div className="flex items-start justify-between mb-3">
                                        <h5 className="font-semibold text-gray-900">
                                          {ejercicio.nombre}
                                        </h5>
                                        {ejercicio.link && (
                                          <a
                                            href={ejercicio.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm"
                                          >
                                            <FiExternalLink className="mr-1" />
                                            Ver
                                          </a>
                                        )}
                                      </div>

                                      {/* Series y repeticiones */}
                                      {ejercicio.series && (
                                        <div className="mb-3">
                                          <div className="flex flex-wrap gap-2">
                                            {ejercicio.series.map((serie, sIdx) => (
                                              <span
                                                key={sIdx}
                                                className="bg-white border border-gray-300 px-3 py-1 rounded-full text-sm"
                                              >
                                                <span className="font-medium text-gray-700">
                                                  {serie.descripcion}:
                                                </span>{' '}
                                                <span className="text-gray-600">
                                                  {serie.cantidad} - {serie.repeticiones}
                                                </span>
                                              </span>
                                            ))}
                                          </div>
                                        </div>
                                      )}

                                      {/* Descanso */}
                                      {ejercicio.descanso && (
                                        <div className="flex items-center text-sm text-gray-600 mb-3">
                                          <FiClock className="mr-2" />
                                          Descanso: {ejercicio.descanso}
                                        </div>
                                      )}

                                      {/* Detalles */}
                                      {ejercicio.detalle && (
                                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                                          {Array.isArray(ejercicio.detalle) ? (
                                            <ul className="text-sm text-gray-700 space-y-1">
                                              {ejercicio.detalle.map((detalle, dIdx) => (
                                                <li key={dIdx} className="flex items-start">
                                                  <span className="text-blue-600 mr-2">•</span>
                                                  {detalle}
                                                </li>
                                              ))}
                                            </ul>
                                          ) : (
                                            <p className="text-sm text-gray-700 flex items-start">
                                              <span className="text-blue-600 mr-2">•</span>
                                              {ejercicio.detalle}
                                            </p>
                                          )}
                                        </div>
                                      )}
                                    </div>
                                  ))}
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        ) : (
                          // Para rutinas generales (sin secciones detalladas)
                          <div className="space-y-2">
                            {rutina.contenido.ejercicios?.map((ejercicio, eIdx) => (
                              <div
                                key={eIdx}
                                className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-200"
                              >
                                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                                <span className="text-gray-700">{ejercicio}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Rutinas;
