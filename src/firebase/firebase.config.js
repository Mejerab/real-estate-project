// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMxO2XdjJocywJ4nRwLmbTGgHYNmYsk58",
  authDomain: "real-estate-a9bf2.firebaseapp.com",
  projectId: "real-estate-a9bf2",
  storageBucket: "real-estate-a9bf2.appspot.com",
  messagingSenderId: "154327712001",
  appId: "1:154327712001:web:517112343a70e589a91b00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;