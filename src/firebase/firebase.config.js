// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtcBpxE6bBFWzzDJEB1Q1YixoQ_tdac50",
  authDomain: "brand-shop-48c61.firebaseapp.com",
  projectId: "brand-shop-48c61",
  storageBucket: "brand-shop-48c61.appspot.com",
  messagingSenderId: "184102632052",
  appId: "1:184102632052:web:0d494566b1389f55802f21",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
