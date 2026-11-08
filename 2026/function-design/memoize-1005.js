/*

Write a function memoize(fn) that takes a function and returns a new function that caches results. 
When the memoized function is called with arguments it's seen before, it returns the cached result instead of recomputing.

*/

/*

Object literal version 

function memoize(fn) {
    let cache = {};

    return function(n) {
        if (n in cache) return cache[n];
        let result = fn(n);
        cache[n] = result;
        
        return result;
    }
}

*/

function memoize(fn) {
    let cache = new Map();

    return function(n) {
        if (cache.has(n)) return cache.get(n);
        const result = fn(n);

        cache.set(n, result);
        return result;
    }
}

let calls = 0;
const slowSquare = (x) => { calls++; return x * x; };

const fastSquare = memoize(slowSquare);
console.log(fastSquare(4));   // 16  (computed — calls is now 1)
console.log(fastSquare(4));   // 16  (cached — calls is STILL 1, didn't recompute)
console.log(fastSquare(5));   // 25  (new input, computed — calls is now 2)
console.log(fastSquare(4));   // 16  (cached — calls still 2)

/*

Key learning points: 

1. Use the right key for the cache. I tried using the fn but that doesn't necessarily need to change for every call. What's unique is the number that is passed. 

2. The parameter can only be passed into the the returned function. If the inner function parameter is a function, we can pass the number parameter into the returned function
and then use the fn with the number parameter. This was tripping me up. 

Overall impression: I feel like I've done this shape before but I couldn't derive it myself. The returned function and parameter really tripped me up. I tried caching 
the fn instead of the n and I realized through trial and error that fn doesn't change no matter what the number parameter is. I think I just need some more reps with this. 

*/ 