/*

Write a function checkPassword(password) that validates a password against several rules and returns an array of the rule names it fails. If it passes everything, return an empty array.

Rules:

"length" — must be at least 8 characters
"uppercase" — must contain at least one uppercase letter
"lowercase" — must contain at least one lowercase letter
"digit" — must contain at least one digit

Pseudocode: 

write function with password as the input 
    - start with an empty array (the failures)
    - if password is not a string return a failures array (hard coded)
    - if password fails the length rule → push "length"
    - if password fails the uppercase rule → push "uppercase"
    - if password fails the lowercase rule → push "lowercase"
    - if password fails the digit rule → push "digit"
    - return the failures array


*/ 

function checkPassword(password) {
    // guard clause
    if (typeof password !== "string") return ["length", "uppercase", "lowercase", "digit"];

    let failures = []; 

    // validation checks
    if (password.length < 8) failures.push("length");
    if (!/[A-Z]/.test(password)) failures.push("uppercase");
    if (!/[a-z]/.test(password)) failures.push("lowercase");
    if (!/\d/.test(password)) failures.push("digit");

    return failures;
}

console.log(checkPassword("Abcd1234"))        // []          (passes all)
console.log(checkPassword("abcd1234"))        // ["uppercase"]
console.log(checkPassword("ABCD1234"))        // ["lowercase"]
console.log(checkPassword("Abcdefgh"))        // ["digit"]
console.log(checkPassword("Ab1"))             // ["length"]
console.log(checkPassword("abc"))             // ["length", "uppercase", "digit"]
console.log(checkPassword(""))                // ["length", "uppercase", "lowercase", "digit"]
console.log(checkPassword(42))                // ["length", "uppercase", "lowercase", "digit"]  (not a string → fails everything)

/*

Key learning points: 

1. Continue to review regex. This was my first time seeing the .test pattern but it's similar to the pattern we used with .includes, previously. 

2. /w means any word character which includes letters (upper and lower case), numbers, and an underscore. 

3. It is okay to hardcode the guard clause in this case because additional rules cannot be added to the array. There is only a finite possibility of rules. 

4. The guard clause should come before any variable is created or any other operation is performed. 

Overall impression: Don't overcomplicate the solution. My first pseudocode proposition was like doing mental gymnastics. I didn't even consider using the push method. 
I think that is because my lack of familiarity with it. I mean I know it, but I probably have not used it much. In the words of Marty Supreme, it didn't  
even enter my consciousness. I think with time it will be become easier. This is the problem with creating pseudocode as well. My mind can anchor on the most 
recent methods, architecture, and solutions that I have recently read. The realm of possibility is so large that the skill of developing pseudocode or a solution
depends on knowing what tool or tools is best suited for a specific situation. The only way that I see that someone could develop this skill is through repition, brute force effort, 
and self reflection. It is a skill of patience and persistence. 

*/ 
