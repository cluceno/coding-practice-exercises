/* 

1. Select the <textarea> (#messageBox) and the paragraph (#charCount).
2. Attach an event listener for the "input" event (fires every time the text changes — 
   typing, pasting, deleting — unlike "click", which only fires on clicks).
3. Each time it fires, read the textarea's current value and update the paragraph 
   to show "X / 100 characters", where X is the current length of the text typed so far.

*/

const messageBox = document.querySelector("#messageBox");
const charCount = document.querySelector("#charCount"); 

messageBox.addEventListener("input", () => {
    charCount.textContent = `${messageBox.value.length} / 100`;
});

/*

Key learning points: 

1. element.value reads current text typed into a textarea 

2. you can chain methods together like .value.length

3. the action "input" fires on every keystroke that gets entered on the text field

4. Every method or function call requires a semicolon at the end of the statement 

*/ 