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
        ? 'bg-gradient-to-br from-emerald-400/90 to-cyan-400/90 shadow-lg shadow-cyan-400/20'
        : 'bg-gray-800/20 text-gray-300 hover:bg-gray-700/20 hover:shadow-md hover:shadow-cyan-400/10'
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
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-900/60 backdrop-blur-xl border border-gray-700/30 rounded-xl px-3 py-1.5 z-50 shadow-2xl shadow-black/40 sm:bottom-2"
    >
      <div className="flex gap-2">
        <motion.div 
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}
          className="relative"
        >
          <Link to="/" className={navItemClasses('/')}>
            <HomeIcon className={`h-6 w-6 ${location.pathname === '/' ? 'text-gray-900' : 'text-gray-300'}`} />
            {location.pathname === '/' && (
              <div className="absolute -top-1.5 w-1.5 h-1.5 bg-emerald-400 rounded-full" />
            )}
          </Link>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}
          className="relative"
        >
          <Link to="/rutinas" className={navItemClasses('/rutinas')}>
            <FireIcon className={`h-6 w-6 ${location.pathname === '/rutinas' ? 'text-gray-900' : 'text-gray-300'}`} />
            {location.pathname === '/rutinas' && (
              <div className="absolute -top-1.5 w-1.5 h-1.5 bg-cyan-400 rounded-full" />
            )}
          </Link>
        </motion.div>

        {isAuthenticated() && (
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            <button 
              onClick={handleLogout}
              className="flex items-center justify-center w-14 h-14 rounded-xl bg-gray-800/20 text-red-400/80 hover:bg-red-500/20 hover:text-red-300 transition-all group"
            >
              <ArrowRightOnRectangleIcon className="h-6 w-6 group-hover:scale-110 transition-transform" />
              <div className="absolute -top-1.5 w-1.5 h-1.5 bg-red-400/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}

export default BottomNav;