var cookie = document.getElementById("cookie")
var score = document.getElementById("score")

cookie.addEventListener("hover", async () => {
    cookie.style.height = "450px"
    cookie.style.width = "450px"
})

cookie.addEventListener("click", async () => {
    score += 1
    console.log(score)
})
