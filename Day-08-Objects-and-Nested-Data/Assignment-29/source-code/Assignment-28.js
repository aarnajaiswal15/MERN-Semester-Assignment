
// 1. Find sum of array elements
let numbers = [10, 20, 30, 40, 50];

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
}

console.log("Sum of Array:", sum);


// 2. Find largest number
let values = [12, 45, 23, 67, 34];

let largest = values[0];

for (let i = 1; i < values.length; i++) {
    if (values[i] > largest) {
        largest = values[i];
    }
}

console.log("Largest Number:", largest);


// 3. Reverse a string
let text = "JavaScript";

let reversed = text.split("").reverse().join("");

console.log("Reversed String:", reversed);


// 4. Count vowels
let word = "Programming";

let count = 0;

for (let i = 0; i < word.length; i++) {
    let character = word[i].toLowerCase();

    if (
        character === "a" ||
        character === "e" ||
        character === "i" ||
        character === "o" ||
        character === "u"
    ) {
        count++;
    }
}

console.log("Number of Vowels:", count);


// 5. Remove duplicate elements
let items = [1, 2, 3, 2, 4, 3, 5];

let uniqueItems = [];

for (let i = 0; i < items.length; i++) {
    if (!uniqueItems.includes(items[i])) {
        uniqueItems.push(items[i]);
    }
}

console.log("Array Without Duplicates:", uniqueItems);


// 6. Check palindrome
let original = "madam";

let reverse = original.split("").reverse().join("");

if (original === reverse) {
    console.log("Palindrome: Yes");
} else {
    console.log("Palindrome: No");
}
