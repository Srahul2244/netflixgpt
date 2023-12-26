// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8Np7KHnzt1P23FRDoitvsT1DBt1SqdZE",
  authDomain: "netflixgpt-3a4b5.firebaseapp.com",
  projectId: "netflixgpt-3a4b5",
  storageBucket: "netflixgpt-3a4b5.appspot.com",
  messagingSenderId: "919982848476",
  appId: "1:919982848476:web:ec6ca9a12f9c3ec237f719",
  measurementId: "G-4F2LDZ7QEE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
