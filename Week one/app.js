console.log("welcome to Node.js Bootcamp");
console.log("Current directory:", __dirname);
console.log("Current directory:", __filename);

// var - declares a variable (Not recommended in modern JS)
var x = 10;
// let - block-scoped variable (Preferred)
let y = 5;
// const - constant, cannot be reassigned
const pi = 3.14;

// Number: Represents both integers and floating-point numbers
let age = 25;
let price = 19.99;

// String: Text data enclosed in single, double, or template literals
let name = "John";
let greeting = `Hello, ${name}!`; // Template literal

// Boolean: true or false
let isAdult = true;

// Null: Represents an intentional absence of a value
let value = null;

// Undefined: A variable declared but not yet assigned a value
let x2;
console.log(x2); // undefined

// Object: Key-value pairs, used for storing structured data
let person = { name: "Alice", age: 30 };

// Array: Ordered collection of values
let numbers = [1, 2, 3, 4];

let dynamicVar = "Hello"; // Initially a string
dynamicVar = 100; // Now a number (JavaScript allows this)
// typeof: Used to check the type of a variable
console.log(typeof dynamicVar); // Output: number

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

// Arithmetic operators: +, -, *, /, %, ++, --
let sum = 10 + 5;
let product = 10 * 2;
let subtract = 10 - 2;
let divide = 10 / 2;
let remainder = 10 % 2;

// Assignment operators: =, +=, -=, *=, /=
let x3 = 10;
x3 += 5; // x3 is now 15

// Comparison operators: ==, ===, !=, !==, >, <, >=, <=
let a = 10;
console.log(a === 10); // true (strict equality)
console.log(a == "10"); // true (loose equality)

// Logical operators: &&, ||, !
let isTrue = true && false; // false

// if / else: Conditional branching
let age2 = 18;
if (age2 >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

// switch: Alternative to multiple if statements
let color = "red";
switch (color) {
  case "red":
    console.log("Color is red");
    break;
  case "blue":
    console.log("Color is blue");
    break;
  default:
    console.log("Unknown color");
}
