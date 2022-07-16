// v9 compat packages are API compatible with v8 code
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBs7tmCclgLO35pKWxt8XVe0hBpc0ohWvI",
  authDomain: "clone-c14cc.firebaseapp.com",
  projectId: "clone-c14cc",
  storageBucket: "clone-c14cc.appspot.com",
  messagingSenderId: "238619810862",
  appId: "1:238619810862:web:0080014a0649d007ba13bf",
  measurementId: "G-0NVSTV49SF",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };
