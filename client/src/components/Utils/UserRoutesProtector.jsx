import { Outlet, Navigate } from "react-router-dom";

import { useUser } from "../../contexts/userContext/UserContext";

const UserRoutesProtector = () => {
    const { user } = useUser();

    if (user.userId === null || user.userId === undefined || user.userId === "") {
        return <Navigate to="/users/login" />;
    }

    return <Outlet />
};

export default UserRoutesProtector;