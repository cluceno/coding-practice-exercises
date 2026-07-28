/*

Clicking "Add" reads the input's text. 
    If it's empty (or only whitespace), do nothing.
Otherwise, create a new <li> containing the todo text, 
    plus a "Delete" button next to the text, and append it to the <ul>.
Clicking a todo's "Delete" button removes that specific <li> from the list.
After adding, clear the input so it's ready for the next entry.

Pseudocode: 

Create Document Variables: 
    Add button 
        - If it is empty, do nothing. 
        - Pressing Add creates new <li> containing the to do text and a delete button
            new <li> 
                Use document.createElement and then append it with .appendChild
            delete button 
                add by creating element
                add text content 
                add event listener to remove <li> using the remove method
        -After adding, clear the input using .value
*/

const todoInput = document.querySelector("#todoInput");
const addBtn = document.querySelector("#addBtn");
const list = document.querySelector("#todoList");

// Add button functionality 
addBtn.addEventListener("click", () => {
    const text = todoInput.value.trim() 
    if (text === "") return; // guard clause 

    // create list item 
    const li = document.createElement("li");
    li.textContent = text;
  
    // create delete button
    const deleteBtn = document.createElement("button"); 
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => li.remove());
    li.appendChild(deleteBtn);

    // append list item
    list.appendChild(li);

    todoInput.value = ""; // reset input field
})

/*

Key learning points: 

1. By creating a variable for the input value, you can clean up the input and then validate it. This also
increases simplicity and creates one reference point for that variable instead of multiple at different levels. 

2. To create an element and add it to the DOM here are the methods: 
    a. document.createElement() - this takes the element type in quotations 
    b. parent.appendChild() - this takes the created variable as the argument without quotations

3. To remove an element from the DOM, use the element.remove() method. 

4. When appending an element to the DOM, build it completely first and then append it. In this exercise, we 
should build the delete button completely first and attach it to the list item before appending the list item 
to the ul. After building and appending everything, clear the input fields as the logically clean up step. 

Overall summary: I would rate this as hard because I had to ask many questions to get through it. Conceptually,
it is not bad but there are many moving parts that I needed to clarify. I probably just need more reps on 
DOM manipulation. 

*/