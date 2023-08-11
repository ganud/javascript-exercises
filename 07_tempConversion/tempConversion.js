const convertToCelsius = function(fahrenheit) {
  calc = (fahrenheit - 32) * 5/9;
  rounded = Math.round(calc * 10) / 10;
  return rounded;
};

const convertToFahrenheit = function(celcius) {
  calc = (celcius * 9/5 + 32)
  rounded = Math.round(calc * 10) / 10;
  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
