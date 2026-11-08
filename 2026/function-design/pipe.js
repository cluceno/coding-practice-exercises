/*

Write a function pipe(...fns) that takes any number of functions and returns a new function. 
The returned function passes its input through all the functions left to right — the output of each becomes the input to the next.

*/

function pipe(...fns) {
    return function(n) {
        return fns.reduce((number, fn) => fn(number), n)
    }
}

const add1 = x => x + 1;
const double = x => x * 2;
const square = x => x * x;

const f = pipe(add1, double);
console.log(f(5));   // 12   (5 → add1 → 6 → double → 12)

const g = pipe(double, add1);
console.log(g(5));   // 11   (5 → double → 10 → add1 → 11)  — order matters!

const h = pipe(add1, double, square);
h(3);   // 64   (3 → 4 → 8 → 64)

const identity = pipe();
identity(42);   // 42   (no functions → returns input unchanged)

/*

Key learning points: 

1. rest params result in an array 

2. if you want to pass on a result of a function, reduce is a great tool for this because of the accumulator. 

3. Make sure you start off with the right initial value. Don't use a proxy by setting an intial value but use one that can
be dynamic and one that is determined by the inputs. 

Overall impression: This wasn't too hard when I saw the solution. I was confused by the using the accumulator in the function each time and didn't know I could do that. 
This exercise helped me see what is possible. My initial solution was wrong but I think it's great to practice using the tools even when used incorrectly as each mistake 
is a path to improvement. 

*/ 