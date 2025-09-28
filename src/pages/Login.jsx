import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiUser, FiLock, FiLogIn } from 'react-icons/fi';

function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = () => {
      const token = sessionStorage.getItem('authToken');
      if (token) {
        navigate('/', { replace: true });
      }
    };

    checkAuth();
    window.addEventListener('popstate', checkAuth);

    return () => {
      window.removeEventListener('popstate', checkAuth);
    };
  }, [navigate]);

  const users = [
    { username: 'admin', password: 'adminPro2025' },
    { username: 'rodrigo', password: 'rod20252' },
    { username: 'david', password: 'dav20253' },
    { username: 'efrain', password: 'efra20251' },
    { username: 'luis', password: 'lu20255' },
    { username: 'ricardo', password: 'ric20254' },
    { username: 'wendy', password: 'wen20256' },
  ];

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const generateSecureToken = () => {
    const randomBuffer = new Uint32Array(1);
    window.crypto.getRandomValues(randomBuffer);
    return randomBuffer[0].toString(36) + Date.now().toString(36);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simular delay de autenticación
    await new Promise(resolve => setTimeout(resolve, 800));

    const foundUser = users.find(
      (user) => user.username === username && user.password === password
    );

    if (foundUser) {
      const token = generateSecureToken();
      sessionStorage.setItem('authToken', token);
      sessionStorage.setItem('userData', JSON.stringify(foundUser));
      
      navigate('/', { replace: true });
    } else {
      setError('Usuario o contraseña incorrectos');
    }
    
    setIsLoading(false);
  };

  // Efecto para limpiar el almacenamiento al salir
  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.removeItem('authToken');
      sessionStorage.removeItem('userData');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-100/10 to-indigo-100/10 rounded-full blur-3xl"></div>
      
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.25, 0, 1] }}
        className="w-full max-w-sm relative z-10"
      >
        {/* Logo/Header */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.25, 0.25, 0, 1] }}
          className="text-center mb-10"
        >
          <motion.div 
            className="relative mx-auto mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
              <FiUser className="text-white text-3xl" />
            </div>
            <div className="absolute -inset-2 bg-gradient-to-br from-blue-600/20 to-indigo-700/20 rounded-3xl blur-lg -z-10"></div>
          </motion.div>
          <motion.h1 
            className="text-3xl font-bold text-gray-900 mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Bienvenido
          </motion.h1>
          <motion.p 
            className="text-gray-600 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Tu rutina perfecta te espera
          </motion.p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6, ease: [0.25, 0.25, 0, 1] }}
          className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 p-8 relative overflow-hidden"
        >
          {/* Efecto glass */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/40 rounded-2xl"></div>
          <div className="relative z-10">
            <form onSubmit={handleLogin} className="space-y-6">
              {/* Campo Usuario */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Usuario
                </label>
                <div className="relative group">
                  <FiUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors duration-200" />
                  <input
                    type="text"
                    className="w-full pl-12 pr-4 py-4 bg-gray-50/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white outline-none transition-all duration-200 text-gray-900 placeholder-gray-500"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Ingresa tu usuario"
                    required
                    autoComplete="username"
                  />
                </div>
              </motion.div>

              {/* Campo Contraseña */}
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Contraseña
                </label>
                <div className="relative group">
                  <FiLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors duration-200" />
                  <input
                    type="password"
                    className="w-full pl-12 pr-4 py-4 bg-gray-50/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white outline-none transition-all duration-200 text-gray-900 placeholder-gray-500"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Ingresa tu contraseña"
                    required
                    autoComplete="current-password"
                  />
                </div>
              </motion.div>

              {/* Error */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  className="bg-red-50/80 backdrop-blur-sm border border-red-200/50 text-red-700 px-5 py-4 rounded-xl text-sm font-medium shadow-sm"
                >
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    {error}
                  </div>
                </motion.div>
              )}

              {/* Botón Submit */}
              <motion.button
                type="submit"
                disabled={isLoading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-4 px-6 rounded-xl hover:from-blue-700 hover:to-indigo-700 focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
                {isLoading ? (
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <FiLogIn className="mr-3 text-lg" />
                    Iniciar sesión
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* Footer info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-center mt-8"
        >
          <div className="flex items-center justify-center space-x-2 text-gray-500">
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <p className="text-sm font-medium">
              Gym App • Versión 1.0
            </p>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Login;
