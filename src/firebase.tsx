// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCNm9qyiDD-p5janvm-5EZ__dFwbxLutnA",
  authDomain: "dynamic-portfolio-bbc4e.firebaseapp.com",
  projectId: "dynamic-portfolio-bbc4e",
  storageBucket: "dynamic-portfolio-bbc4e.firebasestorage.app",
  messagingSenderId: "891058767275",
  appId: "1:891058767275:web:d062c54419aa91858dbeee",
  measurementId: "G-9R9XKKC9J0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
