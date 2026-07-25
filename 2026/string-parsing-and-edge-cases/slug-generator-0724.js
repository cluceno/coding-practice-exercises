/* 

Write a function slugify(title) that converts a string into a URL slug:

lowercase
leading/trailing whitespace removed
spaces between words become single hyphens
punctuation and other non-alphanumeric characters removed (keep letters, numbers, hyphens)
no double hyphens, and no leading or trailing hyphen in the result
if title isn't a string, return ""

Pseudocode:

Write function slugify
    - Check if title is a string and if not, return "". 
    - make lower case by using tolowercase method
    - remove leading/trailing whitespace using the trim method
    - remove double and triple spaces in between words 
    - remove all punctuation with the replace method and regex 
    - use the replace method to replace all spaces with single hyphens

*/

function slugify(title) {
    if (typeof(title) !== "string") return ""; 
    let cleaned = title
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9 -]/g, "") // remove punctionation
        .replaceAll(" ", "-") // replace all spaces with hyphens
        .replace(/-+/g, "-") // replace multiple dashes with a single dash 
        .replace(/^-+|-+$/g, "") // remove leading and trailing dashes
    return cleaned;
}

console.log(slugify("Hello World"))                    // "hello-world"
console.log(slugify("  The Cat, the Hat!  "))          // "the-cat-the-hat"
console.log(slugify("Rock & Roll   Music"))            // "rock-roll-music"
console.log(slugify("Node.js: A Guide"))               // "nodejs-a-guide"
console.log(slugify(42))                                // ""

/* Key learning points 

1. Differences between replace and replaceAll method
    a. .replace replaces the first match 
    b. .replaceAll replaces every match in the string
    c. if a g-flagged regex is included thehy are functionally identical and replace every match
        .replace(/x/g, y)
        .replaceAll(/x/g, y)

2. Breaking .replace(/[^a-z0-9 -]/g, "") down, which removes punctuation. 
    The ^ has different meanings if it is within the character set [] or outside of it. 
        within [] - match a single character thhat is none of these
        outside [] - achors to the string start

3. Breaking .replace(/-+/g, "-") down, which removes multiple hypens.
    Note the abscence of the square brackets [], since we're just looking for the hyphens
    the + quantifier means one or more of the thing immediately before it. 

4. If you want to escape the special character properties you can use the backslash before it. 
    Note that withhin a character set [], the special properties are lost

5. Other quantifiers to know 
    * - zero or more of the specified character 
    ? - zero or one (optional)

*/
