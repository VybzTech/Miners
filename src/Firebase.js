// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-NdgH9GkTzb_FnA1ZqwKupVgs2exgDd8",
  authDomain: "platinum-miners.firebaseapp.com",
  projectId: "platinum-miners",
  storageBucket: "platinum-miners.appspot.com",
  messagingSenderId: "288468347052",
  appId: "1:288468347052:web:3ae430e5fa772d9eec5709",
  measurementId: "G-MJEKLW3QN4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
