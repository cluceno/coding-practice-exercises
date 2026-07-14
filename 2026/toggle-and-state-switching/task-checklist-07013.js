/*

Write a function toggleTask(tasks, taskId) that:

Takes tasks — an array of objects shaped like { id: 1, text: "Buy groceries", done: false }
Takes taskId — the id of the task to toggle
Returns a new array (don't mutate the original!) where the task with matching id has its done value flipped, 
and every other task is unchanged.

*/

function toggleTask(tasks, taskID) {
    let toggle = tasks.map((task) =>{
        task.id === taskID ? {...task, task.done = !task.done} : task; 
    });
    return toggle; 
}