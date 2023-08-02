const convertToCelsius = function(temp) {
  const Celcius = (temp - 32) * (5/9);
  let result = Math.round(Celcius * 10)/10;
  return result;
};

const convertToFahrenheit = function(temp) {
  const Fahrenheit = temp * (9/5) + 32;
  let result = Math.round(Fahrenheit * 10)/10;
  return result;
};


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
