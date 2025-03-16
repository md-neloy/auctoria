// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBm9WIczcxjnh7U2d12vLYFGhmnqdvOVtI",
  authDomain: "auctoria-platform.firebaseapp.com",
  projectId: "auctoria-platform",
  storageBucket: "auctoria-platform.firebasestorage.app",
  messagingSenderId: "744646970527",
  appId: "1:744646970527:web:b0fdd95c7fbbb3954d66aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);