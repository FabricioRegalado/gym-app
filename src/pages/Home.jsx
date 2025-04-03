import React from 'react';
import { motion } from 'framer-motion';
import { FiHeart, FiUser, FiActivity, FiSettings } from 'react-icons/fi';
import { useLocation } from 'react-router-dom';

function Home() {
  const location = useLocation();
  const username = location.state?.username || 'Usuario';
  const basePath = process.env.NODE_ENV === 'production' ? process.env.PUBLIC_URL : '';

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start bg-black text-white overflow-hidden">
      {/* Fondo principal con imagen tenue */}
      <div className="absolute inset-0">
        <img
          src={`${basePath}/images/gym1.jpg`} // Ruta dinámica según el entorno
          alt="Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 w-full max-w-sm flex flex-col items-center px-4 pt-12">
        
        {/* Encabezado (o saludo) */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h1 className="text-xl font-semibold text-gray-200">Good Morning,</h1>
          <h2 className="text-3xl font-extrabold text-white mt-1">{username}</h2>
        </motion.div>

        {/* Imagen de perfil con anillo circular */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mb-6"
        >
          <div className="w-44 h-44 rounded-full border-4 border-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
            <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
              <img
                src={`${basePath}/images/gym2.jpg`} // Ruta dinámica según el entorno
                alt="Ella Cunningham"
                className="w-40 h-40 rounded-full object-cover"
              />
            </div>
          </div>
          {/* Indicador circular “progreso” (si quisieras simular un anillo de progreso) */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
          >
            <div className="w-48 h-48 rounded-full border border-pink-600/20" />
          </motion.div>
        </motion.div>

       
      </div>
    </div>
  );
}

export default Home;
