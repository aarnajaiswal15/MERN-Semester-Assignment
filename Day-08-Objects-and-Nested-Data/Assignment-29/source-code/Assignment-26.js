
// Product dataset
let products = [
    { name: "Laptop", category: "Electronics", price: 50000 },
    { name: "Mobile", category: "Electronics", price: 20000 },
    { name: "Shoes", category: "Fashion", price: 1500 },
    { name: "Watch", category: "Fashion", price: 2500 },
    { name: "Headphones", category: "Electronics", price: 3000 }
];

// Filter electronics products
let electronics = products.filter(function(product) {
    return product.category === "Electronics";
});

console.log("Electronics Products:", electronics);

// Filter products below ₹5000
let affordableProducts = products.filter(function(product) {
    return product.price < 5000;
});

console.log("Affordable Products:", affordableProducts);

// Get product names
let productNames = products.map(function(product) {
    return product.name;
});

console.log("Product Names:", productNames);

// Calculate total price
let totalPrice = products.reduce(function(total, product) {
    return total + product.price;
}, 0);

console.log("Total Product Value:", totalPrice);

// Calculate average price
let averagePrice = totalPrice / products.length;

console.log("Average Product Price:", averagePrice);

// Count products
console.log("Total Products:", products.length);
