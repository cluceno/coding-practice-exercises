/*

You're managing the state of a set of filter checkboxes. 
Write a function updateFilters(activeFilters, filterName) that toggles a filter's membership in a list:

activeFilters is an array of strings — the filters currently turned on, e.g. ["price", "rating"]
filterName is a single filter string
If filterName is already in activeFilters, return a new array with it removed (toggled off)
If it's not in activeFilters, return a new array with it added (toggled on)
Never mutate the original array

Pseudocode: 

write updateFilters function 
    Check if filterName is in activeFilters
        - if yes, then build a new array from activeFilters as a starting point using the filter method 
        - if no, then build a new array from activeFilters as a starting point using the spread operator 
    Return the array 

*/

function updateFilters(activeFilters, filterName) {
    //check if filterName is in activeFilters
    if (activeFilters.includes(filterName)) {
        return activeFilters.filter(filter => filter !== filterName)
    } else {
        return [...activeFilters, filterName];
    }
}


console.log(updateFilters(["price", "rating"], "brand"))     // ["price", "rating", "brand"]
console.log(updateFilters(["price", "rating"], "price"))      // ["rating"]
console.log(updateFilters([], "price"))                        // ["price"]
console.log(updateFilters(["price"], "price"))                // []

/* 

Key learning points: 

1. I still had trouble with the filter shape, especially the simple version when only one line is needed. I tried to use another conditional 
and overcomplicated the solution.

2. There is no append method in javascript. To add something to an array, use the spread operator within the array literal. The spread copies 
the existing elements and then you can list the new item alongside. 

3. Remember what methods mutate an array and which ones copy. 
    Common ones to remember for now: 
        Mutate: 
            .push() - add to end
            .pop() - remove from end
            .shift() - remove from front
            .unshift() - add to front
            .splice() = add/remove at any position 
            .sort()
            .reverse()
        return new array: 
            .map() - transforms each element
            .filter() - keeps element passing test 
            .slice() - extract a section 
            .concat() - join arrays 

*/