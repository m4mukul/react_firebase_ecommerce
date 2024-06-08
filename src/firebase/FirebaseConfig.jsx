// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDjViQkAl0gE_KYv8x3cv_RtOoSt5yzSHg",
  authDomain: "ecommproject-77baa.firebaseapp.com",
  projectId: "ecommproject-77baa",
  storageBucket: "ecommproject-77baa.appspot.com",
  messagingSenderId: "541292928586",
  appId: "1:541292928586:web:30f97ec544ae756c7450b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app)
const auth = getAuth(app)

export {fireDB, auth}