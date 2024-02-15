import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate('/'); // redirect to home page after 5 seconds
    }, 5000);

    // Clear the timeout if the component is unmounted
    return () => clearTimeout(timeoutId);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-100">
      <h1 className="text-6xl mb-4">404</h1>
      <p className="text-xl">The page you are looking for does not exist. You will be redirected to the home page shortly.</p>
    </div>
  );
};

export default NotFound;