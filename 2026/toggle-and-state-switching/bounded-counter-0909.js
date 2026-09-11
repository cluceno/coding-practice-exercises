/* 

Write a function makeBoundedCounter(min, max) that returns a counter object which stays within a range [min, max] and can't go past either bound.

starts at min
.increment() — increases by 1, but not past max; returns the current value
.decrement() — decreases by 1, but not below min; returns the current value
.value() — returns the current value without changing it

*/

function makeBoundedCounter(min, max) {
    let counter = min;
    
    return {
        value() {
            return counter;
        },
        increment() {
            counter = Math.min(counter + 1, max);
            return counter;
        },
        decrement() {
            counter = Math.max(counter - 1, min)
            return counter;
        },
    }
}

const c = makeBoundedCounter(0, 3);
c.value();      // 0  (starts at min)
c.increment();  // 1
c.increment();  // 2
c.increment();  // 3
c.increment();  // 3  (capped at max — doesn't go to 4)
c.decrement();  // 2
c.decrement();  // 1
c.decrement();  // 0
c.decrement();  // 0  (capped at min — doesn't go below 0)

const c2 = makeBoundedCounter(5, 10);
c2.value();     // 5  (independent, starts at its own min)
c2.decrement(); // 5  (already at min)
