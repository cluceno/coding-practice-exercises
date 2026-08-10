/*

Write a function nextStatus(current) that takes a task's current status and returns the next one in the cycle:

The cycle order is: "todo" → "in-progress" → "done" → back to "todo"
Given any status, return the next one in that sequence
"done" wraps around to "todo"
If current isn't one of the three valid statuses, return "todo" (a safe default)

Pseudocode: 

Write function nextStatus(current)
    Create an array with each status 
    create variable, currentIndex = array.indexOf(current)
    If array.includes(current) equals -1, return "todo"
    

    Use a conditional to cycle through the array using the modulo operator 
        if ((currentIndex + 1) % array.length === 0) return array[0]
        return array[currentIndex +1]; 
        
 
*/

function nextStatus(current) {
    const status = ["todo", "in-progress", "done"];
    let currentIndex = status.indexOf(current);

    if (currentIndex === -1) return "todo";
    return status[(currentIndex + 1) % status.length]
}


console.log(nextStatus("todo"))         // "in-progress"
console.log(nextStatus("in-progress"))  // "done"
console.log(nextStatus("done"))         // "todo"
console.log(nextStatus("banana"))       // "todo"
console.log(nextStatus(42))             // "todo"

/* Key learning points 

1. You can use the indexOf method to check if an item is present in an array. If the item is not present,
it will return -1, which you can use as a check. 

2. I initially hardcoded the next item according to the index number. While this is an acceptable solution, 
this limits future flexibility, in case the number of items changes. In this case, to maintain flexibility 
we can use the modulo operator to wrap around the array when we reach the last item on the array. The key 
principle is, code to maintain flexibility, if possible. 

3. There are many solutions to solve this problem. You could have used multiple tools, which might have been
less efficient but would have arrived at the same solution. When trying to find a solution think about which tools 
might be best suited. 

4. For the modulo operator 2 % 3, is asking how many times 3 goes into 2. In this case it is 0, so the remainder is 2. 
If it was 5 % 3, the remainder would be 2 as well. If the first number is less than the second number, it will always 
return the first number as the remainder. 

Overall impression: Hard at first but easy when you've seen and understood all the tools you need. If I don't remember 
the tools on the next rep, it will probably be hard again. 

*/ 