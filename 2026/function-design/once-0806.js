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