/*

Write a constructor function Rectangle(width, height) that stores width and height, 
with methods area() and perimeter() — but put the methods on the prototype, not inside the constructor.

*/

function Rectangle(width, height) {
    this.width = width;
    this.height = height;
}

Rectangle.prototype.area = function() {
    return this.width * this.height;
}

Rectangle.prototype.perimeter = function() {
    return 2 * (this.width + this.height);
}

const r = new Rectangle(4, 5);
console.log(r.area());        // 20
console.log(r.perimeter());   // 18

const r2 = new Rectangle(2, 3);
console.log(r2.area());       // 6

// the key point — both instances SHARE the same method function:
console.log(r.area === r2.area);   // true  (same function, not per-instance copies)