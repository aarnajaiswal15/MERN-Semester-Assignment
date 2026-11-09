
let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");
let addButton = document.getElementById("addButton");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

let currentFilter = "all";

// SAVE TASKS
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// RENDER TASKS
function renderTasks() {
    taskList.innerHTML = "";

    tasks.forEach(function(task, index) {

        if (currentFilter === "pending" && task.completed) {
            return;
        }

        if (currentFilter === "completed" && !task.completed) {
            return;
        }

        let li = document.createElement("li");

        let span = document.createElement("span");
        span.textContent = task.name;

        if (task.completed) {
            span.classList.add("completed");
        }

        let completeButton = document.createElement("button");
        completeButton.textContent = "Complete";

        completeButton.addEventListener("click", function() {
            tasks[index].completed = !tasks[index].completed;
            saveTasks();
            renderTasks();
        });

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", function() {
            tasks.splice(index, 1);
            saveTasks();
            renderTasks();
        });

        li.appendChild(span);
        li.appendChild(completeButton);
        li.appendChild(deleteButton);

        taskList.appendChild(li);
    });
}

// ADD TASK
function addTask() {
    let taskName = taskInput.value.trim();

    if (taskName === "") {
        alert("Please enter a task");
        return;
    }

    tasks.push({
        name: taskName,
        completed: false
    });

    saveTasks();

    taskInput.value = "";

    renderTasks();
}

// FILTER TASKS
function setFilter(filter) {
    currentFilter = filter;
    renderTasks();
}

addButton.addEventListener("click", addTask);

// LOAD AND RENDER SAVED TASKS
renderTasks();
