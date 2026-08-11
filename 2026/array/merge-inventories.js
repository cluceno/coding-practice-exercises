/*

Write a function mergeInventories(inventories) that takes an array of inventory objects (each mapping item names to counts) 
and merges them into a single object with the totals for each item.

If inventories isn't an array, return {}. Assume the counts are always numbers.

Pseudocode: 

write function 
    if inventories isn't an array, return {}
    Use the reduce method to iterate through the array, with an object literal as the starting value
        using Object.entries, split the key:value pairs into individual arrays
            loop over each key:value pair using the forEach method
                if the key exists add the number to the existing value 
                if it doesnt, create the key and value pair and then return it 

*/ 

function mergeInventories(inventories) {
    if (!Array.isArray(inventories)) return {};

    let mergedInventories = inventories.reduce((merged, item) => {
        Object.entries(item).forEach(([name, value]) => {
            if (name in merged) {
                merged[name] += value;
            } else {
                merged[name] = value;
            }
        });
        return merged;
    }, {})
    
    return mergedInventories; 
}

console.log(mergeInventories([
  { apple: 3, banana: 2 },
  { apple: 1, cherry: 5 },
  { banana: 4, cherry: 1 }
]));
// { apple: 4, banana: 6, cherry: 6 }

console.log(mergeInventories([{ apple: 2 }]));   // { apple: 2 }
console.log(mergeInventories([]));                // {}

/*

Key learning points: 

1. Remember the Object static methods
    - Object.keys 
        Takes an object and returns an array of all the keys
    - Object.values
        Takes an object and returns an array of all the values
    - Object.entries
        splits each key:value pair into it's own array 

2. This is an example of two nested loops. The reduce method moves the accumulator and process forward, while the forEach loop 
iterates and mutates over each key:value pair. 

3. I need to return the accumulator. This is a repeated bug. 

4. Assigning a variable to the initial split of the object is not wrong. It could make it more readable and I could factor it out later.
However, it is not necessary in this exercise. 

5. When adding the value to the key, you need to explicitly say that you are assigning it to itself with the += operator. With the plus +, 
the arithmetic is done but the value just gets thrown away. 

Overall impression: I couldn't do this because I could not recall the Object static methods from the top of my head and I couldn't predict their output. 
Also, I am still getting confused on when to return on a reduce function. I didn't use the += operator like I should have. Merging an array of objects into a single object requires breaking the object 
into arrays and then assigning the key:value pairs. This is the principle I need to recognize and be able to reuse. I don't know what else to say except that I need to do more reps. 
I am not sure if I am getting better but I guess that's what getting better feels like. I'll probably get this wrong a few more times before it really clicks. 
    
*/