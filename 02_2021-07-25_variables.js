// VARIABLES - STRING

// let greeting = 'Gut Moed'; //Declaring a variable. Initiating.
// let user1 = 'Tal';
// let user2 = 'Brad';
// let user3 = 'James';
// let user4 = 'Savannah';
// let user5 = 'Kyle';

// console.log(greeting + " Tal01!");
// console.log(greeting + " Bret!");
// console.log(greeting + " Steve!");
// console.log(greeting + " Jack!");

// greeting = "Good Evening"; //Changing the value of the variable

// console.log(greeting + " Tal!");
// console.log(greeting + " Bret!");
// console.log(greeting + " Steve!");

// greeting = 5; //Dynamically Typed language - this doesn't throw an error.

// console.log(greeting);

// console.log(greeting + ' ' + user1);

// user1 = 'Tal D';

// console.log(greeting + ' ' + user1);
// console.log(greeting + ' ' + user2);
// console.log(greeting + ' ' + user3);
// console.log(greeting + ' ' + user4);
// console.log(greeting + ' ' + user5);

// VARIABLES - NUMBER (OPERATIONS)

let num1 = 5;
let num2 = 7;

let sum = num1 + num2 + 8;
let product = num1 * num2;
let exponent = num1 ** num2;
let quotient = num1 / num2;
let modulo = num2 % num1;

console.log(sum);
console.log(product);
console.log(exponent);
console.log(quotient);
console.log(modulo);

/* MATH OPERATIONS
Addition +
Subtraction -
Multiplication *
power **
Division /
Modulo %
*/

let randomNumber = 9;

let isRandomNumberEven = randomNumber % 2 === 0;
console.log(isRandomNumberEven);

if (isRandomNumberEven) {
  console.log('EVEN!!');
}

//without variables
console.log(7 % 2 === 0);

if (7 % 2 === 0) {
  console.log('EVEN WITHOUT VARIABLES!');
}

//camelCase
// thisIsCamelCase - javascript convention
// DO NOT make variables in js with a capital to begin with:
// IsRandomNumberEven
// There is a concept of a Class, which by convention uses capitals to begin with

//snake_case
// this_is_snake_case - python
