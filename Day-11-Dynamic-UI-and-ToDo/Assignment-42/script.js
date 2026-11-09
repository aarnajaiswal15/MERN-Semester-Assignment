
let form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    let summary = document.getElementById("summary");

    summary.textContent =
        "Submission Summary: " +
        "Name: " + name + " | " +
        "Email: " + email + " | " +
        "Subject: " + subject + " | " +
        "Message: " + message;

});
