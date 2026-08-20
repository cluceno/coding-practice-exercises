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

/*

Key learning points: 

1. When creating a function expression that returns a function, make sure to understand what parameters are being used. On my first iteration,
I tried to return a function that used a variable within the function exression that was not yet defined. This would return an error or return undefined. 
To avoid this, the returned function should have everything it needs when it returns the result of it's operation. 

2. When a function expression returns a function and it requires a third parameter, you can provide it by declaring the variable with another parameter assigned. 
If you declare the variable without the parameter it would just return the anonymous function itself. 

3. This is a closure because the returned function must reference the parameters provided in the function. It is also assigned to another variable so the whole thing is kept alive. 

Overall impression: 

It is remarkable that I can read the result so easily and it makes so much sense. Yet, every time I try to write it from scratch I get stuck. In this situation, 
what prevented me from independently writing the function were a few knowledge gaps, that I hopefully addressed this time. This is a new form of closure that 
I haven't created or maybe processed previously so I was trying to create it based on what I knew before, which was incorrect. 

Although I have passed a third parameter through a function expression before, I was just accepting it for the way it was rather than questioning it until 
I understood what was happening underneath. I think I have that understanding now. 

Overal, I would say that this exercise was difficult because it forced me to ask questions that required deep understanding. Once I got the architecture, it was 
easy to write. Then once I completed it, reading the result was simple. Funny how the hardest part is consistently the development of pseudocode. So I would say, 
I still need more reps and even though I feel like I am progressing, every problem tests my knowledge in some way that doesn't let me feel good about my learning.
But I guess that's just the process of getting better. 

*/ 