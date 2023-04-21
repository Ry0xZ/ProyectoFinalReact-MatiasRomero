// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnL_IL112HZL4JH6LOvTVaeHQ8EAVXVrA",
  authDomain: "rx-store-ch.firebaseapp.com",
  projectId: "rx-store-ch",
  storageBucket: "rx-store-ch.appspot.com",
  messagingSenderId: "617695618267",
  appId: "1:617695618267:web:0f8dd281cafe0b442318fe"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
