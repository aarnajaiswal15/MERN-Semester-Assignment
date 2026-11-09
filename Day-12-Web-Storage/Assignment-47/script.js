
// Save student information
let student = {
    name: "Aarna Jaiswal",
    course: "BCA AI",
    semester: 3
};

saveData("student", student);

console.log("Data saved successfully!");

// Retrieve student information
let savedStudent = getData("student");

console.log("Saved Student:", savedStudent);

// Remove student information
removeData("student");

console.log("Student data removed");

// Check data after deletion
console.log("After deletion:", getData("student"));
