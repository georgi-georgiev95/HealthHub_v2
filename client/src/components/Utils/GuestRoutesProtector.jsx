import { Outlet, Navigate } from "react-router-dom";

import { useUser } from "../../contexts/userContext/UserContext";

const GuestRoutesProtector = () => {
  const { user } = useUser();

  if (user.userId !== null && user.userId !== undefined && user.userId !== "") {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default GuestRoutesProtector;
