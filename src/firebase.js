import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCms68Q9_-0giFOcYsBiFrnwR8s-3upnS0",
  authDomain: "nilos-trip.firebaseapp.com",
  projectId: "nilos-trip",
  storageBucket: "nilos-trip.firebasestorage.app",
  messagingSenderId: "718711463325",
  appId: "1:718711463325:web:7fe1ba37408cf70dff6374",
  measurementId: "G-MZQZSGJG6L"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);