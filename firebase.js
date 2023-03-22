// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDFF3dMbDzO2GJKDi4ZO49XX_V4ZGQSGo",
  authDomain: "testtecnico-e1905.firebaseapp.com",
  projectId: "testtecnico-e1905",
  storageBucket: "testtecnico-e1905.appspot.com",
  messagingSenderId: "380895725181",
  appId: "1:380895725181:web:8116ffd5e63beb8b761314",
  measurementId: "G-4YDZLZPNQT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)