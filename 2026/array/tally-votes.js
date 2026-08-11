/*

Write a function tallyVotes(votes) that takes an array of candidate-name strings (each element is one vote) 
and returns an object mapping each candidate to their vote count, plus a winner property naming whoever got the most votes.

If votes isn't an array, return {}. Empty array → winner is null. Assume no ties.

Pseudocode: 

Write function
    if the parameter isnt an array return {}
    if the array is empty, winner is null 
    Using the reduce methhod, I will go through the array and create the object to tally up the votes. 
    Convert the object to an array
    using the reduce method I will find the winner
*/

function tallyVotes(votes) {
    if (!Array.isArray(votes)) return {};
    if (votes.length === 0) return {winner: null};

    let tally = votes.reduce((counter, currentPerson) => {
        if (currentPerson in counter) {
            counter[currentPerson]++; 
        } else {
            counter[currentPerson] = 1;
        }
        return counter; 
    }, {})

    let tallyArray = Object.entries(tally);

    let winner = tallyArray.reduce((topScorer, current) => {
        return current[1] > topScorer[1]? current : topScorer; 
    })

    tally.winner = winner[0]; 

    return tally;
}

console.log(tallyVotes(["Alice", "Bob", "Alice", "Carol", "Alice", "Bob"]));
// {
//   Alice: 3,
//   Bob: 2,
//   Carol: 1,
//   winner: "Alice"
// }

console.log(tallyVotes([]));   // { winner: null }

/*

Key learning points: 

1. To check if an array is emtpy use the length property 

2. Null is it's own value. 

3. I got to use the in operator again to check the presence of a key in an object. Remember that 
it is only used in objects and not arrays. Stating for myself for consolidation. 

4. When creating an object using the reduce method, return the whole object at the end once. 

5. Remember that reduce, sort, find, etc, are array methods. You can't use them on objects. 

6. To convert objects into arrays you can use the following:
    Object.keys()
    Object.values()
    Object.entries()

7. When using reduce to iterate over an array of arrays, you only need to reach into the values being compared. I tried 
to reach down two levels, which was unecessary. 

8. To add to an object, remember to set the key and the value. In this exercise I tried to do both in one step. Object.name
or Object.["name"] works to set the key. Then you can use the equals operator to set the value. 

Overall impression: This exercise was difficult. Again, the individual parts were not hard to understand but there was a mix 
of new things and old things I had to combine. This exercise had a lot of abstract thinking as well, passing variables 
without actually seeing what the result of each operation was. I needed to understand the output and just pass it to the next 
operation. This was a really good exercise and combined a lot of stuff I learned. It stretched me a little bit and I had to ask a lot 
of questions to get it done. 

I also think the pseudocode first approach is working and helping me think like a programmer. Coming up with the pseudocode actually 
feels like the harder part now. 

*/ 