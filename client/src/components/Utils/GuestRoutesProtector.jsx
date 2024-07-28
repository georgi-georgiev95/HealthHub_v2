import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const GuestRoutesProtector = () => {
  const user = useSelector((state) => state.auth.user);

  if (user !== null) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default GuestRoutesProtector;
