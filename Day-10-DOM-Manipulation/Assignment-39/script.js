
let profile = document.querySelector(".profile-card");

let status = document.getElementById("status");

let toggleButton = document.getElementById("toggleButton");

let detailsButton = document.getElementById("detailsButton");

// Event 1: Activate or deactivate profile
toggleButton.addEventListener("click", function() {

    profile.classList.toggle("active");
    profile.classList.toggle("inactive");

    if (profile.classList.contains("active")) {

        status.textContent = "Profile is active";
        toggleButton.textContent = "Deactivate Profile";
        toggleButton.setAttribute("aria-pressed", "true");

    } else {

        status.textContent = "Profile is inactive";
        toggleButton.textContent = "Activate Profile";
        toggleButton.setAttribute("aria-pressed", "false");

    }

});

// Event 2: Show profile details
detailsButton.addEventListener("click", function() {

    alert(
        "Name: Aarna Jaiswal\n" +
        "Course: BCA AI\n" +
        "Semester: 3"
    );

});
