import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAhwHiQKcV4qLCl6vEpfjJTjS_uWXjXZm8",
  authDomain: "interview-platform-54a39.firebaseapp.com",
  projectId: "interview-platform-54a39",
  storageBucket: "interview-platform-54a39.firebasestorage.app",
  messagingSenderId: "924696542317",
  appId: "1:924696542317:web:5d6a20f613bf08469e9364",
  measurementId: "G-GGWGH1J22Y",
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
