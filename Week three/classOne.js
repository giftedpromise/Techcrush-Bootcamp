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

import { SuperCar, RobotCar } from "./toy.js";
