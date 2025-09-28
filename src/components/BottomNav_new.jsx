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
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-white border border-gray-200 rounded-2xl px-4 py-2 shadow-lg z-50"
    >
      <div className="flex items-center space-x-1">
        {navItems.map(({ path, icon: Icon, label }) => {
          const isActive = location.pathname === path;
          
          return (
            <motion.div
              key={path}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={path}
                className={`flex items-center justify-center w-12 h-12 rounded-xl transition-all ${
                  isActive
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Icon className="w-5 h-5" />
              </Link>
            </motion.div>
          );
        })}
        
        {/* Separador */}
        <div className="w-px h-8 bg-gray-200 mx-2" />
        
        {/* Botón logout */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleLogout}
          className="flex items-center justify-center w-12 h-12 text-red-500 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all"
        >
          <FiLogOut className="w-5 h-5" />
        </motion.button>
      </div>
    </motion.nav>
  );
}

export default BottomNav;
