/*

Write a function toggleTask(tasks, taskId) that:

Takes tasks — an array of objects shaped like { id: 1, text: "Buy groceries", done: false }
Takes taskId — the id of the task to toggle
Returns a new array (don't mutate the original!) where the task with matching id has its done value flipped, 
and every other task is unchanged.

*/

function toggleTask(tasks, taskID) {
    let toggle = tasks.map((task) =>{
        return task.id === taskID ? {...task, done: !task.done} : task; 
    });
    return toggle; 
}

/* Key learning points: 

1. When using the map function, I still have to return the value that we are modifying. 

2. When modifying a key:value pair in an object by declaring it a second time, use the key:value formatting directly. 

Otherwise, I was able to get the structure mostly right this time. The errors are identified a little quicker and this time
it was related to syntax rather than conceptual issues. I think 2 or 3 more related exercises will lock it in. 

*/ 

