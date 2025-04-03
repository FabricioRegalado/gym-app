import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Rutinas from './pages/Rutinas';
import BottomNav from './components/BottomNav';

function PrivateRoute({ element: Component, ...rest }) {
  const isAuthenticated = sessionStorage.getItem('authToken') !== null;
  return isAuthenticated ? <Component {...rest} /> : <Navigate to="/login" replace />;
}

function App() {
  useEffect(() => {
    const preventActions = (e) => {
      e.preventDefault();
    };

    // Bloquear capturas con combinaciones de teclas
    const blockKeyCombinations = (e) => {
      if (e.ctrlKey && (e.key === 'p' || e.key === 's')) {
        e.preventDefault();
      }
    };

    // Overlay de seguridad al cambiar pestaña/app
    const handleVisibilityChange = () => {
      const overlay = document.getElementById('security-overlay');
      if (document.visibilityState === 'hidden') {
        overlay?.classList.remove('hidden');
      } else {
        overlay?.classList.add('hidden');
      }
    };

    // Event listeners
    document.addEventListener('contextmenu', preventActions); // Bloquear clic derecho
    document.addEventListener('keydown', blockKeyCombinations); // Bloquear atajos
    document.addEventListener('visibilitychange', handleVisibilityChange); // Detectar cambio de app

    return () => {
      document.removeEventListener('contextmenu', preventActions);
      document.removeEventListener('keydown', blockKeyCombinations);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <Router basename="/gym-app">
      {/* Overlay de seguridad */}
      <div
        id="security-overlay"
        className="hidden fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center text-white text-xl"
      >
        ¡Contenido protegido contra capturas!
      </div>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<PrivateRoute element={Home} />} />
        <Route path="/rutinas" element={<PrivateRoute element={Rutinas} />} />
      </Routes>
      <BottomNav />
    </Router>
  );
}

export default App;