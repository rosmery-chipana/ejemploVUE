import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBPbs40_lZbmHTgp5z1HX9q-YcnSRuID_M",
  authDomain: "iestpchupa2023-3f4db.firebaseapp.com",
  projectId: "iestpchupa2023-3f4db",
  storageBucket: "iestpchupa2023-3f4db.appspot.com",
  messagingSenderId: "216198437396",
  appId: "1:216198437396:web:fde3ac956a0cdcff39e501"

};

initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { db, auth };