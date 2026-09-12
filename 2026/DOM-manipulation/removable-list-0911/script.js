/* 

Start with data: const items = ["Apple", "Banana", "Cherry", "Date"];
Render each item as an <li> inside #items. Each <li> should contain the item's text and a delete button (e.g. text "×" or "delete").
Clicking a delete button removes that <li> from the list.
After any removal, update #count to show the current number of items ("Items: 3", etc.).
Use event delegation — one listener on the <ul>, not a listener per button.

*/ 

const items = ["Apple", "Banana", "Cherry", "Date"];
const list = document.querySelector("#items");
const count = document.querySelector("#count");

for (item of items) {
    const listItem = document.createElement("li");

    //create text
    const label = document.createElement("span");
    label.textContent = item
    listItem.appendChild(label);

    //create button 
    const button = document.createElement("button");
    button.textContent = "x";
    listItem.appendChild(button);

    //append listItem with label and button to list
    list.appendChild(listItem);
}

// add functionality to buttons using event delegation 

list.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        e.target.parentElement.remove();

        //adjust count 
        count.textContent = `Items: ${list.children.length}`;
    }
})


