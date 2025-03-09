import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { HomeIcon, FireIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

function BottomNav() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const isAuthenticated = () => {
    return sessionStorage.getItem('authToken') !== null;
  };

  const navItemClasses = (path) => {
    const isActive = location.pathname === path;
    return `flex items-center justify-center w-14 h-14 rounded-xl transition-all ${
      isActive 
        ? 'bg-gradient-to-r from-green-400 to-cyan-400 shadow-lg shadow-cyan-400/20'
        : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/30 hover:shadow-md hover:shadow-cyan-400/10'
    }`;
  };

  const handleLogout = () => {
    sessionStorage.clear();
    window.history.replaceState(null, '', '/login');
    navigate('/login', { replace: true });
  };

  if (!isAuthenticated()) {
    return null;
  }

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-900/80 backdrop-blur-lg border border-emerald-400/20 rounded-2xl px-4 py-2 z-50 shadow-2xl shadow-emerald-400/20"
    >
      <div className="flex space-x-3">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link to="/" className={navItemClasses('/')}>
            <HomeIcon className={`h-7 w-7 ${location.pathname === '/' ? 'text-black' : 'text-current'}`} />
          </Link>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link to="/rutinas" className={navItemClasses('/rutinas')}>
            <FireIcon className={`h-7 w-7 ${location.pathname === '/rutinas' ? 'text-black' : 'text-current'}`} />
          </Link>
        </motion.div>

        {isAuthenticated() && (
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <button 
              onClick={handleLogout}
              className="flex items-center justify-center w-14 h-14 rounded-xl bg-gray-800/50 text-red-400 hover:bg-gradient-to-r hover:from-red-500 hover:to-pink-500 hover:text-white transition-all group"
            >
              <ArrowRightOnRectangleIcon className="h-7 w-7 group-hover:scale-110 transition-transform" />
            </button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}

export default BottomNav;