/* 

Start with data: const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape"];
Render all fruits as <li> items in the list initially.
As the user types in the #search input, filter the list to show only fruits whose name contains the typed text (case-insensitive).
Update #count to show how many items are currently showing (e.g. "Showing 3 of 7").

*/ 

const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape"];
const list = document.querySelector("#list");
const input = document.querySelector("#search");
const count = document.querySelector("#count");

for (const fruit of fruits) {
    const li = document.createElement("li");
    li.textContent = fruit;
    list.appendChild(li);
}


input.addEventListener("input", () => {
    const searchInput = input.value.toLowerCase();
    const matches = fruits.filter(fruit => fruit.toLowerCase().includes(searchInput));

    list.innerHTML = "";

    for (const fruit of matches) {
        const li = document.createElement("li");
        li.textContent = fruit;
        list.appendChild(li);
    }

    count.textContent = `Showing ${matches.length} of ${fruits.length}`
})

/* 

Key Learning Points: 

1. The principle for a filterable list are: 
    The list must be re-rendered on each key stroke then: 

        1. read and normalize input 
        2. clear the list
        3. match the input with the original array and rerender the list 

2. You can use the filter method to get the matches 

3. Don't forget about declaring your variables when creating a for loop 

Overall impression: I struggled to come up with this logic myself. It looks so 
easy when looking at the solution but creating it from my head was chalenging. I imagine
it should get easier with more reps. 

*/ 
