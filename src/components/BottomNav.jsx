import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiHome, FiTarget, FiLogOut } from 'react-icons/fi';
import { motion } from 'framer-motion';

function BottomNav() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const isAuthenticated = () => {
    return sessionStorage.getItem('authToken') !== null;
  };

  const handleLogout = () => {
    sessionStorage.clear();
    window.history.replaceState(null, '', '/login');
    navigate('/login', { replace: true });
  };

  if (!isAuthenticated()) {
    return null;
  }

  const navItems = [
    { path: '/', icon: FiHome, label: 'Inicio' },
    { path: '/rutinas', icon: FiTarget, label: 'Rutinas' },
  ];

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25, delay: 0.2 }}
      className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-white/80 backdrop-blur-xl border border-white/20 rounded-3xl px-6 py-3 shadow-2xl z-50 hover:shadow-3xl transition-all duration-300"
    >
      <div className="flex items-center space-x-2">
        {navItems.map(({ path, icon: Icon, label }) => {
          const isActive = location.pathname === path;
          
          return (
            <motion.div
              key={path}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <Link
                to={path}
                className={`flex items-center justify-center w-14 h-14 rounded-2xl transition-all duration-300 relative overflow-hidden ${
                  isActive
                    ? 'bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100/80'
                }`}
              >
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 animate-pulse"></div>
                )}
                <Icon className={`w-6 h-6 relative z-10 ${isActive ? 'drop-shadow-sm' : ''}`} />
              </Link>
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </motion.div>
          );
        })}
        
        {/* Separador */}
        <div className="w-px h-10 bg-gradient-to-b from-transparent via-gray-300 to-transparent mx-3" />
        
        {/* Botón logout */}
        <motion.button
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleLogout}
          className="flex items-center justify-center w-14 h-14 text-red-500 hover:text-red-600 hover:bg-red-50/80 rounded-2xl transition-all duration-300 relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-red-50/0 via-red-100/50 to-red-50/0 -skew-x-12 group-hover:translate-x-full transition-transform duration-700"></div>
          <FiLogOut className="w-6 h-6 relative z-10" />
        </motion.button>
      </div>
    </motion.nav>
  );
}

export default BottomNav;
