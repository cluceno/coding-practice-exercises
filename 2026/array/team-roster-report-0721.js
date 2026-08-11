/*

Write a function getTeamSummary(players, teamName) that:

Takes players — an array of objects shaped like { name: "Alice", team: "Red", score: 85 }
Takes teamName — a string
Returns an object: { teamName, playerCount, topScorer, averageScore }
playerCount — how many players are on that team
topScorer — the name of the player with the highest score on that team
averageScore — the average score of that team, rounded to 1 decimal place

*/

const players = [
  { name: "Alice", team: "Red", score: 85 },
  { name: "Bob", team: "Blue", score: 92 },
  { name: "Carol", team: "Red", score: 78 },
  { name: "Dave", team: "Red", score: 95 }
];

function getTeamSummary(players, teamName) {
    let team = players.filter(player => player.team === teamName);
    let playerCount = team.length;
    let topScorerObject = team.reduce((topPlayer, currentPlayer) => {
        return currentPlayer.score > topPlayer.score? currentPlayer: topPlayer;
    });
    let topScorer = topScorerObject.name;
    let total = team.reduce((total, player) => {
        return total + player.score
    }, 0);
    let averageScore = Number((total/playerCount).toFixed(1));

    return {teamName, playerCount, topScorer, averageScore};
}

console.log(getTeamSummary(players, "Red"));

/*

Key learning points: 

1. for the filter method, remember that if you are returning one value, you can keep it in a single line. 

2. for finding a topscorer or an individual item in an array, you can use the reduce method's max/min tracking pattern. 
You can omit a starting value and the starting value becomes the first thing in the array. 

3. If you want to find a value in an array of objects using reduce, you can return the whole object and then
find the specific value in another variable. 

4. You shouldn't use reduce by itself to find the average. If you divide by the number of players each time
the total value will not be calculated properly. It is better to use reduce to find the total first, and then
you can divide by the number of players afterward. 

5. If you use toFixed, and the it is whole number, the .0 will not show if you reformat it to a number data type. 
Number data types do not show point 0s by default and if you wish to show to point 0, you will have to keep the 
data type as a string. 

6. Be familiar with all of the reduce methods use-shapes. Some of the ones I've already practiced are 
reduce-for-sums, reduce-for-search, and reduce to build a new object. 

Exercise impression: 

Overall, I would consider this exercise difficult. I was able to get closer on my own but the nuances escaped me. 
Although, I've written code with the filter method and used a one line expression, I forgot to do it here. The various 
use cases of reduce also confuse me. Tracing calculations through reduce was illuminating. Understanding how toFixed produces
a string and how it can change if we change it to a Number is genuinely important. I think this was a great exercise
to practice and it shows how much I still have to learn. I think I made strides today by identifying the little things 
that I should know. 

*/