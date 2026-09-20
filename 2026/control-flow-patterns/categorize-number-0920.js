/* 

Write a function categorize(n) that classifies a number and returns a descriptive string combining several properties.

Return a string describing the number as: its sign (positive/negative/zero), and if non-zero, its parity (even/odd), and its size (single-digit if absolute value < 10, else multi-digit).
Format: "<sign> <parity> <size>" for non-zero numbers, or just "zero" for zero.

If n isn't a number, return "Invalid".

*/

function categorize(n) {
    if (typeof(n) !== "number") return "Invalid"; 
    if (n === 0) return "zero"; 

    let sign = (n > 0) ? "positive" : "negative";
    let parity = (n % 2 === 0) ? "even" : "odd";
    let size = (Math.abs(n) >= 10) ? "multi-digit" : "single-digit";

    return `${sign} ${parity} ${size}`; 
}

categorize(4)      // "positive even single-digit"
categorize(7)      // "positive odd single-digit"
categorize(-3)     // "negative odd single-digit"
categorize(42)     // "positive even multi-digit"
categorize(-58)    // "negative even multi-digit"
categorize(0)      // "zero"
categorize(-100)   // "negative even multi-digit"
categorize(9)      // "positive odd single-digit"
categorize(-10)    // "negative even multi-digit"   (abs value 10 → not single-digit)

/* 

Key learning points: 

1. Reviewed ternary expression syntax. 

2. Learned about Math.abs(), which takes the absolute number. In this exercise, this eliminates thhe need to check the negative number. 

Key learning points: These exercises are becoming easier in terms of structure. However, I still need to ask about syntax structure. I am not as intimiated by these type of questions anymore but I do 
hope that at some point I won't have to ask. 

*/