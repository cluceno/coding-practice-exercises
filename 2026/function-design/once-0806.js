/*

Write a function once(fn) that takes a function and returns a new function. The returned function calls fn and returns its result the first time it's called.
On every call after that, it does not call fn again — it returns the result from that first call.

Pseudocode: 

Write function once
    declare result 
    declare hasRun = false 
    return a function with the parameter fn
        Create a flag to see if this function has run before?  if it has return the result. 
        run the function and store the result 
        return result


*/

function once(fn) {
    let result;
    let hasRun = false;
    return function() {
        if (hasRun === false) {
            result = fn();
            hasRun = true;
            return result;
        } else {
            return result; 
        }
    }
}

let count = 0;
function increment() {
  count++;
  return count;
}

const initialize = once(increment);
console.log(initialize());  // 1  (calls increment, count is now 1)
console.log(initialize());  // 1  (does NOT call increment again, returns the stored 1)
console.log(initialize());  // 1  (still 1, increment never ran again)
console.log(count);         // 1  (increment only ever ran once)

const initialize2 = once(increment);
console.log(initialize2()); // 2  (independent — its own first call, increment runs, count now 2)

/* 

Key learning points: 

1. Every time you create a variable to store the result of a function, that result will be saved. This is how each iteration is able to 
save the state. I didn't need to create an object like I did with the last exercise. For states, this works just fine. 

2. If you're calling a function in the returned function, make sure to use the correct syntax, which is including brackets after the function name.
Otherwise, you just return the function intself. 

Overall impression: This one was not bad when I was able to see how it's done and fill in my gaps in knowledge. When I was able to see the whole picture
it because easier. I hope on my next 2-3 rotations, I'll start to see the payoffs in how to make these shapes. I've made states before but I never
explicitly called this structure by that name before. I did some in CS50P but it didn't stick because I felt like I was drinking out of a firehouse
when learning from scratch. Let's hope it sticks this time. 

*/ 