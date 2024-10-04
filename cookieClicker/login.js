import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
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


const app = initializeApp(firebaseConfig);
const auth = getAuth()
var login_button = document.getElementById("login_button")
login_button.addEventListener("click", async () => {
  var email = document.getElementById("email")
  var password = document.getElementById("password")
  signInWithEmailAndPassword(auth, email.value, password.value).then(function (userCredidential){
    const user = userCredidential.user
    sessionStorage.setItem("email", user.email)
    // console.log(user)
    window.location.href = "/cookieClicker/cookieClicker.html"
  })
  .catch((error) => {
    const errorCode = error.code
    const errorMessage = error.message
    alert(errorCode, errorMessage)
  })
  }
)