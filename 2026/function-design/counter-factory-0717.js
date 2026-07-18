/*

Write a function createCounter(startingValue) that:

Takes a startingValue (default to 0 if not provided)
Returns an object with two methods:

increment() — increases the internal count by 1 and returns the new count
getCount() — returns the current count, without changing it

Example: 

const counter = createCounter();
counter.increment();  // → 1
counter.increment();  // → 2
counter.getCount();   // → 2 (didn't change anything, just reads it)

const counter2 = createCounter(100);
counter2.increment(); // → 101
counter.getCount();   // → 2 (completely separate from counter2 — each has its own count!)

*/

function createCounter(startingValue = 0) {
    let count = startingValue;

    return {
        increment: function() {
            count +=1;
            return count; 
        },
        getCount: function() {
            return count; 
        }

    }
}

const counter = createCounter();
console.log(counter.increment());  // → 1
console.log(counter.increment());  // → 2
console.log(counter.getCount());   // → 2 (didn't change anything, just reads it)

const counter2 = createCounter(100);
console.log(counter2.increment()); // → 101
console.log(counter.getCount());   // → 2 (completely separate from counter2 — each has its own count!)

/*

Key learning points: 

1. Can you store functions within objects and use them as methods to manipulate a variable. You can set this up by 
using a function expression and then access the method via dot notation. 

2. This exercises uses closures. The function keeps a variable in memory rather than throwing it away
immediately after it finishes running. The inside function references the variable in the outer/enclosing scope. 

3. To increment a variable, reference the variable itself and not the value it is equal to. 

4. I need to get better at setting up function expressions so that I can access the functions stored within the objects.

*/ 