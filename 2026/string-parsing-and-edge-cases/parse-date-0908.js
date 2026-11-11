/* 

Write a function parseDate(str) that takes a date string in YYYY-MM-DD format and returns an object { year, month, day } with the three parts as numbers.
Return "Invalid" for anything not matching the exact format or with out-of-range values.

Pseudocode: 

write function
    guard clause
    normalize - remove leading/trailing spaces
    check if empty string

    Validate format with regex, return invalid if format is incorrect 
    Use match groups, whichh outputs an array
        Validate each range and return invalid if not in range

    create variable with the desired format 
    return variable 


*/ 

function parseDate(str) {
    if (typeof str !== "string") return "Invalid";

    let cleaned = str.trim();
    if (cleaned === "") return "Invalid"; 

    let matches = cleaned.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (matches === null) return "Invalid";

    let year =  Number(matches[1]);
    let month = Number(matches[2]);
    let day = Number(matches[3]);

    if (month < 1 || month > 12) return "Invalid";
    if (day <1 || day > 31) return "Invalid";

    let desiredFormat = {
        year: year,
        month: month,
        day: day,
    }

    return desiredFormat;
}

parseDate("2026-03-15")   // { year: 2026, month: 3, day: 15 }
parseDate("1999-12-01")   // { year: 1999, month: 12, day: 1 }
parseDate("2000-01-31")   // { year: 2000, month: 1, day: 31 }

parseDate("2026-3-15")    // "Invalid"   (month must be two digits)
parseDate("26-03-15")     // "Invalid"   (year must be four digits)
parseDate("2026/03/15")   // "Invalid"   (wrong separator)
parseDate("2026-13-15")   // "Invalid"   (month out of range 01-12)
parseDate("2026-03-32")   // "Invalid"   (day out of range 01-31)
parseDate("hello")        // "Invalid"
parseDate(20260315)       // "Invalid"   (not a string)

/*

Key learning points: 

1. You can use the matches method with regex to validate the format as well. If there is no match, the whole thing will return null.

2. For the match method, you test the string against the pattern in the params. For the test method you test the pattern against the string in the params. 

3. if a string has a numbers with a 0 in front of it, the 0 will be automatically be removed when it is converted to a number data type. 

Overall impression: This exercise was heavy on the regex. I was heavily discouraged by how much I didn't retain from the last exercise. The regex patterns still escape me
although it is much better than when I first started. There are nuances that I don't always know that sometimes lead me to overcomplicate the solution. For example, 
I used  test and match, instead of just using match. I tried to use the non-capture group pattern to avoid matching the dashes or 0s, which was unecessary. Just knowing that
if one capture group didn't match would return null would've saved me a lot of time. Also, simplifying the regex to just exclude the dashes was  much easier than using non capture groups. 
Knowing that the leading 0 would be automatically removed would've helped a lot as well. 

This was a good consolidation rep, although a bit discouraging with how much assistance I needed. But again, that is part of learning. I hope that someday, this will feel easy.  

*/ 