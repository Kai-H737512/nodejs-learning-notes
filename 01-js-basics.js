// Javascript Fundamentals

// 1. Objects
// used to save structural data

// Declaration
const user = {
  name: "Alice", 
  age: 25,
  isAdmin: false
}

// visit
var alice_age = user.age
var alice_age_2 = user['age']

console.log(alice_age)

// 2. Arrays
// store multiple value, sorted
const fruits = ["apple", "banana", "cherry"];

// add elements to tail
fruits.push("orange");
console.log(fruits);

// delete and return the last element
const last = fruits.pop();
console.log(last);
console.log(fruits);

// map(fn): function for every elements in array, return a new array
const upperFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperFruits); // ["APPLE", "BANANA", "CHERRY"]

// forEach(fn), iterate array not returning anything
fruits.forEach(fruit => {
  console.log("I like " + fruit);
});

// 3. Conditionals
const age = 18;
if (age >= 18) {
  console.log("adult")
} else {
  console.log("Minor");
}

while (age) {
  
}