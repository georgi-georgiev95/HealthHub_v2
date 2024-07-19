import { useState, useEffect } from 'react';
import { verifyUser } from "../services/userService";
import UserContext from './UserContext';
import PropTypes from "prop-types";

const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        userId: "",
        email: "",
        username: "",
    });
    const [loading, setLoading] = useState(true);
    const [isCommentCreated, setIsCommentCreated] = useState(false);
    const [isCommentEdited, setIsCommentEdited] = useState(false);

    useEffect(() => {
        const unsubscribe = verifyUser(setUser, setLoading);
        return () => unsubscribe();
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser, loading, setLoading, isCommentCreated, setIsCommentCreated, isCommentEdited, setIsCommentEdited }}>
            {children}
        </UserContext.Provider>
    );
};

UserProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default UserProvider;