import { collection, doc, onSnapshot } from "firebase/firestore";
import { createContext, useState, useEffect } from "react";
import { db } from "../firebase";

export const FirebaseContext = createContext();

export const FirebaseContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const unsubscribeUsers = onSnapshot(collection(db, "users"), (snapshot) => {
      const data = snapshot.docs.map((doc) => doc.id);
      setUsers(data);
    });

    const unsubscribeActivities = onSnapshot(collection(db, "activities"), (snapshot) => {
        const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setActivities(data);
      });
  
    

    return () => {
      unsubscribeUsers();
      unsubscribeActivities();
    };
  }, []);

  return <FirebaseContext.Provider value={{ users, activities }}>{children}</FirebaseContext.Provider>;
};
