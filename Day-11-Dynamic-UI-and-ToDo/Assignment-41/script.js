
let bookInput = document.getElementById("bookInput");
let addButton = document.getElementById("addButton");
let bookList = document.getElementById("bookList");

function addBook() {

    let bookName = bookInput.value.trim();

    if (bookName === "") {
        alert("Please enter a book name");
        return;
    }

    let listItem = document.createElement("li");

    listItem.textContent = bookName;

    bookList.appendChild(listItem);

    bookInput.value = "";

}

addButton.addEventListener("click", addBook);
