
// Remove extra spaces
function removeExtraSpaces(text) {
    return text.trim().replace(/\s+/g, " ");
}

// Convert text to lowercase
function convertToLowercase(text) {
    return text.toLowerCase();
}

// Convert text to uppercase
function convertToUppercase(text) {
    return text.toUpperCase();
}

// Clean a name
function cleanName(name) {
    if (name.trim() === "") {
        return "Name cannot be empty";
    }

    return removeExtraSpaces(name);
}

// Sample inputs
let name = "   Aarna    Jaiswal   ";
let email = "  AARNA@GMAIL.COM  ";
let message = "   Hello    World!   ";

// Testing
console.log("Original Name:", name);
console.log("Cleaned Name:", cleanName(name));

console.log("Cleaned Email:", convertToLowercase(email.trim()));

console.log("Cleaned Message:", removeExtraSpaces(message));

console.log("Uppercase Message:", convertToUppercase(message.trim()));

console.log("Empty Name:", cleanName("   "));
