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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/30 pb-24 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-indigo-200/15 rounded-full blur-3xl"></div>
      
      <div className="max-w-md mx-auto px-4 py-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.25, 0.25, 0, 1] }}
          className="mb-10"
        >
          <motion.p 
            className="text-gray-600 text-sm font-medium mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {getSaludo()}
          </motion.p>
          <motion.h1 
            className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-1"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Hola, {username}
          </motion.h1>
          <motion.div
            className="w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 48 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          ></motion.div>
        </motion.div>

        {/* Calendario de la semana */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/50 mb-8 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-white/30"></div>
          <div className="relative z-10">
            <motion.h2 
              className="text-sm font-bold text-gray-700 mb-4 flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <FiCalendar className="mr-2 text-blue-600" />
              Esta semana
            </motion.h2>
            <div className="flex justify-between">
              {weekDates.map((d, i) => {
                const isToday = d.getDate() === today.getDate() && d.getMonth() === today.getMonth();
                return (
                  <motion.div 
                    key={i} 
                    className="flex flex-col items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className={`text-xs font-semibold mb-2 ${isToday ? 'text-blue-600' : 'text-gray-500'}`}>
                      {diasSemana[d.getDay()]}
                    </span>
                    <div
                      className={`w-10 h-10 flex items-center justify-center rounded-xl text-sm font-bold transition-all duration-200 ${
                        isToday
                          ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg scale-110'
                          : 'text-gray-700 hover:bg-gray-100 hover:scale-105'
                      }`}
                    >
                      {d.getDate()}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Rutina de hoy */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 shadow-lg border border-white/50 mb-8 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-white/30"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
              <motion.h2 
                className="text-xl font-bold text-gray-900 flex items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-2 rounded-xl mr-3 shadow-lg">
                  <FiTarget className="text-white text-lg" />
                </div>
                Hoy: {rutinaHoy.titulo}
              </motion.h2>
              {rutinaHoy.duracion && (
                <motion.span 
                  className="text-xs bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 px-3 py-2 rounded-full font-bold shadow-sm"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.7, type: "spring" }}
                >
                  {rutinaHoy.duracion}
                </motion.span>
              )}
            </div>

            {rutinaHoy.contenido?.secciones ? (
              <div className="space-y-6">
                {rutinaHoy.contenido.secciones.map((sec, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + (i * 0.1), duration: 0.5 }}
                    className="relative bg-gradient-to-r from-blue-50/50 to-indigo-50/30 rounded-xl p-5"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full"></div>
                    <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mr-3"></div>
                      {sec.grupoMuscular}
                    </h3>
                    <ul className="space-y-2 ml-5">
                      {sec.ejercicios?.slice(0, 3).map((e, idx) => (
                        <motion.li 
                          key={idx} 
                          className="text-sm text-gray-700 flex items-center font-medium"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.9 + (i * 0.1) + (idx * 0.05) }}
                        >
                          <span className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mr-3" />
                          {e.nombre}
                        </motion.li>
                      ))}
                      {sec.ejercicios?.length > 3 && (
                        <li className="text-sm text-blue-600 italic font-medium ml-4">
                          +{sec.ejercicios.length - 3} ejercicios más
                        </li>
                      )}
                    </ul>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8, type: "spring" }}
                  className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <div className="text-2xl">🏖️</div>
                </motion.div>
                <p className="text-gray-600 font-semibold text-lg">No hay rutina programada para hoy</p>
                <p className="text-sm text-gray-500 mt-2 font-medium">¡Día de descanso merecido!</p>
              </div>
            )}
          </div>
        </motion.div>

        {/* Botón Ver rutinas completas */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <motion.button
            onClick={() => navigate('/rutinas')}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-5 px-8 rounded-2xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
            <span className="relative z-10 flex items-center text-lg">
              Ver rutinas completas
              <FiArrowRight className="ml-3 text-xl" />
            </span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
