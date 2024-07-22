import { useState, useEffect } from 'react';
import PropTypes from "prop-types";

import { verifyUser } from "../services/userService";
import UserContext from './UserContext';

const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        userId: "",
        email: "",
        username: "",
    });
    const [loading, setLoading] = useState(true);
    

    useEffect(() => {
        const unsubscribe = verifyUser(setUser, setLoading);
        return () => unsubscribe();
    }, []);

    return (
        <UserContext.Provider value={{
            user,
            setUser,
            loading,
            setLoading,
        }}>
            {children}
        </UserContext.Provider>
    );
};

UserProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default UserProvider;