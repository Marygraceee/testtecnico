import { collection, doc, onSnapshot } from "firebase/firestore";
import { createContext, useState, useEffect } from "react";
import { db } from "../firebase";

export const FirebaseContext = createContext();

export const FirebaseContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [activities, setActivities] = useState([]);
  const [completedActivities, setCompletedActivities] = useState([]);

  useEffect(() => {
    const unsubscribeUsers = onSnapshot(collection(db, "users"), (snapshot) => {
      const data = snapshot.docs.map((doc) => doc.id);
      setUsers(data);
    });

    const unsubscribeActivities = onSnapshot(collection(db, "activities"), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

      // Filter the activities based on their completion status
      const incompleteActivities = data.filter(activity => !activity.completed);
      const completedActivities = data.filter(activity => activity.completed);

      setActivities(incompleteActivities);
      setCompletedActivities(completedActivities);
    });
  
    return () => {
      unsubscribeUsers();
      unsubscribeActivities();
    };
  }, []);

  return <FirebaseContext.Provider value={{ users, activities, completedActivities }}>{children}</FirebaseContext.Provider>;
};
