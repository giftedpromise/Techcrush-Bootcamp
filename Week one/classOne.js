/* 
Introduction to Node.Js

What is Backend Development?
First, what is Backend Development?
Backend development refers to the server-side of an application and everything that communicates 
between the database and the browser (frontend).
Think of the backend as the engine under the hood of a car — it is essential for
 functionality but not always visible.

 Responsibilities
1. Server Logic: Handling business logic and application workflows.
2. Database Management: CRUD operations (Create, Read, Update, Delete) with databases.
3.Authentication and Security: User authentication, data protection, role-based access control and secure communication.

Common Backend Languages and Frameworks
Languages:
JavaScript: (with Node.js)
Python: (Django, Flask)
Ruby: (Ruby on Rails)
Java: (Spring Boot)
PHP: (Laravel)
C# (ASP.NET)


Frameworks and Technologies:
Express.js, Django, Ruby on Rails, ASP.NET, Spring Boot

Databases:
Relational e.g. MySQL, PostgreSQL
NoSQL e.g. MongoDB, Redis

What is Node.js?
An open-source, cross-platform JavaScript runtime environment that allows the execution of JavaScript code outside a web browser. It is built on Chrome's V8 JavaScript engine. It created by Ryan Dahl in 2009.

Features of Node.Js
1. Event Driven:Node.js uses an event-driven programming approach. This means that the flow of the program is determined by events such as user actions, outputs, or messages from other programs/threads. 
In Node.js, there's an event loop that listens for events and triggers callback functions when those events occur.

2.I/O model: I/O stands for Input/Output, which refers to any operation where the program interacts with external systems (file system, network, etc.).
These operations are often the slowest part of a program, especially in web servers that frequently interact with databases or file systems.

3.Non-blocking: In a non-blocking model, operations that might take some time to complete (like reading from a file or querying a database) don't halt the execution of the program.
Instead of waiting for these operations to complete, Node.js will continue to process other tasks.
When the long-running operation finishes, it triggers an event, and the associated callback function is executed.

In Node.js, when any I/O operation is initiated, instead of blocking the thread and waiting for the operation to complete, Node.js registers a callback and moves to the next task. When that I/O operation completes, an event is triggered, and the callback is executed.
This model allows Node.js to handle many concurrent operations with a single thread, making it highly efficient for I/O-heavy applications like web servers. It can serve many clients simultaneously without the overhead of creating new threads for each client, which is common in traditional server architecture.
For example, if a Node.js server receives 1000 simultaneous requests that each require a database query, it doesn't create 1000 threads and wait for each to complete. Instead, it initiates all 1000 database queries, then continues listening for more incoming requests. As each database query completes, it triggers an event, and Node.js processes the response.
This approach allows Node.js to handle a large number of concurrent connections with high throughput, making it particularly well-suited for real-time applications, APIs, and microservices.

Setting Up Your Environment

Download and Install Node.js by visiting nodejs.org and download the LTS (Long-Term Support) version (https://nodejs.org/en)

Verify Installation
Open terminal/command prompt.
Run node -v to check Node.js version.
Run npm -v to check npm version.

What is NPM?
Node Package Manager (NPM) used for managing packages and dependencies, including in your projects.

Basics of Node.Js
Global Objects
__dirname: Represents the directory of the current module.
__filename: Represents the file name of the current module.
console.log(): Outputs messages to the console.
global: To make a variable accessible throughout the application.
process: an object that provides information and control over the current Node.js process. It can be used to interact with the environment in which the process is running.
require and exports: used to export functions, objects, or primitives from a module so they can be used in other files by require.
setTimeout() and setInterval(): Execute code after a delay or repeatedly at intervals.
Now, add the following code to the previous script
	console.log("Current directory:", __dirname);
	console.log("Current directory:", __filename);

Node.Js REPL (Read-Eval-Print Loop)
Let us run some node.js operations in real-time with the Node.Js REPL 
$ node
> 2 + 24
> let name = "Alice"
> undefined
> `Hello, ${name}!`
> 'Hello, Alice!'
> .exit

Introduction to Backend Javascript 1
Understanding javascript in Node.Js
1. Variables and Constants
// var - declares a variable (Not recommended in modern JS)
var x = 10;
// let - block-scoped variable (Preferred)
let y = 5;
// const - constant, cannot be reassigned
const pi = 3.14;

2. Data Types
// Number: Represents both integers and floating-point numbers
let age = 25;
let price = 19.99;

// String: Text data enclosed in single, double, or template literals
let name = "John";
let greeting = `Hello, ${name}!`;  // Template literal

// Boolean: true or false
let isAdult = true;

// Null: Represents an intentional absence of a value
let value = null;

// Undefined: A variable declared but not yet assigned a value
let x2;
console.log(x2);  // undefined

// Object: Key-value pairs, used for storing structured data
let person = { name: "Alice", age: 30 };

// Array: Ordered collection of values
let numbers = [1, 2, 3, 4];

3. Variable Types and Type Casting
JavaScript is a dynamically typed language. This means you don’t have to declare the type of a variable, and types can change during execution.
let dynamicVar = "Hello";  // Initially a string
dynamicVar = 100;          // Now a number (JavaScript allows this)
// typeof: Used to check the type of a variable
console.log(typeof dynamicVar);  // Output: number

Type Casting (Converting between types)
// String to Number
let str = "123";
let num = Number(str);  // Converts string "123" to number 123
// Number to String
let numToString = String(456);  // Converts number 456 to string "456"

// Boolean to String
let boolToString = String(true);  // "true"
// String to Boolean
let strToBool = Boolean("true");  // Any non-empty string converts to true
// Number to Boolean
let numToBool = Boolean(0);  // 0 converts to false, any other number is true
// Parsing integers and floating-point numbers from strings
let intVal = parseInt("42");  // Converts string "42" to integer 42
let floatVal = parseFloat("42.56");  // Converts string "42.56" to float 42.56
// Implicit Type Coercion: JavaScript will often automatically convert types
console.log(5 + "10");  // Output: "510" (Number 5 is converted to string)
console.log("5" * 2);   // Output: 10 (String "5" is converted to number)

4. Operators
// Arithmetic operators: +, -, *, /, %, ++, --
let sum = 10 + 5;
let product = 10 * 2;
let subtract = 10 - 2;
let divide = 10 / 2;
let remainder = 10 % 2;

// Assignment operators: =, +=, -=, *=, /=
let x3 = 10;
x3 += 5;  // x3 is now 15

// Comparison operators: ==, ===, !=, !==, >, <, >=, <=
let a = 10;
console.log(a === 10);  // true (strict equality)
console.log(a == "10");  // true (loose equality)

// Logical operators: &&, ||, !
let isTrue = true && false;  // false

5. Conditional Statements
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

*/
