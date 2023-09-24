/* eslint-disable @typescript-eslint/no-explicit-any */
import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../redux/hook";

interface IProps {
  children: any;
}
const PrivateRoute = ({ children }: IProps) => {
  const { user, token } = useAppSelector((state) => state.auth);
  const location = useLocation();
  if (user && token) {
    return children;
  }
  return <Navigate to="/auth/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
