import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { logout } from "../store/slices/authSlice";
import { firebaseAuth } from "../config/firebase"

const useNavigation = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);
    const [mobileNavStatus, setMobileNavStatus] = useState(false);
    const [profileDetailsVisibility, setProfileDetailsVisibility] = useState(false);

    const handleLogout = async () => {
        await logoutHandler();
        collapseNav();
    };

    const logoutHandler = async () => {
        await firebaseAuth.logout();
        dispatch(logout());
        navigate("/");
    };

    const expandNav = () => {
        setMobileNavStatus(!mobileNavStatus);
    };

    const collapseNav = () => {
        setMobileNavStatus(false);
        setProfileDetailsVisibility(false);
    };

    const expandProfile = () => {
        setProfileDetailsVisibility(!profileDetailsVisibility);
    };

    return {
        user,
        mobileNavStatus,
        profileDetailsVisibility,
        handleLogout,
        expandNav,
        collapseNav,
        expandProfile,
    };
};

export default useNavigation;
