import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function Login() {
  const navigate = useNavigate();
  const [sessionToken, setSessionToken] = useState(null);

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
    { username: 'ricardo', password: 'rica20254' },
    { username: 'luis', password: 'lu20255' },
    { username: 'wendy', password: 'wen20256' },
  ];

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const generateSecureToken = () => {
    const randomBuffer = new Uint32Array(1);
    window.crypto.getRandomValues(randomBuffer);
    return randomBuffer[0].toString(36) + Date.now().toString(36);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const foundUser = users.find(
      (user) => user.username === username && user.password === password
    );

    if (foundUser) {
      const authToken = generateSecureToken();
      sessionStorage.setItem('authToken', authToken);
      sessionStorage.setItem('userData', JSON.stringify({
        username: foundUser.username,
        loggedIn: new Date().toISOString()
      }));

      navigate('/', { replace: true, state: { username: foundUser.username } });
    } else {
      setError('Credenciales inválidas');
      setPassword('');
    }
  };

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (sessionStorage.getItem('authToken')) {
        e.preventDefault();
        e.returnValue = '';
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative">
      {/* Patrón de fondo */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-stripes.png')] opacity-10" />
      
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-sm p-6 bg-gray-900/80 backdrop-blur-md border border-gray-700/50 rounded-2xl shadow-2xl"
      >
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center text-3xl font-bold text-blue-400"
        >
          Inicia Sesión
        </motion.h1>

        <form onSubmit={handleLogin} className="mt-8 space-y-5">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <label className="block text-gray-300 mb-1 font-medium">Usuario</label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500 outline-none"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Tu usuario"
              required
              autoComplete="username"
            />
          </motion.div>

          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <label className="block text-gray-300 mb-1 font-medium">Contraseña</label>
            <input
              type="password"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 focus:border-teal-500 focus:ring-2 focus:ring-teal-500 text-white placeholder-gray-500 outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              autoComplete="current-password"
            />
          </motion.div>

          {error && (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center bg-red-500/20 px-4 py-2 rounded-lg border border-red-500/50 text-red-300"
            >
              {error}
            </motion.div>
          )}

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-teal-500 text-black font-bold shadow-lg hover:shadow-blue-500/20 hover:scale-[1.02] transition-all duration-300"
            >
              Entrar
            </button>
          </motion.div>
        </form>
      </motion.div>

      {/* Efectos decorativos */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.2 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute top-16 left-16 w-52 h-52 bg-blue-400/20 blur-3xl rounded-full"
        />
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.2 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="absolute bottom-16 right-16 w-52 h-52 bg-teal-400/20 blur-3xl rounded-full"
        />
      </div>
    </div>
  );
}

export default Login;
