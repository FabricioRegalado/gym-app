import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden">
      {/* Fondo mejorado con efecto de partículas */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-emerald-900/30 transition-all duration-1000 ease-in-out">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-stripes.png')] opacity-20" />
      </div>

      {/* Texto principal con efecto de brillo */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="relative z-10 text-center"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
          <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 text-transparent bg-clip-text animate-text-shine">
            Domina tu cuerpo,
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-green-400 text-transparent bg-clip-text">
            supera tus límites
          </span>
        </h1>
        
        {/* Línea decorativa */}
        <div className="mx-auto w-48 h-1 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full my-8" />
      </motion.div>

      {/* Subtítulo con borde animado */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="relative z-10"
      >
        <p className="text-xl md:text-2xl text-gray-300 text-center max-w-2xl px-4 py-6 bg-black/40 backdrop-blur-sm rounded-xl border border-emerald-400/20 shadow-2xl">
          <span className="bg-gradient-to-r from-green-300 to-cyan-400 bg-clip-text text-transparent font-bold">
            Transforma tu físico
          </span>{" "}
          con rutinas inteligentes y seguimiento personalizado
        </p>
      </motion.div>

      {/* Botón mejorado con efecto de neón */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mt-12 relative group"
      >
        <Link 
          to="/rutinas" 
          className="relative z-20 px-16 py-5 text-xl font-bold rounded-2xl bg-gradient-to-br from-green-400 via-cyan-400 to-blue-500 text-black shadow-2xl transition-all duration-300 ease-out hover:scale-105 hover:shadow-emerald-400/30"
        >
          <span className="relative z-30">Comienza Ahora</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -rotate-12" />
        </Link>
        <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-cyan-500 blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-300 -z-10" />
      </motion.div>

      {/* Elementos decorativos dinámicos */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-green-500/20 to-cyan-500/20 blur-3xl rounded-full animate-pulse-slow"
        />
        <motion.div 
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl rounded-full animate-pulse-slow"
        />
      </div>

      {/* Efecto de grid sutil */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy-dark.png')] opacity-10" />
    </div>
  );
}

export default Home;