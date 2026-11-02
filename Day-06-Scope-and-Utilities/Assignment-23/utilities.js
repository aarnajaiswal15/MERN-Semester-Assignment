
// Function 1: Merge Settings
function mergeSettings(defaultSettings, userSettings) {

    let finalSettings = {
        ...defaultSettings,
        ...userSettings
    };

    return finalSettings;
}


// Function 2: Calculate Total
function calculateTotal(prices) {

    let total = 0;

    for (let i = 0; i < prices.length; i++) {
        total = total + prices[i];
    }

    return total;
}
