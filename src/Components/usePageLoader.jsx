import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const usePageLoader = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [location]);

  return loading;
};

export default usePageLoader;