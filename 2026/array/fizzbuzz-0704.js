/* 
Write a function fizzBuzzPlus(n) that returns an array of strings for numbers 1 to n:

Multiples of 3 → "Fizz"
Multiples of 5 → "Buzz"
Multiples of both → "FizzBuzz"
Multiples of 7 → also append "Bang" (so 21 → "FizzBang", 35 → "BuzzBang", 105 → "FizzBuzzBang")
Otherwise → the number itself, as a string

Constraint: no if statements — solve it using array methods or string building only.
*/

function fizzBuzzPlus(n) {
    array = Array.from({length: n}, (_, index) => index + 1);
    return array.map(number => {
        let result = "";
        
        result += number % 3 === 0 ? "Fizz":""
        result += number % 5 === 0 ? "Buzz":""
        result += number % 7 === 0 ? "Bang":""
                        
        return result === "" ? String(number): result;
    })
}

console.log(fizzBuzzPlus(4));

*/ Exercise Comments: 

07-04: Array-Methods: Fizzbuzz 

Struggled with Array.From({length: n}, (_, index) => index + 1); 
I had to do a deep dive to figure out what parameters Array.from took and then how to manipulate those variables. 

When using map on an array, I can add a complex callback function that includes setting a variable and going through conditions on what to return. 

This exercise took me more than 30 minutes but I think I learned a lot and it was worth it. 

*/ 