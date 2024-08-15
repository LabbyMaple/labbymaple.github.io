const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth()
var button = document.getElementById("signup_button")
button.addEventListener("click", async () => {
  var email = document.getElementById("username")
  var password = document.getElementById("password")
  createUserWithEmailAndPassword(auth, email.value, password.value).then((userCredidential) => {
    const user = userCredidential.user
    window.location.href = "../cookieClicker"
  })
  .catch((error) => {
    const errorCode = error.code
    const errorMessage = error.message
    alert(errorCode, errorMessage)
  })
  }
)