/*

Write a function groupByCategory(items) that takes an array of objects and groups them by their category property, 
returning an object where each key is a category and each value is an array of the items in that category. If items isn't an array, return an empty object {}.

Pseudocode: 

Create group by category function
    using the reduce function and object as the starting point 
        if the paremeter is not an array, return an object. Check with Array.isArray()
        if category exists, add to array/value of existing key using the push() method
        if category does not exist, create key and add object to array using the push() method

*/

const items = [
  { name: "Apple", category: "fruit" },
  { name: "Carrot", category: "vegetable" },
  { name: "Banana", category: "fruit" },
  { name: "Broccoli", category: "vegetable" },
  { name: "Cherry", category: "fruit" }
];

function groupByCategory(items) {
    if (!Array.isArray(items)) return {}; 

    let newObject = items.reduce((groups, item) => {

        if (item.category in groups) {
            groups[item.category].push(item);
        } else {
            groups[item.category] = [item]; 
        }
        return groups;
    }, {})
    return newObject; 
}

console.log(groupByCategory(items));

/* Key learning points

1. My attention to detail on the spec is poor. I'm constantly missing the guard clauses simply because I am reading 
too quickly and glossing over the details. 

2. If what's being passed into the reduce function is an object, you can look into the object with dot notation. I was trying
to pass a specific part of the object into the reduce method as a parameter, which does not work.

3. When you build the new object with reduce, you have to return the accumulator at the very end. 

4. If the key value pair doesn't exist, you have to use the = operator to create it. You cannot push an item to 
a key that doesn't exist. 

5. To check if something is an array, use the Array,isArray() method 

6. When creating an array for the key, you have to use the array literal, otherwise you are just setting the value to the object. 

All of these in aggregate made it difficult for me to solve this problem. While each is not conceptually difficult, all of them at
once is enough to derail the whole process. I need more reps to solidify all of these concepts. 

*/ 