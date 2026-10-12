
let count = 0;

const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }

    // Create a new list item
    const li = document.createElement("li");

    // Add the task text
    li.textContent = taskText;

    // Mark task as completed when clicked
    li.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    // Create a delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    // Delete the task
    deleteButton.addEventListener("click", function (event) {
        event.stopPropagation();
        li.remove();

        count--;
        taskCount.textContent = count;
    });

    // Add the delete button to the task
    li.appendChild(deleteButton);

    // Add the task to the list
    taskList.appendChild(li);

    // Update the counter
    count++;
    taskCount.textContent = count;

    // Clear the input
    taskInput.value = "";
}

// Add task when the button is clicked
addButton.addEventListener("click", addTask);

// Add task when Enter is pressed
taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});
