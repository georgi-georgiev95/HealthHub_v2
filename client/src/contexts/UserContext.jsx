import { createContext, useContext, useState, useEffect } from "react";
import { firebaseAuth } from "../config/firebase";
import { getDoc, doc } from "firebase/firestore";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    userId: "",
    email: "",
    username: "",
  });
  const [loading, setLoading] = useState(true);

  const getUserData = async (userId) => {
    const userDoc = await getDoc(doc(firebaseAuth.db(), "users", userId));
    const userDataFromDB = userDoc.data();
    return userDataFromDB;
  };

  useEffect(() => {
    const unsubscribe = firebaseAuth.onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        getUserData(firebaseUser.uid).then((userDataFromDB) => {
          setUser({
            userId: firebaseUser.uid,
            email: firebaseUser.email,
            username: userDataFromDB.username,
          });
        })
      } else {
        setUser({
          userId: "",
          email: "",
        });
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
