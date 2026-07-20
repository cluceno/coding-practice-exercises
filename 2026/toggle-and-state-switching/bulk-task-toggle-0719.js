/*

Write a function toggleAllInCategory(tasks, category) that:

Takes tasks — an array of objects shaped like { id: 1, text: "Buy milk", done: false, category: "errands" }
Takes category — a string
Returns a new array where every task matching that category has its done value flipped, 
and every task not matching that category is left completely unchanged.

*/

function toggleAllInCategory(tasks, category) {
    let toggle = tasks.map((task) => {
        return category === task.category ? {...task, done: !task.done} : task; 
    })
    return toggle; 
}

const tasks = [
  { id: 1, text: "Buy milk", done: false, category: "errands" },
  { id: 2, text: "Write code", done: false, category: "work" },
  { id: 3, text: "Walk dog", done: true, category: "errands" }
];

console.log(toggleAllInCategory(tasks, "errands")); 

/*

Key learning points: 

I was able to take what I've learned from the previous exercise and build this one out. I was able to get the structure 
mostly on my own. 

*/ 