
let button = document.getElementById("toggleButton");
let profile = document.querySelector(".profile-card");
let status = document.getElementById("status");

button.addEventListener("click", function() {

    profile.classList.toggle("active");
    profile.classList.toggle("inactive");

    if (profile.classList.contains("active")) {

        status.textContent = "Profile is active";
        button.textContent = "Deactivate Profile";
        button.setAttribute("aria-pressed", "true");

    } else {

        status.textContent = "Profile is inactive";
        button.textContent = "Activate Profile";
        button.setAttribute("aria-pressed", "false");

    }

});
