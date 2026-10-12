
let count = 0;

const counter = document.getElementById("counter");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const resetButton = document.getElementById("reset");

function updateCounter() {
    counter.textContent = count;

    if (count > 0) {
        counter.style.color = "green";
    } else if (count < 0) {
        counter.style.color = "red";
    } else {
        counter.style.color = "black";
    }
}

incrementButton.addEventListener("click", function () {
    count = count + 1;
    updateCounter();
});

decrementButton.addEventListener("click", function () {
    count = count - 1;
    updateCounter();
});

resetButton.addEventListener("click", function () {
    count = 0;
    updateCounter();
});
