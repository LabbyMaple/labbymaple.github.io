import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-analytics.js";
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkzHqoDZcJ0Y26kx6BMLMBUjdJgb3WsgA",
  authDomain: "login-1e0bb.firebaseapp.com",
  projectId: "login-1e0bb",
  storageBucket: "login-1e0bb.appspot.com",
  messagingSenderId: "642397245161",
  appId: "1:642397245161:web:b65d789374a0b827ceea78",
  measurementId: "G-9L70HGFYYN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);