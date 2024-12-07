// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjlwjmBBtcmiLkvpO0zoWerlOZVR0jOUQ",
  authDomain: "equi-sports-5d00a.firebaseapp.com",
  projectId: "equi-sports-5d00a",
  storageBucket: "equi-sports-5d00a.firebasestorage.app",
  messagingSenderId: "132662936279",
  appId: "1:132662936279:web:60e84f60810c69bfd72692",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
