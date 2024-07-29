var btnRandom = document.querySelector("#random_button");
var display = document.querySelector("#results");
btnRandom.addEventListener("click", () => {
    let randomNumber = Math.floor(Math.random() * 5);
    display.textContent = randomNumber;
})
