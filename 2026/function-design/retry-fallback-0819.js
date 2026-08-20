/*

Write a function withFallback(primary, fallback) that takes two functions and returns a new function. When the returned function is called with an argument:

it calls primary with that argument and returns the result
but if primary throws an error, it calls fallback with the same argument and returns that result instead

Pseudocode: 

Write function
    return a function 
        try first function first
        catch second function if there is an error 

*/ 

function withFallback(primary, fallback) {
    return function(input) {
        try {
            return primary(input);
        } catch (error) {
            return fallback(input);
        }
    };
}

const risky = (n) => {
  if (n < 0) throw new Error("negative!");
  return n * 2;
};
const safe = (n) => 0;

const safeDouble = withFallback(risky, safe);
console.log(safeDouble(5));    // 10   (primary works)
console.log(safeDouble(-3));   // 0    (primary throws → fallback runs → returns 0)

const upper = (s) => s.toUpperCase();
const empty = () => "";
const safeUpper = withFallback(upper, empty);
console.log(safeUpper("hi"));  // "HI"
console.log(safeUpper(42));    // ""   (42.toUpperCase() throws → fallback → "")

/*

Key learning point: 

1. New syntax, try/catch. Similar to if/else structure except it usually catches errors. 

2. If your function returns a function that also returns a value, the returned value belongs to the function that called it.
So you have to return the result of the inner function as well. 

3. The catch in try/catch can be called with or without the parameter. If you are going to do something with the error, 
you can include it, but otherise it can be omitted. 

4. New is usually included when making instructions to throw an error. This is because constructing an error is constructing 
an object and it needs the new syntax. 

5. When you return a function, make sure you specify that it is a function. I think I got confused because I used fn to return a function 
in the past but that might have been a parameter. 

Overall impression: This one was fairly easy once I understood othe syntax. In fact, it feels like the setup to testing this
was actually much more complicated. However, I see the purpose of this exercise was to teach a new tool that I had not 
seen before. So again the difficulty was probably right at the limit due to the new concept. 

*/