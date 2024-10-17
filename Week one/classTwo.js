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
