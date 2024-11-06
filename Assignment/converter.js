const fahrenheitBase = 32;
const celsiusScalingFactor = 5 / 9;
const fahrenheitScalingFactor = 9 / 5;
const celsiusToFahrenheitBase = 32;

// Convert Fahrenheit to Celsius
function toCelsius(fahrenheit) {
  const celsius = (fahrenheit - fahrenheitBase) * celsiusScalingFactor;
  return celsius;
}

// Convert Celsius to Fahrenheit
function toFahrenheit(celsius) {
  const fahrenheit =
    celsius * fahrenheitScalingFactor + celsiusToFahrenheitBase;
  return fahrenheit;
}

module.exports = {
  toCelsius,
  toFahrenheit,
};
