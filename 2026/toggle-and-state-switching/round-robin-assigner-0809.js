/*

Write a function makeAssigner(workers) that takes an array of worker names and returns a function. 
Each time the returned function is called, it hands out the next worker in the list, cycling back to the start after the last one.

Pseudocode: 

makeAssigner(workers):
  if workers isn't a non-empty array → return a function that always returns null
  index = 0   (closure state)
  return a function that:
    worker = workers[index % workers.length]
    index++    (advance for next call)
    return worker
*/

function makeAssigner(workers) {
    if (Array.isArray(workers) || workers.length === 0) return () => null; 
    let index = 0;
    
    return function() {
        let worker = workers[index % workers.length];
        index++; 
        return worker;  
    }
}

const assign = makeAssigner(["Alice", "Bob", "Carol"]);
console.log(assign());  // "Alice"
console.log(assign());  // "Bob"
console.log(assign());  // "Carol"
console.log(assign());  // "Alice"   (wrapped around)
console.log(assign());  // "Bob"

const assign2 = makeAssigner(["Dave", "Eve"]);
console.log(assign2()); // "Dave"
console.log(assign2()); // "Eve"
console.log(assign2()); // "Dave"
// assign and assign2 are independent

// If workers is not a non-empty array, the returned function returns null every call:
const bad = makeAssigner([]);
console.log(bad());     // null

/* 

Key learning points: 

1. I was trying to return the specific worker with the index. I could just increment the index for a simpler shape and then use the modulo operator
to identify the item I am going to return. 

2. if you assign a variable and call it like a function, the variable assigmed must return a function. Otherwise you cannot call it like a function. 
Specifically, in this example I tried returning null but I need to return a function that returns null. Otherwise, bad() would return a type error. 

3. If you assign the worker according the index and then increment the index afterwards, the worker will stay assigned to the original index. If you assigned the index 
first then, the returned worker would be the next one, which is not what we want in this exercise. Good to know for order of operations. 

4. You can return a simple function using arrow notation. Remember that functions declared in a single line have return implied so you don't have to include it. 

Overall impression: I'm still not used to the modulo operator shape. It does make sense to me but I struggled to create it from scratch. In addition, 
I tried reaching into the array using bracket notation. This was a more complicated approach and I could've made it work but it was not optimal. I wonder 
when I will start to think in code that is more efficient. I think I should stay at this difficulty again for the next exercise of this kind. 

*/ 