/*

Write a function validateSignup(username, age, email) that checks all three fields and returns 
the first error it finds (or "Valid" if everything passes):

username must be a string, 3+ characters → else return "Invalid username"
age must be a number, and at least 18 → else return "Must be 18 or older"
email must be a string that contains an "@" character → else return "Invalid email"
If all three pass → return "Valid"

Constraint: guard clauses only, same as before — but this time you're validating three independent fields in sequence, 
each with its own type-check + condition-check, similar in spirit to Username Cleaner's defensive checks. 
Order matters here too — think about which field should be checked first, 
and whether that choice actually matters in this case (unlike Grade Reporter, where order was load-bearing).

New tool, if you want it: .includes() — a string method that checks whether one string contains another

*/

function validateSignup(username, age, email) {
    if (!(typeof(username) === "string" && username.length >= 3)) return "Invalid username";
    if (!(typeof(age) === "number" && age >= 18)) return "Must be 18 or older";
    if (!email.includes("@")) return "Invalid email";
    return "Valid";
}

console.log(validateSignup("carvy", 30, "carvy@email.com"))  // "Valid"
console.log(validateSignup("ab", 30, "carvy@email.com"))     // "Invalid username"
console.log(validateSignup("carvy", 15, "carvy@email.com"))  // "Must be 18 or older"
console.log(validateSignup("carvy", 30, "not-an-email"))     // "Invalid email"

/*

Key learning points: 

I got it right on the first try. I would consider this an easy one but I got to reinforce use of the guard clase, typeof operator,
and includes method. 

An important lesson I learned is the De Morgan's Law: 

!(A && B)  is always equal to  !A || !B
!(A || B)  is always equal to  !A && !B

I could have written my logic as follows instead: 
if (typeof(username) !== "string" || username.length <3) return "Invalid username";

The second version is arguably easier to read, although mine wasn't incorrect. 

In summary, this was a good practice problem to reinforce things I already knew. 

*/