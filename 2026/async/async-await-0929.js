/* 

write getGreeting(name) that:

calls fetchValue(name) and waits for the result
returns the string "Hello, <name>!" (e.g. getGreeting("Alice") → "Hello, Alice!")
if it rejects, returns "Error: <reason>"
written with async/await, not .then/.catch

*/

async function getGreeting(name) {
    try {
        const result = await fetchValue(name);
        return `Hello, ${result}`;
    } catch(error) {
        return `Error: ${error}`;
    }
}

// PROVIDED — resolves with the value after a delay, rejects if value is falsy.
function fetchValue(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value) {
        resolve(value);
      } else {
        reject("No value provided");
      }
    }, 300);
  });
}

getGreeting("Alice").then(g => console.log(g));   // "Hello, Alice!"
getGreeting("").then(g => console.log(g));         // "Error: No value provided"

/* 

Key learning points: 

1. The function async must be used in order to use await 

2. Use the try/catch format to handle the errors on the Promise 

3. Await pauses and waits for the promise. This is different from the then/catch format where the promise container waits for the result and then you handle the result/errors directly. 

4. If you want to return a value it must be inside a function. If you want to do something, you can run the chain at the top level without a wrapper. 

overall impression: This were some genuinely new concepts that I couldn't derive even if I tried my hardest. This was an incremental learning step and I am far from indepedence 
at least in this area. However, I learned some very important concepts today. 

*/ 