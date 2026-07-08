/*
Write a function cleanUsername(input) that takes a raw string and returns a cleaned-up, valid username, following these rules:

Trim any leading/trailing whitespace
Convert to lowercase
Replace any spaces within the string with underscores (_)
If the input is not a string at all (e.g., a number, null, undefined), return "Invalid input"
If after trimming the input is an empty string, also return "Invalid input"

Example:
jscleanUsername("  Carvy Codes  ")  // → "carvy_codes"
cleanUsername("   ")              // → "Invalid input"
cleanUsername(42)                 // → "Invalid input"
Skill focus: defensive input checking (type + emptiness) before doing any string transformation 

*/ 

function cleanUsername(input) {
    if (typeof(input) !== "string") return "Invalid input";
    let cleaned = input.trim().toLowerCase().replaceAll(" ", "_");
    if (cleaned === "") return "Invalid input";
    return cleaned; 
}

console.log(cleanUsername(23));

/*

I am not good at string parsing because I am not too familiar with string methods. This was a good
exercise to practice this. I got to use the following methods:

.trim() - used to get rid of leading and trailing spaces 
.toLowerCase() - used to make everything lower case 
.replace(searchValue, newValue) - used to replace the first value that is found 
.replaceAll(searchValue, newValue) - used to replace all the values that match 

I will need a few more practice runs with these but it was a good exercise. 

*/ 