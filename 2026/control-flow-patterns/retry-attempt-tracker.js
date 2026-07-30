/*

Write a function firstFailingAttempt(attempts) that takes an array of booleans representing success/failure of 
sequential attempts (true = success, false = failure). Return the 1-based position of the first false (the first failure). 
If there are no failures, return -1.

Constraint: use a for loop, and return from inside the loop the moment you find the first failure — don't scan the whole array. 
    This is the thing array methods can't cleanly do: stop early and exit at the exact moment a condition is met. 
    That early-exit-from-a-loop capability is precisely why loops still matter even when you have .map/.filter.

*/

function firstFailingAttempt(attempts) {
    for (let i = 0; i < attempts.length; i++) {
        if (attempts[i] === false) return i + 1;
    }
    return -1;
}
    
console.log(firstFailingAttempt([true, true, false, true]))   // 3  (first false is at position 3)
console.log(firstFailingAttempt([false, true, true]))          // 1
console.log(firstFailingAttempt([true, true, true]))           // -1  (no failures)
console.log(firstFailingAttempt([]))                            // -1

/* Key learning points: 

1. Early exit is important. You can achieve it with a loop like this exercise and the find() and findIndex() methods. 

2. If there is one condition that needs to be checked you can keep the logic in a single line rather than writing another condition with a continue. 

3. To return the index, you can use i + 1. 

Overall, I think this exercise was on the easier side. I had to troubleshoot a little bit with the terminal but I was able to find the problems and reason 
my way to the solution with minimal help. I also read the spec more closely to make sure that I wasn't missing any conditions. 

*/ 