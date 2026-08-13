/*

Write a function isBalanced(str) that checks whether the brackets in a string are balanced. 
Consider three kinds: (), [], {}. Balanced means every opening bracket has a matching closing bracket of the same type, in the correct order.

Pseudocode: 

Write function
    If the input is not a string return false
    Create a bracket variable with an empty array assigned 
        scan the input and look for opening brackets using a for loop 
            look for the opening brackets and ignore other characters 
            if it is an opening bracket, push it to the bracket variable
            if it is a closing bracket, see if it matches with the bracket at the top of the stack 
                if it's a match pop it off of the array
                if it isn't a match or if the array is empty, return false
    
    if the loop completes and the array is empty, return true. Else, false. 

*/

function isBalanced(str) {
    if (typeof str !== "string") return false; 

    let stack = [];
    const pairs = {
        "]":"[",
        ")":"(",
        "}":"{",
    };

    for (let char of str) {
        if ("([{".includes(char)) {
            stack.push(char);
        } else if (char in pairs) {
            if (stack.length === 0) return false;

            const top = stack[stack.length - 1];
            if (pairs[char] !== top) return false;
            stack.pop(); 
        } 
    }

    return stack.length === 0

}

console.log(isBalanced("(a[b]c)"))        // true
console.log(isBalanced("([)]"))            // false  (wrong order — closes ) before ])
console.log(isBalanced("((("))             // false  (unclosed)
console.log(isBalanced("a + b"))           // true   (no brackets at all is balanced)
console.log(isBalanced("]"))               // false  (closing with nothing open)
console.log(isBalanced("{[()]}"))          // true

/*

key learning points 

1. I have a tendency to check if something is present with multiple if conditions. Technically that is not wrong, but if I find myself 
in a situation where I am writing multiple if conditions, I should consider writing an object that would simplifiy it, like in this problem. 

2. This is the first time using push and pop in this rotation. Remember that pop does not need an argument. It pops off the last item 
of the array regardless. 

3. If there is an array a value that is dynamically changing and you need to get the most recent iteration of it, make sure to time the operation
to run when you need the variable. In this example, I calculated top too early, when the array was empty, and it would always return undefined, which 
breaks the code. 

4. when referring to an object, object[key], returns it's value and not the key. 

5. The in operator checks for keys in an object but checks for indexes in an array. 

6. if returning a boolean value, you don't need to write an if statement. If the statement itself returns true or false, just return the statement.

7. To find the last value in an array you can use array[array.length - 1]. You can find the penultimate value by using -2, as well. 

Overall impression: I would not have been able to do this problem on my own. The architecture was totally out of my view. I would have not thought of this solution
even if I was given days. Now that I have seen it, though, I think I can recognize the pattern and apply it to different scenarios. I would hope so at least. Otherwise,
the individual operations aren't hard to understand. The logic, though, was truly new and difficult. 

There are a few things that I have seen multiple times and they get stronger each time. For example, 
    - object[key], returns the value and not the key itself.
    - a statement that inherently returns a boolean value can be returned by itself.

*/ 