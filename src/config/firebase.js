// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC4FhRXYT9Jajo3g-V-BZtFCXYRsFchtYU",
  authDomain: "hackathon-5a79c.firebaseapp.com",
  projectId: "hackathon-5a79c",
  storageBucket: "hackathon-5a79c.appspot.com",
  messagingSenderId: "1077407906411",
  appId: "1:1077407906411:web:a9d370176999c85ade8f2e",
  measurementId: "G-N0P9FMFWJH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);
export const googleProvider = new GoogleAuthProvider();
// const analytics = getAnalytics(app);