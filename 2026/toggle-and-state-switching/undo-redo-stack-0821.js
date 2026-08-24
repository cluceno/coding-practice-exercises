/* 

Write a function makeHistory() that returns an object for tracking a value's history with undo/redo, with three methods:

push(value) — record a new value as the current state
undo() — go back to the previous value, return it (if there's nothing to undo, return null)
redo() — go forward again after an undo, return it (if there's nothing to redo, return null)

Pseudocode: 

Write function
    Create closures
        make variable with current values 
        make variable with past values 

    Return object that stores functions 
        push --> push input into the current value
        undo --> pop and return final value in the current array
                push final value into the past values
        redo --> pop and return final value in the array

*/ 

// SECOND SOLUTION 

function makeHistory() {
    let currentStack = [];
    let index = 0;
    
    return {
        push(input) {
            currentStack = currentStack.slice(0, index + 1); 
            currentStack.push(input);
            index = currentStack.length - 1;
        },
        undo() {
            if (index <= 0) return null;
            index--; 
            return currentStack[index];
        },
        redo() {
            if (index === (currentStack.length + 1)) return null;
            index++;
            return currentStack[index];
        }
    }
}

const h = makeHistory();
h.push("a");
h.push("b");
h.push("c");
console.log(h.undo());   // "b"   (went back from c)
console.log(h.undo());   // "a"   (went back from b)
console.log(h.redo());   // "b"   (went forward again)
h.push("d"); // pushing after undo; "d" is now current
console.log(h.redo());   // null  (redo history was cleared by the new push)
console.log(h.undo());   // "b"   (undo from d goes back to b)

/*

Key learning points for solution 2: 

1. Remember the slice parameters. The first parameter is start from this index and the second is up to but not including. That is why we need to state index + 1, 
otherwise, the current value would be sliced off. If the forward index doesn't exist it will still include the rest of the array. 

2. Your guard clause should guard what you are currently tracking, not something that is congruent that could possibly diverge. In this situation, guarding against 
the index length revealed a flaw in the code that could've caused a problem that could be difficult to find. This principle will save you from edge cases later on. 

3. Order of operations matters. Slice should come first so that you clear old values before pushing new ones. If you push first you include the old numbers that you intended
to throw away. 

4. If you are going to mutate an array, you still have to make the assignment. Otherwise the mutation just gets thrown away. 

5. I used the more modern object function declaration in this example, and it worked pretty well. 

Overall impression: I think I rushed into this exercise because I had a limited time. I didn't think of the order of oeprations and it shows. However, I think this problem 
was difficult anyway and I'm not sure I would've got the solution on my own anyway. This does show me that coming up with the pseudocode first is really important, especially
when it comes to multistep problems. I also did not remember how the slice method worked, which caused problems for me. My guard clauses were adjacent to the thing I was moving (index) 
but I chose to guard against something else, which was not the best idea in hindsight. I would rate this exercise as difficult because it challenged me on syntax, order of operations,
guard clauses, and mutatations. All of these things are concepts I have been using and practicing but when put together, it causes problems. The syntax is not hard to read 
but code generation still remains the biggest challenge. I am encouraged by the fact that I was able to create this with difficulty, though. Maybe it was the structure
that threw me off.  I am more encouraged that I was able to get the first solution correct mostly independently. 

/* 

FIRST SOLUTION 

function makeHistory() {
    let undoStack = [];
    let redoStack = [];

    return {
        push: function(input) {
            undoStack.push(input)
            redoStack = [];
            return input;
        },
        undo: function() {
            if (undoStack.length < 1) return null; 
            let lastValue = undoStack.pop();
            redoStack.push(lastValue);
            return undoStack[undoStack.length - 1];
        },
        redo: function() {
            if (redoStack.length < 1) return null;
            let redoValue = redoStack.pop();
            undoStack.push(redoValue);
            return redoValue;
        }
    }
}



*/

/* 

Key learning points for solution 1: 

1. I could simplify my syntax of the returned object by just defining the function with the name and parameter. However, I did it this way to 
nail down the fundamentals before introducing a new way of saying the same thing. I can try the more modern syntax next time. 

2. I was almos there when it came to the logic. I had a misunderstanding on the logic that the spec required. In this problem, the redo value must
be cleared when creating a new value. A new value is forward movement, implying there is nothing to redo. Redo can only occur after an undo. I did 
not think this through correctly. 

3. For the naming of the arrays, be clear on what purpose they serve. I initially named the undostack, currentStack. If the values were showing up on the screen,
that would be current and the undo stack could be stored somewhere else. However, in this exercise we are addressing the undoo stack specifically and I should've treated 
it as such. The second array was initially named undoStack, when in fact, it represented the potential redo values so it should have been named redoStack. To be honest, 
it felt a little mind bending at first, naming and then adjusting the names of these arrays but I think it will come more naturally with time. 

4. A state, or flag, is not necessary in this solution because the guard clauses and array clearing cover the possible states we need already. 

Overall impression: I am quite surprised that I was able to come up with most of the logic on my own, even though this exercise is considered a little more difficult. This is an 
encouraging sign. 

*/