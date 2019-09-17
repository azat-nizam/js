/*
 * Testing arrow functions
 */

function f() {
    return 2;
}

console.log(f());

f2 = function() {
    return 1;
}

console.log(f2());

// anonymous function
f3 => 3;

// print 3
console.log( (() => 3)() );

// old style
a = function(param) {
    return `Old style: ${param + 1}`;
}

// new analog
b = param => `New style: ${param + 1}`;

console.log( a(45) );
console.log( b(45) );