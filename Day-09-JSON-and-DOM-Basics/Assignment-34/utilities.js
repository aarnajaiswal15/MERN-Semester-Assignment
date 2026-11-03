
// 1. Validate catalogue
function validateCatalogue(products) {
    if (!Array.isArray(products) || products.length === 0) {
        return false;
    }

    for (let i = 0; i < products.length; i++) {
        if (
            !products[i].name ||
            !products[i].category ||
            typeof products[i].price !== "number" ||
            products[i].price <= 0
        ) {
            return false;
        }
    }

    return true;
}


// 2. Find product by ID
function findProductById(products, id) {
    return products.find(function(product) {
        return product.id === id;
    });
}


// 3. Filter products by category
function filterByCategory(products, category) {
    return products.filter(function(product) {
        return product.category === category;
    });
}


// 4. Calculate total catalogue value
function calculateTotalValue(products) {
    return products.reduce(function(total, product) {
        return total + product.price;
    }, 0);
}
