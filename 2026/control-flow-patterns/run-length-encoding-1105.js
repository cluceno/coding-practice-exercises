/* 

Write a function encode(str) that compresses a string by replacing runs of the same character with the character followed by its count. 
Then also write decode(str) that reverses it.

For encode: assume the input is only letters (no digits), so counts won’t be ambiguous.
For decode: assume well-formed input (letter followed by its count, counts are single digits 1-9).

If the input isn’t a string, return "" (both functions).

encode: 

split the string into an array
set an encoded variable 
Use a for loop to iterate through the array


*/

function encode(str) {
    if (typeof str !== "string" || str === "") return "";

    let currentChar = str[0];
    let count = 0;

    let encoded = "";

    for (const char of str) {
        if (currentChar === char) {
            count += 1;
        } else {
            encoded += currentChar + count;

            currentChar = char;
            count = 1;
        }
    }

    return encoded += currentChar + count;
}

function decode(str) {
    if (typeof str !== "string") return "";

    let decoded = "";

    for (let i = 0; i < str.length; i += 2) {
        const letter = str[i];
        const count = Number(str[i + 1]);

        decoded = decoded + (letter.repeat(count));
    }
    
    return decoded;

}

encode("aaabbc")      // "a3b2c1"
encode("aaaa")        // "a4"
encode("abc")         // "a1b1c1"
encode("")            // ""

decode("a3b2c1")      // "aaabbc"
decode("a4")          // "aaaa"
decode("a1b1c1")      // "abc"
decode("")            // ""