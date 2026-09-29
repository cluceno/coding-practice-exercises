/* 

Your task: write doubleTwice(n) that:

calls fetchDouble(n), then takes that result and calls fetchDouble again on it (doubling twice total)
logs the final result as "Result: <value>" (e.g. doubleTwice(5) → 5→10→20 → logs "Result: 20")
if anything rejects, logs "Error: <reason>"

*/ 

function doubleTwice(n) {
    fetchDouble(n)
        .then((first) => fetchDouble(first))
        .then((second) => console.log(`Result: ${second}`))
        .catch((reason) => console.log(`Error: ${reason}`));
        
}


// PROVIDED — simulates fetching a number, doubled, after a delay.
function fetchDouble(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof n === "number") {
        resolve(n * 2);
      } else {
        reject("Not a number: " + n);
      }
    }, 300);
  });
}

doubleTwice(5);      // 5 → 10 → 20 → logs "Result: 20"
doubleTwice(3);      // 3 → 6 → 12 → logs "Result: 12"
doubleTwice("x");    // rejects → logs "Error: Not a number: x"

/* 

Key learning points: 

1. You do not have to store the result of a promise on a variable. The function itself is a container and it waits for the result of the function. Then, you can act on 
the result with .then or .catch. This is genuinely a different mental model than what we've previously been doing with closures. 

2. The .catch method will trigger at any point in the chain if the promise is rejected. 

3. If you chain promises, the timing matters because if there is an early error, that result will arrive first. 

Overall impression: I am still building the mental model. The above learning points display why I could not complete this on my own and that is ok. I feel like 
I learned a little bit more today and that should strengthen the next round. Patience and persistence is what will ultimately win out in the end. 

*/ 