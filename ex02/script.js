const title = document.getElementById("main-title");
const message = document.querySelector(".description");

title.textContent = "Welcome to JavaScript";
message.textContent = "You changed the DOM!";

title.style.fontSize = "40px";
message.style.color = "blue";

title.classList.add("active");
