/* 

Write a constructor function Circle that creates circle objects. Each circle has a radius, and methods to compute its area and circumference.

*/

function Circle(radius) {
    this.radius = radius; 
    this.area = function() {
        return Math.PI * this.radius ** 2;
    };
    this.circumference = function() {
        return 2 * Math.PI * this.radius;
    };
}

const c = new Circle(5);
console.log(c.radius);            // 5
c.area();            // 78.539... (π × r²)
c.circumference();   // 31.415... (2 × π × r)

const c2 = new Circle(10);
c2.area();           // 314.159...
c2.radius;           // 10  (independent instance)

/* 

Key learning points: 

1. The new operator creates a new object. It does four things: 
    1. creates a fresh empty object 
    2. Sets this inside the c onstructor to that object 
    3. runs the constructor body
    4. automatically returns the object 

2. A constructor function is capitalized by convention.

3. When you create a method in an object, you should reference variables within the object, requiring the "this" operator. 

4. Math.PI references the pi 

5. ** is the exponent operator. 

6. In a constructor function each object property is an independent variable or method and is separated by ;. This was notable to me 
because creating an object from an object literal is different. Creating an object from an object literal requires a property and value separated 
by a colon. Any subsequent property value pair is then followed after a comma. The syntax is different. 

Key learning points: This was a good rep to see what is possible with OOP and to get used to the vocabulary. 

*/ 