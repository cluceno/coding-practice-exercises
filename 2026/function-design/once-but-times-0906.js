/* 

Write a function limitCalls(fn, maxCalls) that takes a function and a number, 
and returns a new function that only actually calls fn the first maxCalls times it's invoked. 
After that, further calls do nothing (and return undefined), no matter how many times you call it.

*/ 

function limitCalls(fn, maxCalls) {
    let iteration = 0; 

    return function(...args) {
        if (iteration < maxCalls) {
            iteration++
            return fn(...args); 
        };
    }
}

let count = 0;
const increment = () => { count++; return count; };

const limited = limitCalls(increment, 3);
console.log(limited());   // 1  (call 1 — runs)
console.log(limited());   // 2  (call 2 — runs)
console.log(limited());   // 3  (call 3 — runs)
console.log(limited());   // undefined  (call 4 — does nothing, maxCalls exceeded)
console.log(limited());   // undefined  (call 5 — still nothing)

// a fresh limiter is independent:
const limited2 = limitCalls(increment, 1);
console.log(limited2());  // 4  (runs once — increment's count is now 4)
console.log(limited2());  // undefined  (already hit its limit)

/*

Key learning points: 

1. When we return a function, to make it more robust we should pass args as a parameter in case the function that is passed in requires it. If 
there is no argument then it will ignore it. 

2. If a function doesn't return anything, it always returns undefined. This is why we don't need to explicitly return undefined in this function. 

Overall impression: This exercise was not bad. I was able to get to the solution with some trial and error. At first my if condition was iteration <= maxcalls, 
so limited would go until 4 before going undefined. I had to change it to match the requirements of the exercise. I also ran the passed in function without returning it
and it didn't work. I had to remember to explicitly return the passed in function so that the result would be logged. In this situation I had to return it to make 
sure the count was incremented. 

I didn't even think to add ..args as a parameter but it makes sense now that it was explicitly told to me. 

The thing about this exercise, is I'm getting better at returning functions and holding the closure mental model. I think where I will struggle is the setup. If I had to
start from the beginning and store the return value in a variable like limited or limited 2, I'm not sure if I could do it. 

*/
