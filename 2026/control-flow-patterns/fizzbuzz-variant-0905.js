/* 

Write a function rps(player1, player2) that determines the winner of a rock-paper-scissors round.

Each argument is one of "rock", "paper", or "scissors"
Return "Player 1 wins", "Player 2 wins", or "Tie"
Rules: rock beats scissors, scissors beats paper, paper beats rock
If either input isn't one of the three valid moves, return "Invalid"

Solution 1:  

function rps(player1, player2) {
    
    const validMoves = ["rock", "paper", "scissors"];
    if (!validMoves.includes(player1) || !validMoves.includes(player2)) return "Invalid";
    if (player1 === player2) return "Tie";

    const p1Wins = {
        "rock, scissors": true,
        "scissors, paper": true,
        "paper, rock": true,
    };

    const combo = `${player1}, ${player2}`;
    if (combo in p1Wins) return "Player 1 wins"; 
    return "Player 2 wins";
}

*/ 

// Solution 2

function rps(player1, player2) {
    
    const validMoves = ["rock", "paper", "scissors"];
    if (!validMoves.includes(player1) || !validMoves.includes(player2)) return "Invalid";
    if (player1 === player2) return "Tie";

    const beats = {
        rock: "scissors", 
        paper: "rock",
        scissors: "paper",
    };

    if (beats[player1] === player2) return "Player 1 wins"; 
    return "Player 2 wins";

}


console.log(rps("rock", "scissors"))      // "Player 1 wins"  (rock beats scissors)
console.log(rps("scissors", "rock"))      // "Player 2 wins"
console.log(rps("paper", "rock"))         // "Player 1 wins"  (paper beats rock)
console.log(rps("rock", "rock"))          // "Tie"
console.log(rps("scissors", "paper"))     // "Player 1 wins"  (scissors beats paper)
console.log(rps("paper", "scissors"))     // "Player 2 wins"  (scissors beats paper)
console.log(rps("rock", "banana"))        // "Invalid"
console.log(rps("lizard", "spock"))       // "Invalid"

/* Key learning points: 

1. I had a difficult time  finding an appropriate reference object to list out the rules. The solution I came up with inappropriately used arrays for keys and that is not allowed.
I can use strings for keys but that means I would have to convert the inputs to a string to see the winner of the round. 

2. I would not have been able to derive solution 2 myself, although it is quite simple to read and easy to understand once I've seen the answer. It uses essentially the same 
reference cases as the first solution, but the syntax is cleaner. It also avoids the extra step of string conversion. I'm not sure that I could come up with this myself as an original thought, 
but maybe with practice I will be able to. 

Overall impression: I was able to get the guard clauses and tie case correct. The important lesson here is that keys can be strings only, not arrays. Otherwise, this was a lesson of 
synax efficiency and different ways of solving the problem. I committed to solving the solution my way first and then tried the AI way to see the different ways to solve the problem. 
They shared the same logic, although the AI syntax was much cleaner. This was a good consolidation rep. 

*/ 