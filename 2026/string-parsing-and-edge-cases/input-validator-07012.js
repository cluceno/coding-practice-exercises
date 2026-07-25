/*

Write a function isValidUsername(input) that returns true or false based on these rules:

Must be a string (if not, return false)
Must be 3–15 characters long (after trimming whitespace)
Can only contain letters, numbers, and underscores — no spaces, no special characters like @, !, -, etc.

*/

function isValidUsername(input) {
    // check if input is a string
    if (typeof(input) != "string") return false;
    
    // check if between 3-15 characters long after trimming whitespace 
    let cleaned = input.trim()
    if (cleaned.length <3 || cleaned.length >15) return false; 

    // regex pattern: can only contain letters numbers, and underscores 
    const pattern = /^[a-zA-Z0-9_]+$/;
    return pattern.test(cleaned); 
}

/* Key learning points: 

1. The typeof operator returns the data type in string form. So if it is a string it will be "string" and if it is 
a number it will be "number". 

2. The .test method with regex returns a boolean value of either true or false. I thought that it would only return if it was true, 
which limited my ability to return the proper value in this exercise. 

3. I forgot to return the final value again. I am consistently doing this. I have to get it right eventually. 

About regex in general, I want to summarize what I learned from this lesson. 
    - Define your pattern within slashes // 
    - ^ means from the start 
    - $ means from the end
    - include the range of desired characters in []
    - + means one or more 

*/