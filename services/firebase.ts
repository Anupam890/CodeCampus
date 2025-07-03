import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDiDWqCix5_1Hlrri7c_r362kz0lGwGHWA",
    authDomain: "codecampus-fc1be.firebaseapp.com",
    projectId: "codecampus-fc1be",
    storageBucket: "codecampus-fc1be.firebasestorage.app",
    messagingSenderId: "269972811583",
    appId: "1:269972811583:web:8a2fc434792fdc26b46d8a"
};

export const firebase = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebase);
export const googleProvider = new GoogleAuthProvider();