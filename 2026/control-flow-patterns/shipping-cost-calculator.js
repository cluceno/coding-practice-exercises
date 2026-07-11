/* 

Write a function getShippingCost(weight, isExpress) that calculates shipping cost based on these rules:

weight is in pounds, isExpress is a boolean
Base rate by weight:

0–5 lbs → $5
5–20 lbs → $10
20–50 lbs → $20
over 50 lbs → $35


If isExpress is true, double the base rate
If weight is negative or weight is not a number at all → return "Invalid weight"

Constraint: guard clauses only (no else, no nesting) — same rule as Grade Reporter. 
This time you've got an extra wrinkle: the express multiplier applies after you've determined the base rate, 
so think about how to structure that without breaking the guard-clause pattern.

*/

function getShippingCost(weight, isExpress) {
    if (weight < 0 || isNaN(weight)) return "Invalid weight";

    let baseRate = 0;
    if (weight >= 0 && weight < 5) baseRate = 5; 
    if (weight >= 5 && weight < 20) baseRate = 10; 
    if (weight >=20 && weight < 50) baseRate = 20;
    if (weight >= 50) baseRate = 35; 

    if (isExpress) baseRate *= 2; 

    return `$${baseRate}`; 
}

console.log(getShippingCost(25, true));

/*

Exercise practice notes: 

This one was not difficult to set up in terms of structure. I was able to get it right away. The conditions were surprisingly tricky since I set them 
up rather carelessly. I believed it was simple so I treated the conditions without much care. 

When setting a range I need to be congnizant of the upper and lower limit and if they will be included in the range or set to the next one.

I need to stop using || when I need something to fulfill both conditions. If trying to see if a certain number fits within a range, 
both conditions on each limit, lower and upper, need to be true. Otherwise, one number could be true for multiple ranges. 

Otherwise, I'd consider this one to be on the easier side. 

*/