/*

Write a function isBalanced(str) that checks whether the brackets in a string are properly balanced and nested. Handle three bracket types: (), [], {}.

Every opening bracket must have a matching closing bracket of the same type.
Brackets must be closed in the correct order (proper nesting).
Non-bracket characters are ignored.

If str isn’t a string, return false.

*/

function isBalanced(str) {
    if (typeof str !== "string") return false;

    let stack = [];
    const reference = {
        ")": "(",
        "]": "[",
        "}": "{",
    };

    for (const char of str) {
        if ("([{".includes(char)) {
            stack.push(char);
        } else if (char in reference) {
            if (reference[char] === stack[stack.length - 1]) {
                stack.pop();
            } else {
                return false;
            }
        }
    }

    return stack.length === 0;

}

console.log(isBalanced("()"))           // true
isBalanced("()[]{}")       // true
isBalanced("([{}])")       // true   (properly nested)
isBalanced("(]")           // false  (mismatched types)
isBalanced("([)]")         // false  (wrong order — not properly nested)
isBalanced("(((")          // false  (unclosed)
isBalanced("a(b)c[d]")     // true   (non-brackets ignored)
isBalanced("")             // true   (empty is balanced)
isBalanced("}")            // false  (closing with nothing open)

/*

Key learning points: 

1. If you want to check if a certain character is present you can use the .includes method. 

2. The in operator checks for the keys in the object. Remember to look at the reference object to ensure what you are checking is correct. 

3. stack.length -1 is the last index in an array. You can also use stack.at(-1), which checks the last position as well. 

4. This problem uses the stack data structure. This is LIFO (last in first out). 

5. Remember that the .pop() method actually returns the last value of the array and it can be used directly for a comparison. You can potentially flatten the structure of the nested conditionals with this. However,
the desired effect is a side effect and is arguably less readable. 

Overall impression: This exercise was hard conceptually. I recognized that I had done it before but I struggled through it but there were nuances that I couldn't quite get on my own. I needed 
help understanding some of the issues listed above. 

*/