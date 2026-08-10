/*

Write a function getInitials(fullName) that takes a person's name and returns their uppercase initials.
    Split the name into words, take the first letter of each, uppercase them, join together
    Collapse any extra whitespace (multiple spaces, leading/trailing) — don't produce blank initials from empty gaps
    If fullName isn't a string, or is empty/whitespace-only, return ""


Pseudocode: 

Create function 
    Validate string
        1. type validation - is it a string? return "" if invalid 
        2. trim leading/trailing spaces 
        3. if trimmed result is an empty string return ""
    collapse extra white spaces (multiple spaces and leading/trailing) using the split method with regex
    use the map method on the new array to capitalize and then join the initials together 

*/

function getInitials(fullName) {
    if (typeof(fullName) !== "string") return ""; 
    let cleaned = fullName.trim()
    if (cleaned === "") return ""; 
    
    let array = cleaned.split(/\s+/)
    let initials = array
        .map(word => word[0].toUpperCase())
        .join("");

    return initials; 
}

console.log(getInitials("Ada Lovelace"))           // "AL"
console.log(getInitials("grace hopper"))            // "GH"
console.log(getInitials("  Margaret   Hamilton "))  // "MH"
console.log(getInitials("Prince"))                  // "P"
console.log(getInitials(""))                        // ""
console.log(getInitials(42))                        // ""

/* Key learning points: 

1. Principle of validation steps: 
    a. Is it the right type? 
    b. Normalize it 
    c. Is the normalized value valid? 

2. There are many different ways to write regex. In this particular situation \s is more robust because 
it deals with different kinds of spaces including line breaks and tabs. 

3. using the split method on a string creates an array. This is a crucial thing to know for this exercise. 

4. Know the difference between split, splice, and slice. 
    split - turns a string into an array 
        "splIT into parts"
    slice - works on arrays and strings. Extracts a copy of the section 
        "a slice of cake"
    splice - mutates an array by removing/inserting elements at a position 
        "like surgery"

5. This problem could have also been solved using the reduce method with the string building shape. 
    let initials = array.reduce((acc, word) => acc + word[0].toUpperCase(), "")

6. The map and join shape is common enough that you should know it well. 

7. Remember when validating the data type, use type off and not the variable directly. 

Summary: Again, each individual part is not hard but it's difficult to remember all of these pieces. It is also difficult 
to apply them on the fly. Each time I do an exercise, something new is revealed or I learn a fundamental principle like the
validation steps. I suppose this is necessary but it does take a lot of time. Just gotta keep putting in reps. 

*/ 
