/*

Write out the inputs you'd test and the expected output for each.

Think about:

the normal/obvious cases (what does a typical input look like, and what should it return?)
the edge cases (what unusual, empty, malformed, or boundary inputs should this handle, and what should happen for each?)
the invalid cases (what counts as bad input, and what should the function do?)

parseDuration(str)
Parses a duration string like "1h30m" into a total number of minutes.

Pseudocode:

write function
    Type check first 
    Normalize input
        Remove leading/trailing whitespace and collapse/remove internal whitespace 
        lowercase 
    Validate with regex on clean input 
    Extract the numbers (could be 1 or 2 numbers)
    Convert to numbers and compute total 
    Return with template literal 

Negative integers will be caught with regex anyway 
*/ 

function parseDuration(str) {
    if (typeof str !== "string") return "Invalid input"; 

    //Normalize input 
    let cleaned = str.toLowerCase().replace(/\s+/g, "");

    // Check for empty string
    if (cleaned === "") return "Invalid input";

    //Extract numbers 
    let numbers = cleaned.match(/^(?:(\d+)h)?(?:(\d+)m)?$/);
    if (!numbers) return "Invalid input";
    const hours = Number(numbers[1] || 0);
    const minutes = Number(numbers[2] || 0);

    let totalMinutes = (hours * 60) + minutes;

    return `${totalMinutes} minutes`;
}




//Test for proper formatting 
console.log(parseDuration("5h0m")) // "300 minutes"
console.log(parseDuration("0h10m")) // "10 minutes"
console.log(parseDuration("fivehourstenminutes")) // "Invalid input"
console.log(parseDuration("1h5m1s")) //"Invalid input"

// Handles hour and minutes in isolation 
console.log(parseDuration("5h")) // "300 minutes"
console.log(parseDuration("10m")) // "10 minutes"
console.log(parseDuration("100000m")) // "100 minutes"

// Tests large integers and lower limit
console.log(parseDuration("100h0m")) // "6000 minutes"
console.log(parseDuration("0h0m")) // "0 minutes"

//Test for negative integers
console.log(parseDuration("-1hr20m")) // "Invalid input"
console.log(parseDuration("1hr-10m")) // "Invalid input"

//Tolerate white spaces 
console.log(parseDuration("  1h30m  ")) // "90 minutes"
console.log(parseDuration("  1h 30m  ")) // "90 minutes"
console.log(parseDuration("1h   30m")) // "90 minutes"

//Missing number
console.log(parseDuration("h10m")) // "Invalid input"
console.log(parseDuration("1hm")) // "Invalid input"

//Case insensitive 
console.log(parseDuration("1H30M")) // "90 minutes"

//Test for type 
console.log(parseDuration(25)) // "Invalid input"
console.log(parseDuration(["5hr", "10m"])) // "Invalid input"

//Test for empty string 
console.log(parseDuration("")) // "Invalid input"


/*

Key learning points: 

1. The mental model of principles for validating and extracting information: guard --> normalize --> validate --> extract --> transform --> return. The transform
   and return come naturally but I keep forgetting the order of principles before that.

2. After normalizing is a great place to check for an empty string since an empty string could still fall through the guard and normalization checks. This is essentially
   a second guard. 

3. For my test cases, I need to remember to always test for empty strings and upper/lower case. 

4. I learned how to use the .match method and what it returns. It is fundamental to know that it returns an array if there is a match. The 0 index returns the whole match,
and the subsequent arrays return the match groups in order. If one of the match groups doesn't fit a pattern, it returns undefined. If the whole operation doesn't match, then 
it returns null. 

5. I used the || 0 pattern again, which is good for consolidation. I still don't reach for it naturally. 

6. To remove all spaces from the string use regex and the \s+ pattern because it is more robust. Otherwise, use trim() for leading/trailing spaces. 

7. I learned how to use a non capturing group with regex ?:. This pattern means not to save the match of whatever is within the parenthesis. However, if there is another match group
within the non capturing group, that can be saved. An easy way to remember this is how to make the wrapper optional since you only want part of string. The whole pattern still must match,
but only the inner group is saved and the wrapper is discarded. 

Overall impressions: This one was difficult and I had heavy assistance from AI. I would not have been able to derive this solution due to 3 factors: 

1. the regex patterns would have been difficult to create independently 
2. I learned a new non capturing group pattern ?: 
3. I did not know the output of the match pattern 

These 3 things I would not be able to derive no matter how hard I tried. Of significant importance is the ?: non capturing group pattern and the match output, which is an array. In addition
the array is formatted in a particular way. The encouraging thing is once I saw the solution, I was able to recreate it on my own, withoutlooking back at the solution. I feel like 
regex is still difficult but each rep is getting slightly better. I think this was a difficult but valuable and fun exercise. 

*/ 