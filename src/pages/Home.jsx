import React from 'react';
import { motion } from 'framer-motion';
import { FiActivity, FiArrowRight } from 'react-icons/fi';
import { useLocation, useNavigate } from 'react-router-dom';
import rutinasData from '../data/rutinasData';
import rutinasDataRicardo from '../data/rutinasDataRicardo';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home({ 
  profileImageUrl = "https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  backgroundImageUrl = "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
}) {
  const location = useLocation();
  const navigate = useNavigate();
  const username = location.state?.username || 'Usuario';

  // Obtener rutinas según el usuario
  const userData = JSON.parse(sessionStorage.getItem('userData'));
  const rutinas = userData?.username === 'ricardo' ? rutinasDataRicardo : rutinasData;

  // Obtener el día actual
  const todayIndex = new Date().getDay() === 0 ? 0 : new Date().getDay() - 1;
  const rutinaHoy = rutinas[todayIndex];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    appendDots: dots => (
      <div className="custom-dots-container">
        <ul className="flex justify-center space-x-2">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-2 h-2 rounded-full bg-blue-400/30 transition-colors duration-300" />
    ),
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start bg-black text-white overflow-hidden">
      {/* Fondo mejorado con animación sutil */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0"
      >
        <img
          src={backgroundImageUrl}
          alt="Background"
          className="w-full h-full object-cover opacity-20 blur-sm animate-pulse-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/80 to-black/70" />
      </motion.div>

      {/* Contenido principal */}
      <div className="relative z-10 w-full max-w-sm flex flex-col items-center px-4 pt-8">
        
        {/* Header con efecto neón sutil */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 shadow-xl"
        >
          <h1 className="text-xl font-medium text-gray-300 tracking-wider">Good Morning,</h1>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent mt-1 tracking-tight">
            {username}
          </h2>
        </motion.div>

        {/* Tarjeta de perfil con efecto de halo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mb-8 group"
        >
          <div className="relative w-44 h-44 rounded-full border-4 border-transparent bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 p-1 shadow-lg hover:shadow-xl transition-all duration-500">
            <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden relative">
              <img
                src={profileImageUrl}
                alt="Profile"
                className="w-40 h-40 rounded-full object-cover transform group-hover:scale-105 transition-transform duration-300 z-10"
              />
              <div className="absolute inset-0 bg-blue-400/10 rounded-full blur-md group-hover:opacity-50 opacity-0 transition-opacity duration-300" />
            </div>
            
            {/* Icono decorativo */}
            <div className="absolute -top-2 -right-2 bg-blue-500/20 p-2 rounded-full backdrop-blur-sm border border-blue-400/30">
              <FiActivity className="text-blue-400 w-6 h-6 animate-pulse" />
            </div>
          </div>

          {/* Anillo de progreso */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
          >
            <div className="w-48 h-48 rounded-full border-2 border-dashed border-blue-400/20 animate-pulse-slow" />
          </motion.div>
        </motion.div>

        {/* Carrusel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="w-full mb-8"
        >
          <h3 className="text-xl font-bold text-gray-300 mb-4 px-2 tracking-wide">
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Hoy trabajas:
            </span>
          </h3>
          <Slider {...sliderSettings} className="w-full">
            {rutinaHoy?.contenido?.secciones.map((seccion, index) => (
              <div key={index} className="px-2">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="backdrop-blur-sm bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all mx-2"
                >
                  <h4 className="text-lg font-semibold text-blue-400 mb-2 tracking-wide">
                    {seccion.grupoMuscular}
                  </h4>
                  <ul className="space-y-2">
                    {seccion.ejercicios.map((ejercicio, idx) => (
                      <li 
                        key={idx} 
                        className="text-sm text-gray-300 font-medium px-3 py-1.5 rounded-lg bg-white/5 tracking-wide"
                      >
                        {ejercicio.nombre}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            ))}
          </Slider>
        </motion.div>

        {/* Botón */}
        <motion.div
          className="w-full flex justify-center mb-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/rutinas')}
            className="px-8 py-3.5 text-lg font-bold text-white bg-gradient-to-r from-blue-500 to-teal-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-3"
          >
            <span>Ir a Rutinas</span>
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <FiArrowRight className="w-5 h-5" />
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;