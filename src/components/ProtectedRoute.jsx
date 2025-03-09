import { useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = sessionStorage.getItem('authToken');
    if (!authToken) {
      navigate('/login', { replace: true });
    }
  }, []); // Array de dependencias vacío

  return <Outlet />;
};

export default ProtectedRoute;