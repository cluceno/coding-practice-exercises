/* 

Write a function truncate(str, maxLength) that shortens a string to at most maxLength characters, adding "..." at the end if it was cut.

If the string is maxLength or shorter, return it unchanged.
If longer, cut it to maxLength characters total including the "..." and append "...".

*/ 

function truncate(str, maxLength) {
    if (typeof(str) !== "string") return "";
    if (str.length <= maxLength) return str;
    return str.slice(0, (maxLength - 3))+ "...";
}

console.log(truncate("Hello world", 8))      // "Hello..."   (8 chars total: "Hello" + "...")
console.log(truncate("Hello", 8))            // "Hello"      (already ≤ 8, unchanged)
console.log(truncate("Hello world", 20))     // "Hello world" (shorter than max, unchanged)
console.log(truncate("Hi", 2))               // "Hi"         (exactly 2, unchanged)
console.log(truncate("Hello", 5))            // "Hello"      (exactly maxLength, unchanged)
console.log(truncate("Hello", 4))            // "H..."       (4 total: "H" + "...")

/* 

Key learning points: 

1. I was trying to treat the maxLength like indexes and subtracted 1 less than I should have. Character 0 still counts as a character so that was wrong. 

2. slice takes a copy of the desired portion and leaves the original untouched. splice mutates the original. 

Overall impression: This was not bad in terms of difficulty. I struggling with the indexing a little but that was it. Good rep for consolidation. 

*/ 