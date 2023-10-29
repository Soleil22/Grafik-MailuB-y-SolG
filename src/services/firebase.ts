// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3mKNF2PTBGHEh8X4sYeFHfjnJnsZWAl8",
  authDomain: "grafik-55905.firebaseapp.com",
  projectId: "grafik-55905",
  storageBucket: "grafik-55905.appspot.com",
  messagingSenderId: "644785458287",
  appId: "1:644785458287:web:2306e93d9593f96902d19a",
  measurementId: "G-PT94J3JFDV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);