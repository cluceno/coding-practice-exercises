/*

Write a function groupBy(items, key) that groups an array of objects into an object, keyed by the value of a given property.
If items isn't an array, return {}.

Pseudocode: 

write function 
    if the first parameter is not an array, then return {}

    using the reduce function, I want to go through the array and find if the key exists. Will use an object literal as the accumulator. 
        if array[key] doesn't exists, create the key and assign it the current array item
        if array[key] does exist, add it to the existing key
    return object

    return new object

*/

function groupBy(items, key) {
    if (!Array.isArray(items)) return {};

    let categorized = items.reduce((newObject, item) => {
        const groupKey = item[key];
        if (groupKey in newObject) {
            newObject[groupKey].push(item);
        } else {
            newObject[groupKey] = [item]; 
        }
        return newObject;
    }, {})

    return categorized;
}

const people = [
  { name: "Alice", dept: "eng" },
  { name: "Bob", dept: "sales" },
  { name: "Carol", dept: "eng" },
  { name: "Dave", dept: "sales" },
  { name: "Eve", dept: "eng" }
];

console.log(groupBy(people, "dept"));
// {
//   eng:   [{name:"Alice",dept:"eng"}, {name:"Carol",dept:"eng"}, {name:"Eve",dept:"eng"}],
//   sales: [{name:"Bob",dept:"sales"}, {name:"Dave",dept:"sales"}]
// }

console.log(groupBy([], "dept"));           // {}
console.log(groupBy(people, "missing"));    // { undefined: [...all five...] }  (all share the missing key → grouped under "undefined")

/* 

Key learning points: 

1. Remember that if you are computing the same key multiple times, we can assign a variable to it so that it is only computed once. Then we can reuse 
that variable throughout the code, so you can avoid repeating yourself. 

2. For the if/else condition within the reduce, if you returning the accumulator in both conditions, you can do it once before the end of the iteration. 

3. There are multiple ways to solve this problem. Two new ones I learned: 
    - || []: this format checks if something exists, in this case it was the key. If it does it is truthy and it would be assigned to the left side. If it is falsy, the array literal
    is assigned. 
    - Object.groupBy(items, function): the second parameter is a function and the first parameter is the array. The built in function groups by whatever the function determines. It groups by 
    an array by default.

    The other one that I learned is arguably the simplest one. Which is to create a new object and then loop through the array and build the object that way. 

4. The spread operator was not needed in this scenario. Remember that the spread operator creates a new object and is an immutable method. Where we've used this before is when we've changed the boolean value 
of a specific key in an object. Then we returned the new object. 

Overall impression: I was able to solve this one without help, which is a pleasant surprise. I didn't think I would be able to solve this one without assistance. It is definitely a win,
but it feels like I stumbled onto the answer by using educational guesses rather than declaring the code with confidence. This is obviously a good sign, but it does show that I probably need more reps. 

Learning about the other ways to solve this problem was genuinely interesting. It is like I did the problem four separate times. It's interesting, though, that this doesn't seem to intimidate me
or fill me with hopelessness like it used to. There are many ways to solve a problem, and that is ok.

*/