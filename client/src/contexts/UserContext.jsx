import { createContext, useContext, useState, useEffect } from "react";
import { firebaseAuth } from "../config/firebase";
import PropTypes from "prop-types";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    userId: "",
    email: "",
    username: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = firebaseAuth.onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        setUser({
          userId: firebaseUser.uid,
          email: firebaseUser.email,
          username: firebaseUser.displayName,
        });
      } else {
        setUser({
          userId: "",
          email: "",
          username: "",
        });
      }
      setLoading(false);
    });

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

export const useUser = () => useContext(UserContext);
