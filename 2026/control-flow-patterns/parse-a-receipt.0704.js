/*

Write a function receiptTotal(lines) that takes an array of strings, each representing a line item as "name:price", 
and returns the total price as a number rounded to 2 decimals. Skip any line that's malformed (no colon, or a price that isn't a valid positive number).

Pseudocode for pipeline: 

if input is not an array or is an empty array return 0
Create a variable and split the input, creating an array of arrays 
We can take this variable and filter through it with three conditions
    1. Make sure each array has 2 parts 
    2. Make sure the 1 index is not NaN, identified by using the Number operator 
    3. Make sure the 1 index is a positive integer/float 
    Use map to transform the filtered array to include only the numbers and convert it to a number data type 
Take the new filtered array and add the sums using reduce 
Return total rounded to 2 decimals 

Pseudocode for reduce: 

starting accumulator should 0
split each array in the array
Validate each array item
    does it have 2 parts?
    If we convert it using the Number operator, is it Nan?
    Is it greater than 0? 
If it does not meet criteria, return total 
If it does add price to total and return total 
     
    
*/

function receiptTotal(lines) {
    if (!Array.isArray(lines)) return 0; 

    let price = lines.reduce((total, item) => {
        let splitItems = item.split(":");
        if (splitItems.length === 2 && !isNaN(Number(splitItems[1])) && Number(splitItems[1]) > 0) {
            return total + Number(splitItems[1]); 
        } else {
            return total;
        }
    }, 0)

    return Number(price.toFixed(2));
}
    /* Pipeline solution
    let splitArray = lines.map(line => line.split(":"));

    let filtered = splitArray
        .filter(item => item.length === 2 && !isNaN(Number(item[1])) && Number(item[1]) > 0)
        .map(item => Number(item[1]));

    let total = filtered.reduce((sum, price) => sum + price, 0);

    return Number(total.toFixed(2));
    */

console.log(receiptTotal(["apple:1.50", "bread:2.25", "milk:3.00"]))   // 6.75
console.log(receiptTotal(["apple:1.50", "garbage", "milk:3.00"]))       // 4.50  (skips "garbage")
console.log(receiptTotal(["apple:1.50", "bread:-2", "milk:abc"]))       // 1.50  (skips invalid prices)
console.log(receiptTotal([]))                                           // 0
console.log(receiptTotal("not an array"))                               // 0

/* Key learning points for the pipeline solution: 

1. Ok I forgot that split is a string method again. I tried to use it on an array but it didn't work. I need to try and remember that better. 
    - split is a string method 
    - slice is a string and array method 
    - splice is an array method 

2. If you're gonna split an individual items in an array, you have to use the map method because it is an array. The result will be an array of arrays. 

3. You can run multiple checks on the filter method. You can use isNan as a check in this scenario. Pay attention to the index number, as you can check one of them but 
remember it will still return the whole array in this scenario. To transform the array, you can use the map method, even if you just want one of the items in the array, like 
in this exercise. 

4. I feel like everytime I use the array method I learn something new. Each time it is getting stronger but it's a little discouraging that it's taking so long to get this down. 
I need to return the accumulator on each iteration whether it is creating an object or accumulating a sum. Remember, if the reduce method is written in one line, the return 
is implied and you don't have to write it. 

Overall impression: Again, not hard when I read it but difficult to create from scratch especially when dealing with multiple checks. I have to remember which 
methods are string and array methods. One of the shapes I need to try to remember is checking if something is NaN. I would say that this exercise was difficult because 
of the compounded nature of using different methods. The pseudocode again remains the hardest and most cognitively taxing part. I don't know what to say except I just need 
more reps and practice. 

Key learning points for the reduce solution:

1. I created a variable within the reduce method. That was new for me and it worked but I got confused when trying to access the components of each array. I can reference 
the created variable rather than using the default parameter from the reduce method. 

2. When using reduce, I don't need to check if the item exists. It will iterate over every existing item in the array anyway. 

3. To skip something in reduce, or in other words, to choose not to add to the accumulator, we can just return the accumulator and move onto the next item in the array. 

4. Pay attention to the syntax. If it is case sensitive it can break the code. 

5. Same problem here again. Return the thing that you wanted the function to do in the first place. 

This reduce method was difficult for me because it involved multiple steps in one. I assume the reduce method is faster because it gets to the solution 
in one pass of the array rather than 3 in the pipeline one. Reading it now feels simple but coming up with it was very difficult. I imagine I'd struggle 
similarly if I encountered a similar problem. 

*/