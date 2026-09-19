/* 

Write a function indexById(items) that takes an array of objects (each with an id) and returns an object 
that maps each id to its full object — so you can look up any item by its id directly.

*/

function indexById(items) {
    if (!Array.isArray(items) || items.length === 0) return {};

    let index = items.reduce((newObject, item) => {
        newObject[item.id] = item;
        return newObject;
    }, {})

    return index;
}

const users = [
  { id: "a1", name: "Alice" },
  { id: "b2", name: "Bob" },
  { id: "c3", name: "Carol" }
];

indexById(users);
// {
//   a1: { id: "a1", name: "Alice" },
//   b2: { id: "b2", name: "Bob" },
//   c3: { id: "c3", name: "Carol" }
// }

console.log(indexById([]));            // {}
console.log(indexById("not array"));   // {}

/* 

Key learning points: 

1. To make an assignment within the reduce method, remember to use the accumulator and then return the accumulator at the end. 

Overall impression: I just struggled with the assignment mechanics again. Somehow this is a recurring issue for me and I know it will come but it is frustrating that it 
keeps happening. 

*/ 