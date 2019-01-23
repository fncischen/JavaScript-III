/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* SUMMARY:  The value of "this" is
*  referencing the scope of function is executing the this keyword.
*
* 1. Implicit binding uses the dot notation (this.) to reference the nearest object scope / execution context of the function. 
* 2. Explicit binding allows for overriding the properties of existing object's the this pointers are referencing, since you are using
* the call/apply method to define those properties, under a new execution context.
* 3. When a constructor function is used, this refers to the object that the constructor function is creating. 
* 4. When a object method is used, this refers to the object that the method derives itself from. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function popsicles() {
    this.popsicle = "tasty";
    return this.popsiciles;
}

console.log(popsicles());

// Principle 2

// code example for Implicit Binding

var iceCreamTruck = {
    popsiciles: 300,
    pop: function(){
        return this.popsiciles;
    } 
};

console.log(iceCreamTruck.pop);

// Principle 3

// code example for New Binding

function Popsicle(flavor, taste, origin) {
    this.flavor = flavor;
    this.taste = taste;
    this.origin = origin;
}

const pop = new Popsicle("Strawberry", "Sweet", "Canada" );
console.log(pop.flavor);
console.log(pop.taste);

// Principle 4

// code example for Explicit Binding

function PopsicleMaker() {
    console.log("I like " + this.flavor);
}

var strawberry = {
    flavor: "Cereal"
}

// substituting one object for another one
PopsicleMaker.call(strawberry);
console.log(PopsicleMaker());
