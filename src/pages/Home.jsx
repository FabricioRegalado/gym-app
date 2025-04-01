import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

function Home() {
  const workoutDays = [
    { 
      id: 1, 
      src: 'images/gym1.jpg', 
      title: 'Lunes: Pecho / Espalda',
      description: 'Press plano, inclinado y declinado'
    },
    { 
      id: 2, 
      src: 'images/gym2.jpg', 
      title: 'Martes: Pierna (Cuadriceps)',
      description: 'Dominadas, remo con barra y jalón al pecho'
    },
    { 
      id: 3, 
      src: 'images/gym3.jpg', 
      title: 'Miércoles: Hombro / Brazo',
      description: 'Sentadillas, prensa y peso muerto'
    },
    { 
      id: 4, 
      src: 'images/gym4.jpg', 
      title: 'Jueves: Femoral / Pecho / Triceps',
      description: 'Press militar, elevaciones laterales y face pull'
    },
    { 
      id: 5, 
      src: 'images/gym5.jpg', 
      title: 'Viernes: Hombros / Espalda / Biceps',
      description: 'Curl de bíceps, tríceps en polea y martillo'
    }
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-gray-900 to-gray-950 text-white overflow-hidden pt-16">
      {/* Efectos de fondo */}
      <div className="absolute inset-0 bg-[radial-gradient(at_top_left,_#1a1a1a_10%,transparent_70%)]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] opacity-10 mix-blend-soft-light" />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 w-full max-w-6xl flex flex-col items-center py-8 px-4">
        {/* Cabecera */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, type: 'spring' }}
          className="w-full text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 animate-pulse">
            Transforma tu Cuerpo
          </h1>
          <p className="mt-4 text-gray-300 text-lg">Tu viaje fitness comienza aquí</p>
        </motion.div>

        {/* Slider de días de entrenamiento */}
        <div className="w-full mb-16 max-w-4xl px-4">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectFade]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            loop={true}
            effect={'fade'}
            className="rounded-3xl shadow-2xl overflow-hidden"
          >
            {workoutDays.map((day) => (
              <SwiperSlide key={day.id}>
                <div className="relative h-96 w-full">
                  <img
                    src={day.src}
                    alt={day.title}
                    className="w-full h-full object-cover brightness-75"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-2"
                    >
                      <h2 className="text-3xl font-bold text-white">{day.title}</h2>
                      <p className="text-emerald-400 font-medium">{day.description}</p>
                    </motion.div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Grid de características */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full px-4">
          {[
            { icon: '🏋️', color: 'emerald-400', text: 'Rutinas Dinámicas', animation: { rotate: [0, 15, -15, 0] } },
            { icon: '📊', color: 'cyan-400', text: 'Seguimiento Inteligente', animation: { y: [0, -10, 0] } },
            { icon: '⚡', color: 'purple-400', text: 'Adaptación Automática', animation: { scale: [1, 1.2, 1] } },
            { icon: '🕒', color: 'yellow-400', text: 'Optimización de Tiempo', animation: { rotate: [0, 360] } },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + index * 0.2 }}
              className="p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl flex flex-col items-center gap-4 hover:bg-gray-800/70 transition-all duration-300 hover:-translate-y-2"
            >
              <motion.div
                className={`text-${feature.color} text-3xl p-4 bg-gray-800/50 rounded-full`}
                animate={feature.animation}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="font-semibold text-center text-sm md:text-base">{feature.text}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;