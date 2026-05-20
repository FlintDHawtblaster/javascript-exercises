function roundToDecimal(num, decimals = 1) {
  const multiplier = Math.pow(10, decimals);
  return Math.round((num + Number.EPSILON) * multiplier) / multiplier;
}

const convertToCelsius = function(temp) {
  let celsius = (temp - 32) * 5 / 9;
  return roundToDecimal(celsius);
};

const convertToFahrenheit = function(temp) {
  let fahrenheit = (temp * 9 / 5) + 32;
  return roundToDecimal(fahrenheit);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
