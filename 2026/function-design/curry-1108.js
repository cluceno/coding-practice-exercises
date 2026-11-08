/*

Write a function curry(fn) that takes a function expecting a fixed number of arguments, 
and returns a version that can be called with its arguments one at a time (or in groups), only running the original once all arguments are supplied.

*/

function curry(fn) {

    function collect(argsSoFar) {
        return function(...newArgs) {
            const combined = [...argsSoFar, ...newArgs];
            if (combined.length === fn.length) {
                return fn(...combined);
            } else {
                return collect(combined);
            }
        }
    }
    
    return collect([]);
}

function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = curry(add);
 
console.log(curriedAdd(1)(2)(3));     // 6   (one at a time)
console.log(curriedAdd(1, 2)(3));     // 6   (grouped)
console.log(curriedAdd(1)(2, 3));     // 6
console.log(curriedAdd(1, 2, 3));     // 6   (all at once)