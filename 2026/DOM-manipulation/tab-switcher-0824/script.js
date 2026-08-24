/* 

For each tab, create a button inside #tabs with its label as the text.
Clicking a tab button updates #content to show that tab's body text.
New wrinkle: the currently active tab button should be visually marked — 
add a class (e.g. "active") to the clicked button, and remove it from all the others 
(only one active at a time).

(No exact test cases — verify in the browser: three tab buttons appear; 
clicking one shows its body text AND highlights that button while un-highlighting the rest.)

Pseudocode: 

Start with a for loop to generate each button 
    for each tab
        create element("button")
        text content is tabs.label
        Add event listener with a click
            content text content becomes tabs.body
            add a class, active, to the button and remove it from the other buttons
                clear first - remove active from all buttons
                set one - add "active" to the clicked one
        append child to parent, tabs
*/

let content = document.querySelector("#content");
let tabParent = document.querySelector("#tabs");
let buttons = [];

const tabs = [
  { label: "Home", body: "Welcome home." },
  { label: "Profile", body: "Your profile details." },
  { label: "Settings", body: "Adjust your settings." }
];

for (let tab of tabs) {
    let button = document.createElement("button");
    button.textContent = tab.label;
    buttons.push(button);

    button.addEventListener("click", () => {
        content.textContent = tab.body;

        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
    })

    tabParent.appendChild(button);
} 

/* Key learning points: 

1. If you know the that you want to maniplate a selected item, it is better to set the CSS on the CSS file 
rather than trying to adjust inline styles with javascript. This helps create clean code and prevents bloat. 

2. I still have to be reminded of the some of the syntax. In this exercise I couldn't remember the following: 
    - element.classList.remove() and element.classList.add()

3. I learned a new pattern, which is clear all and then set one. In order to do this, I need to loop over the elements so I would need 
store the elements in a variable, like buttons, or query every button with each click. In this problem I chose to store them in the buttons array.

Overall impression: I wouldn't have been able to get the clear all and then set pattern on my own. I needed some guidance to get this pattern but 
I was able to see the logic once the solution was revealed. 

The thing I had trouble with was looping over each button when I had created all the buttons, 
with a loop in the first place. The big questions were, where are they stored and how do I access them? Storing them in an array makes a lot of sense to me 
but the other option, using document.querySelectorAll("#tabs button"), feels a little muddy. Looks like on every click, we select all of the button elements under the
tab id. The selector itself is a descendant combinator. Then I could run for each on the buttons a nd remove the active class. 

However, I think I would naturally reach for the array method anyway. 

Overall, this one would be intermediate because I was able to get most of the structure but I wouldn't have been able to get it independently because the clear and set 
pattern was new to me. 

*/ 



