
let form = document.getElementById("contactForm");

let result = document.getElementById("result");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "") {
        result.textContent = "Please enter your name";
    }

    else if (email === "") {
        result.textContent = "Please enter your email";
    }

    else if (!email.includes("@") || !email.includes(".")) {
        result.textContent = "Please enter a valid email";
    }

    else if (subject === "") {
        result.textContent = "Please enter a subject";
    }

    else if (message === "") {
        result.textContent = "Please enter a message";
    }

    else {
        result.textContent = "Form submitted successfully!";
    }

});
