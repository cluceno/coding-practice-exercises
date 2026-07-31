/*

Write a function createLimiter(maxCalls) that returns a new function. That returned function:

Can be called normally and returns true the first maxCalls times
After it's been called maxCalls times, every further call returns false (the limit is used up)

Pseudocode:

Create a variable called limiter with a function called createLimiter(maxCalls) as it's value and returns the inner function. 

createLimiter(maxCalls) will have a closure, which will serve as a counter and will increment each time the function is called. 
The parameter for createLimiter sets the number of calls. Once the counter equals the parameter, it should return false. 
Prior to that, each function returns true. 

*/ 

function createLimiter(maxCalls) {
    let functionCall = 0;

    return function() {
        if (functionCall === maxCalls) return false;
        functionCall++;
        return true;
    }
}

const limiter = createLimiter(3);
console.log(limiter());  // true  (call 1)
console.log(limiter());  // true  (call 2)
console.log(limiter());  // true  (call 3)
console.log(limiter());  // false (limit reached)
console.log(limiter());  // false

const limiter2 = createLimiter(1);
console.log(limiter2()); // true
console.log(limiter2()); // false
// limiter and limiter2 are independent

/*

Key learning points: 

I got in an extra rep of returning inner functions and storing the closure in a variable. I had to fiddle with the order of where
the increment happened and eventually got it in the right place. 

One key nuance I learned: The persistence of the closure depends on the returned function. This is an important principle. 

This was great practice and it happened faster this time. This is clearly a sign of learning but it still feels slow. 
I suppose I just have to trust the process here. 