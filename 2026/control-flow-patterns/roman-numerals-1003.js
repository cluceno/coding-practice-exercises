/*

Convert an integer (1–3999) to its Roman numeral string.

If the input isn't an integer, or is outside 1–3999, return "Invalid".

M = 1000   CM = 900   D = 500   CD = 400
C = 100    XC = 90    L = 50    XL = 40
X = 10     IX = 9     V = 5     IV = 4
I = 1

*/

function toRoman(n) {
    if (typeof n !== "number" || n < 1 || n > 3999) return "Invalid";

    let numeralReference = [[1000, "M"], [900, "CM"], [500, "D"], [400, "CD"], [100, "C"], [90, "XC"], [50, "L"], [40, "XL"], [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]]; 

    let remaining = n;
    let romanNumeral = "";

    for (const numeral of numeralReference) {
        while (remaining >= numeral[0]) {
            romanNumeral += numeral[1];
            remaining -= numeral[0];
        }
    }
    return romanNumeral;
}

toRoman(4)     // "IV"
toRoman(9)      // "IX"
toRoman(14)     // "XIV"
toRoman(40)     // "XL"
toRoman(90)     // "XC"
toRoman(2024)   // "MMXXIV"
toRoman(3888)   // "MMMDCCCLXXXVIII"
toRoman(1)      // "I"
toRoman(3999)   // "MMMCMXCIX"

/*

Key learning points: 

1. On the for loop, remember to declare the variable. This is a recurring error. 

2. You always have to do the reassignment when concatenating or doing arithmetic of an existing variable where you want to save the changes. Remember that += or 
    -= does the assigment for you. It is short hand for variable = variable + item or variable = variable - item. 

3. When wanting to preserve order while comparing a value, use an array. When order doesn't matter you can use an object. 

4. You cannot use an if statement here because it would only meet the criteria once, or not, and move on. However, some numbers have multiple thousands, or other numbers, 
that you need to consider. The while loop is a great tool for this use case. function toRoman(n) {

Overall impression: This was a new shape called the greedy subtraction approach. I have never used this shape before and I tried to understand it before writing it myself.
The understanding portion took the longest time. I wasn't able to make this on my own. It may take a few more reps with similar problems before it clicks. 

*/