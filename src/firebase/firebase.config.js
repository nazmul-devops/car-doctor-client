// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDTG2o0ExtgV6t6-exzsxRV7UPcppHLbTI",
    authDomain: "car-doctor-374a4.firebaseapp.com",
    projectId: "car-doctor-374a4",
    storageBucket: "car-doctor-374a4.appspot.com",
    messagingSenderId: "1014399521907",
    appId: "1:1014399521907:web:17b3acfa418dcb497b4606"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;