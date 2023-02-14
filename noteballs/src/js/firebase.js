import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCdfpkwwYnV3TfOc_G6_bRF69-M7Si868w",
  authDomain: "noteballs-a327b.firebaseapp.com",
  projectId: "noteballs-a327b",
  storageBucket: "noteballs-a327b.appspot.com",
  messagingSenderId: "830870607059",
  appId: "1:830870607059:web:a62349d03f1fb51a7af026"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);