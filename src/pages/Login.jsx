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

      navigate('/', { replace: true });
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-emerald-900/30 p-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-stripes.png')] opacity-20" />
      
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="p-8 rounded-2xl bg-gray-900/80 backdrop-blur-lg border border-emerald-400/20 shadow-2xl space-y-8">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center text-4xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent"
          >
            Bienvenido
          </motion.h1>

          <form onSubmit={handleLogin} className="space-y-6">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <label className="block text-gray-300 mb-3 font-medium">Usuario</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700/50 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 text-white placeholder-gray-500 transition-all outline-none"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Ingresa tu usuario"
                required
                autoComplete="username"
              />
            </motion.div>

            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <label className="block text-gray-300 mb-3 font-medium">Contraseña</label>
              <input
                type="password"
                className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700/50 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 text-white placeholder-gray-500 transition-all outline-none"
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
                className="text-center bg-red-500/20 px-4 py-2 rounded-lg border border-red-400/50 text-red-300"
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
                className="w-full py-3 rounded-xl bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 text-black font-bold shadow-lg hover:shadow-cyan-400/20 hover:scale-[1.02] transition-all duration-300 relative overflow-hidden"
              >
                <span className="relative z-10">Entrar</span>
                <div className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-20 transition-opacity" />
              </button>
            </motion.div>
          </form>
        </div>
      </motion.div>

      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 blur-3xl rounded-full animate-pulse-slow"
        />
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-3xl rounded-full animate-pulse-slow"
        />
      </div>
    </div>
  );
}

export default Login;