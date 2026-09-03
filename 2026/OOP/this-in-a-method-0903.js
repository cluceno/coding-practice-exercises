/*

Write an object counter with:

a property count starting at 0
a method increment() that increases this.count by 1 and returns the new count
a method reset() that sets this.count back to 0

*/

function makeCounter() {
    return {
        count: 0,
        increment() {
            this.count++;
            console.log(this.count);
            return this.count;
        },
        reset() {
            this.count = 0;
            console.log(this.count);
        }
    }
};

const a = makeCounter();
const b = makeCounter();

a.increment();   // 1
a.increment();   // 2
b.increment();   // 1  (b is independent — its own count, its own `this`)

/*

Key learning points: 

1. For OOP, we can store different instances but they need to have their own objects. So in this exercise, we did that by returning a unique object to each variable. The count is stored 
within each instance. I made the mistake of using a single object, counter, and then returning that object within the makeCounter function. This would create the problem of a and b sharing 
the same object and incrementing on either would continuously increment on a single value. 

2. I need to return this.count after incrementing, otherwise it just gets thrown away. 

3. Properties within an object don't need quotations unless there is a space in between words. 

Overall impression: This was a hard exercise because I am still building the mental model. However, it does feel easier than async. This is probably because I've read the documentation on TOP 
already and because I've had some exposure to objects and methods. The this keyword enables us to separate instances so that each instance has their own properties and values. 

*/ 