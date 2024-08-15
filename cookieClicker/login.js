var login_button = document.getElementById("login_button")
login_button.addEventListener("click", async () => {
  var email = document.getElementById("email")
  var password = document.getElementById("password")
  signInWithEmailAndPassword(auth, email.value, password.value).then((userCredidential) => {
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