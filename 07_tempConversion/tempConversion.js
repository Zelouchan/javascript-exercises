const convertToCelsius = function(celcius) {
  let answerCelcius = ((celcius - 32) * 0.55555556)
  let finalCelcius = (Math.round(answerCelcius*10)/10)
    return finalCelcius
};

const convertToFahrenheit = function(fahrenheit) {
  let answerFahrenheit = (fahrenheit * 1.8 +32)
  let finalFahrenheit = (Math.round(answerFahrenheit*10)/10)
    return finalFahrenheit
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
