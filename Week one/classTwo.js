/*
Introduction to Backend Javascript 2
Understanding javascript in Node.Js
Best Practices for Naming Variables (Conventions)
Use descriptive names and valid characters. It must start with a letter (a-z or A-Z), underscore (_), or dollar sign ($). 
Use camelCase or snake_case
Avoid single-letter variable names
Use const for constants
Variables are case-sensitive: This means myVariable and myvariable are different variables.
You cannot use reserved keywords as variable names. Reserved keywords are words like let, const, function, if, else, etc.


*/

//1. Variables and Constants
// let - block-scoped variable (Preferred)
let myAge = 5;
let my_name = "Abraham";
// const - constant, cannot be reassigned
const pi = 3.14;

//2. Data Types
// Number: Represents both integers and floating-point numbers
let age = 25; // this is an integer
let price = 19.99; // This is a floating number or decimal
// String: Text data enclosed in single, double, or template literals
let name = "John"; //I used double quotes
let country = "Rwanda"; //I used single quotes
let pet = `dog`; //I used backticks
let greetingPet = "Hello" + pet; // Concatenation
let greetingName = `Hello, ${name}!`; // Template literal
// Boolean: true or false
let isAdult = true;
let isChild = false;

// Null: Represents an intentional absence of a value
let value = null;
// Undefined: A variable declared but not yet assigned a value
let home;
console.log(home); // undefined
// Object: Key-value pairs, used for storing structured data
let person = { name: "Alice", age: 30 };
// Array: Ordered collection of values
let numbers = [1, 2, 3, 4];

//3. Variable Types and Type Casting
//JavaScript is a dynamically typed language. This means you don’t have to declare the type of a variable, and types can change during execution.
let dynamicVar = "Hello"; // Initially a string
dynamicVar = 100; // Now a number (JavaScript allows this)

// typeof: Used to check the type of a variable
console.log(typeof dynamicVar); // Output: number
//Type Casting (Converting between types)
// String to Number
let str = "123";
let num = Number(str); // Converts string "123" to number 123
// Number to String
let numToString = String(456); // Converts number 456 to string "456"
// Boolean to String
let boolToString = String(true); // "true"
// String to Boolean
let strToBool = Boolean("true"); // Any non-empty string converts to true
// Number to Boolean
let numToBool = Boolean(0); // 0 converts to false, any other number is true
// Parsing integers and floating-point numbers from strings
let intVal = parseInt("42"); // Converts string "42" to integer 42
let floatVal = parseFloat("42.56"); // Converts string "42.56" to float 42.56
// Implicit Type Coercion: JavaScript will often automatically convert types
console.log(5 + "10"); // Output: "510" (Number 5 is converted to string)
console.log("5" * 2); // Output: 10 (String "5" is converted to number)

/*
4. Operators in JavaScript
1. Arithmetic Operators
Used to perform basic mathematical operations eg +, _, *, /, --, ++, **,%

2. Assignment Operators
Used to assign values to variables.
=, +=, -=, *=, /=, %=

3. Comparison Operators Used to compare two values. They are called conditional statements. They return a boolean (true or false).
<, >, <=, >=, ==, !=, ===, !==

4. Logical Operators
Used to combine or invert boolean expressions.
||, && and !

5. Ternary Operator (?:)
A shorthand for if...else that returns one of two values based on a condition.
condition ? valueIfTrue : valueIfFalse;
*/

//ternary operator

let age1 = 20;

let message =
  age1 <= 17 ? console.log("You are a minor") : console.log("You are an adult");

// Spread Operator (...)
//Used to expand an array or object, or to collect remaining parameters into an array.
let arr1 = [1, 2];
let arr2 = [...arr1, 3, 4]; // Output: [1, 2, 3, 4]
console.log(sum(...arr2));

//8. Nullish Coalescing Operator (??)
//Returns the right-hand operand when the left-hand operand is null or undefined.

let name1 = null;
let defaultName = name1 ?? "Guest";
console.log(defaultName); // Output: "Guest"
//5. Conditional Statements
// if / else: Conditional branching
// // If(condition){
// //do an action
// } else{
//  //do something else
// }
let age2 = 18;
if (age2 >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

// switch: Alternative to multiple if statements
let color = "black";
switch (color) {
  case "red":
    console.log("Color is red");
    break;
  case "blue":
    console.log("Color is blue");
    break;
  case "black":
    console.log("Color is black");
    break;
  default:
    console.log("Unknown color");
}

//6. Loops
// for loop: Repeats code a fixed number of times
for (let i = 0; i < 5; i++) {
  console.log(i);
}
// while loop: Repeats code as long as a condition is true
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// do...while loop: Executes once before checking the condition
let j = 0;
do {
  console.log(j);
  j++;
} while (j < 5);
// for...of loop: Iterates over arrays or iterables
let fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
  console.log(fruit);
}

// for...in loop: Iterates over properties of an object
let person2 = { name: "John", age: 25 };
for (let key in person2) {
  console.log(`${key}: ${person2[key]}`);
}

//7. Functions

// Function Declaration: Declares a function by name
function greet() {
  console.log("Hello!");
}
greet(); // Calls the function// Function Expression: Assigns an anonymous function to a variable
let sayHi = function () {
  console.log("Hi!");
};
sayHi(); // Calls the function
// Arrow Functions: Shorter syntax for function expressions
let add = (a, b) => a + b;
console.log(add(5, 3)); // 8

//While they are function declaration and expression might look similar,
//there are some differences. In function declaration,
//you can call the function anywhere, even hoisted before where it was called,
// hence, it is useful for reusable functions.

/* 



*/
