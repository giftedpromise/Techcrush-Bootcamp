import { checkAge } from "./agecheck.js";
import { formatUserInfo } from "./userInfo.js";
import chalk from "chalk";

console.log(chalk.red("What is your name?"));

process.stdin.on("data", (nameInput) => {
  const name = nameInput.toString().trim(); // Correctly process the name input

  console.log(chalk.red("What is your age?")); // Prompt for age

  // Now we listen for the second input (age)
  process.stdin.once("data", (ageInput) => {
    const age = parseInt(ageInput.toString().trim()); // Convert age to number

    // Check age and format the message using custom modules
    const status = checkAge(age);
    const message = formatUserInfo(name, age, status);

    // Display the message with color based on the status
    if (status === "an adult") {
      console.log(chalk.green(message));
    } else {
      console.log(chalk.blue(message));
    }

    // Exit the process
    process.exit();
  });
});
