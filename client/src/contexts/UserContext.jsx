import { createContext, useContext, useState, useEffect } from "react";
import { verifyUser } from "../services/userService";
import PropTypes from "prop-types";

const UserContext = createContext();
export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
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
    <UserContext.Provider value={{ user, setUser, loading, setLoading }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

