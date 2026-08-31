/*

Write a function toTitleCase(str) that capitalizes the first letter of each word and lowercases the rest.
If str isn't a string, return "".

Write function
    type check 
    normalize input
        remove leading/trailing spaces 
        replace multiple inner spaces with a single space
    split string by a single space and create an array of words
    Use map to transform the words of the array
        first split on index 1 and then upper case the letter
        lower case the rest
        join them together
    
    return a sentence  using a template literal  and indexes from the array 

*/

function toTitleCase(str) {
    if (typeof str !== "string") return "";

    let cleaned = str.trim().replace(/\s+/g," ");
    if (cleaned === "") return "";

    let words = cleaned
        .split(" ")
        .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
    
    let sentence = words.join(" ");
    return sentence;
}

toTitleCase("hello world")          // "Hello World"
toTitleCase("the QUICK brown FOX")  // "The Quick Brown Fox"
toTitleCase("a")                     // "A"
toTitleCase("")                      // ""   (empty string → empty string)
toTitleCase("multiple   spaces")     // "Multiple   Spaces"  (preserve the spacing? or collapse? — decide)

/* 

Key learning points: 

1. I thought I could omit the g variable on my regex, but I wasn't considering there could be multiple words with multiple inner spaces. Adding the g variable
makes the regex more robust. 

2. I missed the empty string check which broke the code. I need to remember to include this and remember it usually comes after normalizing. 

3. I learned how to capitalize with javascript. I need to first take the 0 index of the word and then use slice to select the rest of the word. Then I can concatenate them. 

4. If I create a block within an arrow function I need to write return explicitly at the end of the function. If the function is simple enough and it is in one line 
I can omit the curly braces and the explicit return word. 

5. I relearned the difference between splice and slice again. 
    Slice extracts a copy but does not mutate
    Splice mutates by removing or inserting items of the array and also returns the extracted parts 

Overall impression: This exercise shouldve been easy but I had some debugging issues. First, I thought the single case "" was breaking all of the other cases but after examining closer,
this wasn't true. I just had to be more familiar with the debugging interface. This itself is a learning point, albeit a frustrating one. This was definitely a good rep for consolidation.

*/