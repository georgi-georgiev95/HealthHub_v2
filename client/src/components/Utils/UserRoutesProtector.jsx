import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const UserRoutesProtector = () => {
  const user = useSelector((state) => state.auth.user);

  if (user === null) {
    return <Navigate to="/users/login" />;
  }

  return <Outlet />;
};

export default UserRoutesProtector;
