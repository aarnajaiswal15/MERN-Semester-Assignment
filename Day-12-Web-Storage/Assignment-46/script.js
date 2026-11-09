
let username = document.getElementById("username");
let theme = document.getElementById("theme");
let saveButton = document.getElementById("saveButton");
let message = document.getElementById("message");

// Apply selected theme
function applyTheme(selectedTheme) {

    document.body.classList.remove("dark");

    if (selectedTheme === "dark") {
        document.body.classList.add("dark");
    }

}

// Load saved settings when page opens
let savedSettings = JSON.parse(localStorage.getItem("settings"));

if (savedSettings !== null) {

    username.value = savedSettings.username;
    theme.value = savedSettings.theme;

    applyTheme(savedSettings.theme);

}

// Save settings
saveButton.addEventListener("click", function() {

    let settings = {
        username: username.value,
        theme: theme.value
    };

    localStorage.setItem("settings", JSON.stringify(settings));

    applyTheme(theme.value);

    message.textContent = "Settings saved successfully!";

});
