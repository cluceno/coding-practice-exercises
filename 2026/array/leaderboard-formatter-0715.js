/* 

Write a function formatLeaderboard(players) that:

Takes players — an array of objects shaped like { name: "Alice", score: 85 }
Returns a new array of formatted strings, sorted by score descending (highest first), 
each formatted as "1. Alice - 85 pts" (rank starts at 1, not 0)

Example: 

const players = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 92 },
  { name: "Carol", score: 78 }
];

formatLeaderboard(players);
// → [
//     "1. Bob - 92 pts",
//     "2. Alice - 85 pts",
//     "3. Carol - 78 pts"
//   ]

*/

const players = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 92 },
  { name: "Carol", score: 78 }
];

function formatLeaderboard(players) {
    let sorted = [...players].sort((a, b) => b.score - a.score); 
    return sorted.map((player, index) => (`${index + 1}. ${player.name} - ${player.score} pts`)); 
}

console.log(formatLeaderboard(players));

/* Key learning points: 

1. The sort method mutates an array so you should make a copy of the original array first before manipulating it. A common way 
to do this, is to use the spread operator within an array []. This is in contrast to filter, map, and reduce that builds an array. 

2. The sort method takes it's instruction from a negative, positive, or zero. If the difference is negative "a" stays to the left. 
If it's positive, b comes before a. This creates the general rule: 
    a - b is ascending
    b - a is descending

3. You can use "Index" as a parameter and it is useful to output rankings as text. 

4. When you use a method that iterates over multiple items in an array or object, like map, you should keep in mind the convention of 
naming the array as a pleural and the parameter as a single item. For example, players and player. 

*/ 

