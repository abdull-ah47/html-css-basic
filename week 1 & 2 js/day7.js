//temperature conversion
function Temperature(celsius) {
const fahrenheit = (celsius * 9/5) + 32;
const kelvin = celsius + 273.15;
return { fahrenheit, kelvin };
}
const celsiusTemp = 25;
const result = Temperature(celsiusTemp);
console.log(`${celsiusTemp}°Celcius =temp in fahreniet is ${result.fahrenheit}F = the temp in kelvin is${result.kelvin}K`);


//even and odd difference

function isEven(number) {
if (number % 2 === 0) {
return "Even";
} else {
return "Odd";
}
}
console.log(isEven(4)); 
console.log(isEven(11)); 
