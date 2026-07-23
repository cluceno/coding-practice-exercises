/*

Write a function getOrderDiscount(order) that takes an object shaped like { total: 120, isMember: true, itemCount: 5 } 
and returns a discount percentage (as a number) based on these rules, checked in order:

If order is missing a total property, or total is not a positive number → return -1 (signals invalid input)
If total is at least 200 → return 20
If isMember is true AND total is at least 100 → return 15
If itemCount is at least 10 → return 10
Otherwise → return 0

Constraint: guard clauses only, as always. Think carefully about order here — unlike some past exercises, 
the order genuinely matters again, since a high-total order might also happen to be from a member, 
or have a high item count, but should only get the best applicable discount, not stack them.

*/

function getOrderDiscount(order) {
    if (typeof(order.total) !== "number" || order.total <= 0) return -1;
    if (order.total >= 200) return 20;
    if (order.isMember && order.total >= 100) return 15;
    if (order.itemCount >= 10) return 10;
    return 0; 
}

console.log(getOrderDiscount({ total: 250, isMember: false, itemCount: 2 }))   // 20
console.log(getOrderDiscount({ total: 120, isMember: true, itemCount: 2 }))    // 15
console.log(getOrderDiscount({ total: 50, isMember: false, itemCount: 12 }))   // 10
console.log(getOrderDiscount({ total: 50, isMember: false, itemCount: 2 }))    // 0
console.log(getOrderDiscount({ isMember: true, itemCount: 5 }))

/*

Key learning points: 

1. read each condition very carefully to get the syntax correctly. Carelessness can do some real damage. 

2. To check if something is missing from an object, you can use the typeof operator. This is something I didn't think about using.
Accessing a missing property returns undefined.  

3. Use dot notation if you know the exact property or key you are looking for. 

*/ 