/* Write a function getGrade(score) that takes a number 0–100 and returns a letter grade:

90+ → "A"
80–89 → "B"
70–79 → "C"
60–69 → "D"
below 60 → "F"
Anything outside 0–100 → "Invalid"

Constraint: use guard clauses only — no if/else chains, no nested ifs. Each condition gets its own early return.
*/

function getGrade(score) {
    if (score > 100 && score < 0) return "Invalid";
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    if (score >= 60) return "D";
    return "F";
}

console.log(getGrade(90))

*/ Exercise Comments: 

Day 2 (0704) - Grade Reporter 

I was initially confused about the guard clause but it is basically just an simple if statement with an early return. Instead of using a heavily verbose if/else chain I can use early guard clauses for simple checks. 

I used the wrong operator || instead of &&. But then I realized to make it even more efficient I could omit the second check altogether. 

For example, if the check above was >=90 and it passes through it, then I don't need to check for 90 or above again since it was already checked. This makes code much more efficient. 

Altogether, a pretty easy exercise today. 

*/