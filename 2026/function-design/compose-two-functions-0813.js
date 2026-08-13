/*

Write a function compose(f, g) that takes two functions and returns a new function. 
The returned function, when called with an argument, applies g to the argument first, then applies f to that result.

If either argument isn't a function, return a function that just returns its input unchanged.

Pseudocode: 

write function
    if either argument is not a function return a function that returns the input unchanged 
    return a function
        create a variable that stores the result of function (g)
        create a variable that stores the result of function (f)
        return the result 
*/

function compose(f, g) {
    if (typeof f !== "function" || typeof g !== "function") return x => x;

    return function(x) {
        return f(g(x));
    }
}

const double = (n) => n * 2;
const addOne = (n) => n + 1;

const doubleThenAddOne = compose(addOne, double);
console.log(doubleThenAddOne(5));   // 11   (double(5) = 10, then addOne(10) = 11)

const addOneThenDouble = compose(double, addOne);
console.log(addOneThenDouble(5));   // 12   (addOne(5) = 6, then double(6) = 12)

const shout = (s) => s.toUpperCase();
const exclaim = (s) => s + "!";
const shoutThenExclaim = compose(exclaim, shout);
console.log(shoutThenExclaim("hi"));  // "HI!"