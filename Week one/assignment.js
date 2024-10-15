//Write a JavaScript script that outputs your name i.e. Hello Tobi. It takes a variable name and prints a message "Hello, [your_name]!" to the console.

let myName = "Promise";

console.log(`My name is ${myName}`);

//Create a script that calculates the square of a number and assign it to a variable called input. Square this variable into a new variable called square and print the result to the console. The output should be 36.

let num = 6;

let square = num * num;
console.log(square);

/*
In your own terms, explain the features of NodeJs.
Non-blocking I/O: Node.js uses asynchronous, event-driven architecture, allowing it to handle many connections simultaneously without waiting for operations like file or network requests to complete. This makes it efficient and ideal for scalable applications.

Single-threaded event loop: Even though it's single-threaded, Node.js uses an event loop to handle multiple requests concurrently. The event loop ensures that the system remains responsive while performing tasks in the background.

JavaScript everywhere: With Node.js, you can use JavaScript on both the client and server side, unifying the language for full-stack development.

What is the difference between server-side and client-side javascript?
Client-side JavaScript:

Runs in the browser.
Manipulates the Document Object Model (DOM) to provide a dynamic, interactive user experience (like form validation, animations, or handling button clicks).
Can access web APIs such as localStorage and fetch for interacting with the browser or the internet.
Examples include frameworks like React, Vue, or vanilla JavaScript for building user interfaces.
Server-side JavaScript:

Runs on the server, typically using Node.js.
Handles backend logic such as database operations, authentication, and routing (i.e., managing how a web app serves different pages or data).
Responsible for responding to client requests by generating HTML, handling API calls, or performing heavy computations.
Allows building full-stack JavaScript applications, where the server uses Node.js and the front-end is built with JavaScript frameworks.
In summary, client-side JavaScript focuses on the user experience in the browser, while server-side JavaScript handles server operations and interacts with databases and APIs.

 */
