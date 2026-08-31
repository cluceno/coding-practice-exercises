/* Write a function formatPhone(input) that takes a string of digits (possibly with junk characters mixed in) and formats it as (XXX) XXX-XXXX.

Strip out everything that isn't a digit first.
If, after stripping, there are exactly 10 digits, return them formatted as (XXX) XXX-XXXX.
If there aren't exactly 10 digits (too few or too many), return "Invalid number".
If input isn't a string, return "Invalid number".

Pseudocode:

Write function 
if input is not a string, return "invalid number"    
Strip out everything that isn't a digit using replace with regex
    Check the lengh of the string 
        If there are ten digits return them formatted
            Use the slice method and a template literal 
        If there aren't 10 digits, return invalid number 

*/ 

function formatPhone(input) {
    if (typeof input !== "string") return "Invalid number";

    let cleaned = input.replace(/\D/g, "");


    if (cleaned.length === 10) {
        let firstThree = cleaned.slice(0,3);
        let middleThree = cleaned.slice(3, 6);
        let lastFour = cleaned.slice(6);
        return `(${firstThree}) ${middleThree}-${lastFour}`;
    } else {
        return "Invalid number";
    }
}


console.log(formatPhone("1234567890"))           // "(123) 456-7890"
console.log(formatPhone("123-456-7890"))          // "(123) 456-7890"
console.log(formatPhone("(123) 456 7890"))        // "(123) 456-7890"
console.log(formatPhone("123.456.7890"))          // "(123) 456-7890"
console.log(formatPhone("12345"))                 // "Invalid number"  (too few)
console.log(formatPhone("123456789012"))          // "Invalid number"  (too many)
console.log(formatPhone(42))                      // "Invalid number"

/*

Key learning points: 

1. There are 2 pretty common ways of stripping out unwanted characters in a string. The first one, which is the one I wanted to reach for, 
is a loop. It would require more lines of code but it would work. The more idiomatic way is to use the replace method with regex and an empty string.
Here are some more regex syntax shorthand that I wasn't too familiar with before this exercise. 

\d is a digit - \D is anything that is not a digit 
\w is a word character: letters, digits, or underscore ([a-zA-Z0-9_]) - \W is non word character 
\s is a space/whitespace: space, tab, newline - \S — non-whitespace

I will probably forget these but I can learn them again. Each time, hopefully getting stronger. 

2. You can find the length of a string by using the length property. This can be used on arrays. 

3. The slice method takes two parameters: start and end. The end parameter is optional. It starts at the specified index and goes up to but not including
the end index. If the end index is not specified it goes to the end of the string. 

Overall impression: I'm getting better at asking the right questions. I feel like my questions are more understanding based rather than asking straight up for syntax.
This exercise is easy to read but again was hard to write from scratch, although it does feel easier than last exercise. This feels like a small improvement in generating pseudocode. 

One part of my code was not logging the expected result and I thought it might've been the code itself but it was actually a type on the console.log. This was a good 
lesson on what kind of mistakes can happen. 

*/