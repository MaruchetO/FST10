// Refernce Data Type: Array
let fruits = ["Durian", "Apple", "Grape", "Coconut", "Grape"];
console.log("Fruits:", fruits);

// Checking the length of array
console.log("Length of fruits:", fruits.length);

// Accessing elements - Array Indexing
console.log("First fruit:", fruits[0]);
console.log("Last Fruit:", fruits[fruits.length - 1]);

// Add elements
// .push() - add element at the end of teh array
fruits.push("Berry");
console.log("Update Fruits Added:", fruits);

// Delete elements
// .pop() - delete element at the end of array
fruits.pop();
console.log("Updated Fruits Deleted:", fruits);

// Searching elements
// .includes(element) - check if element exists
console.log("Is Banana in fruits?", fruits.includes("Banana"));

// .forEach() - execute code based on number of elements in array
fruits.forEach(function (fruit) {
  console.log("Fruit:", fruit);
});
