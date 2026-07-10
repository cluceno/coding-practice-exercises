/*

Write a function getAffordableItems(items, budget) that:

Takes items — an array of objects shaped like { name: "Sword", price: 50 }
Takes budget — a number
Returns a new array of just the item names (strings, not the full objects) for items whose price is less than or equal to the budget

Example:
jsconst items = [
  { name: "Sword", price: 50 },
  { name: "Shield", price: 30 },
  { name: "Potion", price: 10 },
  { name: "Armor", price: 100 }
];

getAffordableItems(items, 40);
// → ["Shield", "Potion"]
Skill focus: this needs two different array methods chained together — one to narrow down which items qualify, and one to transform 
what's left into just the piece of data you actually want (the name, not the whole object). Think about which method filters a collection down, 
and which method transforms each remaining element.

*/

function getAffordableItems(items,budget) {
    let filtered = items
        .filter(item => item.price <= budget)
        .map(item => item.name); 
    return filtered;
    }

/*

Key learning points: 

The map method returns every item in the array. It does not remove items. If you want to remove anything, you have to use filter first and then modify 
it afterwards. 

I got the syntax mostly correct on my own but I am still not used to it, so I doubted it the entire time. I made silly mistakes on the object keys, 
probably due to memorizing keys from other exercises. Otherwise, the syntax of the logic was on the right track. I probably just need more reps 
to lock it in. 

*/