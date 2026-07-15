/*

Select the button (#counterBtn) and the paragraph (#countDisplay) using document.querySelector().
Keep a variable to track the click count, starting at 0.
Attach an event listener to the button for the "click" event — each time it's clicked, 
increment the count and update the paragraph's text to show the new count (e.g., "Clicks: 3").

*/

const counterButton = document.querySelector("#counterBtn");
const counterDisplay = document.querySelector("#countDisplay");

let clicks = 0; 

counterButton.addEventListener("click", () => {
    clicks += 1; 
    counterDisplay.textContent = `Clicks: ${clicks}`;
})

/* Key learning points: 

Initially, I tried to increment the clicks within the template literal. However, for cleaner code 
it is better to separate the increment step from the display step. 

*/ 
