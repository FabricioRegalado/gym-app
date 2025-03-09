import React from 'react';
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
  return (
    <Router>
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