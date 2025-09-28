import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCalendar, FiTarget } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import rutinasData from '../data/rutinasData';
import rutinasDataRicardo from '../data/rutinasDataRicardo';
import rutinasDataWendy from '../data/rutinasDataWendy';

function Home() {
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
    if (h < 12) return 'Buenos días';
    if (h < 18) return 'Buenas tardes';
    return 'Buenas noches';
  };

  const diasSemana = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
  const today = new Date();
  const weekStart = new Date(today);
  weekStart.setDate(today.getDate() - today.getDay());
  const weekDates = Array.from({ length: 7 }).map((_, i) => {
    const d = new Date(weekStart);
    d.setDate(weekStart.getDate() + i);
    return d;
  });

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="max-w-md mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-8"
        >
          <p className="text-gray-600 text-sm">{getSaludo()}</p>
          <h1 className="text-2xl font-bold text-gray-900">
            Hola, {username}
          </h1>
        </motion.div>

        {/* Calendario de la semana */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 mb-6"
        >
          <h2 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
            <FiCalendar className="mr-2" />
            Esta semana
          </h2>
          <div className="flex justify-between">
            {weekDates.map((d, i) => {
              const isToday = d.getDate() === today.getDate() && d.getMonth() === today.getMonth();
              return (
                <div key={i} className="flex flex-col items-center">
                  <span className={`text-xs font-medium ${isToday ? 'text-blue-600' : 'text-gray-500'}`}>
                    {diasSemana[d.getDay()]}
                  </span>
                  <div
                    className={`mt-2 w-8 h-8 flex items-center justify-center rounded-full text-sm font-semibold ${
                      isToday
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {d.getDate()}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Rutina de hoy */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 mb-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-900 flex items-center">
              <FiTarget className="mr-2 text-blue-600" />
              Hoy: {rutinaHoy.titulo}
            </h2>
            {rutinaHoy.duracion && (
              <span className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full font-medium">
                {rutinaHoy.duracion}
              </span>
            )}
          </div>

          {rutinaHoy.contenido?.secciones ? (
            <div className="space-y-4">
              {rutinaHoy.contenido.secciones.map((sec, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i }}
                  className="border-l-4 border-blue-600 pl-4"
                >
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {sec.grupoMuscular}
                  </h3>
                  <ul className="space-y-1">
                    {sec.ejercicios?.slice(0, 3).map((e, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2" />
                        {e.nombre}
                      </li>
                    ))}
                    {sec.ejercicios?.length > 3 && (
                      <li className="text-sm text-gray-500 italic">
                        +{sec.ejercicios.length - 3} ejercicios más
                      </li>
                    )}
                  </ul>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500">No hay rutina programada para hoy</p>
              <p className="text-sm text-gray-400 mt-1">¡Día de descanso!</p>
            </div>
          )}
        </motion.div>

        {/* Botón Ver rutinas completas */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <button
            onClick={() => navigate('/rutinas')}
            className="w-full bg-blue-600 text-white font-semibold py-4 px-6 rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center shadow-sm"
          >
            Ver rutinas completas
            <FiArrowRight className="ml-2" />
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
