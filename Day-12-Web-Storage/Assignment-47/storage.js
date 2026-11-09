
// Store data
function saveData(key, value) {

    localStorage.setItem(key, JSON.stringify(value));

}

// Retrieve data
function getData(key) {

    let data = localStorage.getItem(key);

    return data === null ? null : JSON.parse(data);

}

// Remove specific data
function removeData(key) {

    localStorage.removeItem(key);

}

// Remove all stored data
function clearData() {

    localStorage.clear();

}
