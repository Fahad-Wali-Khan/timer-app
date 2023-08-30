
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDDQz1CDq0EdKBJAHt_RLCLTFQaeuFyeGk",
  authDomain: "precise-truck-391515.firebaseapp.com",
  projectId: "precise-truck-391515",
  storageBucket: "precise-truck-391515.appspot.com",
  messagingSenderId: "765576825337",
  appId: "1:765576825337:web:789078f663a1da2e1d9528"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);

const provider= new GoogleAuthProvider();

export {auth,provider}