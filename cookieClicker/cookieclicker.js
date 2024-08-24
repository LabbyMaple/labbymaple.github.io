import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getFirestore, collection, addDoc, setDoc, doc } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBkzHqoDZcJ0Y26kx6BMLMBUjdJgb3WsgA",
    authDomain: "login-1e0bb.firebaseapp.com",
    projectId: "login-1e0bb",
    storageBucket: "login-1e0bb.appspot.com",
    messagingSenderId: "642397245161",
    appId: "1:642397245161:web:b65d789374a0b827ceea78",
    measurementId: "G-9L70HGFYYN"
  };

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

async function update(score) {
    try {
    const docRef = await setDoc(doc(db, "scores", sessionStorage.getItem("email")), {
      score: score,
    });
    console.log("Document written ",);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}




let cookie = document.getElementById("cookie");
let score2 = document.getElementById("score");
let score = 0
let email = sessionStorage.getItem("email")
console.log(email)


// cookie.addEventListener("mouseover", function (){
//     cookie.style.height = "450px"
//     cookie.style.width = "450px"
// })

// cookie.addEventListener("mouseleave", function (){
//     cookie.style.height = "400px"
//     cookie.style.width = "400px"
// })



cookie.addEventListener("pointerdown", function (){
    score += 1
    console.log(score)
    updateScore()
    update(score)
    cookie.style.height = "430px"
    cookie.style.width = "430px"
})

cookie.addEventListener("pointerup", function (){
    cookie.style.height = "400px"
    cookie.style.width = "400px"
})


function updateScore() {
    score2.textContent = score
  }