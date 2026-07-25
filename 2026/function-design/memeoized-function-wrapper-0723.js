/*

Write a function memoize(fn) that takes any single-argument function and returns a new function that behaves identically — 
except it remembers results it has already computed. If called again with an argument it has seen before, it returns the stored result instead of recomputing.

Pseudocode: 

1. Create memoize function 
2. Declare storage variable with an object 
3. Check if a key:value pair exists within the object, which in this case would be the function name and result. If the pair exists,
then return the value. If it doesnt return a function and store the key: value pair. 

*/

function slowSquare(n) {
    console.log("computing...");
    return n * n; 
}

function memoize(fn) {
    let stored = {};
    return function(n) {
        if (n in stored) return stored[n];
        stored[n] = fn(n);
        return stored[n];
    }
}

const fastSquare = memoize(slowSquare);

console.log(fastSquare(4));  // logs "computing...", returns 16
console.log(fastSquare(4));  // logs nothing, returns 16
console.log(fastSquare(5));  // logs "computing...", returns 25
console.log(fastSquare(4));  // logs nothing, returns 16

/*

Key learning points: 

This was a difficult exercise for my level. Lots of learning points here. 

1. Objects can be used to store results. 

2. memoize runs once and returns an inner function. fastSquare holds that
inner function. The inner function keeps `stored` alive by referencing it
(the closure), so `stored` persists across every fastSquare call.

3. if the parameter of a function is a function, you can call that parameter like a function. In this exercise,
it was fn(n). 

4. The in operator is interesting. In the context of an object it helps you check for keys. In the context of
arrays it checks the index. 

5. Building a new object literal uses colons: { done: !task.done }, { cat: 1 }. 
Updating a key on an object that already exists uses =: stored[n] = fn(n), counts[word] = 1.

*/ 