/*
Introduction to ES Modules (ESM)
ES Modules (ESM) were introduced in ECMAScript 2015 (ES6) to support modular JavaScript. Before ES6, developers used module systems like CommonJS to organize JavaScript code into modules in Node.Js. 

Key Features of ES Modules
1.Static Structure: The module structure is determined at load time. Imports and exports cannot be dynamically altered (no conditional imports).
2. Import and Export Syntax: Use import and export to include and share code unlike CJS that uses require and module.exports.
3. Strict Mode by Default: All ES modules are in strict mode automatically, helping avoid certain mistakes.
4. Module Scope: Variables in a module are scoped to that module and not exposed globally.


ESM Keys
1. 1. import - Importing named and default exports


*/

import { SuperCar, RobotCar } from "./toyStore.js";

// 2. export - Named and default exports
export const myVariable = 42; // Named Export
export function myFunction() {
  /*...*/
} // Named Export
export const superCar = { name: "superCar", speed: "fast" };
//In JavaScript, you can export any data type—functions, objects, arrays, strings, numbers, and classes—using export statements. This flexibility allows you to structure your code in a modular way, making it easier to maintain and reuse.

// 3. export default - Default export of a module
export default class Person {
  constructor(name) {
    this.name = name;
  }
}

// 4. import.meta - Accessing metadata about the module
console.log(import.meta.url); // Logs the URL or path of the current module

// 5. export as - Renaming exports or alias
const name = "John";

export { name as surName };

(5).utils //import * as utils from './utils.js'; // 8. import * as - Importing everything from a module with a namespace //export { default } from './someModule.js'; // 7. export { default } from - Re-exporting default export from another module //export * from './allMyToys.js';  // Re-export all exports from another module //export * from './myOtherModule.js': // Re-export all exports from another module // 6. export * - Re-exporting everything from another module //import { superWand as myMagicWand } from './myToys.js';  // Import with renaming // Renaming imports when importing them
  .myFunction(); // Access functions or variables under the `utils` namespace

import * as tools from "./toyTools.js"; // Importing everything under the `tools` namespace
tools.magicScrewdriver(); // Accessing a function or variable under the `tools` namespace

// 9. import { default as } - Renaming a default import
import { default as MyComponent } from "./Component.js"; // Renaming default import
// 10. import() - Dynamic import
import("./myModule.js").then((module) => {
  module.myFunction(); // Dynamic import allows loading a module asynchronously
});

import("./MegaSpaceship.js").then((module) => {
  module.launchSpaceship(); // Load and use the Mega Spaceship!
});

// 11. await import() - Dynamic import with await
async function loadModule() {
  const module = await import("./myModule.js"); // Awaiting dynamic import or API call
  module.myFunction();
}

async function loadSpaceship() {
  const module = await import("./megaSpaceShip.js");
  module.launchSpaceship();
}

// 12. top-level await - Using await at the top-level of a module
const module = await import("./myModule.js"); // Directly awaiting a dynamic import
const megaModule = await import("./MegaSpaceship.js"); // Directly awaiting at the top level
module.launchSpaceship();

// 13. Try - catch – Finally, Throw
try {
  const result = await riskyOperation();
  return result;
} catch (error) {
  console.error(error);
  throw new Error("Operation failed");
} finally {
  // do an action
}

//14. Destructuring
const [result1, result2] = ["value 1", "value 2"];

//Array
//Arrays: An array is a collection of items stored in a single variable. Think of it like a list of items.

let fruits = ["Apple", "Mango", "Orange"];

console.log(fruits[0]);

fruits.push("Pawpaw"); //Adds 'orange' at the end

fruits.pop(); // Removes the last item

//Objects: An object is a collection of key-value pairs. It's like describing a thing with its properties.

let userInfo = {
  name: "Ike",
  age: 13,
  school: "udumss",
};

console.log(userInfo.name);

let car = {
  color: "red",
  make: "Toyota",
  model: "Corolla",
};
// Key Points:
//Accessing Properties:
console.log(car.color); // Outputs: red
// Adding Properties:
car.year = 2020; // Adds a new key-value pair
// Removing Properties:
delete car.model; // Removes the 'model' property

let student = {
  name: "John",
  age: 20,
  introduce: () => {
    console.log(
      "Hello, my name is " + this.name + " and I am " + this.age + " years old."
    );
  },
};
student.introduce(); // Output might be incorrect due to how `this` behaves in arrow functions

//Functions: A function is a block of code designed to perform a particular task. You can "call" it whenever you need the task done.
// Function Declaration: Declares a function by name
function greet() {
  console.log("Hello!");
}
greet(); // Calls the function

// Function Expression: Assigns an anonymous function to a variable

let sayHi = function () {
  console.log("Hi!");
};
sayHi(); // Calls the function

// Arrow Functions: Shorter syntax for function expressions
let add = (a, b) => a + b;
console.log(add(5, 3)); // 8

/* 
A class defines a "template" for objects, allowing us to create multiple objects with the same structure and behaviors. Classes make it easy to organize code, particularly when multiple objects share similar properties and methods. We will relate better when we reach Object-Oriented Programming.
Defining a Class
The syntax for defining a class includes the class keyword, followed by a name. Inside, we typically define a constructor method (to initialize properties) and any other methods the class should have.

*/

class Person {
  constructor(name, age) {
    // Constructor is a special keyword, initiated automatically with a class
    this.name = name; // Setting properties
    this.age = age;
  } // Method
  greet() {
    console.log(
      "Hello, my name is " + this.name + " and I am " + this.age + " years old."
    );
  }
}
let person = new Person("John", 30);
person.greet(); // Outputs: Hello, my name is John and I am 30 years old.

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${name}, I am ${age} years old.`);
  }
}

const myUser = new User("Promise", 32);
myUser.greet();

// Regular Method (describe): Uses “this” to access name and grade, referencing the specific Student instance.
// Arrow Function Method (increaseGrade): Inherits this from the surrounding context, making it useful for cases where you might use the function as a callback and still need access to this.

class MathHelper {
  static add(a, b) {
    return a + b;
  }
}
console.log(MathHelper.add(3, 4)); // Outputs: 7
// Static methods are defined using the static keyword and are called on the class itself, not on instances.

// Class Inheritance

//Classes also support inheritance, meaning one class can extend another. This allows for code reuse and a hierarchical structure.

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(this.name + " makes a sound.");
  }
}
class Dog extends Animal {
  speak() {
    console.log(this.name + " barks.");
  }
}
let myDog = new Dog("Rex");
myDog.speak(); // Outputs: Rex barks.
// Inheritance with extends: The Dog class inherits from Animal using the extends keyword.
// Overriding Methods: The Dog class overrides the speak method from Animal to provide a different behavior for dogs.
