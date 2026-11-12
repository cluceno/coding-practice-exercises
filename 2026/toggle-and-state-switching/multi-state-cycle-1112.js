/* 

Write a function makeMode() that returns an object cycling through display modes 
— "light" → "dark" → "auto" → back to "light" — and also tracks how many times each mode has been activated.

.cycle() — advances to the next mode (wrapping around), records that the new mode was activated, and returns the new mode.
.current() — returns the current mode without advancing.
.counts() — returns an object of how many times each mode has been activated (via cycle).

*/

function makeMode() {
    const states = ["light", "dark", "auto"];

    let index = 0;
    let current = states[0];

    let count = {light: 1};

    return {
        cycle() {
            index = (index + 1) % 3;
            current = states[index];
            count[current] = (count[current] || 0) + 1;

            return current;

        },
        current() {
            return current;
        },
        counts() {
            return count;
        }


    }

}

const m = makeMode();
console.log(m.current());   // "light"
console.log(m.counts());    // { light: 1 }          (light activated at start)
console.log(m.cycle());     // "dark"
console.log(m.cycle());     // "auto"
console.log(m.cycle());     // "light"  (wrapped)
console.log(m.counts());    // { light: 2, dark: 1, auto: 1 }
m.current();   // "light"

/*

Key learning points: 

1. my biggest challenge with this exercise was assigning values to an object. You can do the assignment and create the key all in one step. 

2. The other issue was initializing the starting state. This was an easy problmem to fix.

3. Remember the || operator. It is useful for checking if something exists or incrementing if it already does. 

Overall impression: This was a good practice rep. I was able to get most of the logic down. I struggled to assign keys and values to objects 
again but I think it was a little easier this time. I feel like I just need a few more reps to get it down. I remembered to store the index as a state 
from previous exercises. I also remembered how the modulo operator worked and put it to use independently. 

*/ 