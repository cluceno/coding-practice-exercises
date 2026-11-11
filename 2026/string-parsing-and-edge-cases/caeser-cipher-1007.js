/*

Write a function caesarCipher(str, shift) that shifts each letter in the string by shift positions in the alphabet, 
wrapping around from Z back to A. Non-letters are left unchanged. Preserve the case of each letter.

Assume shift is a non-negative integer. If str isn’t a string, return "".

Pseudocode
    - split str into array 
    - transform the array into Unicode/ASCII
    - add number to position using number from shift and use the modulo operator to wrap around 
    - convert array back into the letters 

    

*/

function caesarCipher(str, shift) {
    if (typeof str !== "string") return ""; 

    return str
        .split("")
        .map(char => {
             const code = char.charCodeAt(0);
            if (char >= 65 && char <= 90) {
                return (code - 65 + shift) % 26 + 65;
            } else if (char >= 97 && char <= 122) {
                return (code - 97 + shift) % 26 + 97;
            } else return char
        })
        .join("");
    }


    /*
    let characters = (str.split("")).map(character => character.charCodeAt(0));

    let newString = characters.map(character => {
        //Check for upper case
        if (character >= 65 && character <= 90) {
            let normalized = (character - 65);
            let adjusted = (normalized + shift) % 26;
            return String.fromCharCode(adjusted + 65);
        //Check for lower case
        } else if (character >= 97 && character <= 122) {
            let normalized = (character - 97);
            let adjusted = (normalized + shift) % 26;
            return String.fromCharCode(adjusted + 97);
        } else {
            return String.fromCharCode(character);
        }
    })
    */

console.log(caesarCipher("abc", 1))        // "bcd"
caesarCipher("xyz", 3)        // "abc"   (wraps around)
caesarCipher("Hello", 3)      // "Khoor"
caesarCipher("Hello, World!", 5)   // "Mjqqt, Btwqi!"   (non-letters unchanged, case preserved)
caesarCipher("abc", 0)        // "abc"   (no shift)
caesarCipher("ABC", 1)        // "BCD"   (uppercase preserved)


/*

Key Learning Points: 

1. To do the cipher and adjust the position you have to refer to the character codes. You can use .charCodeAt(*characterposition) to find the code. 
After finding the code, you have to adjust it and then 

2. I had an opportunity to use the modulo operator again. One important detail I learned is that you should use the a number for the modulo operator that 
is representative of the total amount of characters or items. 

Key learning points: These are tools that I haven't used before. I think I identified the holes in my knowledge and asked appropriate questions. It still took 
me a long time to understand all of the details. I also forgot that I could string together methods and return everything in one step. 


*/ 