/* 

Write a function isValidTime(str) that checks whether a string is a valid 24-hour time in HH:MM format.

Exactly two digits, a colon, exactly two digits: HH:MM
Hours 00–23, minutes 00–59
Must be exactly this format — no missing digits, no extra characters, no leading/trailing junk
If str isn't a string, return false

Pseudocode: 

Write function 
    if not a string, return false
    validate string with regex 

*/ 

function isValidTime(str) {
    if (typeof str !== "string") return false;

    return /^([01][0-9]|2[0-3]):[0-5][0-9]$/.test(str);

     
}

console.log(isValidTime("09:30"))     // true
console.log(isValidTime("23:59"))     // true
console.log(isValidTime("00:00"))     // true
console.log(isValidTime("24:00"))     // false  (hour out of range)
console.log(isValidTime("12:60"))     // false  (minute out of range)
console.log(isValidTime("9:30"))      // false  (hour needs two digits)
console.log(isValidTime("09:30:00"))  // false  (extra stuff)
console.log(isValidTime("ab:cd"))     // false  (not digits)
console.log(isValidTime("0930"))      // false  (no colon)
console.log(isValidTime(42))          // false  (not a string)

/* 

Key learning points: 

1. I am still getting used to regex. I think I ran into similar problems when learning this on CS50P. A character set represents only one character. If there 
are multiple characters within a character set, it means choose only one of these.

2. I flipped where the str to be tested goes with the patter for the test method. I have to remember the pattern comes first and then the string. 

3. The anchor and the dollar sign go within the pattern or within the forward slashes. 

Overall impression: The code was quite short and only two lines long. However, this was again at the edge of skill because of the regex, which made the difficulty hard. 
But again, it is not very hard to read and understand. We'll see how the next one goes. I think I just need to continue putting in regex reps for now. 

*./