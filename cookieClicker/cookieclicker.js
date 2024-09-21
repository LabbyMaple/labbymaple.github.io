import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getFirestore, collection, addDoc, setDoc, doc, getDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

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

async function getScore() {
    try {
    const docRef = await getDoc(doc(db, "scores", sessionStorage.getItem("email")));
    if(docRef.exists()){
      return docRef.data().score
    }
    else{
      console.log("documetn does not exist")
      return 0
    }
    
  } catch (e) {
    console.error("getting document: ", e);
  }
}

console.log(await getScore())


async function update(score) {
  console.log("update firebase")
  try {
  const docRef = await setDoc(doc(db, "scores", sessionStorage.getItem("email")), {
    score: score,
  });
  // console.log("Document written ",);
} catch (e) {
  console.error("Error adding document: ", e);
}
}



let cookie = document.getElementById("cookie");
let score2 = document.getElementById("score");
let score = await getScore()
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
    // console.log(score)
    updateScore()
    // update(score)
    cookie.style.height = "430px"
    cookie.style.width = "430px"
})

cookie.addEventListener("pointerup", function (){
    cookie.style.height = "400px"
    cookie.style.width = "400px"
})

cookie.addEventListener("click", () => processChange(score))

var scoreboard = document.getElementById("Leaderboard")
// console.log(scoreboard)
scoreboard.innerHTML += `<li>Item 100</li>`

async function getScoreboard(){
  scoreboard.innerHTML = ""
  const querySnapshot = await getDocs(collection(db, "scores"));
  var sortedScores = []
  querySnapshot.forEach((item) => {
  sortedScores.push({name: item.id, score: item.data()["score"]})
  // console.log(doc.id, " => ", doc.data()["score"]);
});
  


sortedScores.sort((a,b) => b.score - a.score)

console.log(sortedScores)


for (let index = 0; index < 5; index++) {
  scoreboard.innerHTML += `<li style=""> <div id="first_name">${sortedScores[index].name.split('@')[0]}</div><div id="first_score">${sortedScores[index].score}</div></li>`
  
}

}

await getScoreboard()

function updateScore() {
    score2.textContent = score
  }

  updateScore()

  function debounce(func, timeout = 1000){
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
  }
  function saveInput(){
    console.log('Saving data');
  }
  const processChange = debounce(update)





