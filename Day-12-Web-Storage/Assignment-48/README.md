
# Load-Update-Save-Render Lifecycle

## 1. Introduction

The Load-Update-Save-Render lifecycle describes how an application retrieves data, updates it, saves it in localStorage, and displays it on the webpage.

## 2. Steps of the Lifecycle

### 1. Load
- Retrieve previously saved data from localStorage.
- If no data exists, use a default empty array.

### 2. Update
- Change the data when the user performs an action.
- Example: Adding a new task to a to-do list.

### 3. Save
- Save the updated data in localStorage.
- Use JSON.stringify() to convert the data into a string.
- Use localStorage.setItem() to store it.

### 4. Render
- Display the updated data on the webpage.
- Update the HTML elements using JavaScript.

## 3. Example Code

```javascript
let tasks = [];

// LOAD
function loadTasks() {
    let savedTasks = localStorage.getItem("tasks");

    if (savedTasks !== null) {
        tasks = JSON.parse(savedTasks);
    }
}

// UPDATE
function addTask(task) {
    tasks.push(task);

    // SAVE
    localStorage.setItem("tasks", JSON.stringify(tasks));

    // RENDER
    renderTasks();
}

// RENDER
function renderTasks() {
    console.log("Current Tasks:", tasks);
}

// Start the application
loadTasks();
renderTasks();

addTask("Complete assignment");
```

## 4. Lifecycle Flow

Page Opens → Load Data → Render Data

User Action → Update Data → Save Data → Render Updated Data

## 5. Importance

- Prevents data loss after refreshing the page.
- Keeps saved information available for future visits.
- Ensures the webpage displays the latest data.
- Makes applications such as to-do lists and settings panels persistent.

## 6. Conclusion

The Load-Update-Save-Render lifecycle helps applications manage data efficiently using JavaScript and localStorage.
