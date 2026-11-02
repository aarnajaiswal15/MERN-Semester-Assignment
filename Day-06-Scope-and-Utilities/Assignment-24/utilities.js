
// 1. Validate Name
function validateName(name) {
    if (name === "") {
        return "Name cannot be empty";
    }

    return "Valid name";
}


// 2. Validate Age
function validateAge(age) {
    if (age <= 0) {
        return "Invalid age";
    }

    return "Valid age";
}


// 3. Validate Email
function validateEmail(email) {
    if (!email.includes("@")) {
        return "Invalid email";
    }

    return "Valid email";
}


// 4. Merge Settings
function mergeSettings(defaultSettings, userSettings) {
    return {
        ...defaultSettings,
        ...userSettings
    };
}


// 5. Calculate Total
function calculateTotal(prices) {
    let total = 0;

    for (let i = 0; i < prices.length; i++) {
        total = total + prices[i];
    }

    return total;
}
