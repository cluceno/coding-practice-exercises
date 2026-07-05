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

