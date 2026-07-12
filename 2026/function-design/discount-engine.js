/* 

Part 1: Write a few small, pure discount functions, each taking a price and returning a new, discounted price:

function tenPercentOff(price) { ... }   // returns price reduced by 10%
function flatFiveOff(price) { ... }     // returns price minus $5 (never below 0)

Part 2: Write applyDiscounts(price, ...discountFns) — this takes a starting price, 
followed by any number of discount functions (using rest parameters, 
...discountFns, which collects all the extra arguments into an array). 
It should apply each discount function to the price in sequence (each one working on the result of the previous one), 
and return the final price.

Example:
applyDiscounts(100, tenPercentOff, flatFiveOff);
// Step 1: 100 → tenPercentOff → 90
// Step 2: 90 → flatFiveOff → 85
// → 85

*/ 

function tenPercentOff(price) {
    return price * 0.9; 
}

function flatFiveOff(price) {
    return Math.max(price - 5, 0);
}

function applyDiscounts(price, ...discountFns) {
    return discountFns.reduce((price, discount) => {
        return discount(price);
    }, price)
}

console.log(applyDiscounts(100, tenPercentOff, flatFiveOff));

/*

Exercise Learning Points: 

There are a few things that I didn't know or that I didn't have a clear understanding of, which made this exercise difficult. 

1. Be familiar with Math.min(a,b) and Math.max(a,b)
    These methods take in two values and returns the lowest or highest one. I tried using a conditional statement
    but if you are comparing 2 numbers you canc use these methods for more efficient code. 

2. Rest parameters (...discountFns) and how to use them within the function 
    When you use an ellipses as a parameter, it creates an array. You can then use the name of the parameter in 
    the function and assume it's an array. For example, the above would be an array named discountFns that you could use 
    the reduce method on. 

3. The reduce method takes an initial value. You need it whenever the accumulator's starting point isn't meant 
    to just be the array's first element (which is .reduce()'s default behavior if you omit it).

4. Always remember to return the value of the function. I have forgotten this multiple times now.

*/