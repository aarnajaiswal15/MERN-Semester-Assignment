
let shoppingList = [];

// Add an item
function addItem(item) {
    shoppingList.push(item);
    console.log(item + " added to shopping list");
}

// Remove an item
function removeItem(item) {
    let index = shoppingList.indexOf(item);

    if (index !== -1) {
        shoppingList.splice(index, 1);
        console.log(item + " removed from shopping list");
    } else {
        console.log(item + " not found");
    }
}

// Display shopping list
function displayList() {
    console.log("Shopping List:");

    for (let i = 0; i < shoppingList.length; i++) {
        console.log((i + 1) + ". " + shoppingList[i]);
    }
}

// Count items
function countItems() {
    console.log("Total Items:", shoppingList.length);
}

// Testing
addItem("Milk");
addItem("Bread");
addItem("Eggs");
addItem("Apples");

displayList();
countItems();

removeItem("Bread");

displayList();
countItems();
