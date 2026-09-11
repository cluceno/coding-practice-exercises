/*

Write a function makeTrafficLight() that returns an object modeling a traffic light cycling through states. The light cycles: green → yellow → red → green → ... (and repeats).

It starts on "green".
.next() — advances to the next state in the cycle and returns the new state
.current() — returns the current state without changing it

write function 
    create array that has the light cycle
    declare index variable
    return object with functions
        current
            returns array item of the current index 
        next
            cycle through indexes using the modulo operrator 

*/

function makeTrafficLight() {
    const lights = ["green", "yellow", "red"];
    let index = 0;

    return {
        current() {
            return lights[index];
            
        },
        next() {
            index = (index + 1) % lights.length;
            return lights[index];
        }
    }
};

const light = makeTrafficLight();
light.current();   // "green"  (starts here)
light.next();      // "yellow"
light.next();      // "red"
light.next();      // "green"  (wrapped around)
light.next();      // "yellow"
light.current();   // "yellow" (doesn't advance)

/* 

Key learning points: 

1. I had to relearn how to return functions in objects again. I understand the syntax but I had to look it up. There are 3 ways: 
    method shorthand --> functionName() {...}
    function expression --> functionName: function() {}
    arrow function --> functionName: () => {}
  I tried mixing up the methood shorthand and the arrow function at first. Luckily this is a syntax error and not an understanding problem. 

2. You can modify the index with the modulo operator and then use it later to return the index of the array. I overcomplicated this step greatly. 

3. The modulo operator has a high specifity so it will run first before most operations.  In this situation it divided 1 by the index.length first instead of adding 
1 to the index length. 

Overall impression: I tried to do this one with minimal assistance from AI, largely ignoring the answers it gives me unprompted, which was a good exercise as my 
weaknesses were revealed. I still do not have a full grasp on the modulo operator as it felt clunky when I was trying to use it. I had a few iterations as follows: 

index = [index + 1 % (index.length -1)]
index = [(index - 1) % index.length]

I also overcomplicated the solution by adding intermediate variables that weren't necessary. I also tried to increment the index and then used the modulo operator. These 
methods are redundant as incrementing is not a dynamic way to program the solution. I am not used to the index pointer format yet but this was a good rep to show me that and 
to practice. I thought I had the modulo operator thing down but it seems I do not. 

The encouraging thing is that I do understand the structure and how to get to the answer but the execution is shaky.

*/ 
