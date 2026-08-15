/*

- Start with an array of colors: ["red", "green", "blue", "gold", "purple"]
- For each color, create a button inside #swatches. 
  Set each button's text to the color name, and set its background color to that color 
  (via button.style.backgroundColor).
- Clicking a swatch updates #selected to read 
  "Selected: <color>" and stores the current selection in a variable.

Pseudocode: 

Make array of colors 
Use for loop that populates on load to create a button for each color inside the swatches div using document.createElement
    create a variable for each button using const
    add an event listener to the button that changes the textContent of the selected color 
        event listener listens for a click and then changes the text content of selected
    set each buttons text to the color name
    set the background color to the color via button.style.backgroundColor

    Append the buttons to the div swatches. 

*/

const colors = ["red", "green", "blue", "gold", "purple"];
const swatches = document.querySelector("#swatches");
const selectedColor = document.querySelector("#selected");

let currentColor 

for (let color of colors) {
    const swatch = document.createElement("button");
    
    // style button 
    swatch.textContent = color;
    swatch.style.backgroundColor = color;

    // add functionality 
    swatch.addEventListener("click", () => {
        selectedColor.textContent = `Selected: ${color}`;
        currentColor = color;
        console.log(currentColor);
    });

    // append button 

    swatches.appendChild(swatch);
}

/* Key learning points: 

1. With more practice I was able to identify that I need to declare a variable within the for loop. 

2. element.style.backgroundColor is a new one that is pretty easy to understand. 

Overall impression: This one was surprisingly easy. This might be a sign that the rotation is working.
Or it might just be because it is easy. Either way I will take the win. At thhis point, any rep is a good rep
and I did incorporate something new with the element.style.backgroundColor. Also adding the arrow notation to the 
event listener came much easier than in the past. 

*/ 