/* 

Write two functions:
jsfunction celsiusToFahrenheit(celsius) { ... }
function fahrenheitToCelsius(fahrenheit) { ... }

celsiusToFahrenheit(celsius) → returns Fahrenheit, using F = C * 9/5 + 32
fahrenheitToCelsius(fahrenheit) → returns Celsius, using C = (F - 32) * 5/9

Constraints (this is what makes it a function-design exercise, not just math):

Both functions must be pure — no console.log inside them, no modifying any variable outside the function, same input always produces same output.
Add a third, optional parameter to each function called decimals, defaulting to 2, that rounds the result to that many decimal places. (Hint: you'll want Number.prototype.toFixed(), and think about what type toFixed() returns vs. what you might want to return.)
Write one more function, convertTemp(value, unit, decimals), that takes a value, a unit ("C" or "F"), and calls the appropriate one of the two functions above — this one's job is just to delegate, not to redo any math itself.

*/

function celsiusToFahrenheit(celsius, decimals = 2) {
    let result = celsius * 9/5 + 32;
    return Number(result.toFixed(decimals));
}

console.log(celsiusToFahrenheit(40));

function fahrenheitToCelsius(fahrenheit, decimals = 2) {
    let result = (fahrenheit -32) * 5/9;
    return Number(result.toFixed(decimals)); 
}

console.log(fahrenheitToCelsius(100))

function convertTemp(value, unit, decimals) {
    if (unit === "C") return celsiusToFahrenheit(value, decimals);
    if (unit === "F") return fahrenheitToCelsius(value, decimals);
    return "Invalid Unit. Please choose C or F"
}

console.log(convertTemp(100, "F", 2));

/* Exercise Comments: 

Learning points: 
Number() method works with both integers and floats. 
For simple return functions that rely on a condition, use the guard clause for an early exit instead of a verbose if/else statement. 
When calling a function within a function, you still have to return the value even though the function called within returns a value. 

*/
