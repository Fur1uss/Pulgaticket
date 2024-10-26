// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";	
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIuyG5tGayJqc7qxr5-fkGTPKYlWEtf48",
  authDomain: "pulgaticket.firebaseapp.com",
  projectId: "pulgaticket",
  storageBucket: "pulgaticket.appspot.com",
  messagingSenderId: "317719590952",
  appId: "1:317719590952:web:6ed83fdbb7a2ea175b5d1d",
  measurementId: "G-PR6DXM4P8R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

const analytics = getAnalytics(app);