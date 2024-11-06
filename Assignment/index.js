// index.js

const converter = require("./converter"); // Import the converter module

// Temperatures to convert
const fahrenheitTemperature = 100; // Example Fahrenheit value
const celsiusTemperature = 37; // Example Celsius value

// Convert Fahrenheit to Celsius
const convertedToCelsius = converter.toCelsius(fahrenheitTemperature);
console.log(
  `${fahrenheitTemperature}°F is equal to ${convertedToCelsius.toFixed(2)}°C`
);

// Convert Celsius to Fahrenheit
const convertedToFahrenheit = converter.toFahrenheit(celsiusTemperature);
console.log(
  `${celsiusTemperature}°C is equal to ${convertedToFahrenheit.toFixed(2)}°F`
);
