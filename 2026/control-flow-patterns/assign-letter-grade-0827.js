/* 

Write a function letterGrade(score) that converts a numeric score (0–100) to a letter grade with +/− modifiers.

97–100 → "A+", 93–96 → "A", 90–92 → "A−"
87–89 → "B+", 83–86 → "B", 80–82 → "B−"
77–79 → "C+", 73–76 → "C", 70–72 → "C−"
60–69 → "D" (no +/−)
below 60 → "F"
If score isn't a number, or is outside 0–100, return "Invalid"

*/ 

function letterGrade(score) {
    if (typeof score !== "number") return "Invalid";
    if (score < 0 || score > 100) return "Invalid";

    if (score >= 97) return "A+";
    if (score >= 93) return "A";
    if (score >= 90) return "A-";
    if (score >= 87) return "B+";
    if (score >= 83) return "B";
    if (score >= 80) return "B-";
    if (score >= 77) return "C+";
    if (score >= 73) return "C";
    if (score >= 70) return "C-";
    if (score >= 60) return "D";
    
    return "F";
}

console.log(letterGrade(98))    // "A+"
console.log(letterGrade(94))    // "A"
console.log(letterGrade(91))    // "A−"
console.log(letterGrade(85))    // "B"
console.log(letterGrade(72))    // "C−"
console.log(letterGrade(65))    // "D"
console.log(letterGrade(50))    // "F"
console.log(letterGrade(100))   // "A+"
console.log(letterGrade(0))     // "F"
console.log(letterGrade(105))   // "Invalid"  (out of range)
console.log(letterGrade(-5))    // "Invalid"  (out of range)
console.log(letterGrade("A"))   // "Invalid"  (not a number)


/* 

Key learning points:

This was a consolidation rep. It was an easy exercise. No new concepts to be learned from this rep. 

*/ 