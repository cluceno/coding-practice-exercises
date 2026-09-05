/* 

Write a function topScorers(players, n) that returns the names of the top n players by score, highest first.
If players isn't an array, return [].

Pseudocode: 

write function 
    type guard clause 
    sort by score
    declare variable that stores top n names in the index starting from the the first rank 
    return variable 


First solution

function topScorers(players, n) {
    if (!Array.isArray(players)) return [];

    let sorted = players.sort((a, b) => b.score - a.score);

    let topPlayers = sorted.reduce((topPlayers, player) => {
        if (sorted.indexOf(player) < (n)) {
            topPlayers.push(player.name);
        }; 
        return topPlayers; 
    }, [])

    return topPlayers;
}

*/ 

function topScorers(players, n) {
    if (!Array.isArray(players)) return [];

    let topPlayers = [...players]
        .sort((a,b) => b.score - a.score)
        .slice(0, n)
        .map(player => player.name);

    return topPlayers;
}

const players = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 92 },
  { name: "Carol", score: 78 },
  { name: "Dave", score: 95 },
  { name: "Eve", score: 88 }
];

topScorers(players, 3);   // ["Dave", "Bob", "Eve"]   (top 3 by score, highest first)
topScorers(players, 1);   // ["Dave"]
topScorers(players, 10);  // ["Dave", "Bob", "Eve", "Alice", "Carol"]  (n bigger than list → all, still sorted)
topScorers(players, 0);   // []
topScorers([], 3);        // []

/* 

Key learning points: 

1. As a principle, try not to mutate the original array. Copy first before mutating. You can copy by using an array literal with the spread operator. 

2. For the sort method, a negative result keeps a left and a positive result switches a and b positions. 

3. I used indexOf for my first solution, which worked, but indexOf searches through the whole array each time, which is highly inefficient. The better tool to use 
in this situation was slice. This way, we can just select the items we are looking for. 

Overall impression: I was able to get the solution on my own but I over engineered it. I am reaching for reduce a lot since I drilled it early but it wasn't necessary in this situation. 
My initial solution was very inefficient for these reasons: 

    1. reduce iterates over the whole array even though I am only looking for n items
    2. indexOf, searches through the whole array each time

Searching through the array twice for one operations is unecessary. The good news is I was able to arrive at a solution, albeit an unfavorable one, which proves 
that there are multiple ways to arrive at the desired answer. It is ok to go through these different solutions and think about, which one is best and for what reason. 

*/ 