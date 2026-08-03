/*

Start with a hardcoded array of fruit names: ["Apple", "Banana", "Cherry", "Grape", "Orange", "Mango", "Peach"]
Render all of them as <li> elements in the <ul> on page load.
As the user types in the search box, filter the displayed list to only fruits whose name contains the typed text (case-insensitive). The list updates live on every keystroke.
If the box is empty, show all fruits.

New tool you may want: element.innerHTML = "" 
clears all children of an element in one line (simplest way to empty the <ul> before re-rendering). There are other ways, but this is the quickest for now.

*/ 

const fruits = ["Apple", "Banana", "Cherry", "Grape", "Orange", "Mango", "Peach"];

const searchBar = document.querySelector("#search"); 
const fruitList = document.querySelector("#fruitList");

function renderList(fruitArray) {
    fruitList.innerHTML = "";
    fruitArray.forEach(fruit => {
        const li = document.createElement("li");
        li.textContent = fruit;
        fruitList.appendChild(li);
    })
}

renderList(fruits);

searchBar.addEventListener("input", () => {
    const searchText = searchBar.value.toLowerCase();
    const filtered = fruits.filter(fruit => fruit.toLowerCase().includes(searchText));
    renderList(filtered);
})

/*

Key learning points: 

1. I need to know how to load a content with javascript on page load and then know how to alter that same content
via an event listener. I can create a function and call it on page load and then call it again within an event listener.

2. If you normalize an input, assign it to a variable if you plan on using it again. 

3. To clear the children of a node, you can use element.innerHTML. 

4. the forEach method loops through an array.

5. Make sure what you're comparing your input to is also normalized, otherwise it will never match. 

6. To filter something with every keystroke, use the "input" action. I also have to call the function each time to filter it. 

7. The includes method can be used with an array or a string. It does not work on objects. The "in" operator is used for objects to check for keys. 

8. the innerHTML property affects the children of a parent. 

9. Rerendering must always wipe first. 

Overall impression: This was difficult because I didn't understand the shape of this exercise. Specifically, how to load the content with 
JS on page load and then how to filter with every key stroke using that same function. I wouldn't have been able to do this withohut assistance. 
I'm interested to see if I can do a similar exercise in the future with a similar shape, independently. 

*/ 
