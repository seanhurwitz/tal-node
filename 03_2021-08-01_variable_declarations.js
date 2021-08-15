var num1 = 3; //ES5

console.log('num1', num1);

let num2 = 4; //ES6
num2 = 'Hello';

console.log(`num2`, num2);

const num3 = 5; //ES6

console.log(`num3`, num3);

/* COMPILER DIGRESSION */
const addES6 = (a, b) => a + b; //ES6 syntax
//compiler will dumbify your javascript code to the below:
//babel
function addES5(a, b) {
  return a + b;
} //ES5 syntax
/* END COMPILER DIGRESSION */

num1 = 33; //var
num2 = 44; //let
// num3 = 55; //CANNOT REASSIGN A CONST VALUE

console.log(`num1`, num1);
console.log(`num2`, num2);
console.log(`num3`, num3);

var num1 = 333; //I CAN REDECLARE A VAR
// let num2 = 444; //I CANNOT REDECLARE A LET

console.log(`num1`, num1);
console.log(`num2`, num2);

//reassigning is good sometimes

let answer;

if (1 + 2 === 3) {
  answer = 'good';
} else {
  answer = 'bad';
}

//redeclaring IS ALWAYS BAD!!!!
var badVar = 'this is gonna be bad!';
var badVar = 'See! I told you so!';

//this is BETTER CODE
let goodLet = 'this is gonna be great!';
goodLet = 'See! I told you so!';

//b'kitzur:

/*
var: you can REDECLARE AND REASSIGN || ES5 - NEVER USE!!!
let: you can REASSIGN but NOT REDECLARE || ES6 - ONLY USE IF YOU KNOW THE VALUE WILL CHANGE
const: you can neither REASSIGN nor REDECLARE || ES6 || 90% of the variables you declare
*/
