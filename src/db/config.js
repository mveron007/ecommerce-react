// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtsNW1I6nDHDBQ7-eOle3cdvvVIXdFyJQ",
  authDomain: "bruf-petshop.firebaseapp.com",
  projectId: "bruf-petshop",
  storageBucket: "bruf-petshop.appspot.com",
  messagingSenderId: "237108226793",
  appId: "1:237108226793:web:d116524032ec5ea8e89e78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () =>{
    return app;
}