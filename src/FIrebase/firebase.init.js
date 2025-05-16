// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZkXFHTVKe9vOJGyRFaeMVHXCZUAHQsSE",
  authDomain: "coffee-store-1570b.firebaseapp.com",
  projectId: "coffee-store-1570b",
  storageBucket: "coffee-store-1570b.firebasestorage.app",
  messagingSenderId: "760061533466",
  appId: "1:760061533466:web:b89336c08b256215cde0a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);