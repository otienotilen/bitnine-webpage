import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBETo-5vZNrDmm_D_HOe9192uBZ7QaRZOU",
  authDomain: "login-register-app-d36d4.firebaseapp.com",
  projectId: "login-register-app-d36d4",
  storageBucket: "login-register-app-d36d4.appspot.com",
  messagingSenderId: "369096720846",
  appId: "1:369096720846:web:9fb921a3d1e2d8e613eb9f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage();

export const provider = new GoogleAuthProvider();
export default app;
