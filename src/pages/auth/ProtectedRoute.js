import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children }) => {
    const {user} = useSelector((state) => state?.user)
  
  if (!user) {
    return  <Navigate to='/signin' />;
  }
  return children;
};
export default ProtectedRoute;