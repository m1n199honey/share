import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const userInfo = useSelector((state) => state?.auth);
  let location = useLocation();
  if (!userInfo.isAuthenticated) {
    return <Navigate to="/" state={{ from: location }} replace />;
  } else if (userInfo.isAuthenticated && location.pathname === "/") {
    return <Navigate to="/admin" />;
  }
  return children;
};

export default ProtectedRoute;
