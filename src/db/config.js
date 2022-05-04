// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhggRyAv41q34Qr0smL5Wa78mjvv6X-mI",
  authDomain: "brufood-pet.firebaseapp.com",
  projectId: "brufood-pet",
  storageBucket: "brufood-pet.appspot.com",
  messagingSenderId: "519726973484",
  appId: "1:519726973484:web:952f997e8ea4d891710789"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () =>{
    return app;
}