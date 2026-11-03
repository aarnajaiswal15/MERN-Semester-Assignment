
let students = [
    {
        name: "Aarna Jaiswal",
        course: "BCA AI",
        semester: 3
    },
    {
        name: "Rahul Sharma",
        course: "BCA",
        semester: 2
    },
    {
        name: "Priya Verma",
        course: "BBA",
        semester: 4
    }
];

// Reusable card-rendering function
function renderCard(student) {

    let card = document.createElement("div");

    card.classList.add("card");

    let name = document.createElement("h2");
    name.textContent = student.name;

    let course = document.createElement("p");
    course.textContent = "Course: " + student.course;

    let semester = document.createElement("p");
    semester.textContent = "Semester: " + student.semester;

    card.appendChild(name);
    card.appendChild(course);
    card.appendChild(semester);

    document.getElementById("card-container")
        .appendChild(card);
}

// Render all student cards
students.forEach(function(student) {
    renderCard(student);
});
