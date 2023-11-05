// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBgsJtTAVhIHCElhzWrA9YJRO2BaTJIjnY",
    authDomain: "a11-hunger-help.firebaseapp.com",
    projectId: "a11-hunger-help",
    storageBucket: "a11-hunger-help.appspot.com",
    messagingSenderId: "494525531749",
    appId: "1:494525531749:web:f8026f9c265c00b8dc288c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);