import { createContext, useContext, useState, useEffect } from "react";
import { firebaseAuth } from "../config/firebase";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    userId: "",
    email: "",
  });

  useEffect(() => {
    const unsubscribe = firebaseAuth.onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        setUser({
          userId: firebaseUser.uid,
          email: firebaseUser.email,
        });
      } else {
        setUser({
          userId: "",
          email: "",
        });
      }

    });

    return () => unsubscribe();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
