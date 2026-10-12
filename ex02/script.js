
const title = document.getElementById("main-title");
const message = document.querySelector(".description");
const button = document.getElementById("change-button");

button.addEventListener("click", function () {
    title.textContent = "Welcome to JavaScript";
    message.textContent = "You changed the DOM!";
    title.classList.add("active");
});
