// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBhld-6znLXI0f7fuPQOwNsuisZOhY6Sag",
    authDomain: "interview-prep-app-a8aa0.firebaseapp.com",
    projectId: "interview-prep-app-a8aa0",
    storageBucket: "interview-prep-app-a8aa0.firebasestorage.app",
    messagingSenderId: "94513308010",
    appId: "1:94513308010:web:535d2c6c38799ae1b28513",
    measurementId: "G-1YR3BB4P09"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);