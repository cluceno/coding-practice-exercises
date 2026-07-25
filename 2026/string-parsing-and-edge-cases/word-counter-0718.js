/*

Write a function wordCount(text) that:

Takes a string of text
Returns an object counting how many times each word appears, case-insensitively, ignoring punctuation
If text isn't a string, or is empty/whitespace-only after trimming, return an empty object {}

Example:
jswordCount("The cat sat. The CAT ran!");
// → { the: 2, cat: 2, sat: 1, ran: 1 }

*/

function wordCount(text) {
    if (typeof(text) != "string") return "Invalid"; 

    let cleaned = text
        .toLowerCase()
        .replace(/[.,?!]/g, "")
        .split(" ");
    
    let wordCount = cleaned.reduce((counts, word) => {
        if (counts[word]) {
            counts[word] += 1;
        } else {
            counts[word] = 1;
        }
        return counts;
    }, {})

    return wordCount;

}   

console.log(wordCount("The cat sat. The CAT ran!"));

/*

Key learning points: 

1. I forgot the simple string method, toLowerCase, again.

2. the g in regex means global and will target each instance in a string and replace it when using the replace method. 

3. When using split to separate words, don't use an empty string, use a string with a space. 

4. If you set the initial value to the object literal, the intial value in the reduce method will be the name of the object.
Quite literally, accumulator = {}. Then you can access the key value pair by using bracket notation. 

5. You can manipulate a key's value the same way you would increment a variable in a closure format. More broadly, the +=
operators work on any readable and reassignable location. 

6. Remember you always need to return the variable at the end of the function, otherwise it just gets thrown away. This 
is a repeated mistake. 

*/ 