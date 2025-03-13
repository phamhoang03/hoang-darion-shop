import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const isLogin = useSelector((state) => state.authenSlice.isLogin);

  return isLogin ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRouter;
