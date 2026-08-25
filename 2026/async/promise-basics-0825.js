/*

Write a function delay(ms, value) that returns a Promise which resolves with value after ms milliseconds.

Pseudocode: 

Write function delay 
    return new Promise


*/

function delay(ms, value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value);
        }, ms)
    });
}

delay(1000, "done").then(result => console.log(result));
// after 1 second, logs: "done"

delay(500, 42).then(result => console.log(result));
// after 0.5 seconds, logs: 42

delayReject(1000, "failed").catch(error => console.log("Caught:", error));
// after 1 second, logs: "Caught: failed"

/* 

Key learning points: 

1. Understand the mental model of Promises. What are they used for? When a function is called, the result of it is returned immediately. However, 
if all the data is not available it will return undefined or with an error. To solve for this, we can return a promise object(effectively a container), 
which allows us to wait for the data that the function needs to run. When the data is available it fills the container. Afterwards, we can manipulate the result with 
.then and .catch. 

2. The tools used in this exercise just mimicked the sequence of what a promise does. The built in function, setTimeout, is not typically used. Promises are used in situations 
like fetching data from a server. Also, the resolve and reject conditions are typically handled within the same promise object. 

Overall impression: This was very difficult. I had to create a new mental model. There was no way I could derive this without first building the understanding of why this is used 
and what each part is doing. I think I have a beginner framework now that I can build off of but I will probably find new gaps soon. 

*/