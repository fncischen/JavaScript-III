function fun(time, place, distance) {
    this.time = time;
    this.place = place;
    this.distance = distance;
}

const tim = new fun(2, "park", 5);
const jim = new fun(3,"cafe", 7 );

fun.prototype.transport = function() {
    return this.distance; 
}

console.log(jim);
console.log(tim.transport());
console.log(tim.transport.call(jim));
console.log(jim.transport.call(tim)); // ?

function Base() {
    this.time = 4;
    this.place = "beach";
    this.distance = 2;


    tim.transport(); // ?
}

console.log(Base()); // ?