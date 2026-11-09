
let taskInput = document.getElementById("taskInput");
let addButton = document.getElementById("addButton");
let taskList = document.getElementById("taskList");

// Store all tasks
let tasks = [];

// Store selected filter
let currentFilter = "all";

// Add a new task
function addTask() {

    let taskName = taskInput.value.trim();

    if (taskName === "") {
        alert("Please enter a task");
        return;
    }

    tasks.push({
        text: taskName,
        completed: false
    });

    taskInput.value = "";

    renderTasks();
}

// Display tasks
function renderTasks() {

    taskList.textContent = "";

    tasks.forEach(function(task, index) {

        if (currentFilter === "pending" && task.completed) {
            return;
        }

        if (currentFilter === "completed" && !task.completed) {
            return;
        }

        let li = document.createElement("li");

        let taskText = document.createElement("span");
        taskText.textContent = task.text;
        taskText.classList.add("task-text");

        if (task.completed) {
            taskText.classList.add("completed");
        }

        // Complete button
        let completeButton = document.createElement("button");
        completeButton.textContent = task.completed ? "Undo" : "Complete";

        completeButton.addEventListener("click", function() {
            tasks[index].completed = !tasks[index].completed;
            renderTasks();
        });

        // Edit button
        let editButton = document.createElement("button");
        editButton.textContent = "Edit";

        editButton.addEventListener("click", function() {

            let newName = prompt("Edit your task:", task.text);

            if (newName !== null && newName.trim() !== "") {
                tasks[index].text = newName.trim();
                renderTasks();
            }

        });

        // Delete button
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", function() {
            tasks.splice(index, 1);
            renderTasks();
        });

        li.appendChild(taskText);
        li.appendChild(completeButton);
        li.appendChild(editButton);
        li.appendChild(deleteButton);

        taskList.appendChild(li);

    });

}

// Filter tasks
function filterTasks(filter) {

    currentFilter = filter;
    renderTasks();

}

// Button event
addButton.addEventListener("click", addTask);
