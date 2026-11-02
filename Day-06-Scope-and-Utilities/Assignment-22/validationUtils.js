
// Function 1: Validate name
function validateName(name) {

    if (name === "") {
        return "Name cannot be empty";
    }

    return "Valid name";
}


// Function 2: Validate age
function validateAge(age) {

    if (age <= 0) {
        return "Age must be greater than zero";
    }

    return "Valid age";
}


// Function 3: Validate email
function validateEmail(email) {

    if (!email.includes("@")) {
        return "Invalid email";
    }

    return "Valid email";
}


// Function 4: Validate password
function validatePassword(password) {

    if (password.length < 8) {
        return "Password must contain at least 8 characters";
    }

    return "Valid password";
}


// Function 5: Validate marks
function validateMarks(marks) {

    if (marks < 0 || marks > 100) {
        return "Marks must be between 0 and 100";
    }

    return "Valid marks";
}
